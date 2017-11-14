var config = require('../../config')
var isFunction = require('../../is-function')

var notAllowed = ['self', "'self'"].concat(config.unsafes)

module.exports = function pluginTypesCheck (key, value, options) {
  if (!Array.isArray(value) && (value !== false)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings.')
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To block everything, set ' + key + ' to ["\'none\'"].')
  }

  value.forEach(function (pluginType) {
    if (!pluginType) {
      throw new Error('"' + pluginType + '" is not a valid plugin type. Only non-empty strings are allowed.')
    }

    if (isFunction(pluginType)) { return }

    pluginType = pluginType.valueOf()

    if ((typeof pluginType !== 'string') || (pluginType.length === 0)) {
      throw new Error('"' + pluginType + '" is not a valid plugin type. Only non-empty strings are allowed.')
    }

    if (notAllowed.indexOf(pluginType) !== -1) {
      throw new Error('"' + pluginType + '" does not make sense in ' + key + '. Remove it.')
    }

    if (config.mustQuote.indexOf(pluginType) !== -1) {
      throw new Error('"' + pluginType + '" must be quoted in ' + key + '. Change it to "\'' + pluginType + '\'" in your source list. Force this by enabling loose mode.')
    }
  })
}
