import core from './stanzas/core.js'
import html from './stanzas/html.js'
import vue from './stanzas/vue.js'
import esm from './stanzas/esm.js'
import json from './stanzas/json.js'

import js from '@eslint/js'

const eslintRecommended = [ js.configs.recommended ]

const config = [
  ...eslintRecommended,
  ...core,
  ...html,
  ...vue
  // ...json
  // ...esm
]

export default config
export { core, html, vue, esm }
