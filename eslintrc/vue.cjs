const { rules, metadata } = require('../rule-configs/core-rule-configs.cjs')

const env = metadata.environments
  .map(key => ({ [key]: true }))
  .reduce((acc, val) => ({ ...acc, ...val }), {})

const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module'
}

const eslintrc = {
  env,
  parserOptions,
  rules
}

module.exports = eslintrc