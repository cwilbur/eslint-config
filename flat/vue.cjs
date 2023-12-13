/* global
   _dirname:readonly, _filename:readonly, console:readonly,
   exports:writable, global:readonly, module:readonly,
   require:readonly, structuredClone:readonly,
-- globals that might occur in an eslint config file */

/* eslint object-property-newline: off,
          object-curly-newline: off,
          quote-props: [ 'error', 'always' ]
-- quote props and keep each rule on one line to make sorting easier */

const { rules, metadata } = require('../rule-configs/vue-rule-configs.cjs')

const languageOptions = {
  parser: require(metadata.parser),
  globals: metadata.globals
    .map(key => ({ [key]: 'readonly' }))
    .reduce((acc, val) => ({ ...acc, ...val }), {})
}

const { plugins, files, processor, processorObject }  = metadata

const vueStanza = {
  files,
  languageOptions,
  plugins,
  processor: processorObject,
  rules
}

module.exports = [ vueStanza ]

