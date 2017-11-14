'use strict';

var isString = require('./isString');

/**
 * Count the number of occurrances of a substring
 * within a string.
 *
 * ```js
 * count("abcabcabc", "a");
 * //=> '3'
 * ```
 *
 * @name .count
 * @param  {String} `string`
 * @param  {String} `substring`
 * @return {Number} The occurances of `substring` in `string`
 * @api public
 */

module.exports = function count(str, sub) {
  if (!isString(str)) return '';
  return sub ? (str.split(sub).length - 1) : '0';
};

