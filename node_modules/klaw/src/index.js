var assert = require('assert')
var fs
try {
  fs = require('graceful-fs')
} catch (e) {
  fs = require('fs')
}
var path = require('path')
var Readable = require('stream').Readable
var util = require('util')
var assign = require('./assign')

function Walker (dir, options) {
  assert.strictEqual(typeof dir, 'string', '`dir` parameter should be of type string. Got type: ' + typeof dir)
  var defaultStreamOptions = { objectMode: true }
  var defaultOpts = { queueMethod: 'shift', pathSorter: undefined, filter: undefined }
  options = assign(defaultOpts, options, defaultStreamOptions)

  Readable.call(this, options)
  this.root = path.resolve(dir)
  this.paths = [this.root]
  this.options = options
  this.fs = options.fs || fs // mock-fs
}
util.inherits(Walker, Readable)

Walker.prototype._read = function () {
  if (this.paths.length === 0) return this.push(null)
  var self = this
  var pathItem = this.paths[this.options.queueMethod]()

  self.fs.lstat(pathItem, function (err, stats) {
    var item = { path: pathItem, stats: stats }
    if (err) return self.emit('error', err, item)
    if (!stats.isDirectory()) return self.push(item)

    self.fs.readdir(pathItem, function (err, pathItems) {
      if (err) {
        self.push(item)
        return self.emit('error', err, item)
      }

      pathItems = pathItems.map(function (part) { return path.join(pathItem, part) })
      if (self.options.filter) pathItems = pathItems.filter(self.options.filter)
      if (self.options.pathSorter) pathItems.sort(self.options.pathSorter)
      pathItems.forEach(function (pi) { self.paths.push(pi) })

      self.push(item)
    })
  })
}

function walk (root, options) {
  return new Walker(root, options)
}

module.exports = walk
