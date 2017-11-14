"use strict";
var typeOf = require("./typeOf");

module.exports = function iterableToString(obj) {
    var representation = "";

    function stringify(item) {
        return typeof item === "string" ? "'" + item + "'" : String(item);
    }

    function mapToString(map) {
        map.forEach(function (value, key) {
            representation += "[" + stringify(key) + "," + stringify(value) + "],";
        });

        representation = representation.slice(0, -1);
        return representation;
    }

    function genericIterableToString(iterable) {
        iterable.forEach(function (value) {
            representation += stringify(value) + ",";
        });

        representation = representation.slice(0, -1);
        return representation;
    }

    if (typeOf(obj) === "map") {
        return mapToString(obj);
    }

    return genericIterableToString(obj);
};
