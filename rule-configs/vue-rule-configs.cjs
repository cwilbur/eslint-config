/*

⁡⁣⁣⁢​‌‌‍Vue Rules
​
These are rules only relevant to the Vue fraemwork and its ecosystem.
⁡
*/

const vuePlugin = require('eslint-plugin-vue')

// we take the suggested configurations from the Vue plugin
// the builtin levels of strictness are 'base', 'vue3-essential',
// 'vue3-strongly-recommended', and 'vue3-recommended'

const ruleConfigs = {}

ruleConfigs.base = { ...vuePlugin.configs.base.rules }

ruleConfigs['vue3-essential'] = {
  ...ruleConfigs.base,
  ...vuePlugin.configs['vue3-essential'].rules
}

ruleConfigs['vue3-strongly-recommended'] = {
  ...ruleConfigs['vue3-essential'],
  ...vuePlugin.configs['vue3-strongly-recommended'].rules
}

ruleConfigs['vue3-recommended'] = {
  ...ruleConfigs['vue3-strongly-recommended'],
  ...vuePlugin.configs['vue3-recommended'].rules
}

const processorObject = vuePlugin.processors['.vue']
processorObject.meta = {
  name: 'eslint-plugin-vue',
  version: '9.18.1'
}

const metadata = {
  'globals': [ 'defineProps', 'defineEmits', 'defineExpose', 'withDefaults' ],
  'parser': 'vue-eslint-parser',
  'files': [ '**/*.vue' ],
  'plugins': { 'vue': vuePlugin },
  'processor': 'vue/.vue',
  processorObject
}

const rules = ruleConfigs['vue3-recommended']

module.exports = {
  metadata,
  rules,
  ruleConfigs
}

