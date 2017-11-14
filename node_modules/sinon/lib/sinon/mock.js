"use strict";

var mockExpectation = require("./mock-expectation");
var spyCallToString = require("./call").toString;
var extend = require("./util/core/extend");
var match = require("./match");
var deepEqual = require("./util/core/deep-equal").use(match);
var wrapMethod = require("./util/core/wrap-method");

var push = Array.prototype.push;
var filter = Array.prototype.filter;

function mock(object) {
    if (!object || typeof object === "string") {
        return mockExpectation.create(object ? object : "Anonymous mock");
    }

    return mock.create(object);
}

function each(collection, callback) {
    var col = collection || [];

    col.forEach(callback);
}

function arrayEquals(arr1, arr2, compareLength) {
    if (compareLength && (arr1.length !== arr2.length)) {
        return false;
    }

    return arr1.every(function (element, i) {
        return deepEqual(element, arr2[i]);

    });
}

extend(mock, {
    create: function create(object) {
        if (!object) {
            throw new TypeError("object is null");
        }

        var mockObject = extend({}, mock);
        mockObject.object = object;
        delete mockObject.create;

        return mockObject;
    },

    expects: function expects(method) {
        if (!method) {
            throw new TypeError("method is falsy");
        }

        if (!this.expectations) {
            this.expectations = {};
            this.proxies = [];
            this.failures = [];
        }

        if (!this.expectations[method]) {
            this.expectations[method] = [];
            var mockObject = this;

            wrapMethod(this.object, method, function () {
                return mockObject.invokeMethod(method, this, arguments);
            });

            push.call(this.proxies, method);
        }

        var expectation = mockExpectation.create(method);
        extend(expectation, this.object[method]);
        push.call(this.expectations[method], expectation);

        return expectation;
    },

    restore: function restore() {
        var object = this.object;

        each(this.proxies, function (proxy) {
            if (typeof object[proxy].restore === "function") {
                object[proxy].restore();
            }
        });
    },

    verify: function verify() {
        var expectations = this.expectations || {};
        var messages = this.failures ? this.failures.slice() : [];
        var met = [];

        each(this.proxies, function (proxy) {
            each(expectations[proxy], function (expectation) {
                if (!expectation.met()) {
                    push.call(messages, expectation.toString());
                } else {
                    push.call(met, expectation.toString());
                }
            });
        });

        this.restore();

        if (messages.length > 0) {
            mockExpectation.fail(messages.concat(met).join("\n"));
        } else if (met.length > 0) {
            mockExpectation.pass(messages.concat(met).join("\n"));
        }

        return true;
    },

    invokeMethod: function invokeMethod(method, thisValue, args) {
        /* if we cannot find any matching files we will explicitly call mockExpection#fail with error messages */
        /* eslint consistent-return: "off" */
        var expectations = this.expectations && this.expectations[method] ? this.expectations[method] : [];
        var currentArgs = args || [];
        var available;

        var expectationsWithMatchingArgs = filter.call(expectations, function (expectation) {
            var expectedArgs = expectation.expectedArguments || [];

            return arrayEquals(expectedArgs, currentArgs, expectation.expectsExactArgCount);
        });

        var expectationsToApply = filter.call(expectationsWithMatchingArgs, function (expectation) {
            return !expectation.met() && expectation.allowsCall(thisValue, args);
        });

        if (expectationsToApply.length > 0) {
            return expectationsToApply[0].apply(thisValue, args);
        }

        var messages = [];
        var exhausted = 0;

        expectationsWithMatchingArgs.forEach(function (expectation) {
            if (expectation.allowsCall(thisValue, args)) {
                available = available || expectation;
            } else {
                exhausted += 1;
            }
        });

        if (available && exhausted === 0) {
            return available.apply(thisValue, args);
        }

        expectations.forEach(function (expectation) {
            push.call(messages, "    " + expectation.toString());
        });

        messages.unshift("Unexpected call: " + spyCallToString.call({
            proxy: method,
            args: args
        }));

        var err = new Error();
        if (!err.stack) {
            // PhantomJS does not serialize the stack trace until the error has been thrown
            try {
                throw err;
            } catch (e) {/* empty */}
        }
        this.failures.push("Unexpected call: " + spyCallToString.call({
            proxy: method,
            args: args,
            stack: err.stack
        }));

        mockExpectation.fail(messages.join("\n"));
    }
});

module.exports = mock;
