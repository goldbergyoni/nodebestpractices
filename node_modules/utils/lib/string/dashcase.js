'use strict';

var isString = require('./isString');
var chop = require('./chop');

/**
 * dash-case the characters in `string`. This is similar to [slugify],
 * but [slugify] makes the string compatible to be used as a URL slug.
 *
 * ```js
 * dashcase("a b.c d_e");
 * //=> 'a-b-c-d-e'
 * ```
 *
 * @name .dashcase
 * @param  {String} `string`
 * @return {String}
 * @tags dasherize, dashify, hyphenate, case
 * @api public
 */

module.exports = function dashcase(str) {
  if (!isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return chop(str).replace(re, function (_, ch) {
    return '-' + ch;
  });
};

