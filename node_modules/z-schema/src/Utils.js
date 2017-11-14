"use strict";

exports.isAbsoluteUri = function (uri) {
    return /^https?:\/\//.test(uri);
};

exports.isRelativeUri = function (uri) {
    // relative URIs that end with a hash sign, issue #56
    return /.+#/.test(uri);
};

exports.whatIs = function (what) {

    var to = typeof what;

    if (to === "object") {
        if (what === null) {
            return "null";
        }
        if (Array.isArray(what)) {
            return "array";
        }
        return "object"; // typeof what === 'object' && what === Object(what) && !Array.isArray(what);
    }

    if (to === "number") {
        if (Number.isFinite(what)) {
            if (what % 1 === 0) {
                return "integer";
            } else {
                return "number";
            }
        }
        if (Number.isNaN(what)) {
            return "not-a-number";
        }
        return "unknown-number";
    }

    return to; // undefined, boolean, string, function

};

exports.areEqual = function areEqual(json1, json2) {
    // http://json-schema.org/latest/json-schema-core.html#rfc.section.3.6

    // Two JSON values are said to be equal if and only if:
    // both are nulls; or
    // both are booleans, and have the same value; or
    // both are strings, and have the same value; or
    // both are numbers, and have the same mathematical value; or
    if (json1 === json2) {
        return true;
    }

    var i, len;

    // both are arrays, and:
    if (Array.isArray(json1) && Array.isArray(json2)) {
        // have the same number of items; and
        if (json1.length !== json2.length) {
            return false;
        }
        // items at the same index are equal according to this definition; or
        len = json1.length;
        for (i = 0; i < len; i++) {
            if (!areEqual(json1[i], json2[i])) {
                return false;
            }
        }
        return true;
    }

    // both are objects, and:
    if (exports.whatIs(json1) === "object" && exports.whatIs(json2) === "object") {
        // have the same set of property names; and
        var keys1 = Object.keys(json1);
        var keys2 = Object.keys(json2);
        if (!areEqual(keys1, keys2)) {
            return false;
        }
        // values for a same property name are equal according to this definition.
        len = keys1.length;
        for (i = 0; i < len; i++) {
            if (!areEqual(json1[keys1[i]], json2[keys1[i]])) {
                return false;
            }
        }
        return true;
    }

    return false;
};

exports.isUniqueArray = function (arr, indexes) {
    var i, j, l = arr.length;
    for (i = 0; i < l; i++) {
        for (j = i + 1; j < l; j++) {
            if (exports.areEqual(arr[i], arr[j])) {
                if (indexes) { indexes.push(i, j); }
                return false;
            }
        }
    }
    return true;
};

exports.difference = function (bigSet, subSet) {
    var arr = [],
        idx = bigSet.length;
    while (idx--) {
        if (subSet.indexOf(bigSet[idx]) === -1) {
            arr.push(bigSet[idx]);
        }
    }
    return arr;
};

// NOT a deep version of clone
exports.clone = function (src) {
    if (typeof src === "undefined") { return void 0; }
    if (typeof src !== "object" || src === null) { return src; }
    var res, idx;
    if (Array.isArray(src)) {
        res = [];
        idx = src.length;
        while (idx--) {
            res[idx] = src[idx];
        }
    } else {
        res = {};
        var keys = Object.keys(src);
        idx = keys.length;
        while (idx--) {
            var key = keys[idx];
            res[key] = src[key];
        }
    }
    return res;
};

exports.cloneDeep = function (src) {
    var visited = [], cloned = [];
    function cloneDeep(src) {
        if (typeof src !== "object" || src === null) { return src; }
        var res, idx, cidx;

        cidx = visited.indexOf(src);
        if (cidx !== -1) { return cloned[cidx]; }

        visited.push(src);
        if (Array.isArray(src)) {
            res = [];
            cloned.push(res);
            idx = src.length;
            while (idx--) {
                res[idx] = cloneDeep(src[idx]);
            }
        } else {
            res = {};
            cloned.push(res);
            var keys = Object.keys(src);
            idx = keys.length;
            while (idx--) {
                var key = keys[idx];
                res[key] = cloneDeep(src[key]);
            }
        }
        return res;
    }
    return cloneDeep(src);
};

/*
  following function comes from punycode.js library
  see: https://github.com/bestiejs/punycode.js
*/
/*jshint -W016*/
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
exports.ucs2decode = function (string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;
    while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                // unmatched surrogate; only append this code unit, in case the next
                // code unit is the high surrogate of a surrogate pair
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
};
/*jshint +W016*/
