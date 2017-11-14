// simple mutable assign
function assign () {
  var args = [].slice.call(arguments).filter(function (i) { return i })
  var dest = args.shift()
  args.forEach(function (src) {
    Object.keys(src).forEach(function (key) {
      dest[key] = src[key]
    })
  })

  return dest
}

module.exports = assign
