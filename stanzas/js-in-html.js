// IMPORTANT NOTE: this set of stanzas is for 'html files' as in
// files that are webpages or webpage fragments that contain
// script tags with Javascript inside.  It mostly ignores the
// HTML except for where it interfaces with the Javascript,
// which it checks rigorously,

import htmlParser from 'eslint-html-parser'
import htmlPlugin from 'eslint-plugin-html'
import globals from 'globals'

const jsInHtmlStanzas = [
  {
    files: [ '**/*.html', '**.*.htm' ],
    languageOptions: {
      parser: htmlParser,
      parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
      globals: {
        ...globals.browser,
        ...globals.es6
      }
    },
    plugins: { html: htmlPlugin }
  }
]

export default jsInHtmlStanzas
