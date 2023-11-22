/* eslint quote-props: [ "error", "always" ] */

import * as espree from 'espree'
import globals from 'globals'

const ignores = [
  '/node_modules'
]

const allFiles = [
  '**/*.js',
  '**/*.cjs',
  '**/*.mjs',
  '**/*.html',
  '**/*.htm'
]

const languageOptions = {
  'parser': espree,
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'globals': { ...globals.browser, ...globals.es2021 }
}

// the cargo cult errors were in the eslintrc that I adopted
// when I started copying my eslintrc from project to project,
// tuning it bit by bit.  I have no idea what their original
// source was; they are here not because they were an intentiona
// part of my project but because I like the results they
// produce in aggregate.

const cargoCultOff = [
  'capitalized-comments',
  'func-names',
  'multiline-comment-style',
  'no-extra-parens',
  'no-inline-comments',
  'no-magic-numbers',
  'no-nested-ternary',
  'no-ternary',
  'no-void',
  'one-var',
  'padded-blocks',
  'prefer-arrow-callback',
  'sort-keys'
]

const cargoCultErrors = [
  'array-callback-return',
  'arrow-body-style',
  'block-scoped-var',
  'block-spacing',
  'brace-style',
  'camelcase',
  'complexity',
  'computed-property-spacing',
  'consistent-return',
  'consistent-this',
  'default-case',
  'default-case-last',
  'default-param-last',
  'dot-notation',
  'eol-last',
  'eqeqeq',
  'func-name-matching',
  'generator-star-spacing',
  'guard-for-in',
  'id-denylist',
  'id-match',
  'init-declarations',
  'jsx-quotes',
  'key-spacing',
  'lines-around-comment',
  'lines-between-class-members',
  'max-classes-per-file',
  'max-depth',
  'max-lines-per-function',
  'max-nested-callbacks',
  'max-statements-per-line',
  'new-parens',
  'no-alert',
  'no-array-constructor',
  'no-bitwise',
  'no-caller',
  'no-confusing-arrow',
  'no-constructor-return',
  'no-continue',
  'no-div-regex',
  'no-duplicate-imports',
  'no-else-return',
  'no-empty-function',
  'no-eq-null',
  'no-eval',
  'no-extend-native',
  'no-extra-bind',
  'no-extra-label',
  'no-floating-decimal',
  'no-implicit-coercion',
  'no-implicit-globals',
  'no-implied-eval',
  'no-iterator',
  'no-label-var',
  'no-labels',
  'no-lone-blocks',
  'no-lonely-if',
  'no-loop-func',
  'no-mixed-operators',
  'no-multi-assign',
  'no-multi-spaces',
  'no-multi-str',
  'no-negated-condition',
  'no-new',
  'no-new-func',
  'no-new-object',
  'no-new-wrappers',
  'no-octal-escape',
  'no-promise-executor-return',
  'no-proto',
  'no-restricted-exports',
  'no-restricted-globals',
  'no-restricted-imports',
  'no-restricted-properties',
  'no-restricted-syntax',
  'no-return-assign',
  'no-script-url',
  'no-self-compare',
  'no-sequences',
  'no-shadow',
  'no-tabs',
  'no-template-curly-in-string',
  'no-throw-literal',
  'no-trailing-spaces',
  'no-undef-init',
  'no-undefined',
  'no-unmodified-loop-condition',
  'no-unneeded-ternary',
  'no-unreachable-loop',
  'no-use-before-define',
  'no-useless-call',
  'no-useless-computed-key',
  'no-useless-concat',
  'no-useless-constructor',
  'no-useless-rename',
  'no-useless-return',
  'no-var',
  'no-whitespace-before-property',
  'nonblock-statement-body-position',
  'object-curly-newline',
  'object-shorthand',
  'one-var-declaration-per-line',
  'operator-assignment',
  'padding-line-between-statements',
  'prefer-const',
  'prefer-destructuring',
  'prefer-exponentiation-operator',
  'prefer-named-capture-group',
  'prefer-numeric-literals',
  'prefer-object-spread',
  'prefer-promise-reject-errors',
  'prefer-regex-literals',
  'prefer-rest-params',
  'prefer-spread',
  'prefer-template',
  'radix',
  'require-atomic-updates',
  'require-await',
  'require-unicode-regexp',
  'rest-spread-spacing',
  'semi-spacing',
  'semi-style',
  'sort-vars',
  'space-infix-ops',
  'space-unary-ops',
  'symbol-description',
  'template-tag-spacing',
  'vars-on-top',
  'wrap-iife',
  'wrap-regex',
  'yield-star-spacing'
]

