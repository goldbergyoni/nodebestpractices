(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.lolex = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var userAgent = global.navigator && global.navigator.userAgent;
var isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;

// Make properties writable in IE, as per
// http://www.adequatelygood.com/Replacing-setTimeout-Globally.html
if (isRunningInIE) {
    global.setTimeout = global.setTimeout;
    global.clearTimeout = global.clearTimeout;
    global.setInterval = global.setInterval;
    global.clearInterval = global.clearInterval;
    global.Date = global.Date;
}

// setImmediate is not a standard function
// avoid adding the prop to the window object if not present
if (global.setImmediate !== undefined) {
    global.setImmediate = global.setImmediate;
    global.clearImmediate = global.clearImmediate;
}

// node expects setTimeout/setInterval to return a fn object w/ .ref()/.unref()
// browsers, a number.
// see https://github.com/cjohansen/Sinon.JS/pull/436

var NOOP = function () { return undefined; };
var timeoutResult = setTimeout(NOOP, 0);
var addTimerReturnsObject = typeof timeoutResult === "object";
var hrtimePresent = (global.process && typeof global.process.hrtime === "function");
clearTimeout(timeoutResult);

var NativeDate = Date;
var uniqueTimerId = 1;

/**
 * Parse strings like "01:10:00" (meaning 1 hour, 10 minutes, 0 seconds) into
 * number of milliseconds. This is used to support human-readable strings passed
 * to clock.tick()
 */
function parseTime(str) {
    if (!str) {
        return 0;
    }

    var strings = str.split(":");
    var l = strings.length;
    var i = l;
    var ms = 0;
    var parsed;

    if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
        throw new Error("tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits");
    }

    while (i--) {
        parsed = parseInt(strings[i], 10);

        if (parsed >= 60) {
            throw new Error("Invalid time " + str);
        }

        ms += parsed * Math.pow(60, (l - i - 1));
    }

    return ms * 1000;
}

/**
 * Floor function that also works for negative numbers
 */
function fixedFloor(n) {
    return (n >= 0 ? Math.floor(n) : Math.ceil(n));
}

/**
 * % operator that also works for negative numbers
 */
function fixedModulo(n, m) {
    return ((n % m) + m) % m;
}

/**
 * Used to grok the `now` parameter to createClock.
 */
function getEpoch(epoch) {
    if (!epoch) { return 0; }
    if (typeof epoch.getTime === "function") { return epoch.getTime(); }
    if (typeof epoch === "number") { return epoch; }
    throw new TypeError("now should be milliseconds since UNIX epoch");
}

function inRange(from, to, timer) {
    return timer && timer.callAt >= from && timer.callAt <= to;
}

function mirrorDateProperties(target, source) {
    var prop;
    for (prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }

    // set special now implementation
    if (source.now) {
        target.now = function now() {
            return target.clock.now;
        };
    } else {
        delete target.now;
    }

    // set special toSource implementation
    if (source.toSource) {
        target.toSource = function toSource() {
            return source.toSource();
        };
    } else {
        delete target.toSource;
    }

    // set special toString implementation
    target.toString = function toString() {
        return source.toString();
    };

    target.prototype = source.prototype;
    target.parse = source.parse;
    target.UTC = source.UTC;
    target.prototype.toUTCString = source.prototype.toUTCString;

    return target;
}

function createDate() {
    function ClockDate(year, month, date, hour, minute, second, ms) {
        // Defensive and verbose to avoid potential harm in passing
        // explicit undefined when user does not pass argument
        switch (arguments.length) {
            case 0:
                return new NativeDate(ClockDate.clock.now);
            case 1:
                return new NativeDate(year);
            case 2:
                return new NativeDate(year, month);
            case 3:
                return new NativeDate(year, month, date);
            case 4:
                return new NativeDate(year, month, date, hour);
            case 5:
                return new NativeDate(year, month, date, hour, minute);
            case 6:
                return new NativeDate(year, month, date, hour, minute, second);
            default:
                return new NativeDate(year, month, date, hour, minute, second, ms);
        }
    }

    return mirrorDateProperties(ClockDate, NativeDate);
}

function addTimer(clock, timer) {
    if (timer.func === undefined) {
        throw new Error("Callback must be provided to timer calls");
    }

    if (!clock.timers) {
        clock.timers = {};
    }

    timer.id = uniqueTimerId++;
    timer.createdAt = clock.now;
    timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));

    clock.timers[timer.id] = timer;

    if (addTimerReturnsObject) {
        return {
            id: timer.id,
            ref: NOOP,
            unref: NOOP
        };
    }

    return timer.id;
}


/* eslint consistent-return: "off" */
function compareTimers(a, b) {
    // Sort first by absolute timing
    if (a.callAt < b.callAt) {
        return -1;
    }
    if (a.callAt > b.callAt) {
        return 1;
    }

    // Sort next by immediate, immediate timers take precedence
    if (a.immediate && !b.immediate) {
        return -1;
    }
    if (!a.immediate && b.immediate) {
        return 1;
    }

    // Sort next by creation time, earlier-created timers take precedence
    if (a.createdAt < b.createdAt) {
        return -1;
    }
    if (a.createdAt > b.createdAt) {
        return 1;
    }

    // Sort next by id, lower-id timers take precedence
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }

    // As timer ids are unique, no fallback `0` is necessary
}

