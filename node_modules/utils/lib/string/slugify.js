'use strict';

var isString = require('./isString');
var dashcase = require('./dashcase');

/**
 * TODO: Need to use a proper slugifier for this.
 * I don't want to use `node-slug`, it's way too
 * huge for this. PR welcome
 *
 * ```js
 * slugify('This is a post title.');
 * //=> 'this-is-a-post-title'
 * ```
 *
 * @name .slugify
 * @param  {String} `string` The string to slugify.
 * @return {String} Slug.
 * @api draft
 */

module.exports = function slugify(str) {
  if (!isString(str)) return '';
  return dashcase(str);
};

