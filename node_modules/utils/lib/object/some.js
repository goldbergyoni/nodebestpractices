'use strict';

var forOwn = require('for-own');
var iterator = require('make-iterator');

module.exports = function some(obj, cb, thisArg) {
  cb = iterator(cb, thisArg);
  var result = false;

  forOwn(obj, function (val, key) {
    if (cb(val, key, obj)) {
      result = true;
      return false; // break
    }
  });
  return result;
};
