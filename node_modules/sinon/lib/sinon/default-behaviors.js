"use strict";

var getPropertyDescriptor = require("./util/core/get-property-descriptor");

var slice = [].slice;
var useLeftMostCallback = -1;
var useRightMostCallback = -2;

function throwsException(fake, error, message) {
    if (typeof error === "function") {
        fake.exceptionCreator = error;
    } else if (typeof error === "string") {
        fake.exceptionCreator = function () {
            var newException = new Error(message || "");
            newException.name = error;
            return newException;
        };
    } else if (!error) {
        fake.exceptionCreator = function () {
            return new Error("Error");
        };
    } else {
        fake.exception = error;
    }
}

function isPropertyConfigurable(obj, propName) {
    var propertyDescriptor = getPropertyDescriptor(obj, propName);

    return propertyDescriptor ? propertyDescriptor.configurable : true;
}

module.exports = {
    callsFake: function callsFake(fake, fn) {
        fake.fakeFn = fn;
    },

    callsArg: function callsArg(fake, pos) {
        if (typeof pos !== "number") {
            throw new TypeError("argument index is not number");
        }

        fake.callArgAt = pos;
        fake.callbackArguments = [];
        fake.callbackContext = undefined;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    callsArgOn: function callsArgOn(fake, pos, context) {
        if (typeof pos !== "number") {
            throw new TypeError("argument index is not number");
        }

        fake.callArgAt = pos;
        fake.callbackArguments = [];
        fake.callbackContext = context;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    callsArgWith: function callsArgWith(fake, pos) {
        if (typeof pos !== "number") {
            throw new TypeError("argument index is not number");
        }

        fake.callArgAt = pos;
        fake.callbackArguments = slice.call(arguments, 2);
        fake.callbackContext = undefined;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    callsArgOnWith: function callsArgWith(fake, pos, context) {
        if (typeof pos !== "number") {
            throw new TypeError("argument index is not number");
        }

        fake.callArgAt = pos;
        fake.callbackArguments = slice.call(arguments, 3);
        fake.callbackContext = context;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    usingPromise: function usingPromise(fake, promiseLibrary) {
        fake.promiseLibrary = promiseLibrary;
    },

    yields: function (fake) {
        fake.callArgAt = useLeftMostCallback;
        fake.callbackArguments = slice.call(arguments, 1);
        fake.callbackContext = undefined;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    yieldsRight: function (fake) {
        fake.callArgAt = useRightMostCallback;
        fake.callbackArguments = slice.call(arguments, 1);
        fake.callbackContext = undefined;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    yieldsOn: function (fake, context) {
        fake.callArgAt = useLeftMostCallback;
        fake.callbackArguments = slice.call(arguments, 2);
        fake.callbackContext = context;
        fake.callArgProp = undefined;
        fake.callbackAsync = false;
    },

    yieldsTo: function (fake, prop) {
        fake.callArgAt = useLeftMostCallback;
        fake.callbackArguments = slice.call(arguments, 2);
        fake.callbackContext = undefined;
        fake.callArgProp = prop;
        fake.callbackAsync = false;
    },

    yieldsToOn: function (fake, prop, context) {
        fake.callArgAt = useLeftMostCallback;
        fake.callbackArguments = slice.call(arguments, 3);
        fake.callbackContext = context;
        fake.callArgProp = prop;
        fake.callbackAsync = false;
    },

    throws: throwsException,
    throwsException: throwsException,

    returns: function returns(fake, value) {
        fake.returnValue = value;
        fake.resolve = false;
        fake.reject = false;
        fake.returnValueDefined = true;
        fake.exception = undefined;
        fake.exceptionCreator = undefined;
        fake.fakeFn = undefined;
    },

    returnsArg: function returnsArg(fake, pos) {
        if (typeof pos !== "number") {
            throw new TypeError("argument index is not number");
        }

        fake.returnArgAt = pos;
    },

    throwsArg: function throwsArg(fake, pos) {
        if (typeof pos !== "number") {
            throw new TypeError("argument index is not number");
        }

        fake.throwArgAt = pos;
    },

    returnsThis: function returnsThis(fake) {
        fake.returnThis = true;
    },

    resolves: function resolves(fake, value) {
        fake.returnValue = value;
        fake.resolve = true;
        fake.resolveThis = false;
        fake.reject = false;
        fake.returnValueDefined = true;
        fake.exception = undefined;
        fake.exceptionCreator = undefined;
        fake.fakeFn = undefined;
    },

    rejects: function rejects(fake, error, message) {
        var reason;
        if (typeof error === "string") {
            reason = new Error(message || "");
            reason.name = error;
        } else if (!error) {
            reason = new Error("Error");
        } else {
            reason = error;
        }
        fake.returnValue = reason;
        fake.resolve = false;
        fake.resolveThis = false;
        fake.reject = true;
        fake.returnValueDefined = true;
        fake.exception = undefined;
        fake.exceptionCreator = undefined;
        fake.fakeFn = undefined;

        return fake;
    },

    resolvesThis: function resolvesThis(fake) {
        fake.returnValue = undefined;
        fake.resolve = false;
        fake.resolveThis = true;
        fake.reject = false;
        fake.returnValueDefined = false;
        fake.exception = undefined;
        fake.exceptionCreator = undefined;
        fake.fakeFn = undefined;
    },

    callThrough: function callThrough(fake) {
        fake.callsThrough = true;
    },

    get: function get(fake, getterFunction) {
        var rootStub = fake.stub || fake;

        Object.defineProperty(rootStub.rootObj, rootStub.propName, {
            get: getterFunction,
            configurable: isPropertyConfigurable(rootStub.rootObj, rootStub.propName)
        });

        return fake;
    },

    set: function set(fake, setterFunction) {
        var rootStub = fake.stub || fake;

        Object.defineProperty(rootStub.rootObj, rootStub.propName, { // eslint-disable-line accessor-pairs
            set: setterFunction,
            configurable: isPropertyConfigurable(rootStub.rootObj, rootStub.propName)
        });

        return fake;
    },

    value: function value(fake, newVal) {
        var rootStub = fake.stub || fake;

        Object.defineProperty(rootStub.rootObj, rootStub.propName, {
            value: newVal,
            enumerable: true,
            configurable: isPropertyConfigurable(rootStub.rootObj, rootStub.propName)
        });

        return fake;
    }
};

function createAsyncVersion(syncFnName) {
    return function () {
        var result = module.exports[syncFnName].apply(this, arguments);
        this.callbackAsync = true;
        return result;
    };
}

// create asynchronous versions of callsArg* and yields* methods
Object.keys(module.exports).forEach(function (method) {
    // need to avoid creating anotherasync versions of the newly added async methods
    if (method.match(/^(callsArg|yields)/) && !method.match(/Async/)) {
        module.exports[method + "Async"] = createAsyncVersion(method);
    }
});
