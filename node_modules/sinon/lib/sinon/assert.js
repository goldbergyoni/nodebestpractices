"use strict";

var calledInOrder = require("./util/core/called-in-order");
var orderByFirstCall = require("./util/core/order-by-first-call");
var timesInWords = require("./util/core/times-in-words");
var format = require("./util/core/format");
var sinonMatch = require("./match");

var slice = Array.prototype.slice;

var assert;

function verifyIsStub() {
    var args = Array.prototype.slice.call(arguments);

    args.forEach(function (method) {
        if (!method) {
            assert.fail("fake is not a spy");
        }

        if (method.proxy && method.proxy.isSinonProxy) {
            verifyIsStub(method.proxy);
        } else {
            if (typeof method !== "function") {
                assert.fail(method + " is not a function");
            }

            if (typeof method.getCall !== "function") {
                assert.fail(method + " is not stubbed");
            }
        }
    });
}

function verifyIsValidAssertion(assertionMethod, assertionArgs) {
    switch (assertionMethod) {
        case "notCalled":
        case "called":
        case "calledOnce":
        case "calledTwice":
        case "calledThrice":
            if (assertionArgs.length !== 0) {
                assert.fail(assertionMethod +
                            " takes 1 argument but was called with " + (assertionArgs.length + 1) + " arguments");
            }
            break;
        default:
            break;
    }
}

function failAssertion(object, msg) {
    object = object || global;
    var failMethod = object.fail || assert.fail;
    failMethod.call(object, msg);
}

function mirrorPropAsAssertion(name, method, message) {
    if (arguments.length === 2) {
        message = method;
        method = name;
    }

    assert[name] = function (fake) {
        verifyIsStub(fake);

        var args = slice.call(arguments, 1);
        var failed = false;

        verifyIsValidAssertion(name, args);

        if (typeof method === "function") {
            failed = !method(fake);
        } else {
            failed = typeof fake[method] === "function" ?
                !fake[method].apply(fake, args) : !fake[method];
        }

        if (failed) {
            failAssertion(this, (fake.printf || fake.proxy.printf).apply(fake, [message].concat(args)));
        } else {
            assert.pass(name);
        }
    };
}

function exposedName(prefix, prop) {
    return !prefix || /^fail/.test(prop) ? prop :
        prefix + prop.slice(0, 1).toUpperCase() + prop.slice(1);
}

assert = {
    failException: "AssertError",

    fail: function fail(message) {
        var error = new Error(message);
        error.name = this.failException || assert.failException;

        throw error;
    },

    pass: function pass() {},

    callOrder: function assertCallOrder() {
        verifyIsStub.apply(null, arguments);
        var expected = "";
        var actual = "";

        if (!calledInOrder(arguments)) {
            try {
                expected = [].join.call(arguments, ", ");
                var calls = slice.call(arguments);
                var i = calls.length;
                while (i) {
                    if (!calls[--i].called) {
                        calls.splice(i, 1);
                    }
                }
                actual = orderByFirstCall(calls).join(", ");
            } catch (e) {
                // If this fails, we'll just fall back to the blank string
            }

            failAssertion(this, "expected " + expected + " to be " +
                        "called in order but were called as " + actual);
        } else {
            assert.pass("callOrder");
        }
    },

    callCount: function assertCallCount(method, count) {
        verifyIsStub(method);

        if (method.callCount !== count) {
            var msg = "expected %n to be called " + timesInWords(count) +
                " but was called %c%C";
            failAssertion(this, method.printf(msg));
        } else {
            assert.pass("callCount");
        }
    },

    expose: function expose(target, options) {
        if (!target) {
            throw new TypeError("target is null or undefined");
        }

        var o = options || {};
        var prefix = typeof o.prefix === "undefined" && "assert" || o.prefix;
        var includeFail = typeof o.includeFail === "undefined" || !!o.includeFail;
        var instance = this;

        Object.keys(instance).forEach(function (method) {
            if (method !== "expose" && (includeFail || !/^(fail)/.test(method))) {
                target[exposedName(prefix, method)] = instance[method];
            }
        });

        return target;
    },

    match: function match(actual, expectation) {
        var matcher = sinonMatch(expectation);
        if (matcher.test(actual)) {
            assert.pass("match");
        } else {
            var formatted = [
                "expected value to match",
                "    expected = " + format(expectation),
                "    actual = " + format(actual)
            ];

            failAssertion(this, formatted.join("\n"));
        }
    }
};

mirrorPropAsAssertion("called", "expected %n to have been called at least once but was never called");
mirrorPropAsAssertion("notCalled", function (spy) {
    return !spy.called;
}, "expected %n to not have been called but was called %c%C");
mirrorPropAsAssertion("calledOnce", "expected %n to be called once but was called %c%C");
mirrorPropAsAssertion("calledTwice", "expected %n to be called twice but was called %c%C");
mirrorPropAsAssertion("calledThrice", "expected %n to be called thrice but was called %c%C");
mirrorPropAsAssertion("calledOn", "expected %n to be called with %1 as this but was called with %t");
mirrorPropAsAssertion(
    "alwaysCalledOn",
    "expected %n to always be called with %1 as this but was called with %t"
);
mirrorPropAsAssertion("calledWithNew", "expected %n to be called with new");
mirrorPropAsAssertion("alwaysCalledWithNew", "expected %n to always be called with new");
mirrorPropAsAssertion("calledWith", "expected %n to be called with arguments %D");
mirrorPropAsAssertion("calledWithMatch", "expected %n to be called with match %D");
mirrorPropAsAssertion("alwaysCalledWith", "expected %n to always be called with arguments %D");
mirrorPropAsAssertion("alwaysCalledWithMatch", "expected %n to always be called with match %D");
mirrorPropAsAssertion("calledWithExactly", "expected %n to be called with exact arguments %D");
mirrorPropAsAssertion("alwaysCalledWithExactly", "expected %n to always be called with exact arguments %D");
mirrorPropAsAssertion("neverCalledWith", "expected %n to never be called with arguments %*%C");
mirrorPropAsAssertion("neverCalledWithMatch", "expected %n to never be called with match %*%C");
mirrorPropAsAssertion("threw", "%n did not throw exception%C");
mirrorPropAsAssertion("alwaysThrew", "%n did not always throw exception%C");

module.exports = assert;
