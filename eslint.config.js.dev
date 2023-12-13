import core, { eslintSpecials } from './stanzas/core.js'
import js from '@eslint/js'
import jsInHtml from './stanzas/js-in-html.js'
import esm from './stanzas/esm.js'

const eslintRecommended = [ js.configs.recommended ]

const indexJsSpecials = structuredClone(eslintSpecials)
indexJsSpecials.files = [ '/index.js' ]

const config = [
  ...eslintRecommended,
  ...core,
  ...jsInHtml,
  ...esm,
  ...eslintSpecials,
  ...indexJsSpecials
]

export default config

