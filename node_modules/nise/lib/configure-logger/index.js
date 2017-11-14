"use strict";

// cache a reference to setTimeout, so that our reference won't be stubbed out
// when using fake timers and errors will still get logged
// https://github.com/cjohansen/Sinon.JS/issues/381
var realSetTimeout = setTimeout;

function configureLogger(config) {
    config = config || {};
    // Function which prints errors.
    if (!config.hasOwnProperty("logger")) {
        config.logger = function () { };
    }
    // When set to true, any errors logged will be thrown immediately;
    // If set to false, the errors will be thrown in separate execution frame.
    if (!config.hasOwnProperty("useImmediateExceptions")) {
        config.useImmediateExceptions = true;
    }
    // wrap realSetTimeout with something we can stub in tests
    if (!config.hasOwnProperty("setTimeout")) {
        config.setTimeout = realSetTimeout;
    }

    return function logError(label, e) {
        var msg = label + " threw exception: ";
        var err = { name: e.name || label, message: e.message || e.toString(), stack: e.stack };

        function throwLoggedError() {
            err.message = msg + err.message;
            throw err;
        }

        config.logger(msg + "[" + err.name + "] " + err.message);

        if (err.stack) {
            config.logger(err.stack);
        }

        if (config.useImmediateExceptions) {
            throwLoggedError();
        } else {
            config.setTimeout(throwLoggedError, 0);
        }
    };
}

module.exports = configureLogger;
