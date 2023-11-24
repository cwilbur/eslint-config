/* eslint object-property-newline: off,
          object-curly-newline: off,
          quote-props: [ 'error', 'always' ]
-- quote props and keep each rule on one line to make sorting easier */

const { rules, metadata } = require('../rule-configs/json-rule-configs.cjs')

const { plugins, files, processorObject } = metadata

const jsonStanza = {
  files,
  plugins,
  'processor': processorObject,
  rules
}

module.exports = [ jsonStanza ]

