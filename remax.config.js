const less = require('@remax/plugin-less')
const path = require('path')

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  pxToRpx: true,
  cwd: process.cwd(),
  rootDir: 'src',
  plugins: [
    less()
  ],
  configWebpack({ config }) {
    config.resolve.extensions
      .merge(['.ts', '.tsx', '.js', '.jsx', '.json'])
      .end()
    config.resolve.alias
      .merge({
        '@': path.resolve(__dirname, 'src'),
        '@public': path.resolve(__dirname, 'public')
      })
      .end()
    // 删掉默认的 module rules
    // https://github.com/remaxjs/remax/blob/7c7e065b315d82e765a8e015a13f2ae54b2ff49a/packages/remax-cli/src/build/webpack/config.mini.ts#L159-L169
    config.module.rules.delete('image')
    config.module.rules.delete('font')
    config.module
      .rule('css-font-img')
      .test(/\.(eot|ttf|woff|woff2|png|jpe?g|gif)$/i)
      .issuer({
        test: /\.(css|less)$/
      })
      .use('file-loader')
      .loader('file-loader')
      .options({
        publicPath: '/images/',
        outputPath: '/images/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
    // config.module
    //   .rule('js-svg')
    //   .test(/\.svg$/i)
    //   .issuer({
    //     test: /\.(js|ts)x?$/
    //   })
    //   .use('@svgr/webpack')
    //   .loader('@svgr/webpack')
    //   .options({
    //     svgoConfig: {
    //       plugins: {
    //         removeViewBox: false
    //       }
    //     }
    //   })
    config.module
      .rule('css-svg')
      .test(/\.svg$/i)
      .issuer({
        test: /\.(css|less)$/
      })
      .use('file-loader')
      .loader('file-loader')
      .options({
        publicPath: '/images/',
        outputPath: '/images/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
    config.module
      .rule('js-file-svg')
      .test(/\.file\.svg$/i)
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('file-loader')
      .loader('file-loader')
      .options({
        publicPath: '/images/',
        outputPath: '/images/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
    config.module
      .rule('js-img')
      .test(/\.(png|jpe?g|gif)$/i)
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('file-loader')
      .loader('file-loader')
      .options({
        publicPath: '/images/',
        outputPath: '/images/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
  }
}
