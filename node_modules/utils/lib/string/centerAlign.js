'use strict';

var alignCenter = require('center-align');
var isString = require('./isString');

/**
 * Center align the characters in a string using
 * non-breaking spaces.
 *
 * ```js
 * centerAlign("abc");
 * ```
 *
 * @name .centerAlign
 * @param  {String} `str` The string to reverse.
 * @return {String} Centered string.
 * @related rightAlign
 * @api public
 */

module.exports = function centerAlign(str) {
  if (!isString(str)) return '';
  return alignCenter(str, '&nbsp;');
};

