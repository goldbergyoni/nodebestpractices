'use strict';

var toPrimitive = require('../');
var ES5 = require('../es5');
var ES6 = require('../es6');

var test = require('tape');

test('default export', function (t) {
	t.equal(toPrimitive, ES6, 'default export is ES6');
	t.equal(toPrimitive.ES5, ES5, 'ES5 property has ES5 method');
	t.equal(toPrimitive.ES6, ES6, 'ES6 property has ES6 method');
	t.end();
});

require('./es5');
require('./es6');
