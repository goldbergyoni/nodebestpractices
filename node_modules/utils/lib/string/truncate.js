'use strict';

var isString = require('./isString');
var striptags = require('striptags');

/**
 * Truncate a string by removing all HTML tags and limiting the result
 * to the specified `length`.
 *
 * ```js
 * truncate("<span>foo bar baz</span>", 7);
 * //=> 'foo bar'
 * ```
 *
 * @name .truncate
 * @param  {String} `str`
 * @param  {Number} `length` The desired length of the returned string.
 * @return {String} The truncated string.
 * @api public
 */

module.exports = function truncate(str, length) {
  if (!isString(str)) return '';
  return striptags(str).substr(0, length);
};
