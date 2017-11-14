'use strict';

var forIn = require('for-in');

/**
 * Returns a list of all enumerable properties of `obj` that have function
 * values
 *
 * @name .methods
 * @param {Object} `obj`
 * @return {Array}
 * @api public
 */

module.exports = function methods(obj) {
  var keys = [];

  forIn(obj, function (val, key) {
    if (typeof val === 'function') {
      keys.push(key);
    }
  });

  return keys;
};
