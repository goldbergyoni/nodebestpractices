"use strict";

var llx = require("lolex");

/**
 * @param config {number|Date|Object} the unix epoch value to install with (default 0) or
 */
exports.useFakeTimers = function (args) {
    var config = {};

    if (typeof args === "undefined" || args === null) {
        config.now = 0;
    } else if ((typeof args === "number" || args instanceof Date) && arguments.length === 1) {
        config.now = args;
    } else if (args !== null && typeof args === "object" && arguments.length === 1) {
        var keys = Object.keys(args);
        for (var i = 0; i < keys.length; i++) {
            if (args.hasOwnProperty(keys[i])) {
                config[keys[i]] = args[keys[i]];
            }
        }
    } else {
        throw new TypeError("useFakeTimers expected epoch or config object. See https://github.com/sinonjs/sinon");
    }

    var clock = llx.install(config);
    clock.restore = clock.uninstall;
    return clock;
};

exports.clock = {
    create: function (now) {
        return llx.createClock(now);
    }
};

exports.timers = {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setImmediate: (typeof setImmediate !== "undefined" ? setImmediate : undefined),
    clearImmediate: (typeof clearImmediate !== "undefined" ? clearImmediate : undefined),
    setInterval: setInterval,
    clearInterval: clearInterval,
    Date: Date
};
