import js from '@eslint/js'
import core from './stanzas/core.js'
import esm from './stanzas/esm.js'
import html from './stanzas/html.js'
import json from './stanzas/json.js'
import vue from './stanzas/vue.js'

const eslintRecommended = [ js.configs.recommended ]

const config = [
  ...eslintRecommended,
  ...core,
  ...html,
  ...vue,
  ...json,
  ...esm
]

export default config
export { core, html, vue, esm }
