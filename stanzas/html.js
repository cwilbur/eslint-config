import htmlPlugin from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const eslintrc = new FlatCompat({
  baseDirectory: __dirname
})

// can't start a variable name with an @

// const recommendedRules = {}
// Object.keys(htmlPlugin.configs.recommended.rules).forEach(ruleName => {
//   const newName = ruleName.replace(/^@html-eslint/, 'html')
//   recommendedRules[newName] =
// })

const htmlConfig = {
  files: [ '**/*.html' ],
  languageOptions: {
    parser: htmlParser,
    globals: {
      ...globals.browser
    }
  },
  plugins: { '@html-eslint': htmlPlugin },
  ...htmlPlugin.configs.recommended
}

export default htmlConfig
