'use strict';

/**
 * @fileoverview Match suite descriptions to match a pre-configured regular expression
 * @author Alexander Afanasyev
 */

var defaultSuiteNames = [ 'describe', 'context', 'suite' ];

module.exports = function (context) {
    var pattern = new RegExp(context.options[0]),
        suiteNames = context.options[1] ? context.options[1] : defaultSuiteNames;

    return {
        CallExpression: function (node) {
            var callee = node.callee,
                args;

            if (callee && callee.name && suiteNames.indexOf(callee.name) > -1) {
                args = node.arguments;
                if (args && args[0] && typeof args[0].value === 'string' && !pattern.test(args[0].value)) {
                    context.report(node, 'Invalid "' + callee.name + '()" description found.');
                }
            }
        }
    };
};
