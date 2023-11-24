/* global
   _dirname:readonly, _filename:readonly, console:readonly,
   exports:writable, global:readonly, module:readonly,
   require:readonly, structuredClone:readonly,
-- globals that might occur in an eslint config file */

/* eslint object-property-newline: off,
          object-curly-newline: off,
          quote-props: [ 'error', 'always' ]
-- quote props and keep each rule on one line to make sorting easier */

const { rules, metadata } = require('../rule-configs/core-rule-configs.cjs')
const globals = require('globals')

const languageOptions = {
  'parser': require(metadata.parser),
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'globals': metadata.environments
    .map(key => globals[key])
    .reduce((acc, val) => ({ ...acc, ...val }), {})
}

const coreStanza = {
  languageOptions,
  rules
}

module.exports = [ coreStanza ]
