"use strict";

var div = typeof document !== "undefined" && document.createElement("div");

function isReallyNaN(val) {
    return val !== val;
}

function isDOMNode(obj) {
    var success = false;

    try {
        obj.appendChild(div);
        success = div.parentNode === obj;
    } catch (e) {
        return false;
    } finally {
        try {
            obj.removeChild(div);
        } catch (e) {
            // Remove failed, not much we can do about that
        }
    }

    return success;
}

function isElement(obj) {
    return div && obj && obj.nodeType === 1 && isDOMNode(obj);
}

var deepEqual = module.exports = function deepEqual(a, b) {
    if (typeof a !== "object" || typeof b !== "object") {
        return isReallyNaN(a) && isReallyNaN(b) || a === b;
    }

    if (isElement(a) || isElement(b)) {
        return a === b;
    }

    if (a === b) {
        return true;
    }

    if ((a === null && b !== null) || (a !== null && b === null)) {
        return false;
    }

    if (a instanceof RegExp && b instanceof RegExp) {
        return (a.source === b.source) && (a.global === b.global) &&
            (a.ignoreCase === b.ignoreCase) && (a.multiline === b.multiline);
    }

    if (a instanceof Error && b instanceof Error) {
        return a === b;
    }

    var aString = Object.prototype.toString.call(a);
    if (aString !== Object.prototype.toString.call(b)) {
        return false;
    }

    if (aString === "[object Date]") {
        return a.valueOf() === b.valueOf();
    }

    var prop;
    var aLength = 0;
    var bLength = 0;

    if (aString === "[object Array]" && a.length !== b.length) {
        return false;
    }

    for (prop in a) {
        if (Object.prototype.hasOwnProperty.call(a, prop)) {
            aLength += 1;

            if (!(prop in b)) {
                return false;
            }

            // allow alternative function for recursion
            if (!(arguments[2] || deepEqual)(a[prop], b[prop])) {
                return false;
            }
        }
    }

    for (prop in b) {
        if (Object.prototype.hasOwnProperty.call(b, prop)) {
            bLength += 1;
        }
    }

    return aLength === bLength;
};

deepEqual.use = function (match) {
    return function deepEqual$matcher(a, b) {
        // If both are matchers they must be the same instance in order to be considered equal
        // If we didn't do that we would end up running one matcher against the other
        if (match.isMatcher(a)) {
            if (match.isMatcher(b)) {
                return a === b;
            }

            return a.test(b);
        }

        return deepEqual(a, b, deepEqual$matcher);
    };
};
