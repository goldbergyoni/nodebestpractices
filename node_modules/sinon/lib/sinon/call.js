"use strict";

var sinonMatch = require("./match");
var deepEqual = require("./util/core/deep-equal").use(sinonMatch);
var functionName = require("./util/core/function-name");
var sinonFormat = require("./util/core/format");
var valueToString = require("./util/core/value-to-string");
var slice = Array.prototype.slice;
var filter = Array.prototype.filter;

function throwYieldError(proxy, text, args) {
    var msg = functionName(proxy) + text;
    if (args.length) {
        msg += " Received [" + slice.call(args).join(", ") + "]";
    }
    throw new Error(msg);
}

var callProto = {
    calledOn: function calledOn(thisValue) {
        if (sinonMatch && sinonMatch.isMatcher(thisValue)) {
            return thisValue.test(this.thisValue);
        }
        return this.thisValue === thisValue;
    },

    calledWith: function calledWith() {
        var self = this;
        var calledWithArgs = slice.call(arguments);

        if (calledWithArgs.length > self.args.length) {
            return false;
        }

        return calledWithArgs.reduce(function (prev, arg, i) {
            return prev && deepEqual(arg, self.args[i]);
        }, true);
    },

    calledWithMatch: function calledWithMatch() {
        var self = this;
        var calledWithMatchArgs = slice.call(arguments);

        if (calledWithMatchArgs.length > self.args.length) {
            return false;
        }

        return calledWithMatchArgs.reduce(function (prev, expectation, i) {
            var actual = self.args[i];

            return prev && (sinonMatch && sinonMatch(expectation).test(actual));
        }, true);
    },

    calledWithExactly: function calledWithExactly() {
        return arguments.length === this.args.length &&
            this.calledWith.apply(this, arguments);
    },

    notCalledWith: function notCalledWith() {
        return !this.calledWith.apply(this, arguments);
    },

    notCalledWithMatch: function notCalledWithMatch() {
        return !this.calledWithMatch.apply(this, arguments);
    },

    returned: function returned(value) {
        return deepEqual(value, this.returnValue);
    },

    threw: function threw(error) {
        if (typeof error === "undefined" || !this.exception) {
            return !!this.exception;
        }

        return this.exception === error || this.exception.name === error;
    },

    calledWithNew: function calledWithNew() {
        return this.proxy.prototype && this.thisValue instanceof this.proxy;
    },

    calledBefore: function (other) {
        return this.callId < other.callId;
    },

    calledAfter: function (other) {
        return this.callId > other.callId;
    },

    calledImmediatelyBefore: function (other) {
        return this.callId === other.callId - 1;
    },

    calledImmediatelyAfter: function (other) {
        return this.callId === other.callId + 1;
    },

    callArg: function (pos) {
        this.args[pos]();
    },

    callArgOn: function (pos, thisValue) {
        this.args[pos].apply(thisValue);
    },

    callArgWith: function (pos) {
        this.callArgOnWith.apply(this, [pos, null].concat(slice.call(arguments, 1)));
    },

    callArgOnWith: function (pos, thisValue) {
        var args = slice.call(arguments, 2);
        this.args[pos].apply(thisValue, args);
    },

    throwArg: function (pos) {
        if (pos > this.args.length) {
            throw new TypeError(
                "Not enough arguments: " + pos
                + " required but only " + this.args.length
                + " present"
            );
        }

        throw this.args[pos];
    },

    "yield": function () {
        this.yieldOn.apply(this, [null].concat(slice.call(arguments, 0)));
    },

    yieldOn: function (thisValue) {
        var args = slice.call(this.args);
        var yieldFn = filter.call(args, function (arg) {
            return typeof arg === "function";
        })[0];

        if (!yieldFn) {
            throwYieldError(this.proxy, " cannot yield since no callback was passed.", args);
        }

        yieldFn.apply(thisValue, slice.call(arguments, 1));
    },

    yieldTo: function (prop) {
        this.yieldToOn.apply(this, [prop, null].concat(slice.call(arguments, 1)));
    },

    yieldToOn: function (prop, thisValue) {
        var args = slice.call(this.args);
        var yieldArg = filter.call(args, function (arg) {
            return arg && typeof arg[prop] === "function";
        })[0];
        var yieldFn = yieldArg && yieldArg[prop];

        if (!yieldFn) {
            throwYieldError(this.proxy, " cannot yield to '" + valueToString(prop) +
                "' since no callback was passed.", args);
        }

        yieldFn.apply(thisValue, slice.call(arguments, 2));
    },

    toString: function () {
        var callStr = this.proxy ? this.proxy.toString() + "(" : "";
        var formattedArgs;

        if (!this.args) {
            return ":(";
        }

        formattedArgs = slice.call(this.args).map(function (arg) {
            return sinonFormat(arg);
        });

        callStr = callStr + formattedArgs.join(", ") + ")";

        if (typeof this.returnValue !== "undefined") {
            callStr += " => " + sinonFormat(this.returnValue);
        }

        if (this.exception) {
            callStr += " !" + this.exception.name;

            if (this.exception.message) {
                callStr += "(" + this.exception.message + ")";
            }
        }
        if (this.stack) {
            // Omit the error message and the two top stack frames in sinon itself:
            callStr += ( this.stack.split("\n")[3] || "unknown" ).replace(/^\s*(?:at\s+|@)?/, " at ");
        }

        return callStr;
    }
};
Object.defineProperty(callProto, "stack", {
    enumerable: true,
    configurable: true,
    get: function () {
        return this.errorWithCallStack && this.errorWithCallStack.stack || "";
    }
});

callProto.invokeCallback = callProto.yield;

function createSpyCall(spy, thisValue, args, returnValue, exception, id, errorWithCallStack) {
    if (typeof id !== "number") {
        throw new TypeError("Call id is not a number");
    }
    var proxyCall = Object.create(callProto);
    proxyCall.proxy = spy;
    proxyCall.thisValue = thisValue;
    proxyCall.args = args;
    proxyCall.returnValue = returnValue;
    proxyCall.exception = exception;
    proxyCall.callId = id;
    proxyCall.errorWithCallStack = errorWithCallStack;

    return proxyCall;
}
createSpyCall.toString = callProto.toString; // used by mocks

module.exports = createSpyCall;
