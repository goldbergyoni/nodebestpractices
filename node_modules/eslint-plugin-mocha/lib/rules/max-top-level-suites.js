'use strict';

/**
 * @fileoverview Limit the number of top-level suites in a single file
 * @author Alexander Afanasyev
 */

var R = require('ramda'),
    astUtil = require('../util/ast'),
    additionalSuiteNames = require('../util/settings').additionalSuiteNames,
    defaultSuiteLimit = 1;

module.exports = function (context) {
    var stack = [],
        topLevelDescribes = [],
        options = context.options[0] || {},
        settings = context.settings,
        suiteLimit;

    if (R.isNil(options.limit)) {
        suiteLimit = defaultSuiteLimit;
    } else {
        suiteLimit = options.limit;
    }

    return {
        CallExpression: function (node) {
            if (astUtil.isDescribe(node, additionalSuiteNames(settings))) {
                stack.push(node);
            }
        },

        'CallExpression:exit': function (node) {
            if (astUtil.isDescribe(node, additionalSuiteNames(settings))) {
                if (stack.length === 1) {
                    topLevelDescribes.push(node);
                }

                stack.pop(node);
            }
        },

        'Program:exit': function () {
            if (topLevelDescribes.length > suiteLimit) {
                context.report({
                    node: topLevelDescribes[suiteLimit],
                    message: 'The number of top-level suites is more than ' + suiteLimit + '.'
                });
            }
        }
    };
};
