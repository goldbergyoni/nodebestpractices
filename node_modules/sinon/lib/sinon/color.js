"use strict";

var supportsColor = require("supports-color");

function colorize(str, color) {
    if (!supportsColor) {
        return str;
    }

    return "\x1b[" + color + "m" + str + "\x1b[0m";
}

exports.red = function (str) {
    return colorize(str, 31);
};

exports.green = function (str) {
    return colorize(str, 32);
};
