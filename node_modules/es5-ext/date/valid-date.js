"use strict";

var isDate = require("./is-date");

module.exports = function (value) {
	if (!isDate(value) || isNaN(value)) throw new TypeError(value + " is not valid Date object");
	return value;
};
