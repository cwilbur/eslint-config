// eslint-disable-next-line no-unused-vars -- we'll just have to add them later
const { keysByConfig, locations, babel, base, json, esm } = require('./keys-by-config.js')

const { rules: baseRules } = require('./base.js')
const { rules: esmRules } = require('./esm.js')

const rules = { ...baseRules, ...esmRules }
const rulesPresent = new Set([
  base.eslintRecommended,
  base.eslintComments,
  base.myPreferences,
  base.unknownSourceErrors,
  base.unknownSourceOff,
  esm,
  json
])

const rulesNotFoundInObject = []
const rulesNotInObject = []

Object.keys(rules).forEach(rule => {
  const location = keysByConfig[rule]
  if (location) {
    console.log(`${ rule }: found in ${ location }`)
  } else {
    rulesNotFoundInObject.push(rule)
    console.log(`${ rule }: NOT FOUND`)
  }
})

Object.entries(keysByConfig).forEach(([ rule, location ]) => {
  if (rulesPresent.has(location)) {
    const ruleConfig = rules[rule]
    if (!ruleConfig) {
      rulesNotInObject.push(rule)
      console.log(`${ rule } is an unknown rule!`)
    }
  }
})

console.log('NOT FOUND IN OBJECT:')
rulesNotFoundInObject.forEach(rule => {
  console.log(rule)
})

console.log('NOT IN OBJECT:')
rulesNotInObject.forEach(rule => {
  console.log(rule)
})
