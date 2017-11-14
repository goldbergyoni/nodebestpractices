'use strict';

var isString = require('./isString');

/**
 * Replace occurrences of `a` with `b`.
 *
 * ```js
 * replace("abcabc", /a/, "z");
 * //=> 'zbczbc'
 * ```
 *
 * @name .replace
 * @param  {String} `str`
 * @param  {String|RegExp} `a` Can be a string or regexp.
 * @param  {String} `b`
 * @return {String}
 * @api public
 */

module.exports = function replace(str, a, b) {
  if (!isString(str)) return '';
  if (!a) { return str; }
  if (!b) { b = ''; }
  return str.split(a).join(b);
};

