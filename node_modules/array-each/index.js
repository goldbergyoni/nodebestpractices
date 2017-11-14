/*!
 * array-each <https://github.com/jonschlinkert/array-each>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Loop over each item in an array and call the given function on every element.
 *
 * ```js
 * each(['a', 'b', 'c'], function (ele) {
 *   return ele + ele;
 * });
 * //=> ['aa', 'bb', 'cc']
 *
 * each(['a', 'b', 'c'], function (ele, i) {
 *   return i + ele;
 * });
 * //=> ['0a', '1b', '2c']
 * ```
 *
 * @name .each
 * @alias .forEach
 * @param {Array} `array`
 * @param {Function} `fn`
 * @param {Object} `thisArg` Optionally pass a `thisArg` to be used as the context in which to call the function.
 * @return {Array}
 * @api public
 */

module.exports = function each(arr, cb, thisArg) {
  if (arr == null) return;

  var len = arr.length, i = -1;

  while (len--) {
    var ele = arr[++i];
    if (cb.call(thisArg, ele, i, arr) === false) {
      break;
    }
  }
};
