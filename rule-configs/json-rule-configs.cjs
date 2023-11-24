/*

⁡⁣⁣⁢​‌‌‍JSON Rules
​
These are rules concerning JSON files.
⁡
*/

const jsonPlugin = require('eslint-plugin-json')
const processorObject = jsonPlugin.processors['.json']
processorObject.meta = {
  name: 'eslint-plugin-json',
  version: '3.1.0'
}

const metadata = {
  'files': [ '**/*.json' ],
  'plugins': { 'json': jsonPlugin },
  'processor': 'json/.json',
  processorObject
}

const ruleConfigs = {
  noComments: jsonPlugin.configs.recommended.rules,
  withComments: jsonPlugin.configs['recommended-with-comments'].rules
}

const rules = { ...ruleConfigs.withComments }

module.exports = {
  metadata,
  rules,
  ruleConfigs
}

