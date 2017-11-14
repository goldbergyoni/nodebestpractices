'use strict';

var bind = require('function-bind');
var define = require('define-properties');
var ES = require('es-abstract/es7');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = bind.call(Function.apply, implementation);

var boundPadEnd = function padEnd(str, maxLength) {
	ES.RequireObjectCoercible(str);
	var args = [maxLength];
	if (arguments.length > 2) {
		args.push(arguments[2]);
	}
	return bound(str, args);
};

define(boundPadEnd, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundPadEnd;
