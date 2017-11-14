"use strict";

var sinonSpy = require("./spy");
var sinonStub = require("./stub");
var sinonMock = require("./mock");
var collectOwnMethods = require("./collect-own-methods");
var valueToString = require("./util/core/value-to-string");

var push = Array.prototype.push;
var filter = Array.prototype.filter;

function getFakes(fakeCollection) {
    if (!fakeCollection.fakes) {
        fakeCollection.fakes = [];
    }

    return fakeCollection.fakes;
}

function each(fakeCollection, method) {
    var fakes = getFakes(fakeCollection);
    var matchingFakes = filter.call(fakes, function (fake) {
        return typeof fake[method] === "function";
    });

    matchingFakes.forEach(function (fake) {
        fake[method]();
    });
}

var collection = {
    verify: function verify() {
        each(this, "verify");
    },

    restore: function restore() {
        each(this, "restore");
        this.fakes = [];
    },

    reset: function reset() {
        each(this, "reset");
    },

    resetBehavior: function resetBehavior() {
        each(this, "resetBehavior");
    },

    resetHistory: function resetHistory() {
        getFakes(this).forEach(function (fake) {
            var method = fake.resetHistory || fake.reset;

            if (method) {
                method.call(fake);
            }
        });
    },

    verifyAndRestore: function verifyAndRestore() {
        var exception;

        try {
            this.verify();
        } catch (e) {
            exception = e;
        }

        this.restore();

        if (exception) {
            throw exception;
        }
    },

    add: function add(fake) {
        push.call(getFakes(this), fake);
        return fake;
    },

    addUsingPromise: function (fake) {
        fake.usingPromise(this.promiseLibrary);
        return fake;
    },

    spy: function spy() {
        return this.add(sinonSpy.apply(sinonSpy, arguments));
    },

    createStubInstance: function createStubInstance(constructor) {
        if (typeof constructor !== "function") {
            throw new TypeError("The constructor should be a function.");
        }
        return this.stub.call(this, Object.create(constructor.prototype));
    },

    stub: function stub(object, property) {
        if (object && typeof property !== "undefined"
            && !(property in object)) {
            throw new TypeError("Cannot stub non-existent own property " + valueToString(property));
        }

        var stubbed = sinonStub.apply(null, arguments);
        var isStubbingEntireObject = typeof property === "undefined" && typeof object === "object";

        if (isStubbingEntireObject) {
            var ownMethods = collectOwnMethods(stubbed);
            ownMethods.forEach(this.add.bind(this));
            if (this.promiseLibrary) {
                ownMethods.forEach(this.addUsingPromise.bind(this));
            }
        } else {
            this.add(stubbed);
            if (this.promiseLibrary) {
                stubbed.usingPromise(this.promiseLibrary);
            }
        }

        return stubbed;
    },

    mock: function mock() {
        return this.add(sinonMock.apply(null, arguments));
    },

    inject: function inject(obj) {
        var col = this;

        obj.spy = function () {
            return col.spy.apply(col, arguments);
        };

        obj.stub = function () {
            return col.stub.apply(col, arguments);
        };

        obj.mock = function () {
            return col.mock.apply(col, arguments);
        };

        return obj;
    }
};

module.exports = collection;
