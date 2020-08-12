// babel.config.js
module.exports = {
  plugins: [['import', {
    libraryName: 'antd',
    style: true
  }]],
  presets: [
    [
      'remax',
      {
        typescript: {
          allowNamespaces: true
        },
        'class-properties': {
          loose: true
        },
        decorators: {
          legacy: true
        },
        'throw-if-namespace': true,
        targets: ['chrome >= 49', 'firefox >= 64', 'ios >= 8', 'Android > 4.4']
      }
    ]
  ]
}
