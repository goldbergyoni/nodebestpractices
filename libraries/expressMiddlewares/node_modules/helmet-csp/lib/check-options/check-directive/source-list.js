var isFunction = require('../../is-function')
var config = require('../../config')

module.exports = function sourceListCheck (key, value, options) {
  var directiveInfo = config.directives[key]

  if (value === false) { return }

  if (!Array.isArray(value)) {
    throw new Error('"' + value + '" is not a valid value for ' + key + '. Use an array of strings.')
  }

  if (value.length === 0) {
    throw new Error(key + ' must have at least one value. To block everything, set ' + key + ' to ["\'none\'"].')
  }

  value.forEach(function (sourceExpression) {
    if (!sourceExpression) {
      throw new Error('"' + sourceExpression + '" is not a valid source expression. Only non-empty strings are allowed.')
    }

    if (isFunction(sourceExpression)) { return }

    sourceExpression = sourceExpression.valueOf()

    if ((typeof sourceExpression !== 'string') || (sourceExpression.length === 0)) {
      throw new Error('"' + sourceExpression + '" is not a valid source expression. Only non-empty strings are allowed.')
    }

    if ((!directiveInfo.hasUnsafes && (config.unsafes.indexOf(sourceExpression) !== -1)) ||
      (!directiveInfo.hasStrictDynamic && (config.strictDynamics.indexOf(sourceExpression) !== -1))) {
      throw new Error('"' + sourceExpression + '" does not make sense in ' + key + '. Remove it.')
    }

    if (config.mustQuote.indexOf(sourceExpression) !== -1) {
      throw new Error('"' + sourceExpression + '" must be quoted in ' + key + '. Change it to "\'' + sourceExpression + '\'" in your source list. Force this by enabling loose mode.')
    }
  })
}
