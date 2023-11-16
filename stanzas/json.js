import jsonPlugin from 'eslint-plugin-json'

const stanzas = [
  {
    files: [ '**/*.json' ],
    plugins: { json: jsonPlugin },
    rules: {
      'json/*': [ 'error', { allowComments: true } ]
    }
  }
]

export default stanzas
