import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const eslintrc = new FlatCompat({
  baseDirectory: __dirname
})

let aggregate = {}
const vueRules = {}
const vueLevels = [
  'base',
  'vue3-essential',
  'vue3-strongly-recommended',
  'vue3-recommended'
]

vueLevels.forEach(level => {
  aggregate = { ...aggregate, ...vuePlugin.configs[level].rules }
  vueRules[level] = structuredClone(aggregate)
})

vueRules.base = { ...vuePlugin.configs.base.rules }
vueRules.essentials = { ...vueRules.base, ...vuePlugin.configs['vue3-essential'] }

const vueStanzas = [
  {
    files: [ '**/*.vue' ],
    languageOptions: {
      parser: vueParser,
      parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
      globals: {
        ...globals.browser,
        ...globals.es6,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      }
    },
    plugins: { vue: vuePlugin },
    processor: vuePlugin.processors['.vue'],
    rules: vueRules['vue3-recommended']
  }
]

export default vueStanzas
