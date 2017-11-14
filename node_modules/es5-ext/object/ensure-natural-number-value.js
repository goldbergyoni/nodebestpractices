"use strict";

var ensure  = require("./ensure-natural-number")
  , isValue = require("./is-value");

module.exports = function (arg) {
	if (!isValue(arg)) throw new TypeError(arg + " is not a natural number");
	return ensure(arg);
};
