'use strict';

var flatten = require('arr-flatten');
var isNumber = require('is-number');

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```js
 * sum([1, 2, 3, 4, 5])
 * //=> '15'
 * ```
 *
 * @name .sum
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

module.exports = function sum_() {
  var args = flatten([].concat.apply([], arguments));
  var i = args.length, sum = 0;
  while (i--) {
    if (!isNumber(args[i])) {
      continue;
    }
    sum += (+args[i]);
  }
  return sum;
};
