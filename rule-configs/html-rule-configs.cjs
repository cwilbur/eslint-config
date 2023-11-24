/*

​‌‌‍⁡⁣⁣⁢HTML Rules
⁡​​
⁡⁣⁣⁢These are rules enabling the linting of code inside <script> tags
in HTML files.
⁡⁡⁡
*/

const htmlParser = require('@html-eslint/parser')
const htmlEslintPlugin = require('@html-eslint/eslint-plugin')
const htmlPlugin = require('eslint-plugin-html')

htmlParser.meta = {
  name: '@html-eslint/parser',
  version: '0.2.0'
}

const metadata = {
  'parser': '@html-eslint/parser',
  'environments': [ 'browser', 'es2021' ],
  'files': [ '**/*.html', '**/*.htm' ],
  'plugins': {
    'html': htmlPlugin,
    '@html-eslint': htmlEslintPlugin
  },
  'processor': 'html/.html',
  'settings': {
    'html/indent': '+2',
    'html/report-bad-indent': 'error',
  },
  'parserOptions': { 'parser': 'espree' }
}


const ruleConfigs = {
  pluginRecs: htmlEslintPlugin.configs.recommended.rules
}

const rules = {
  ...htmlEslintPlugin.configs.recommended.rules,
  '@html-eslint/indent': [ 'error', 2 ]
}

module.exports = { metadata, rules, ruleConfigs }

