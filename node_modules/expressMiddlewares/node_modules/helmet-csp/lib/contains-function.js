var isFunction = require('./is-function')

module.exports = function containsFunction (obj) {
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) { continue }

    var value = obj[key]

    if (!Array.isArray(value)) {
      value = [value]
    }

    if (value.some(isFunction)) {
      return true
    }
  }

  return false
}
