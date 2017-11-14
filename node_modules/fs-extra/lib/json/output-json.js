var fs = require('graceful-fs')
var path = require('path')
var jsonFile = require('./jsonfile')
var mkdir = require('../mkdirs')

function outputJson (file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  var dir = path.dirname(file)

  fs.exists(dir, function (itDoes) {
    if (itDoes) return jsonFile.writeJson(file, data, options, callback)

    mkdir.mkdirs(dir, function (err) {
      if (err) return callback(err)
      jsonFile.writeJson(file, data, options, callback)
    })
  })
}

module.exports = outputJson
