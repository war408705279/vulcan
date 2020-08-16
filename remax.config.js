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
    config.merge({
      resolve: {
        extensions: [
          '.ts', '.tsx',
          '.js', '.jsx',
          '.json'
        ],
        alias: {
          constants: path.resolve(__dirname, 'src/constants'),
          utils: path.resolve(__dirname, 'src/utils'),
          apis: path.resolve(__dirname, 'src/apis'),
          hooks: path.resolve(__dirname, 'src/hooks'),
          stores: path.resolve(__dirname, 'src/stores'),
          components: path.resolve(__dirname, 'src/components')
        }
      }
    })
  }
}
