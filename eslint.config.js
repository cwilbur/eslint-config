import core, { eslintSpecials } from './stanzas/core.js'
import js from '@eslint/js'

const eslintRecommended = [ js.configs.recommended ]

const indexJsSpecials = structuredClone(eslintSpecials)
indexJsSpecials.files = [ '/index.js' ]

const config = [
  ...eslintRecommended,
  ...core,
  ...eslintSpecials,
  ...indexJsSpecials
]

export default config

