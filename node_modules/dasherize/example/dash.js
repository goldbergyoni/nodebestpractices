'use strict';

var dasherize = require('../');
var obj = {
  feeFieFoe: 'fum',
  beepBoop: [
    { 'abcXyz': 'mno' },
    { 'fooBar': 'baz' }
  ]
};
var res = dasherize(obj);
console.log(JSON.stringify(res, null, 2));
