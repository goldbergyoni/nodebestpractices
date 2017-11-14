'use strict';

/**
 * Return true if the given `value` is an object with keys.
 *
 * ```js
 * isPlainObject(Object.create({}));
 * //=> true
 * isPlainObject(Object.create(Object.prototype));
 * //=> true
 * isPlainObject({foo: 'bar'});
 * //=> true
 * isPlainObject({});
 * //=> true
 * ```
 *
 * @name .isPlainObject
 * @param  {Object} `value` The value to check.
 * @return {Boolean}
 * @api public
 */

module.exports = require('is-plain-object');
