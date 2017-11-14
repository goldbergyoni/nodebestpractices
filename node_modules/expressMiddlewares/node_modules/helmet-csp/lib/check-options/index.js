var checkDirective = require('./check-directive')
var dasherize = require('dasherize')

module.exports = function (options) {
  if (!isObject(options)) {
    throw new Error('csp must be called with an object argument. See the documentation.')
  }

  var directives = options.directives

  var directivesExist = isObject(directives)
  if (!directivesExist || Object.keys(directives).length === 0) {
    throw new Error('csp must have at least one directive under the "directives" key. See the documentation.')
  }

  Object.keys(directives).forEach(function (directiveKey) {
    checkDirective(dasherize(directiveKey), directives[directiveKey], options)
  })
}

function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
