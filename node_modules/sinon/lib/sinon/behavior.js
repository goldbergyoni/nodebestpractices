"use strict";

var extend = require("./util/core/extend");
var functionName = require("./util/core/function-name");
var valueToString = require("./util/core/value-to-string");

var slice = Array.prototype.slice;
var join = Array.prototype.join;
var useLeftMostCallback = -1;
var useRightMostCallback = -2;

var nextTick = (function () {
    if (typeof process === "object" && typeof process.nextTick === "function") {
        return process.nextTick;
    }

    if (typeof setImmediate === "function") {
        return setImmediate;
    }

    return function (callback) {
        setTimeout(callback, 0);
    };
})();

function getCallback(behavior, args) {
    var callArgAt = behavior.callArgAt;

    if (callArgAt >= 0) {
        return args[callArgAt];
    }

    var argumentList;

    if (callArgAt === useLeftMostCallback) {
        argumentList = args;
    }

    if (callArgAt === useRightMostCallback) {
        argumentList = slice.call(args).reverse();
    }

    var callArgProp = behavior.callArgProp;

    for (var i = 0, l = argumentList.length; i < l; ++i) {
        if (!callArgProp && typeof argumentList[i] === "function") {
            return argumentList[i];
        }

        if (callArgProp && argumentList[i] &&
            typeof argumentList[i][callArgProp] === "function") {
            return argumentList[i][callArgProp];
        }
    }

    return null;
}

function getCallbackError(behavior, func, args) {
    if (behavior.callArgAt < 0) {
        var msg;

        if (behavior.callArgProp) {
            msg = functionName(behavior.stub) +
                " expected to yield to '" + valueToString(behavior.callArgProp) +
                "', but no object with such a property was passed.";
        } else {
            msg = functionName(behavior.stub) +
                " expected to yield, but no callback was passed.";
        }

        if (args.length > 0) {
            msg += " Received [" + join.call(args, ", ") + "]";
        }

        return msg;
    }

    return "argument at index " + behavior.callArgAt + " is not a function: " + func;
}

function callCallback(behavior, args) {
    if (typeof behavior.callArgAt === "number") {
        var func = getCallback(behavior, args);

        if (typeof func !== "function") {
            throw new TypeError(getCallbackError(behavior, func, args));
        }

        if (behavior.callbackAsync) {
            nextTick(function () {
                func.apply(behavior.callbackContext, behavior.callbackArguments);
            });
        } else {
            func.apply(behavior.callbackContext, behavior.callbackArguments);
        }
    }
}

var proto = {
    create: function create(stub) {
        var behavior = extend({}, proto);
        delete behavior.create;
        delete behavior.addBehavior;
        delete behavior.createBehavior;
        behavior.stub = stub;

        if (stub.defaultBehavior && stub.defaultBehavior.promiseLibrary) {
            behavior.promiseLibrary = stub.defaultBehavior.promiseLibrary;
        }

        return behavior;
    },

    isPresent: function isPresent() {
        return (typeof this.callArgAt === "number" ||
                this.exception ||
                this.exceptionCreator ||
                typeof this.returnArgAt === "number" ||
                this.returnThis ||
                this.resolveThis ||
                typeof this.throwArgAt === "number" ||
                this.fakeFn ||
                this.returnValueDefined);
    },

    invoke: function invoke(context, args) {
        callCallback(this, args);

        if (this.exception) {
            throw this.exception;
        } else if (this.exceptionCreator) {
            this.exception = this.exceptionCreator();
            this.exceptionCreator = undefined;
            throw this.exception;
        } else if (typeof this.returnArgAt === "number") {
            return args[this.returnArgAt];
        } else if (this.returnThis) {
            return context;
        } else if (typeof this.throwArgAt === "number") {
            if (args.length < this.throwArgAt) {
                throw new TypeError(
                    "throwArgs failed: " + this.throwArgAt
                    + " arguments required but only " + args.length
                    + " present"
                );
            }
            throw args[this.throwArgAt];
        } else if (this.fakeFn) {
            return this.fakeFn.apply(context, args);
        } else if (this.resolveThis) {
            return (this.promiseLibrary || Promise).resolve(context);
        } else if (this.resolve) {
            return (this.promiseLibrary || Promise).resolve(this.returnValue);
        } else if (this.reject) {
            return (this.promiseLibrary || Promise).reject(this.returnValue);
        } else if (this.callsThrough) {
            return this.stub.wrappedMethod.apply(context, args);
        }
        return this.returnValue;
    },

    onCall: function onCall(index) {
        return this.stub.onCall(index);
    },

    onFirstCall: function onFirstCall() {
        return this.stub.onFirstCall();
    },

    onSecondCall: function onSecondCall() {
        return this.stub.onSecondCall();
    },

    onThirdCall: function onThirdCall() {
        return this.stub.onThirdCall();
    },

    withArgs: function withArgs(/* arguments */) {
        throw new Error(
            "Defining a stub by invoking \"stub.onCall(...).withArgs(...)\" " +
            "is not supported. Use \"stub.withArgs(...).onCall(...)\" " +
            "to define sequential behavior for calls with certain arguments."
        );
    }
};

function createAsyncVersion(syncFnName) {
    return function () {
        var result = this[syncFnName].apply(this, arguments);
        this.callbackAsync = true;
        return result;
    };
}

// create asynchronous versions of callsArg* and yields* methods
Object.keys(proto).forEach(function (method) {
    // need to avoid creating anotherasync versions of the newly added async methods
    if (method.match(/^(callsArg|yields)/) && !method.match(/Async/)) {
        proto[method + "Async"] = createAsyncVersion(method);
    }
});

function createBehavior(behaviorMethod) {
    return function () {
        this.defaultBehavior = this.defaultBehavior || proto.create(this);
        this.defaultBehavior[behaviorMethod].apply(this.defaultBehavior, arguments);
        return this;
    };
}

function addBehavior(stub, name, fn) {
    proto[name] = function () {
        fn.apply(this, [this].concat([].slice.call(arguments)));
        return this.stub || this;
    };

    stub[name] = createBehavior(name);
}

proto.addBehavior = addBehavior;
proto.createBehavior = createBehavior;
module.exports = proto;
