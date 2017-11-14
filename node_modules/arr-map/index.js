/*!
 * arr-map <https://github.com/jonschlinkert/arr-map>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var iterator = require('make-iterator');

module.exports = function map(arr, fn, thisArg) {
  if (arr == null) return [];
  fn = iterator(fn, thisArg);

  var len = arr.length;
  var res = new Array(len);

  for (var i = 0; i < len; i++) {
    res[i] = fn(arr[i], i, arr);
  }
  return res;
};
