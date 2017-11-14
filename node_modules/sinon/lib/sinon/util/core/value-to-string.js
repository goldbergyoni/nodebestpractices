"use strict";

module.exports = function (value) {
    if (value && value.toString) {
        return value.toString();
    }
    return String(value);
};
