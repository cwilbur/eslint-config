module.exports = {
  rules: {
    'import-newlines/enforce': [ 'error', { items: 8, 'max-len': 120, semi: false, forceSingleLine: true } ],
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'warn',
    'import/export': 'warn',
    'import/exports-last': 'error',
    'import/extensions': [ 'error', 'always' ],
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/max-dependencies': 'warn',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'warn',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-named-as-default-member': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-default': 'warn',
    'import/no-namespace': 'warn',
    'import/no-relative-packages': 'warn',
    'import/no-relative-parent-imports': 'warn',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'warn',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': [ 'error', { noUselessIndex: false } ],
    'import/no-webpack-loader-syntax': 'warn',
    'import/order': [ 'error', { groups: [ 'builtin', 'external', 'parent', 'sibling', 'index' ], alphabetize: { order: 'asc', caseInsensitive: true } } ],
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'warn'
  }
}