const cargoCult = Object.fromEntries([
  ...cargoCultOff.map(key => [ key, 'off' ]),
  ...cargoCultErrors.map(key => [ key, 'error' ])
])

/* eslint object-property-newline: off,
      object-curly-newline: off -- each rule gets one line */

const cwilbur = {
  'accessor-pairs': 'error',
  'array-bracket-newline': [ 'error', 'consistent' ],
  'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': true, 'arraysInArrays': true } ],
  'array-element-newline': [ 'error', 'consistent' ],
  'arrow-parens': [ 'error', 'as-needed' ],
  'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
  'class-methods-use-this': 'warn',
  'comma-dangle': [ 'error', 'never' ],
  'comma-spacing': [ 'error', { 'after': true, 'before': false } ],
  'comma-style': [ 'error', 'last' ],
  'curly': [ 'error', 'multi-line' ],
  'dot-location': [ 'error', 'property' ],
  'func-call-spacing': [ 'error', 'never' ],
  'func-style': 'off',
  'function-call-argument-newline': [ 'error', 'consistent' ],
  'function-paren-newline': [ 'error', 'consistent' ],
  'grouped-accessor-pairs': 'error',
  'id-length': [ 'error', { 'min': 2, 'exceptions': [ '_', 'i' ] } ],
  'implicit-arrow-linebreak': [ 'error', 'beside' ],
  'indent': [ 'error', 2, { 'flatTernaryExpressions': true, 'offsetTernaryExpressions': true, 'SwitchCase': 1 } ],
  'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
  'line-comment-position': 'off',
  'linebreak-style': [ 'error', 'unix' ],
  'lines-between-class-members': [ 'error', { 'enforce': [
    { 'blankLine': 'always', 'prev': 'method', 'next': '*' },
    { 'blankLine': 'never', 'prev': 'field', 'next': 'field' }
  ] } ],
  'max-len': [ 'error', { 'code': 120, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true } ],
  'max-lines': [ 'error', 500 ],
  'max-params': [ 'error', 5 ],
  'max-statements': [ 'error', 20 ],
  'multiline-ternary': [ 'error', 'always-multiline' ],
  'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 3 } ],
  'no-await-in-loop': 'off',
  'no-console': 'error',
  'no-dupe-keys': 'error',
  'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
  'no-param-reassign': [ 'error', { 'props': false } ],
  'no-plusplus': [ 'error', { 'allowForLoopAfterthoughts': true } ],
  'no-return-await': 'error',
  'no-underscore-dangle': 'off',
  'no-unused-vars': [ 'warn', { 'varsIgnorePattern': '^_', 'args': 'none' } ],
  'no-warning-comments': 'off',
  'object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': true, 'objectsInObjects': true } ],
  'operator-linebreak': [ 'error', 'before' ],
  'quote-props': [ 'error', 'as-needed', { 'keywords': false } ],
  'quotes': [ 'error', 'single', { 'avoidEscape': true } ],
  'semi': [ 'error', 'never' ],
  'sort-imports': [ 'error', {
    'ignoreCase': true,
    'ignoreDeclarationSort': false,
    'ignoreMemberSort': false,
    'memberSyntaxSortOrder': [ 'none', 'all', 'multiple', 'single' ],
    'allowSeparatedGroups': true
  } ],
  'space-before-blocks': [ 'error', 'always' ],
  'space-before-function-paren': [ 'error', 'always' ],
  'space-in-parens': [ 'error', 'never' ],
  'spaced-comment': [ 'error', 'always', { 'markers': [ '/' ] } ],
  'strict': 'off',
  'switch-colon-spacing': [ 'error', { 'before': false, 'after': true } ],
  'template-curly-spacing': [ 'error', 'always' ],
  'unicode-bom': [ 'error', 'never' ],
  'yoda': [ 'error', 'never' ]
}

const rules = {
  ...cargoCult,
  ...cwilbur
}

const config = {
  ignores,
  languageOptions,
  rules
}

const eslintSpecials = [
  {
    'files': [ 'eslint.config.js' ],
    'languageOptions': {
      'globals': { ...globals.node }
    },
    'rules': {
      'quote-props': [ 'error', 'always' ]
    }
  }
]

export default [ config, ...eslintSpecials ]
export { allFiles, ignores, languageOptions, rules, eslintSpecials }
