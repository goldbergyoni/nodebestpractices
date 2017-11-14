'use strict';

var R = require('ramda'),
    astUtil = require('../util/ast'),
    asyncMethods = [ 'async', 'callback', 'promise' ];

function hasParentMochaFunctionCall(functionExpression) {
    return astUtil.isTestCase(functionExpression.parent)
            || astUtil.isHookIdentifier(functionExpression.parent.callee);
}

function hasAsyncCallback(functionExpression) {
    return functionExpression.params.length === 1;
}

function isAsyncFunction(functionExpression) {
    return functionExpression.async === true;
}

function findPromiseReturnStatement(nodes) {
    return R.find(function (node) {
        return node.type === 'ReturnStatement' && node.argument && node.argument.type !== 'Literal';
    }, nodes);
}

function doesReturnPromise(functionExpression) {
    var bodyStatement = functionExpression.body,
        returnStatement = null;

    if (bodyStatement.type === 'BlockStatement') {
        returnStatement = findPromiseReturnStatement(functionExpression.body.body);
    } else if (bodyStatement.type === 'CallExpression') {
        //  allow arrow statements calling a promise with implicit return.
        returnStatement = bodyStatement;
    }

    return returnStatement !== null
        && typeof returnStatement !== 'undefined';
}

module.exports = function (context) {
    var options = context.options[0] || {},
        allowedAsyncMethods = R.isNil(options.allowed) ? asyncMethods : options.allowed;

    function check(node) {
        var testAsyncMethods,
            isAsyncTest;

        if (hasParentMochaFunctionCall(node)) {
            // For each allowed async test method, check if it is used in the test
            testAsyncMethods = allowedAsyncMethods.map(function (method) {
                switch (method) {
                    case 'async':
                        return isAsyncFunction(node);

                    case 'callback':
                        return hasAsyncCallback(node);

                    default:
                        return doesReturnPromise(node);
                }
            });

            // Check that at least one allowed async test method is used in the test
            isAsyncTest = testAsyncMethods.some(function (value) {
                return value === true;
            });

            if (!isAsyncTest) {
                context.report(node, 'Unexpected synchronous test.');
            }
        }
    }

    return {
        FunctionExpression: check,
        ArrowFunctionExpression: check
    };
};

module.exports.schema = [
    {
        type: 'object',
        properties: {
            allowed: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: asyncMethods
                },
                minItems: 1,
                uniqueItems: true
            }
        }
    }
];
