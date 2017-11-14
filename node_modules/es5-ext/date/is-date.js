"use strict";

var objToString = Object.prototype.toString, id = objToString.call(new Date());

module.exports = function (value) {
	return (value && (value instanceof Date || objToString.call(value) === id)) || false;
};
