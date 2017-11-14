"use strict";

var getPropertyDescriptor = require("./get-property-descriptor");
var valueToString = require("./value-to-string");

var hasOwn = Object.prototype.hasOwnProperty;

function isFunction(obj) {
    return typeof obj === "function" || !!(obj && obj.constructor && obj.call && obj.apply);
}

function mirrorProperties(target, source) {
    for (var prop in source) {
        if (!hasOwn.call(target, prop)) {
            target[prop] = source[prop];
        }
    }
}

// Cheap way to detect if we have ES5 support.
var hasES5Support = "keys" in Object;

module.exports = function wrapMethod(object, property, method) {
    if (!object) {
        throw new TypeError("Should wrap property of object");
    }

    if (typeof method !== "function" && typeof method !== "object") {
        throw new TypeError("Method wrapper should be a function or a property descriptor");
    }

    function checkWrappedMethod(wrappedMethod) {
        var error;

        if (!isFunction(wrappedMethod)) {
            error = new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " +
                                valueToString(property) + " as function");
        } else if (wrappedMethod.restore && wrappedMethod.restore.sinon) {
            error = new TypeError("Attempted to wrap " + valueToString(property) + " which is already wrapped");
        } else if (wrappedMethod.calledBefore) {
            var verb = wrappedMethod.returns ? "stubbed" : "spied on";
            error = new TypeError("Attempted to wrap " + valueToString(property) + " which is already " + verb);
        }

        if (error) {
            if (wrappedMethod && wrappedMethod.stackTrace) {
                error.stack += "\n--------------\n" + wrappedMethod.stackTrace;
            }
            throw error;
        }
    }

    var error, wrappedMethod, i;

    function simplePropertyAssignment() {
        wrappedMethod = object[property];
        checkWrappedMethod(wrappedMethod);
        object[property] = method;
        method.displayName = property;
    }

    // Firefox has a problem when using hasOwn.call on objects from other frames.
    var owned = object.hasOwnProperty ? object.hasOwnProperty(property) : hasOwn.call(object, property);

    if (hasES5Support) {
        var methodDesc = (typeof method === "function") ? {value: method} : method;
        var wrappedMethodDesc = getPropertyDescriptor(object, property);

        if (!wrappedMethodDesc) {
            error = new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " +
                                property + " as function");
        } else if (wrappedMethodDesc.restore && wrappedMethodDesc.restore.sinon) {
            error = new TypeError("Attempted to wrap " + property + " which is already wrapped");
        }
        if (error) {
            if (wrappedMethodDesc && wrappedMethodDesc.stackTrace) {
                error.stack += "\n--------------\n" + wrappedMethodDesc.stackTrace;
            }
            throw error;
        }

        var types = Object.keys(methodDesc);
        for (i = 0; i < types.length; i++) {
            wrappedMethod = wrappedMethodDesc[types[i]];
            checkWrappedMethod(wrappedMethod);
        }

        mirrorProperties(methodDesc, wrappedMethodDesc);
        for (i = 0; i < types.length; i++) {
            mirrorProperties(methodDesc[types[i]], wrappedMethodDesc[types[i]]);
        }
        Object.defineProperty(object, property, methodDesc);

        // catch failing assignment
        // this is the converse of the check in `.restore` below
        if ( typeof method === "function" && object[property] !== method ) {
            // correct any wrongdoings caused by the defineProperty call above,
            // such as adding new items (if object was a Storage object)
            delete object[property];
            simplePropertyAssignment();
        }
    } else {
        simplePropertyAssignment();
    }

    method.displayName = property;

    // Set up a stack trace which can be used later to find what line of
    // code the original method was created on.
    method.stackTrace = (new Error("Stack Trace for original")).stack;

    method.restore = function () {
        // For prototype properties try to reset by delete first.
        // If this fails (ex: localStorage on mobile safari) then force a reset
        // via direct assignment.
        if (!owned) {
            // In some cases `delete` may throw an error
            try {
                delete object[property];
            } catch (e) {} // eslint-disable-line no-empty
            // For native code functions `delete` fails without throwing an error
            // on Chrome < 43, PhantomJS, etc.
        } else if (hasES5Support) {
            Object.defineProperty(object, property, wrappedMethodDesc);
        }

        if (hasES5Support) {
            var descriptor = getPropertyDescriptor(object, property);
            if (descriptor && descriptor.value === method) {
                object[property] = wrappedMethod;
            }
        }
        else {
        // Use strict equality comparison to check failures then force a reset
        // via direct assignment.
            if (object[property] === method) {
                object[property] = wrappedMethod;
            }
        }
    };

    method.wrappedMethod = wrappedMethod;

    method.restore.sinon = true;

    if (!hasES5Support) {
        mirrorProperties(method, wrappedMethod);
    }

    return method;
};
