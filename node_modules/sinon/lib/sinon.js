"use strict";

exports.assert = require("./sinon/assert");
exports.collection = require("./sinon/collection");
exports.match = require("./sinon/match");
exports.spy = require("./sinon/spy");
exports.spyCall = require("./sinon/call");
exports.stub = require("./sinon/stub");
exports.mock = require("./sinon/mock");

var sandbox = require("./sinon/sandbox");
exports.sandbox = sandbox;
exports.expectation = require("./sinon/mock-expectation");
exports.createStubInstance = require("./sinon/stub").createStubInstance;

exports.defaultConfig = require("./sinon/util/core/default-config");

var fakeTimers = require("./sinon/util/fake_timers");
exports.useFakeTimers = fakeTimers.useFakeTimers;
exports.clock = fakeTimers.clock;
exports.timers = fakeTimers.timers;

var nise = require("nise");
exports.xhr = nise.fakeXhr.xhr;
exports.FakeXMLHttpRequest = nise.fakeXhr.FakeXMLHttpRequest;
exports.useFakeXMLHttpRequest = nise.fakeXhr.useFakeXMLHttpRequest;

exports.fakeServer = nise.fakeServer;
exports.fakeServerWithClock = nise.fakeServerWithClock;

exports.createSandbox = sandbox.create;
exports.createFakeServer = nise.fakeServer.create.bind(nise.fakeServer);
exports.createFakeServerWithClock = nise.fakeServerWithClock.create.bind(nise.fakeServerWithClock);

var behavior = require("./sinon/behavior");

exports.addBehavior = function (name, fn) {
    behavior.addBehavior(exports.stub, name, fn);
};

var format = require("./sinon/util/core/format");
exports.setFormatter = format.setFormatter;
