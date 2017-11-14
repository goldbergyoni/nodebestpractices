'use strict';

var padEnd = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st.throws(function () { padEnd(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st.throws(function () { padEnd(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(padEnd, t);

	t.end();
});
