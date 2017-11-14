"use strict";

var getPropertyDescriptor = require("./util/core/get-property-descriptor");
var walk = require("./util/core/walk");

function stubEntireObject(stub, object) {
    walk(object || {}, function (prop, propOwner) {
        // we don't want to stub things like toString(), valueOf(), etc. so we only stub if the object
        // is not Object.prototype
        if (
            propOwner !== Object.prototype &&
            prop !== "constructor" &&
            typeof getPropertyDescriptor(propOwner, prop).value === "function"
        ) {
            stub(object, prop);
        }
    });

    return object;
}

module.exports = stubEntireObject;
