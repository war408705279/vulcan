const less = require('@remax/plugin-less')
const path = require('path')

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  pxToRpx: false,
  cwd: process.cwd(),
  rootDir: 'src',
  plugins: [ less() ],
  configWebpack({ config, webpack }) {
    config.resolve
      .extensions.merge([ '.ts', '.tsx', '.js', '.jsx', '.json' ])
      .end()
      .alias.merge({
        '@': path.resolve(__dirname, 'src'),
        '@public': path.resolve(__dirname, 'public')
      })
      .end()
    // 忽略 moment locale 目录，减小打包后文件体积
    config.plugin('ignore-plugin').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
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
        publicPath: `${process.env.NODE_ENV === 'production' ? `${process.env.REMAX_APP_PUBLIC_ASSET_HOST}/` : '/images/bucket/'}`,
        outputPath: '/images/bucket/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
    config.module
      .rule('js-svg')
      .test(/\.svg$/i)
      .exclude
        .add(/\.icon\.svg$/i)
        .end()
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('file-loader')
      .loader('file-loader')
      .options({
        publicPath: `${process.env.NODE_ENV === 'production' ? `${process.env.REMAX_APP_PUBLIC_ASSET_HOST}/` : '/images/bucket/'}`,
        outputPath: '/images/bucket/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
    config.module
      .rule('css-svg')
      .test(/\.svg$/i)
      .issuer({
        test: /\.(css|less)$/
      })
      .use('file-loader')
      .loader('file-loader')
      .options({
        publicPath: `${process.env.NODE_ENV === 'production' ? `${process.env.REMAX_APP_PUBLIC_ASSET_HOST}/` : '/images/bucket/'}`,
        outputPath: '/images/bucket/',
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
        publicPath: `${process.env.NODE_ENV === 'production' ? `${process.env.REMAX_APP_PUBLIC_ASSET_HOST}/` : '/images/bucket/'}`,
        outputPath: '/images/bucket/',
        name: '[name].[hash].[ext]',
        esModule: false
      })
    config.module
      .rule('js-icon-svg')
      .test(/\.icon\.svg$/i)
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('url-loader')
      .loader('url-loader')
      .options({
        generator: (content) => {
          return content.toString()
        },
        esModule: false
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
