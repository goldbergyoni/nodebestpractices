var isBoolean = require('../../is-boolean')

module.exports = function (key, value) {
  if (!isBoolean(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use `true` or `false`.')
  }
}
