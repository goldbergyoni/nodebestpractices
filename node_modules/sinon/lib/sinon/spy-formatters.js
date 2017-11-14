"use strict";

var color = require("./color");
var timesInWords = require("./util/core/times-in-words");
var sinonFormat = require("./util/core/format");
var sinonMatch = require("./match");
var jsDiff = require("diff");
var push = Array.prototype.push;

function colorSinonMatchText(matcher, calledArg, calledArgMessage) {
    if (!matcher.test(calledArg)) {
        matcher.message = color.red(matcher.message);
        if (calledArgMessage) {
            calledArgMessage = color.green(calledArgMessage);
        }
    }
    return calledArgMessage + " " + matcher.message;
}

function colorDiffText(diff) {
    var objects = diff.map(function (part) {
        var text = part.value;
        if (part.added) {
            text = color.green(text);
        } else if (part.removed) {
            text = color.red(text);
        }
        if (diff.length === 2) {
            text += " "; // format simple diffs
        }
        return text;
    });
    return objects.join("");
}

module.exports = {
    c: function (spyInstance) {
        return timesInWords(spyInstance.callCount);
    },

    n: function (spyInstance) {
        return spyInstance.toString();
    },

    D: function (spyInstance, args) {
        var message = "";

        for (var i = 0, l = spyInstance.callCount; i < l; ++i) {
            // describe multiple calls
            if (l > 1) {
                if (i > 0) {
                    message += "\n";
                }
                message += "Call " + (i + 1) + ":";
            }
            var calledArgs = spyInstance.getCall(i).args;
            for (var j = 0; j < calledArgs.length || j < args.length; ++j) {
                message += "\n";
                var calledArgMessage = j < calledArgs.length ? sinonFormat(calledArgs[j]) : "";
                if (sinonMatch.isMatcher(args[j])) {
                    message += colorSinonMatchText(args[j], calledArgs[j], calledArgMessage);
                } else {
                    var expectedArgMessage = j < args.length ? sinonFormat(args[j]) : "";
                    var diff = jsDiff.diffJson(calledArgMessage, expectedArgMessage);
                    message += colorDiffText(diff);
                }
            }
        }

        return message;
    },

    C: function (spyInstance) {
        var calls = [];

        for (var i = 0, l = spyInstance.callCount; i < l; ++i) {
            var stringifiedCall = "    " + spyInstance.getCall(i).toString();
            if (/\n/.test(calls[i - 1])) {
                stringifiedCall = "\n" + stringifiedCall;
            }
            push.call(calls, stringifiedCall);
        }

        return calls.length > 0 ? "\n" + calls.join("\n") : "";
    },

    t: function (spyInstance) {
        var objects = [];

        for (var i = 0, l = spyInstance.callCount; i < l; ++i) {
            push.call(objects, sinonFormat(spyInstance.thisValues[i]));
        }

        return objects.join(", ");
    },

    "*": function (spyInstance, args) {
        return args.map(function (arg) { return sinonFormat(arg); }).join(", ");
    }
};
