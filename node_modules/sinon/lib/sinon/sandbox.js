"use strict";

var extend = require("./util/core/extend");
var sinonCollection = require("./collection");
var sinonMatch = require("./match");
var sinonAssert = require("./assert");
var sinonClock = require("./util/fake_timers");
var fakeServer = require("nise").fakeServer;
var fakeXhr = require("nise").fakeXhr;
var fakeServerWithClock = require("nise").fakeServerWithClock;

var push = [].push;

var sinonSandbox = Object.create(sinonCollection);

function exposeValue(sandbox, config, key, value) {
    if (!value) {
        return;
    }

    if (config.injectInto && !(key in config.injectInto)) {
        config.injectInto[key] = value;
        sandbox.injectedKeys.push(key);
    } else {
        push.call(sandbox.args, value);
    }
}

function prepareSandboxFromConfig(config) {
    var sandbox = Object.create(sinonSandbox);

    if (config.useFakeServer) {
        if (typeof config.useFakeServer === "object") {
            sandbox.serverPrototype = config.useFakeServer;
        }

        sandbox.useFakeServer();
    }

    if (config.useFakeTimers) {
        if (typeof config.useFakeTimers === "object") {
            sandbox.useFakeTimers.call(sandbox, config.useFakeTimers);
        } else {
            sandbox.useFakeTimers();
        }
    }

    return sandbox;
}

extend(sinonSandbox, {
    useFakeTimers: function (args) {
        this.clock = sinonClock.useFakeTimers.call(null, args);

        return this.add(this.clock);
    },

    serverPrototype: fakeServerWithClock,

    useFakeServer: function useFakeServer() {
        var proto = this.serverPrototype || fakeServer;

        if (!proto || !proto.create) {
            return null;
        }

        this.server = proto.create();
        return this.add(this.server);
    },

    useFakeXMLHttpRequest: function useFakeXMLHttpRequest() {
        var xhr = fakeXhr.useFakeXMLHttpRequest();
        return this.add(xhr);
    },

    inject: function (obj) {
        sinonCollection.inject.call(this, obj);

        if (this.clock) {
            obj.clock = this.clock;
        }

        if (this.server) {
            obj.server = this.server;
            obj.requests = this.server.requests;
        }

        obj.match = sinonMatch;

        return obj;
    },

    usingPromise: function (promiseLibrary) {

        this.promiseLibrary = promiseLibrary;

        return this;
    },

    restore: function () {
        if (arguments.length) {
            throw new Error("sandbox.restore() does not take any parameters. Perhaps you meant stub.restore()");
        }

        sinonCollection.restore.apply(this, arguments);
        this.restoreContext();
    },

    restoreContext: function () {
        var injectedKeys = this.injectedKeys;
        var injectInto = this.injectInto;

        if (!injectedKeys) {
            return;
        }

        injectedKeys.forEach(function (injectedKey) {
            delete injectInto[injectedKey];
        });

        injectedKeys = [];
    },

    create: function (config) {
        if (!config) {
            return Object.create(sinonSandbox);
        }

        var sandbox = prepareSandboxFromConfig(config);
        sandbox.args = sandbox.args || [];
        sandbox.injectedKeys = [];
        sandbox.injectInto = config.injectInto;
        var exposed = sandbox.inject({});

        if (config.properties) {
            config.properties.forEach(function (prop) {
                var value = exposed[prop] || prop === "sandbox" && sandbox;
                exposeValue(sandbox, config, prop, value);
            });
        } else {
            exposeValue(sandbox, config, "sandbox");
        }

        return sandbox;
    },

    match: sinonMatch,

    assert: sinonAssert
});

module.exports = sinonSandbox;
