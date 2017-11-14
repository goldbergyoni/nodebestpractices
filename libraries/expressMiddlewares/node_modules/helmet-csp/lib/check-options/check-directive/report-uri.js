var isFunction = require('../../is-function')
var isString = require('../../is-string')

module.exports = function (key, value) {
  if (value === false) { return }
  if (isFunction(value)) { return }

  if (!isString(value) || (value.length === 0)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use a non-empty string.')
  }
}
