import core from './stanzas/core.js'
import vue from './stanzas/vue.js'
import js from '@eslint/js'

const eslintRecommended = [ js.configs.recommended ]

const config = [
  ...eslintRecommended,
  ...core,
  ...vue
]

export default config
export { core, vue }
