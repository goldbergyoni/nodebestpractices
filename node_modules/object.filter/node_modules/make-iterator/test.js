/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Copyright (c) 2012, 2013 moutjs team and contributors (http://moutjs.com)
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var makeIterator = require('./');

describe('make iterator', function(){
  it('should return source argument if it is already a function with no context', function(){
    var fn = function(){};
    makeIterator(fn).should.eql(fn);
  });
  it('should return a function that calls object/deepMatches if argument is an object', function(){
    var fn =  makeIterator({ a: 1, b: { c: 2 } });
    fn({ a: 1, b: { c: 2, d: 3 } }).should.eql(true);
    fn({ a: 1, b: { c: 3 } }).should.eql(false);
  });
  it('should return a function that returns the property value if argument is a string', function(){
    var fn =  makeIterator('a');
    fn({a:1,b:2}).should.equal(1);
    fn({a:2,b:2}).should.equal(2);
  });
  it('should return a function that returns the property value if argument is a number', function(){
    var fn =  makeIterator(1);
    fn([0,4,5]).should.equal(4);
    fn([6,7,8]).should.equal(7);
  });
  it('should return an identify function if no args', function(){
    var fn = makeIterator();
    (fn(null) == null).should.be.true;
    (fn(void(0)) == void(0)).should.be.true;
    fn(3).should.equal(3);
  });
  it('should return an identify function if first arg is `null`', function(){
    var fn = makeIterator(null);
    (fn(null) == null).should.be.true;
    (fn(void(0)) == void(0)).should.be.true;
    fn(3).should.equal(3);
  });
  it('should return a function that is called with the specified context', function(){
    var context = {};
    var iterator = makeIterator(function(){ return this; }, context);
    iterator().should.eql(context);
  });
});