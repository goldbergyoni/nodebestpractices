"use strict";

var includes      = require("../array/#/contains")
  , uniq          = require("../array/#/uniq")
  , objForEach    = require("./for-each")
  , isPlainObject = require("./is-plain-object")
  , ensureValue   = require("./valid-value");

var isArray = Array.isArray, slice = Array.prototype.slice;

var deepAssign = function (source, target) {
	if (isPlainObject(source)) {
		if (!isPlainObject(target)) return target;
		objForEach(target, function (value, key) {
			source[key] = deepAssign(source[key], value);
		});
		return source;
	}
	if (isArray(source)) {
		if (!isArray(target)) return target;
		target.forEach(function (item) {
			if (!includes.call(source, item)) source.push(item);
		});
		return source;
	}
	return target;
};

module.exports = function (target /*, ...objects*/) {
	return uniq
		.call([ensureValue(target)].concat(slice.call(arguments, 1).map(ensureValue)))
		.reduce(deepAssign);
};
