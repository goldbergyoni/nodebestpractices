"use strict";

var type = require("type-detect");

module.exports = function typeOf(value) {
    return type(value).toLowerCase();
};
