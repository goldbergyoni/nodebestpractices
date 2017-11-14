'use strict';

var indexOf = require('../array/indexOf');
var some = require('../object/some');

/**
 * Return true if `collection` contains `value`
 *
 * @name .contains
 * @param  {Array|Object} `collection`
 * @param  {*} `string`
 * @todo make this more flexible
 * @return {Boolean}
 * @api public
 */

module.exports = function contains(collection, val) {
  if (Array.isArray(collection)) {
    return indexOf(collection, val) !== -1;
  }
  return some(collection, function (v) {
    return (v === val);
  });
};
