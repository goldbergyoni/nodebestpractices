module.exports = function hidePoweredBy (options) {
  var setTo = (options || {}).setTo

  if (setTo) {
    return function hidePoweredBy (req, res, next) {
      res.setHeader('X-Powered-By', setTo)
      next()
    }
  } else {
    return function hidePoweredBy (req, res, next) {
      res.removeHeader('X-Powered-By')
      next()
    }
  }
}
