/**
 * @file 部署脚本（注意：本脚本不支持在 windows 环境执行）
 * @description 将本地静态资源文件上传到指定账号下的指定 bucket
 */

const path = require('path')
const walk = require('walk')
const qiniu = require('qiniu')
const { exec } = require('child_process')

// https://gist.github.com/nighca/6562d098ac01814b6e1c1718b16d4abc
function batch(process, limit = -1) {
  return function batchProcess(tasks = []) {
    let results = [], finished = 0, processing = 0
    let rejected = false

    function tryProcess(resolve, reject) {
      if (rejected) return
      if (finished >= tasks.length) {
        resolve(results)
        return
      }

      const offset = finished + processing
      const todo = limit > 0 ? limit - processing : tasks.length
      tasks.slice(offset, offset + todo).forEach((task, i) => {
        processing++
        process(task).then(
          result => {
            results[offset + i] = result
            processing--
            finished++
            tryProcess(resolve, reject)
          },
          err => {
            reject(err)
            rejected = true
          }
        )
      })
    }

    return new Promise(tryProcess)
  }
}

function getAllFiles(baseDir) {
  return new Promise((resolve, reject) => {
    const walker = walk.walk(baseDir)
    const files = []

    walker.on('error', (_, stat) => {
      reject(stat.error)
    })

    walker.on('files', (_, stats, next) => {
      stats.forEach(
        stat => files.push(
          path.relative(baseDir, path.join(_, stat.name))
        )
      )
      next()
    })

    walker.on('end', () => {
      resolve(files)
    })
  })
}

async function uploadFile(localFile, bucket, key, mac) {
  const options = {
    scope: bucket + ':' + key
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  const putExtra = new qiniu.form_up.PutExtra()
  const config = new qiniu.conf.Config()
  const formUploader = new qiniu.form_up.FormUploader(config)

  const putFile = () => new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, (err, ret) => {
      if(err || ret.error) {
        reject(err || ret.error)
        return
      }
      resolve()
    })
  })

  // 最多重试 3 次
  let retryTime = 3
  let error = null
  while (retryTime-- > 0) {
    try {
      await putFile()
      return
    } catch (e) {
      error = e
    }
  }
  if (error != null) {
    throw error
  }
}

function makeDeployer(config) {
  function deployFile(fileName) {
    const mac = new qiniu.auth.digest.Mac(config.accessKey, config.secretKey)
    const filePath = path.resolve(config.outputPath, fileName)

    return uploadFile(filePath, config.bucket, fileName, mac).then(
      () => console.log(`[UPLOADED] ${fileName}.`)
    )
  }

  // 同时最多 50 个一起处理
  return batch(deployFile, 50)
}

async function deploy(config) {
  const outputFiles = await getAllFiles(config.outputPath)

  const files = []
  outputFiles.forEach(fileName => files.push(fileName))

  // 上传静态资源
  const deployFiles = makeDeployer(config)
  await deployFiles(files)

  console.log(`[SUCCESS] Deploy succeeded: ${files.length} static files.`)
}

function deleteFolder(outputPath) {
  return new Promise((resolve, reject) => {
    exec(`rm -rf ${outputPath}`, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

// 执行命令：node deploy.js ${TARGET} ${AK} ${SK} ${BUCKET}
// target 指 remax 编译的小程序平台版本，例如 wechat, ali ...
const [target, accessKey, secretKey, bucket] = process.argv.slice(2)

// 需要上传至 bucket 的静态资源所在目录
// 只上传 dist/${target}/images/bucket 里面的文件
// 一些静态资源（例如底部 tab bar 的图标）只能本地访问，不支持加载远程图片
const outputPath = path.resolve(__dirname, 'dist', target, 'images/bucket')

deploy({ outputPath, accessKey, secretKey, bucket }).then(
  () => {
    console.log('[SUCCESS] All static files uploaded.')

    deleteFolder(outputPath).then(
      () => console.log('[SUCCESS] All static files and folder deleted.')
    ).catch(
      e => {
        console.error(`[ERROR] Delete failed: ${e}.`)
        process.exit(1)
      }
    )
  }
).catch(
  e => {
    console.error(`[ERROR] Deploy failed: ${e}.`)
    process.exit(1)
  }
)
