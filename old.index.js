module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:eslint-comments/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'unambiguous',
    ecmaFeatures: {
      'impliedStrict': true
    },
    babelOptions: {
      rootMode: 'upward'
    }
  },
  plugins: [ 'promise', 'json', '@babel', 'eslint-comments' ],
  rules: {
    'eslint-comments/disable-enable-pair': [ 'error', { allowWholeFile: true } ],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': 'error',

    '@babel/new-cap': 1,
    '@babel/no-invalid-this': 1,
    '@babel/no-unused-expressions': [ 'error', { allowShortCircuit: true, allowTernary: true } ],
    '@babel/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true } ],
    '@babel/semi': [ 'error', 'never' ],
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'no-unused-expressions': 'off',
    'object-curly-spacing': 'off',
    'semi': 'off',

    'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: true, arraysInArrays: true } ],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'dot-location': [ 'error', 'property' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-style': 'off',
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': [ 'error', 'consistent' ],
    'id-length': [ 'error', { min: 2, exceptions: [ '_' ] } ],
    'indent': [ 'error', 2, { flatTernaryExpressions: true, offsetTernaryExpressions: true, SwitchCase: 1 } ],
    'json/*': [ 'error', { allowComments: true } ],
    'line-comment-position': 'off',
    'max-len': [ 'error', { code: 120, ignoreUrls: true, ignoreStrings: true } ],
    'max-lines': [ 'error', 500 ],
    'max-params': [ 'error', 5 ],
    'multiline-ternary': [ 'error', 'always-multiline' ],
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': [ 'error', { props: false } ],
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': [ 'warn', { varsIgnorePattern: '^_', args: 'none' } ],
    'no-warning-comments': 'off',
    'quote-props': [ 'error', 'consistent-as-needed', { keywords: false } ],
    'quotes': [ 'error', 'single', { avoidEscape: true } ],
    'space-before-function-paren': [ 'error', 'always' ]
  }
}
