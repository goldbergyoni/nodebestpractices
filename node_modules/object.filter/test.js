/*!
 * object.filter <https://github.com/jonschlinkert/object.filter>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var filter = require('./');

describe('.filter()', function () {
  it('should return values for which the callback returns true.', function () {
    var o = filter({a: 'a', b: 'b', c: 'c'}, function (value, key) {
      return key === 'b';
    });
    o.should.eql({ b: 'b' });
  });

  it('should omit values for which the callback returns false.', function () {
    var o = filter({a: 'a', b: 'b', c: 'c'}, function (value, key) {
      return key !== 'b';
    });
    o.should.eql({a: 'a', c: 'c'});
  });

  it('should return an empty object if all values return false.', function () {
    var o = filter({a: 'a', b: 'b', c: 'c'}, function (value, key) {
      return key === 'foo';
    });
    o.should.eql({});
  });
});