function firstTimerInRange(clock, from, to) {
    var timers = clock.timers;
    var timer = null;
    var id, isInRange;

    for (id in timers) {
        if (timers.hasOwnProperty(id)) {
            isInRange = inRange(from, to, timers[id]);

            if (isInRange && (!timer || compareTimers(timer, timers[id]) === 1)) {
                timer = timers[id];
            }
        }
    }

    return timer;
}

function firstTimer(clock) {
    var timers = clock.timers;
    var timer = null;
    var id;

    for (id in timers) {
        if (timers.hasOwnProperty(id)) {
            if (!timer || compareTimers(timer, timers[id]) === 1) {
                timer = timers[id];
            }
        }
    }

    return timer;
}

function lastTimer(clock) {
    var timers = clock.timers;
    var timer = null;
    var id;

    for (id in timers) {
        if (timers.hasOwnProperty(id)) {
            if (!timer || compareTimers(timer, timers[id]) === -1) {
                timer = timers[id];
            }
        }
    }

    return timer;
}

function callTimer(clock, timer) {
    var exception;

    if (typeof timer.interval === "number") {
        clock.timers[timer.id].callAt += timer.interval;
    } else {
        delete clock.timers[timer.id];
    }

    try {
        if (typeof timer.func === "function") {
            timer.func.apply(null, timer.args);
        } else {
            /* eslint no-eval: "off" */
            eval(timer.func);
        }
    } catch (e) {
        exception = e;
    }

    if (!clock.timers[timer.id]) {
        if (exception) {
            throw exception;
        }
        return;
    }

    if (exception) {
        throw exception;
    }
}

function timerType(timer) {
    if (timer.immediate) {
        return "Immediate";
    }
    if (timer.interval !== undefined) {
        return "Interval";
    }
    return "Timeout";
}

function clearTimer(clock, timerId, ttype) {
    if (!timerId) {
        // null appears to be allowed in most browsers, and appears to be
        // relied upon by some libraries, like Bootstrap carousel
        return;
    }

    if (!clock.timers) {
        clock.timers = [];
    }

    // in Node, timerId is an object with .ref()/.unref(), and
    // its .id field is the actual timer id.
    if (typeof timerId === "object") {
        timerId = timerId.id;
    }

    if (clock.timers.hasOwnProperty(timerId)) {
        // check that the ID matches a timer of the correct type
        var timer = clock.timers[timerId];
        if (timerType(timer) === ttype) {
            delete clock.timers[timerId];
        } else {
            throw new Error("Cannot clear timer: timer created with set" + timerType(timer)
                            + "() but cleared with clear" + ttype + "()");
        }
    }
}

function uninstall(clock, target) {
    var method,
        i,
        l;
    var installedHrTime = "_hrtime";

    for (i = 0, l = clock.methods.length; i < l; i++) {
        method = clock.methods[i];
        if (method === "hrtime" && target.process) {
            target.process.hrtime = clock[installedHrTime];
        } else {
            if (target[method] && target[method].hadOwnProperty) {
                target[method] = clock["_" + method];
            } else {
                try {
                    delete target[method];
                } catch (ignore) { /* eslint empty-block: "off" */ }
            }
        }
    }

    // Prevent multiple executions which will completely remove these props
    clock.methods = [];
}

function hijackMethod(target, method, clock) {
    var prop;

    clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(target, method);
    clock["_" + method] = target[method];

    if (method === "Date") {
        var date = mirrorDateProperties(clock[method], target[method]);
        target[method] = date;
    } else {
        target[method] = function () {
            return clock[method].apply(clock, arguments);
        };

        for (prop in clock[method]) {
            if (clock[method].hasOwnProperty(prop)) {
                target[method][prop] = clock[method][prop];
            }
        }
    }

    target[method].clock = clock;
}

var timers = {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setImmediate: global.setImmediate,
    clearImmediate: global.clearImmediate,
    setInterval: setInterval,
    clearInterval: clearInterval,
    Date: Date
};

if (hrtimePresent) {
    timers.hrtime = global.process.hrtime;
}

var keys = Object.keys || function (obj) {
    var ks = [];
    var key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            ks.push(key);
        }
    }

    return ks;
};

exports.timers = timers;

