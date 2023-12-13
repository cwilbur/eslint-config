const configs = [
  require('../rule-configs/core-rule-configs.cjs'),
  require('../rule-configs/vue-rule-configs.cjs'),
  require('../rule-configs/json-rule-configs.cjs'),
  // require('../rule-configs/html-rule-configs.cjs'),
  require('../rule-configs/esm-rule-configs.cjs')
]

function translateFields (config) {
  const fields = {}
  if (config.metadata.files) {
    fields.files = config.metadata.files
  }

  if (config.metadata.environments) {
    fields.env = config.metadata.environments
      .map(key => ({ [key]: true }))
      .reduce((acc, val) => ({ ...acc, ...val }), {})
  }

  if (config.metadata.globals) {
    fields.globals = config.metadata.globals
      .map(key => ({ [key]: 'readonly' }), {})
      .reduce((acc, val) => ({ ...acc, ...val }), {})
  }
  if (config.rules) {
    fields.rules = config.rules
  }

  if (config.metadata.settings) {
    fields.settings = config.metadata.settings
  }

  if (config.metadata.plugins) {
    fields.plugins = Object.keys(config.metadata.plugins)
  }

  if (config.metadata.parser) {
    fields.parser = config.metadata.parser
  }

  if (config.metadata.processor) {
    fields.processor = config.metadata.processor
  }

  return fields
}

function mergeMainConfig (mainConfig, newConfig) {
  [ 'env', 'globals', 'rules', 'settings' ].forEach(key => {
    if (key in newConfig) {
      mainConfig[key] = { ...mainConfig[key], ...newConfig[key] }
    }
  })

  if ('plugins' in newConfig) {
    mainConfig.plugins = [ ...new Set([ ...mainConfig.plugins, ...newConfig.plugins ]) ]
  }

  return mainConfig
}

function addOverrideConfig (mainConfig, overrideConfig) {
  const override = Object.entries(overrideConfig)
    .filter(pair => Boolean(pair[1]))
    .map(([ key, val ]) => ({ [key]: val }))
    .reduce((acc, val) => ({ ...acc, ...val }), {})

  mainConfig.overrides.push(override)
}

const eslintrc = {
  env: {},
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {},
  plugins: [],
  rules: {},
  settings: {},
  overrides: []
}

configs.forEach(config => {
  const cleanConfig = translateFields(config)

  if ('files' in cleanConfig) {
    addOverrideConfig(eslintrc, cleanConfig)
  } else {
    mergeMainConfig(eslintrc, cleanConfig)
  }
})

module.exports = eslintrc
