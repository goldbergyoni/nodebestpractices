'use strict';

var isString = require('./isString');

/**
 * Like trim, but removes both extraneous whitespace and
 * non-word characters from the beginning and end of a string.
 *
 * ```js
 * chop("_ABC_");
 * //=> 'ABC'
 *
 * chop("-ABC-");
 * //=> 'ABC'
 *
 * chop(" ABC ");
 * //=> 'ABC'
 * ```
 *
 * @name .chop
 * @param  {String} `string` The string to chop.
 * @return {String}
 * @api public
 */

module.exports = function chop(str) {
  if (!isString(str)) return '';
  var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
};

