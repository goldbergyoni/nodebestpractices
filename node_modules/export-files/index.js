/*!
 * export-files <https://github.com/jonschlinkert/export-files>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var lazy = require('lazy-cache')(require);

module.exports = function(dir) {
  if (typeof dir !== 'string') {
    throw new TypeError('expected "' + dir + '" to be a string');
  }

  var dirs = fs.readdirSync(dir);
  var len = dirs.length;
  var idx = -1;
  var res = {}

  while (++idx < len) {
    var name = dirs[idx];
    var fp = path.resolve(dir, name);

    if (isJavaScriptFile(fp)) {
      defineProp(res, basename(name), lazy(fp));
    }
  }
  return res;
};

/**
 * Return true if the file is a `.js` file.
 *
 * @param {String} filepath
 * @return {Boolean}
 */

function isJavaScriptFile(filepath) {
  if (!fs.statSync(filepath).isFile()) {
    return false;
  }
  if (path.basename(filepath) === 'index.js') {
    return false;
  }
  return filepath.slice(-3) === '.js';
}

/**
 * Since we know the file should always be a `.js` file,
 * we can just remove the last 3 characters to get
 * the name.
 *
 * @param {String} filepath
 * @return {String}
 */

function basename(filepath) {
  return filepath.slice(0, filepath.length - 3);
}

function defineProp(cache, name, fn) {
  Object.defineProperty(cache, name, {
    enumerable: true,
    configurable: true,
    get: function () {
      return fn();
    }
  });
}
