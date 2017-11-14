var config = require('../../config')
var checkers = {
  sourceList: require('./source-list'),
  pluginTypes: require('./plugin-types'),
  sandbox: require('./sandbox'),
  reportUri: require('./report-uri'),
  requireSriFor: require('./require-sri-for'),
  boolean: require('./boolean')
}

module.exports = function (key, value, options) {
  if (options.loose) { return }

  if (!config.directives.hasOwnProperty(key)) {
    throw new Error('"' + key + '" is an invalid directive. See the documentation for the supported list. Force this by enabling loose mode.')
  }

  var directiveType = config.directives[key].type
  checkers[directiveType](key, value, options)
}
