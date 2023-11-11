import core from './stanzas/core.js'
import vue from './stanzas/vue.js'
import jsInHtml from './stanzas/js-in-html.js'
import esm from './stanzas/esm.js'

import js from '@eslint/js'

const eslintRecommended = [ js.configs.recommended ]

const config = [
  ...eslintRecommended,
  ...core,
  ...vue,
  ...jsInHtml,
  ...esm
]

export default config
export { core, vue }
