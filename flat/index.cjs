/* eslint-disable import/order */
const coreStanzas = require('./core.cjs')
const vueStanzas = require('./vue.cjs')
const jsonStanzas = require('./json.cjs')
// const htmlStanzas = require('./html.cjs')
const esmStanzas = require('./esm.cjs')

const ignores = [
  '/node_modules'
]

const flatConfig = [
  { ignores },
  ...coreStanzas,
  ...vueStanzas,
  ...jsonStanzas,
  // ...htmlStanzas,
  ...esmStanzas
]

module.exports = flatConfig

