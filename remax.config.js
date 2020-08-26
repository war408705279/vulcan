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
  }
}
