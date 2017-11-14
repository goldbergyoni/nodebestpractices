'use strict';

var isString = require('./isString');

/**
 * Reverse the characters in a string.
 *
 * ```js
 * reverse("abc");
 * //=> 'cba'
 * ```
 *
 * @name .reverse
 * @param  {String} `str` The string to reverse.
 * @return {String}
 * @api public
 */

module.exports = function reverse(str) {
  if (!isString(str)) return '';
  return str.split('').reverse().join('');
};
