"use strict";

var every = Array.prototype.every;

module.exports = function calledInOrder(spies) {
    var callMap = {};

    function hasCallsLeft(spy) {
        if (callMap[spy.id] === undefined) {
            callMap[spy.id] = 0;
        }

        return callMap[spy.id] < spy.callCount;
    }

    if (arguments.length > 1) {
        spies = arguments;
    }

    return every.call(spies, function checkAdjacentCalls(spy, i) {
        var calledBeforeNext = true;

        if (i !== spies.length - 1) {
            calledBeforeNext = spy.calledBefore(spies[i + 1]);
        }

        if (hasCallsLeft(spy) && calledBeforeNext) {
            callMap[spy.id] += 1;
            return true;
        }

        return false;
    });
};
