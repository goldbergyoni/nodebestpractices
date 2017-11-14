'use strict';

/**
 * Reduces an object to a value that is the accumulated
 * result of running each property in the object through a callback.
 *
 * ```js
 * var a = {a: 'foo', b: 'bar', c: 'baz'};
 *
 * reduce(a, function (acc, value, key, obj) {
 *   // `acc`- the initial value (or value from the previous callback call),
 *   // `value`- the of the current property,
 *   // `key`- the of the current property, and
 *   // `obj` - original object
 *
 *   acc[key] = value.toUpperCase();
 *   return acc;
 * }, {});
 *
 * //=> {a: 'FOO', b: 'BAR', c: 'BAZ'};
 * ```
 *
 * @name .reduce
 * @param {Object} `obj` The object to iterate over.
 * @param {Function} `iterator` Iterator function
 * @param {Object} `initial` Initial value.
 * @param {Object} `thisArg` The `this` binding of the iterator function.
 * @return {Object}
 * @api public
 */

module.exports = require('object.reduce');
