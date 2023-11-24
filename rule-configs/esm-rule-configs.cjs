const importPlugin = require('eslint-plugin-import')
const importNewlinesPlugin = require('eslint-plugin-import-newlines')

const metadata = {
  'plugins': {
    'import': importPlugin,
    'import-newlines': importNewlinesPlugin
  },
  'settings': {
    // settings block to workaroun a bug,
    // https://github.com/import-js/eslint-plugin-import/pull/2829
    'import/parsers': {
      espree: [ '.js', '.cjs', '.mjs', '.jsx' ],
      'vue-eslint-parser': [ '*.vue' ]
    },
    'import/resolver': {
      node: true
    }
  }
}

const staticAnalysisRules = {
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/default': 'error',
  'import/namespace': 'error',
  'import/no-restricted-paths': 'off',
  'import/no-absolute-path': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-internal-modules': 'off',
  'import/no-webpack-loader-syntax': 'warn',
  'import/no-self-import': 'error',
  'import/no-cycle': 'error',
  'import/no-useless-path-segments': [ 'error', { noUselessIndex: false } ],
  'import/no-relative-parent-imports': 'warn',
  'import/no-relative-packages': 'warn'
 }

 const helpfulWarningRules = {
  'import/export': 'warn',
  'import/no-named-as-default-member': 'warn',
  'import/no-named-as-default': 'warn',
  'import/no-deprecated': 'warn',
  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-unused-modules': 'off'

  // 'import/no-unused-modules': [ 'error', { unusedExports: true, missingExports: true } ],
  // by rights this should be here, but it relies on a deprecated
  // eslint helper that is not supported in flat configs
}

const moduleSystemRules = {
  'import/unambiguous': 'warn',
  'import/no-commonjs': 'error',
  'import/no-amd': 'error',
  'import/no-nodejs-modules': 'off',
  'import/no-import-module-exports': 'error'
}

const styleRules = {
  'import/first': 'error',
  'import/exports-last': 'error',
  'import/no-duplicates': 'error',
  'import/no-namespace': 'warn',
  'import/extensions': [ 'error', 'ignorePackages' ],
  'import/order': [ 'error', { groups: [ 'builtin', 'external', 'parent', 'sibling', 'index' ], alphabetize: { order: 'asc', caseInsensitive: true } } ],
  'import/newline-after-import': 'error',
  'import/prefer-default-export': 'error',
  'import/max-dependencies': 'warn',
  'import/no-unassigned-import': 'warn',
  'import/no-named-default': 'warn',
  'import/no-default-export': 'off',
  'import/no-named-export': 'off',
  'import/no-anonymous-default-export': 'warn',
  'import/group-exports': 'error',
  'import/dynamic-import-chunkname': 'warn',

  'import-newlines/enforce': [ 'error', { items: 8, 'max-len': 120, semi: false } ]
}

const ruleConfigs = {
  pluginRecs: importPlugin.configs.recommended.rules,
  pluginWarnings: importPlugin.configs.warnings.rules,
  pluginErrors: importPlugin.configs.errors.rules,
  staticAnalysisRules,
  helpfulWarningRules,
  moduleSystemRules,
  styleRules
}

const rules = {
  ...staticAnalysisRules,
  ...helpfulWarningRules,
  ...moduleSystemRules,
  ...styleRules
}

module.exports = { metadata, rules, ruleConfigs }
