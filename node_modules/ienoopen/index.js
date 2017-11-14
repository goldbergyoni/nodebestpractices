module.exports = function ienoopen () {
  return function ienoopen (req, res, next) {
    res.setHeader('X-Download-Options', 'noopen')
    next()
  }
}
