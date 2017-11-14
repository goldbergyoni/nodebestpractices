/*!
 * export-dirs <https://github.com/jonschlinkert/export-dirs>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function exportDirs(dir) {
  if (typeof dir !== 'string') {
    throw new TypeError('export-dirs expects `dir` to be a string.');
  }

  var dirs = tryReaddir(dir);
  var len = dirs.length;
  var res = {}
  res._ = {};

  while (len--) {
    var name = dirs[len];
    var fp = path.resolve(dir, name);
    if (fs.statSync(fp).isDirectory()) {
      var fns = tryRequire(fp);

      for (var key in fns) {
        if (fns.hasOwnProperty(key)) {
          res._[key] = fns[key];
        }
      }
      res[name] = fns;
    } else if (isValid(fp)) {
      name = basename(name);
      res[name] = res._[name] = require(fp);
    }
  }
  return res;
};

function isValid(fp) {
  return fp.indexOf('index.js') === -1
    && fp.substr(-3) === '.js';
}

function basename(fp) {
  return fp.slice(0, fp.length - 3);
}

function tryReaddir(fp) {
  try {
    return fs.readdirSync(fp);
  } catch(err) {
    err.origin = __dirname;
    err.msg = 'export-dirs cannot read directory: ' + fp;
    throw new Error(err);
  }
}

function tryRequire(fp) {
  try {
    return require(fp);
  } catch(err) {
    err.origin = __dirname;
    err.msg = 'export-dirs cannot require: ' + fp;
    throw new Error(err);
  }
}
