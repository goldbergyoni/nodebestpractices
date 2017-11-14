var isFunction = require('../../is-function')
var config = require('../../config')

module.exports = function requireSriForCheck (key, value) {
  if (!Array.isArray(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings.')
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To require nothing, omit the directive.')
  }

  value.forEach(function (expression) {
    if (isFunction(expression)) { return }

    if (config.requireSriForValues.indexOf(expression) === -1) {
      throw new Error('"' + expression + '" is not a valid ' + key + ' value. Remove it.')
    }
  })
}
