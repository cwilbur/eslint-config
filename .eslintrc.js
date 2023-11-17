module.exports = {
  env: {
    es2021: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script'
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'import/no-unused-modules': 'off',
    'import/no-commonjs': 'off',
    'import/unambiguous': 'off'
  },
  overrides: [
    {
      env: {
        node: true,
        commonjs: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]
}
