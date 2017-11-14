'use strict';

var isString = require('./isString');
var truncate = require('./truncate');

/**
 * Truncate a string to the specified `length`, and append
 * it with an elipsis, `…`.
 *
 * ```js
 * ellipsis("<span>foo bar baz</span>", 7);
 * //=> 'foo bar…'
 * ```
 *
 * @name .ellipsis
 * @param  {String} `str`
 * @param  {Number} `length` The desired length of the returned string.
 * @param  {String} `ch` Optionally pass custom characters to append. Default is `…`.
 * @return {String} The truncated string.
 * @api public
 */

module.exports = function ellipsis(str, limit, ch) {
  if (!isString(str)) return '';
  return truncate(str, limit) + (ch || '…');
};
