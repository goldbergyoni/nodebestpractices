'use strict';

var isString = require('./isString');

/**
 * Sentence-case the characters in `string`.
 *
 * ```js
 * sentencecase("foo bar baz.");
 * //=> 'Foo bar baz.'
 * ```
 *
 * @name .sentencecase
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

module.exports = function sentencecase(str) {
  if (!isString(str)) return '';
  if (str.length === 1) {return str.toUpperCase(); }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

