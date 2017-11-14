'use strict';

var astUtils = require('../util/ast'),
    additionalSuiteNames = require('../util/settings').additionalSuiteNames;

module.exports = function noNestedTests(context) {
    var testNestingLevel = 0,
        settings = context.settings;

    function report(callExpression, isTestCase) {
        var message = isTestCase ? 'Unexpected test nested within another test.' :
            'Unexpected suite nested within a test.';

        context.report({
            message: message,
            node: callExpression.callee
        });
    }

    return {
        CallExpression: function (node) {
            var isTestCase = astUtils.isTestCase(node),
                isDescribe = astUtils.isDescribe(node, additionalSuiteNames(settings));

            if (testNestingLevel > 0 && (isTestCase || isDescribe)) {
                report(node, isTestCase);
            }

            if (isTestCase) {
                testNestingLevel += 1;
            }
        },

        'CallExpression:exit': function (node) {
            if (astUtils.isTestCase(node)) {
                testNestingLevel -= 1;
            }
        }
    };
};
