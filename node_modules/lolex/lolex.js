(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.lolex = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var userAgent = global.navigator && global.navigator.userAgent;
var isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;
var maxTimeout = Math.pow(2, 31) - 1; //see https://heycam.github.io/webidl/#abstract-opdef-converttoint

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
var nextTickPresent = (global.process && typeof global.process.nextTick === "function");
var performancePresent = (global.performance && typeof global.performance.now === "function");
var requestAnimationFramePresent = (global.requestAnimationFrame && typeof global.requestAnimationFrame === "function");
var cancelAnimationFramePresent = (global.cancelAnimationFrame && typeof global.cancelAnimationFrame === "function");

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
 * @param epoch {Date|number} the system time
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


function enqueueJob(clock, job) {
    // enqueues a microtick-deferred task - ecma262/#sec-enqueuejob
    if (!clock.jobs) {
        clock.jobs = [];
    }
    clock.jobs.push(job);
}

function runJobs(clock) {
    // runs all microtick-deferred tasks - ecma262/#sec-runjobs
    if (!clock.jobs) {
        return;
    }
    for (var i = 0; i < clock.jobs.length; i++) {
        var job = clock.jobs[i];
        job.func.apply(null, job.args);
    }
    clock.jobs = [];
}

function addTimer(clock, timer) {
    if (timer.func === undefined) {
        throw new Error("Callback must be provided to timer calls");
    }

    timer.type = timer.immediate ? "Immediate" : "Timeout";

    if (timer.hasOwnProperty("delay")) {
        timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
        timer.delay = Math.max(0, timer.delay);
    }

    if (timer.hasOwnProperty("interval")) {
        timer.type = "Interval";
        timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
    }

    if (timer.hasOwnProperty("animation")) {
        timer.type = "AnimationFrame";
        timer.animation = true;
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
    if (typeof timer.interval === "number") {
        clock.timers[timer.id].callAt += timer.interval;
    } else {
        delete clock.timers[timer.id];
    }

    if (typeof timer.func === "function") {
        timer.func.apply(null, timer.args);
    } else {
        /* eslint no-eval: "off" */
        eval(timer.func);
    }
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
        if (timer.type === ttype) {
            delete clock.timers[timerId];
        } else {
            var clear = ttype === "AnimationFrame" ? "cancelAnimationFrame" : "clear" + ttype;
            var schedule = timer.type === "AnimationFrame" ? "requestAnimationFrame" : "set" + timer.type;
            throw new Error("Cannot clear timer: timer created with " + schedule
                            + "() but cleared with " + clear + "()");
        }
    }
}

function uninstall(clock, target, config) {
    var method,
        i,
        l;
    var installedHrTime = "_hrtime";
    var installedNextTick = "_nextTick";

    for (i = 0, l = clock.methods.length; i < l; i++) {
        method = clock.methods[i];
        if (method === "hrtime" && target.process) {
            target.process.hrtime = clock[installedHrTime];
        } else if (method === "nextTick" && target.process) {
            target.process.nextTick = clock[installedNextTick];
        } else {
            if (target[method] && target[method].hadOwnProperty) {
                target[method] = clock["_" + method];
                if (method === "clearInterval" && config.shouldAdvanceTime === true) {
                    target[method](clock.attachedInterval);
                }
            } else {
                try {
                    delete target[method];
                } catch (ignore) { /* eslint empty-block: "off" */ }
            }
        }
    }

    // Prevent multiple executions which will completely remove these props
    clock.methods = [];

    // return pending timers, to enable checking what timers remained on uninstall
    if (!clock.timers) {
        return [];
    }
    return Object.keys(clock.timers).map(function mapper(key) {
        return clock.timers[key];
    });
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

function doIntervalTick(clock, advanceTimeDelta) {
    clock.tick(advanceTimeDelta);
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

if (nextTickPresent) {
    timers.nextTick = global.process.nextTick;
}

if (performancePresent) {
    timers.performance = global.performance;
}

if (requestAnimationFramePresent) {
    timers.requestAnimationFrame = global.requestAnimationFrame;
}

if (cancelAnimationFramePresent) {
    timers.cancelAnimationFrame = global.cancelAnimationFrame;
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

/**
 * @param start {Date|number} the system time
 * @param loopLimit {number}  maximum number of timers that will be run when calling runAll()
 */
function createClock(start, loopLimit) {
    start = start || 0;
    loopLimit = loopLimit || 1000;

    var clock = {
        now: getEpoch(start),
        hrNow: 0,
        timeouts: {},
        Date: createDate(),
        loopLimit: loopLimit
    };

    clock.Date.clock = clock;

    function getTimeToNextFrame() {
        return 16 - ((clock.now - start) % 16);
    }

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
    clock.nextTick = function nextTick(func) {
        return enqueueJob(clock, {
            func: func,
            args: Array.prototype.slice.call(arguments, 1)
        });
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

    clock.requestAnimationFrame = function requestAnimationFrame(func) {
        var result = addTimer(clock, {
            func: func,
            delay: getTimeToNextFrame(),
            args: [clock.now + getTimeToNextFrame()],
            animation: true
        });

        return result.id || result;
    };

    clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
        return clearTimer(clock, timerId, "AnimationFrame");
    };

    function updateHrTime(newNow) {
        clock.hrNow += (newNow - clock.now);
    }

    clock.tick = function tick(ms) {
        ms = typeof ms === "number" ? ms : parseTime(ms);
        var tickFrom = clock.now;
        var tickTo = clock.now + ms;
        var previous = clock.now;
        var timer, firstException, oldNow;

        clock.duringTick = true;

        // perform process.nextTick()s
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
            // compensate for any setSystemTime() call during process.nextTick() callback
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
        }

        // perform each timer in the requested range
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        while (timer && tickFrom <= tickTo) {
            if (clock.timers[timer.id]) {
                updateHrTime(timer.callAt);
                tickFrom = timer.callAt;
                clock.now = timer.callAt;
                oldNow = clock.now;
                try {
                    runJobs(clock);
                    callTimer(clock, timer);
                } catch (e) {
                    firstException = firstException || e;
                }

                // compensate for any setSystemTime() call during timer callback
                if (oldNow !== clock.now) {
                    tickFrom += clock.now - oldNow;
                    tickTo += clock.now - oldNow;
                    previous += clock.now - oldNow;
                }
            }

            timer = firstTimerInRange(clock, previous, tickTo);
            previous = tickFrom;
        }

        // perform process.nextTick()s again
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
            // compensate for any setSystemTime() call during process.nextTick() callback
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
        }
        clock.duringTick = false;

        // corner case: during runJobs, new timers were scheduled which could be in the range [clock.now, tickTo]
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        if (timer) {
            try {
                clock.tick(tickTo - clock.now); // do it all again - for the remainder of the requested range
            } catch (e) {
                firstException = firstException || e;
            }
        } else {
            // no timers remaining in the requested range: move the clock all the way to the end
            updateHrTime(tickTo);
            clock.now = tickTo;
        }
        if (firstException) {
            throw firstException;
        }
        return clock.now;
    };

    clock.next = function next() {
        runJobs(clock);
        var timer = firstTimer(clock);
        if (!timer) {
            return clock.now;
        }

        clock.duringTick = true;
        try {
            updateHrTime(timer.callAt);
            clock.now = timer.callAt;
            callTimer(clock, timer);
            runJobs(clock);
            return clock.now;
        } finally {
            clock.duringTick = false;
        }
    };

    clock.runAll = function runAll() {
        var numTimers, i;
        runJobs(clock);
        for (i = 0; i < clock.loopLimit; i++) {
            if (!clock.timers) {
                return clock.now;
            }

            numTimers = keys(clock.timers).length;
            if (numTimers === 0) {
                return clock.now;
            }

            clock.next();
        }

        throw new Error("Aborting after running " + clock.loopLimit + " timers, assuming an infinite loop!");
    };

    clock.runToFrame = function runToFrame() {
        return clock.tick(getTimeToNextFrame());
    };

    clock.runToLast = function runToLast() {
        var timer = lastTimer(clock);
        if (!timer) {
            runJobs(clock);
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

    if (performancePresent) {
        clock.performance = Object.create(global.performance);
        clock.performance.now = function lolexNow() {
            return clock.hrNow;
        };
    }
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

/**
 * @param config {Object} optional config
 * @param config.target {Object} the target to install timers in (default `window`)
 * @param config.now {number|Date}  a number (in milliseconds) or a Date object (default epoch)
 * @param config.toFake {string[]} names of the methods that should be faked.
 * @param config.loopLimit {number} the maximum number of timers that will be run when calling runAll()
 * @param config.shouldAdvanceTime {Boolean} tells lolex to increment mocked time automatically (default false)
 * @param config.advanceTimeDelta {Number} increment mocked time every <<advanceTimeDelta>> ms (default: 20ms)
 */
exports.install = function install(config) {
    if ( arguments.length > 1 || config instanceof Date || Array.isArray(config) || typeof config === "number") {
        throw new TypeError("lolex.install called with " + String(config) +
            " lolex 2.0+ requires an object parameter - see https://github.com/sinonjs/lolex");
    }
    config = typeof config !== "undefined" ? config : {};
    config.shouldAdvanceTime = config.shouldAdvanceTime || false;
    config.advanceTimeDelta = config.advanceTimeDelta || 20;

    var i, l;
    var target = config.target || global;
    var clock = createClock(config.now, config.loopLimit);

    clock.uninstall = function () {
        return uninstall(clock, target, config);
    };

    clock.methods = config.toFake || [];

    if (clock.methods.length === 0) {
        // do not fake nextTick by default - GitHub#126
        clock.methods = keys(timers).filter(function (key) {return key !== "nextTick";});
    }

    for (i = 0, l = clock.methods.length; i < l; i++) {
        if (clock.methods[i] === "hrtime") {
            if (target.process && typeof target.process.hrtime === "function") {
                hijackMethod(target.process, clock.methods[i], clock);
            }
        } else if (clock.methods[i] === "nextTick") {
            if (target.process && typeof target.process.nextTick === "function") {
                hijackMethod(target.process, clock.methods[i], clock);
            }
        } else {
            if (clock.methods[i] === "setInterval" && config.shouldAdvanceTime === true) {
                var intervalTick = doIntervalTick.bind(null, clock, config.advanceTimeDelta);
                var intervalId = target[clock.methods[i]](
                    intervalTick,
                    config.advanceTimeDelta);
                clock.attachedInterval = intervalId;
            }
            hijackMethod(target, clock.methods[i], clock);
        }
    }

    return clock;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});