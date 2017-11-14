'use strict';

var diff = require('arr-diff');

/**
 * Return the difference between the first array and
 * additional arrays.
 *
 * ```js
 * var a = ['a', 'b', 'c', 'd'];
 * var b = ['b', 'c'];
 *
 * diff(a, b);
 * //=> ['a', 'd']
 * ```
 *
 * @name .difference
 * @param  {Array} `a`
 * @param  {Array} `b`
 * @return {Array}
 * @api public
 */

module.exports = function difference_(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.difference() expects an array.');
  }
  return diff.apply(diff, arguments);
};
