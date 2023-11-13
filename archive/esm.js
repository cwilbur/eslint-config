module.exports = {
  plugins: [ 'import', 'import-newlines' ],
  rules: {
  // Static analysis

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
    'import/no-relative-packages': 'warn',

    // Helpful warnings

    'import/export': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': [ 'error', { unusedExports: true, missingExports: true } ],

    // Module systems

    'import/unambiguous': 'warn',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-import-module-exports': 'error',

    // Style guide
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'warn',
    'import/extensions': [ 'error', 'always' ],
    'import/order': [
      'error', {
        groups: [ 'builtin', 'external', 'parent', 'sibling', 'index' ],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
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

    'import-newlines/enforce': [ 'error', { 'items': 8, 'max-len': 120, 'semi': false } ]
  }
}
