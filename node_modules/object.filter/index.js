/*!
 * object.filter <https://github.com/jonschlinkert/object.filter>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var makeIterator = require('make-iterator');
var forOwn = require('for-own');

module.exports = function filter(o, cb, thisArg) {
  cb = makeIterator(cb, thisArg);
  var filtered = {};

  forOwn(o, function (value, key, o) {
    if (cb(value, key, o)) {
      filtered[key] = value;
    }
  });

  return filtered;
};
