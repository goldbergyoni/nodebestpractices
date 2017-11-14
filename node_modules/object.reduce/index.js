/*!
 * object.reduce <https://github.com/jonschlinkert/object.reduce>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var forOwn = require('for-own');

module.exports = function reduce(o, fn, acc, thisArg) {
  var first = arguments.length > 2;

  if (o && !Object.keys(o).length && !first) {
    return null;
  }

  forOwn(o, function (value, key, orig) {
    if (!first) {
      acc = value;
      first = true;
    } else {
      acc = fn.call(thisArg, acc, value, key, orig);
    }
  });
  return acc;
};
