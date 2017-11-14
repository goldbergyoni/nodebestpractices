var dashify = require('dashify')

module.exports = function (options) {
  var directives = options.directives

  var keysSeen = {}

  return Object.keys(directives).reduce(function (result, originalKey) {
    var directive = dashify(originalKey)

    if (keysSeen[directive]) {
      throw new Error(originalKey + ' is specified more than once')
    }
    keysSeen[directive] = true

    var value = directives[originalKey]
    if (Array.isArray(value)) {
      value = value.join(' ')
    } else if (value === true) {
      value = ''
    }

    if (value) {
      return result.concat(directive + ' ' + value)
    } else {
      return result.concat(directive)
    }
  }, []).join('; ')
}
