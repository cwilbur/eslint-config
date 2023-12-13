module.exports = {
  plugins: [ 'json' ],
  rules: {
    'json/*': [ 'error', { allowComments: true } ]
  }
}
