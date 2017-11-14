var path = require('path')
var fs = require('graceful-fs')
var mkdir = require('../mkdirs')

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    fs.link(srcpath, dstpath, function (err) {
      if (err) return callback(err)
      callback(null)
    })
  }

  fs.exists(dstpath, function (destinationExists) {
    if (destinationExists) return callback(null)
    fs.lstat(srcpath, function (err, stat) {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink')
        return callback(err)
      }

      var dir = path.dirname(dstpath)
      fs.exists(dir, function (dirExists) {
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdir.mkdirs(dir, function (err) {
          if (err) return callback(err)
          makeLink(srcpath, dstpath)
        })
      })
    })
  })
}

function createLinkSync (srcpath, dstpath, callback) {
  var destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  try {
    fs.lstatSync(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  var dir = path.dirname(dstpath)
  var dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: createLink,
  createLinkSync: createLinkSync,
  // alias
  ensureLink: createLink,
  ensureLinkSync: createLinkSync
}
