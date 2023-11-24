const config = require('./eslintrc/index.cjs')

config.rules = {
  ...config.rules,
  'import/no-commonjs': 'off',
  'import/unambiguous': 'off'
}

module.exports = config
