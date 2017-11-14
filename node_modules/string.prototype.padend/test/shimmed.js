'use strict';

var padEnd = require('../');
padEnd.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.padEnd.length, 1, 'String#padEnd has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.padEnd.name, 'padEnd', 'String#padEnd has name "padEnd"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'padEnd'), 'String#padEnd is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st.throws(function () { return padEnd(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st.throws(function () { return padEnd(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(bind.call(Function.call, String.prototype.padEnd), t);

	t.end();
});
