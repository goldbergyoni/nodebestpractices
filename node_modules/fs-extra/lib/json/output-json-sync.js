var fs = require('graceful-fs')
var path = require('path')
var jsonFile = require('./jsonfile')
var mkdir = require('../mkdirs')

function outputJsonSync (file, data, options) {
  var dir = path.dirname(file)

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  jsonFile.writeJsonSync(file, data, options)
}

module.exports = outputJsonSync
