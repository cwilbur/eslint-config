import htmlPlugin from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import globals from 'globals'

htmlParser.meta = {
  name: '@html-eslint/parser',
  version: '0.2.0'
}

const htmlFiles = [ '**/*.html', '**/*.htm' ]

const htmlConfig = [
  {
    files: htmlFiles,
    plugins: {
      '@html-eslint': htmlPlugin
    },
    languageOptions: {
      parser: htmlParser,
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      ...htmlPlugin.configs.recommended.rules,
      '@html-eslint/indent': [ 'error', 2 ]
    }
  }
]

export default htmlConfig
