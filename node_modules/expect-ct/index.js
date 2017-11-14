module.exports = function expectCt (options) {
  var headerValue = getHeaderValue(options)

  return function expectCt (req, res, next) {
    res.setHeader('Expect-CT', headerValue)
    next()
  }
}

function getHeaderValue (options) {
  options = options || {}

  var directives = []

  if (options.enforce) {
    directives.push('enforce')
  }

  directives.push('max-age=' + parseMaxAge(options.maxAge))

  if (options.reportUri) {
    directives.push('report-uri="' + options.reportUri + '"')
  }

  return directives.join('; ')
}

function parseMaxAge (option) {
  if (option == null) { return 0 }

  if ((typeof option !== 'number') || (option < 0)) {
    throw new Error(option + ' is not a valid value for maxAge. Please choose a positive integer.')
  }

  return option
}