function createClock(now, loopLimit) {
    loopLimit = loopLimit || 1000;

    var clock = {
        now: getEpoch(now),
        hrNow: 0,
        timeouts: {},
        Date: createDate(),
        loopLimit: loopLimit
    };

    clock.Date.clock = clock;

    clock.setTimeout = function setTimeout(func, timeout) {
        return addTimer(clock, {
            func: func,
            args: Array.prototype.slice.call(arguments, 2),
            delay: timeout
        });
    };

    clock.clearTimeout = function clearTimeout(timerId) {
        return clearTimer(clock, timerId, "Timeout");
    };

    clock.setInterval = function setInterval(func, timeout) {
        return addTimer(clock, {
            func: func,
            args: Array.prototype.slice.call(arguments, 2),
            delay: timeout,
            interval: timeout
        });
    };

    clock.clearInterval = function clearInterval(timerId) {
        return clearTimer(clock, timerId, "Interval");
    };

    clock.setImmediate = function setImmediate(func) {
        return addTimer(clock, {
            func: func,
            args: Array.prototype.slice.call(arguments, 1),
            immediate: true
        });
    };

    clock.clearImmediate = function clearImmediate(timerId) {
        return clearTimer(clock, timerId, "Immediate");
    };

    clock.tick = function tick(ms) {
        ms = typeof ms === "number" ? ms : parseTime(ms);
        var tickFrom = clock.now;
        var tickTo = clock.now + ms;
        var previous = clock.now;
        var timer = firstTimerInRange(clock, tickFrom, tickTo);
        var oldNow, firstException;

        clock.duringTick = true;

        function updateHrTime(newNow) {
            clock.hrNow += (newNow - clock.now);
        }

        while (timer && tickFrom <= tickTo) {
            if (clock.timers[timer.id]) {
                updateHrTime(timer.callAt);
                tickFrom = timer.callAt;
                clock.now = timer.callAt;
                try {
                    oldNow = clock.now;
                    callTimer(clock, timer);
                    // compensate for any setSystemTime() call during timer callback
                    if (oldNow !== clock.now) {
                        tickFrom += clock.now - oldNow;
                        tickTo += clock.now - oldNow;
                        previous += clock.now - oldNow;
                    }
                } catch (e) {
                    firstException = firstException || e;
                }
            }

            timer = firstTimerInRange(clock, previous, tickTo);
            previous = tickFrom;
        }

        clock.duringTick = false;
        updateHrTime(tickTo);
        clock.now = tickTo;

        if (firstException) {
            throw firstException;
        }

        return clock.now;
    };

    clock.next = function next() {
        var timer = firstTimer(clock);
        if (!timer) {
            return clock.now;
        }

        clock.duringTick = true;
        try {
            clock.now = timer.callAt;
            callTimer(clock, timer);
            return clock.now;
        } finally {
            clock.duringTick = false;
        }
    };

    clock.runAll = function runAll() {
        var numTimers, i;
        for (i = 0; i < clock.loopLimit; i++) {
            if (!clock.timers) {
                return clock.now;
            }

            numTimers = Object.keys(clock.timers).length;
            if (numTimers === 0) {
                return clock.now;
            }

            clock.next();
        }

        throw new Error("Aborting after running " + clock.loopLimit + " timers, assuming an infinite loop!");
    };

    clock.runToLast = function runToLast() {
        var timer = lastTimer(clock);
        if (!timer) {
            return clock.now;
        }

        return clock.tick(timer.callAt);
    };

    clock.reset = function reset() {
        clock.timers = {};
    };

    clock.setSystemTime = function setSystemTime(systemTime) {
        // determine time difference
        var newNow = getEpoch(systemTime);
        var difference = newNow - clock.now;
        var id, timer;

        // update 'system clock'
        clock.now = newNow;

        // update timers and intervals to keep them stable
        for (id in clock.timers) {
            if (clock.timers.hasOwnProperty(id)) {
                timer = clock.timers[id];
                timer.createdAt += difference;
                timer.callAt += difference;
            }
        }
    };

    if (hrtimePresent) {
        clock.hrtime = function (prev) {
            if (Array.isArray(prev)) {
                var oldSecs = (prev[0] + prev[1] / 1e9);
                var newSecs = (clock.hrNow / 1000);
                var difference = (newSecs - oldSecs);
                var secs = fixedFloor(difference);
                var nanosecs = fixedModulo(difference * 1e9, 1e9);
                return [
                    secs,
                    nanosecs
                ];
            }
            return [
                fixedFloor(clock.hrNow / 1000),
                fixedModulo(clock.hrNow * 1e6, 1e9)
            ];
        };
    }

    return clock;
}
exports.createClock = createClock;

exports.install = function install(target, now, toFake, loopLimit) {
    var i, l;

    if (target instanceof Date) {
        toFake = now;
        now = target.getTime();
        target = null;
    }

    if (typeof target === "number") {
        toFake = now;
        now = target;
        target = null;
    }

    if (!target) {
        target = global;
    }

    var clock = createClock(now, loopLimit);

    clock.uninstall = function () {
        uninstall(clock, target);
    };

    clock.methods = toFake || [];

    if (clock.methods.length === 0) {
        clock.methods = keys(timers);
    }

    for (i = 0, l = clock.methods.length; i < l; i++) {
        if (clock.methods[i] === "hrtime") {
            if (target.process && typeof target.process.hrtime === "function") {
                hijackMethod(target.process, clock.methods[i], clock);
            }
        } else {
            hijackMethod(target, clock.methods[i], clock);
        }
    }

    return clock;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});