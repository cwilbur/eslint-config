/* global
   _dirname:readonly, _filename:readonly, console:readonly,
   exports:writable, global:readonly, module:readonly,
   require:readonly, structuredClone:readonly,
-- globals that might occur in an eslint config file */

/* eslint object-property-newline: off,
          object-curly-newline: off,
          quote-props: [ 'error', 'always' ]
-- quote props and keep each rule on one line to make sorting easier */

const { rules, metadata } = require('../rule-configs/html-rule-configs.cjs')

const languageOptions = {
  parser: require(metadata.parser),
  globals: metadata.environments
    .map(key => ({ [key]: 'readonly' }))
    .reduce((acc, val) => ({ ...acc, ...val }), {})
}

const { plugins, files, processor, settings }  = metadata

const htmlStanza = {
  files,
  languageOptions,
  plugins,
  processor,
  rules,
  settings
}

module.exports = [ htmlStanza ]

