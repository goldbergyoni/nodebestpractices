/*!
 * any <https://github.com/jonschlinkert/any>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var iterator = require('make-iterator');
var forOwn = require('for-own');

module.exports = function any(value, fn, thisArg) {
  if (value == null) {
    return false;
  }

  // strings
  if(typeof value === 'string' && typeof fn === 'string') {
    return value.indexOf(fn) !== -1;
  }

  // object key
  if (typeof fn === 'string') {
    if (value.hasOwnProperty(fn)) {
      return true;
    }
  }

  fn = iterator(fn, thisArg);
  var res = false;

  // arrays or arguments
  if(typeof value.length === 'number') {
    var len = value.length;
    var i = -1;

    while (++i < len) {
      if (fn(value[i], i, value)) {
        res = true;
        break;
      }
    }

  // object properties/values
  } else {
    forOwn(value, function (val, key) {
      if (fn(val, key, value)) {
        res = true;
        return false;
      }
    });
  }
  return res;
};
