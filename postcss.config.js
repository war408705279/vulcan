// postcss.config.js
module.exports = ({ options }) => ({
  plugins: {
    autoprefixer: require('autoprefixer'),
    // 继承 remax 默认的插件配置
    ...options.plugins
  }
})
