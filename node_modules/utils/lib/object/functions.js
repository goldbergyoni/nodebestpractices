'use strict';

var forIn = require('for-in');

/**
 * Returns a copy of the given `obj` filtered to have only enumerable
 * properties that have function values.
 *
 * ```js
 * functions({a: 'b', c: function() {}});
 * //=> {c: function() {}}
 * ```
 *
 * @name .functions
 * @param {Object} `obj`
 * @return {Object}
 * @api public
 */

module.exports = function functions(obj) {
  var res = {};

  forIn(obj, function (val, key) {
    if (typeof val === 'function') {
      res[key] = val;
    }
  });

  return res;
};
