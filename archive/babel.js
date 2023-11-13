module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [ '@babel' ],
  rules: {
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'no-unused-expressions': 'off',
    'object-curly-spacing': 'off',
    'semi': 'off',

    '@babel/new-cap': 1,
    '@babel/no-invalid-this': 1,
    '@babel/no-unused-expressions': [ 'error', { allowShortCircuit: true, allowTernary: true } ],
    '@babel/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true } ],
    '@babel/semi': [ 'error', 'never' ]
  }
}
