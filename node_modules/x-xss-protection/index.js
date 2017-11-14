module.exports = function xXssProtection (options) {
  if (options && options.setOnOldIE) {
    return function xXssProtection (req, res, next) {
      res.setHeader('X-XSS-Protection', '1; mode=block')
      next()
    }
  } else {
    return function xXssProtection (req, res, next) {
      var matches = /msie\s*(\d+)/i.exec(req.headers['user-agent'])

      var value
      if (!matches || (parseFloat(matches[1]) >= 9)) {
        value = '1; mode=block'
      } else {
        value = '0'
      }

      res.setHeader('X-XSS-Protection', value)
      next()
    }
  }
}
