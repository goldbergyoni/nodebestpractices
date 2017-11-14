/*eslint no-console: 0 */
"use strict";

// wrap returns a function that will invoke the supplied function and print a deprecation warning to the console each
// time it is called.
exports.wrap = function (func, msg) {
    var wrapped = function () {
        exports.printWarning(msg);
        return func.apply(this, arguments);
    };
    if (func.prototype) {
        wrapped.prototype = func.prototype;
    }
    return wrapped;
};

// defaultMsg returns a string which can be supplied to `wrap()` to notify the user that a particular part of the
// sinon API has been deprecated.
exports.defaultMsg = function (funcName) {
    return "sinon." + funcName + " is deprecated and will be removed from the public API in a future version of sinon.";
};

exports.printWarning = function (msg) {
    // Watch out for IE7 and below! :(
    if (typeof console !== "undefined") {
        if (console.info) {
            console.info(msg);
        } else {
            console.log(msg);
        }
    }
};
