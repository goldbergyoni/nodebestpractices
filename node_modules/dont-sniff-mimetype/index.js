module.exports = function nosniff () {
  return function nosniff (req, res, next) {
    res.setHeader('X-Content-Type-Options', 'nosniff')
    next()
  }
}
