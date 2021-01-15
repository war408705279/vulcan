module.exports = {
  extends: [ '@qiniu' ],
  ignorePatterns: [ '**/*.js' ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
        moduleDirectory: [ 'node_modules', './' ]
      }
    }
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off'
  }
}
