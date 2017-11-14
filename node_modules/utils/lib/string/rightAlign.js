'use strict';

var alignRight = require('right-align');
var isString = require('./isString');

/**
 * Right align the characters in a string using
 * non-breaking spaces.
 *
 * ```js
 * rightAlign(str);
 * ```
 *
 * @name .rightAlign
 * @param  {String} `str` The string to reverse.
 * @return {String} Right-aligned string.
 * @related centerAlign
 * @api public
 */

module.exports = function rightAlign(str) {
  if (!isString(str)) return '';
  return alignRight(str);
};

