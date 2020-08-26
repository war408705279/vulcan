const less = require('@remax/plugin-less')
const path = require('path')

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
    config.resolve
      .extensions
        .merge(['.ts', '.tsx', '.js', '.jsx', '.json'])
        .end()
      .alias
        .merge({
          'constants': path.resolve(__dirname, 'src/constants'),
          'utils': path.resolve(__dirname, 'src/utils'),
          'apis': path.resolve(__dirname, 'src/apis'),
          'stores': path.resolve(__dirname, 'src/stores'),
          'components': path.resolve(__dirname, 'src/components'),
          'ui': path.resolve(__dirname, 'src/ui'),
          'public': path.resolve(__dirname, 'public')
        })
        .end()
    config.module
      .rule('css-less-img')
      .test(/\.(eot|ttf|woff|woff2|png|jpe?g|gif)$/i)
      .issuer({
        test: /\.(css|less)$/
      })
      .use('file-loader')
      .loader(require.resolve('file-loader'))
      .options({
        name: '[name].[hash].[ext]',
        esModule: false
      })
    config.module
      .rule('js-ts-svg')
      .test(/\.svg$/i)
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('svgr-webpack')
      .loader(require.resolve('@svgr/webpack'))
      .options({
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      })
    config.module
      .rule('css-less-svg')
      .test(/\.svg$/i)
      .issuer({
        test: /\.(css|less)$/
      })
      .use('file-loader')
      .loader(require.resolve('file-loader'))
      .options({
        name: '[name].[hash].[ext]',
        esModule: false
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
    config.module
      .rule('js-ts-file-svg')
      .test(/\.file\.svg$/i)
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('file-loader')
      .loader(require.resolve('file-loader'))
      .options({
        name: '[name].[hash].[ext]',
        esModule: false
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
    config.module
      .rule('js-ts-img')
      .test(/\.(png|jpe?g|gif)$/i)
      .issuer({
        test: /\.(js|ts)x?$/
      })
      .use('file-loader')
      .loader(require.resolve('file-loader'))
      .options({
        name: '[name].[hash].[ext]',
        esModule: false
      })
  }
}
