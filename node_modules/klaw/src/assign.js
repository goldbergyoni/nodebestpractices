// simple mutable assign (extracted from fs-extra)
// I really like object-assign package, but I wanted a lean package with zero deps
function _assign () {
  var args = [].slice.call(arguments).filter(function (i) { return i })
  var dest = args.shift()
  args.forEach(function (src) {
    Object.keys(src).forEach(function (key) {
      dest[key] = src[key]
    })
  })

  return dest
}

// thank you baby Jesus for Node v4 and Object.assign
module.exports = Object.assign || _assign
