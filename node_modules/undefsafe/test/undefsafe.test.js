'use strict';
/*global describe:true, it: true */
var assert = require('assert');
var undefsafe = require('../lib/undefsafe');

describe('undefsafe', function () {
  it('should handle primatives', function () {
    var r = undefsafe(1, '');
    assert(r === 1, 'undefsafe is 1: ' + r);
  });

  it('should handle empty objects', function () {
    var value = {};
    var r;

    r = undefsafe(value, '');
    assert(r === value, 'value is value' + r);

    r = undefsafe(value, 'foo');
    assert(r === undefined, 'value.foo is undefined: ' + r);

    r = undefsafe(value, 'foo.bar');
    assert(r === undefined, 'value.foo.bar is undefined: ' + r);
  });

  it('should handle null properties', function () {
    var value = {
      a: {
        b: null,
      },
    };
    var r;

    r = undefsafe(value, 'a.b');
    assert(r === null, 'value.a.b is null: ' + r);

    r = undefsafe(value, 'a.b.c');
    assert(r === undefined, 'value.a.b.c is undefined: ' + r);
  });

  it('should find deep object properties', function () {
    var value = {
      a: {
        b: {
          c: {
            d: 10,
            e: {
              f: 20,
            },
            g: true,
            h: false,
            i: undefined,
            j: null,
          },
        },
      },
    };
    var r;

    r = undefsafe(value, 'a');
    assert(r === value.a, 'value.a: ' + r + ' ' + value.a);

    r = undefsafe(value, 'a.foo');
    assert(r === undefined, 'value.a.foo is undefined: ' + r);

    r = undefsafe(value, 'a.b.c.d');
    assert(r === 10, 'value.a.b.c.d = 10');

    r = undefsafe(value, 'a.b.c.e');
    assert(r === value.a.b.c.e, 'value.a.b.c.e = <object>');

    r = undefsafe(value, 'a.b.c.g');
    assert(r === true, 'bool(true)');

    r = undefsafe(value, 'a.b.c.h');
    assert(r === false, 'bool(false)');

    r = undefsafe(value, 'a.b.c.i');
    assert(r === undefined, 'undefined');

    r = undefsafe(value, 'a.b.c.j');
    assert(r === null, 'null');
  });
});