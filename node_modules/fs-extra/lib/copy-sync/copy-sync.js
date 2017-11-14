var fs = require('graceful-fs')
var path = require('path')
var copyFileSync = require('./copy-file-sync')
var mkdir = require('../mkdirs')

function copySync (src, dest, options) {
  if (typeof options === 'function' || options instanceof RegExp) {
    options = {filter: options}
  }

  options = options || {}
  options.recursive = !!options.recursive

  // default to true for now
  options.clobber = 'clobber' in options ? !!options.clobber : true
  options.dereference = 'dereference' in options ? !!options.dereference : false
  options.preserveTimestamps = 'preserveTimestamps' in options ? !!options.preserveTimestamps : false

  options.filter = options.filter || function () { return true }

  var stats = (options.recursive && !options.dereference) ? fs.lstatSync(src) : fs.statSync(src)
  var destFolder = path.dirname(dest)
  var destFolderExists = fs.existsSync(destFolder)
  var performCopy = false

  if (stats.isFile()) {
    if (options.filter instanceof RegExp) performCopy = options.filter.test(src)
    else if (typeof options.filter === 'function') performCopy = options.filter(src)

    if (performCopy) {
      if (!destFolderExists) mkdir.mkdirsSync(destFolder)
      copyFileSync(src, dest, {clobber: options.clobber, preserveTimestamps: options.preserveTimestamps})
    }
  } else if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) mkdir.mkdirsSync(dest)
    var contents = fs.readdirSync(src)
    contents.forEach(function (content) {
      var opts = options
      opts.recursive = true
      copySync(path.join(src, content), path.join(dest, content), opts)
    })
  } else if (options.recursive && stats.isSymbolicLink()) {
    var srcPath = fs.readlinkSync(src)
    fs.symlinkSync(srcPath, dest)
  }
}

module.exports = copySync
