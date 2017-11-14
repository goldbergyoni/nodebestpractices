'use strict';

var typeOf = require('../lang/typeOf');

module.exports = function result(o, key) {
  var val = o[key];
  if (typeof val === 'undefined') {
    return;
  }
  if (typeOf(val) === 'function') {
    return val.call(o);
  }
  return val;
};
