var reduce = require('lodash.reduce')

function createFirefoxPreCSP10Directives (directives, basePolicy) {
  return reduce(directives, function (result, value, key) {
    if (key === 'connectSrc') {
      result.xhrSrc = value
    } else {
      result[key] = value
    }

    if (key === 'scriptSrc') {
      var optionsValues = []

      if (value.indexOf("'unsafe-inline'") !== -1) {
        optionsValues.push('inline-script')
      }
      if (value.indexOf("'unsafe-eval'") !== -1) {
        optionsValues.push('eval-script')
      }

      if (optionsValues.length !== 0) {
        result.options = optionsValues
      }
    }

    return result
  }, basePolicy)
}

var handlers = {
  Firefox: function (browser, directives) {
    var version = parseFloat(browser.version)

    if (version >= 4 && version < 23) {
      var basePolicy = {}
      if (version < 5) {
        basePolicy.allow = ['*']

        if (directives.defaultSrc) {
          basePolicy.allow = directives.defaultSrc
          delete directives.defaultSrc
        }
      } else {
        basePolicy.defaultSrc = ['*']
      }

      return createFirefoxPreCSP10Directives(directives, basePolicy)
    } else {
      return directives
    }
  },

  'Firefox Mobile': function (browser, directives) {
    // Handles both Firefox for Android and Firefox OS
    var family = browser.os.family
    var version = parseFloat(browser.version)

    if ((family === 'Firefox OS' && version < 32) || (family === 'Android' && version < 25)) {
      return createFirefoxPreCSP10Directives(directives, { defaultSrc: ['*'] })
    } else {
      return directives
    }
  }
}

module.exports = function transformDirectivesForBrowser (browser, directives) {
  var handler = handlers[browser.name]

  if (handler) {
    return handler(browser, directives)
  } else {
    return directives
  }
}
