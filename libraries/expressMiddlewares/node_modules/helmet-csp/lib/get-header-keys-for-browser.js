var config = require('./config')

function goodBrowser () {
  return ['Content-Security-Policy']
}

var handlers = {
  'Android Browser': function (browser, options) {
    if (parseFloat(browser.os.version) < 4.4 || options.disableAndroid) {
      return []
    } else {
      return ['Content-Security-Policy']
    }
  },

  Chrome: function (browser) {
    var version = parseFloat(browser.version)

    if (version >= 14 && version < 25) {
      return ['X-WebKit-CSP']
    } else if (version >= 25) {
      return ['Content-Security-Policy']
    } else {
      return []
    }
  },

  'Chrome Mobile': function (browser) {
    if (browser.os.family === 'iOS') {
      return ['Content-Security-Policy']
    } else {
      return handlers['Android Browser'].apply(this, arguments)
    }
  },

  Firefox: function (browser) {
    var version = parseFloat(browser.version)

    if (version >= 23) {
      return ['Content-Security-Policy']
    } else if (version >= 4 && version < 23) {
      return ['X-Content-Security-Policy']
    } else {
      return []
    }
  },

  'Firefox Mobile': function (browser) {
    // Handles both Firefox for Android and Firefox OS
    var family = browser.os.family
    var version = parseFloat(browser.version)

    if (family === 'Firefox OS') {
      if (version >= 32) {
        return ['Content-Security-Policy']
      } else {
        return ['X-Content-Security-Policy']
      }
    } else if (family === 'Android') {
      if (version >= 25) {
        return ['Content-Security-Policy']
      } else {
        return ['X-Content-Security-Policy']
      }
    }

    return []
  },

  'Firefox for iOS': goodBrowser,

  IE: function (browser) {
    var version = parseFloat(browser.version)
    var header = version < 12 ? 'X-Content-Security-Policy' : 'Content-Security-Policy'

    return [header]
  },

  'Microsoft Edge': goodBrowser,

  'Microsoft Edge Mobile': goodBrowser,

  Opera: function (browser) {
    if (parseFloat(browser.version) >= 15) {
      return ['Content-Security-Policy']
    } else {
      return []
    }
  },

  Safari: function (browser) {
    var version = parseFloat(browser.version)

    if (version >= 7) {
      return ['Content-Security-Policy']
    } else if (version >= 6) {
      return ['X-WebKit-CSP']
    } else {
      return []
    }
  }
}

handlers['IE Mobile'] = handlers.IE

module.exports = function getHeaderKeysForBrowser (browser, options) {
  var handler = handlers[browser.name]

  if (handler) {
    return handler(browser, options)
  } else {
    return config.allHeaders
  }
}
