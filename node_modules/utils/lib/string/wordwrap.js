'use strict';

var wrap = require('word-wrap');
var isString = require('./isString');

/**
 * Wrap words to a specified width using [word-wrap].
 *
 * ```js
 * wordwrap("a b c d e f", {width: 5, newline: '<br>  '});
 * //=> '  a b c <br>  d e f'
 * ```
 *
 * @name .wordwrap
 * @param  {String} `string` The string with words to wrap.
 * @param  {Options} `object` Options to pass to [word-wrap]
 * @return {String} Formatted string.
 * @api public
 */

module.exports = function wordwrap(str) {
  if (!isString(str)) return '';
  return wrap.apply(wrap, arguments);
};

