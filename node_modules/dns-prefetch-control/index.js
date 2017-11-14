module.exports = function dnsPrefetchControl (options) {
  if (options && options.allow) {
    return function dnsPrefetchControl (req, res, next) {
      res.setHeader('X-DNS-Prefetch-Control', 'on')
      next()
    }
  } else {
    return function dnsPrefetchControl (req, res, next) {
      res.setHeader('X-DNS-Prefetch-Control', 'off')
      next()
    }
  }
}
