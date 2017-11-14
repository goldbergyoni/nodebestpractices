'use strict';

var astUtil = require('../util/ast'),
    additionalSuiteNames = require('../util/settings').additionalSuiteNames;

function newDescribeLayer(describeNode) {
    return {
        describeNode: describeNode,
        hookNodes: [],
        testCount: 0
    };
}

module.exports = function (context) {
    var options = context.options[0] || {},
        allowedHooks = options.allow || [],
        settings = context.settings,
        layers = [];

    function popLayer(node) {
        var layer = layers[layers.length - 1];
        if (layer.describeNode === node) {
            if (layer.testCount <= 1) {
                layer.hookNodes
                    .filter(function (hookNode) {
                        return allowedHooks.indexOf(hookNode.name) === -1;
                    })
                    .forEach(function (hookNode) {
                        context.report({
                            node: hookNode,
                            message: 'Unexpected use of Mocha `' + hookNode.name + '` hook for a single test case'
                        });
                    });
            }
            layers.pop();
        }
    }

    return {
        Program: function (node) {
            layers.push(newDescribeLayer(node));
        },

        CallExpression: function (node) {
            if (astUtil.isDescribe(node, additionalSuiteNames(settings))) {
                layers[layers.length - 1].testCount += 1;
                layers.push(newDescribeLayer(node));
                return;
            }

            if (astUtil.isTestCase(node)) {
                layers[layers.length - 1].testCount += 1;
            }

            if (astUtil.isHookIdentifier(node.callee)) {
                layers[layers.length - 1].hookNodes.push(node.callee);
            }
        },

        'CallExpression:exit': popLayer,
        'Program:exit': popLayer
    };
};

module.exports.schema = [
    {
        type: 'object',
        properties: {
            allow: {
                type: 'array',
                items: {
                    type: 'string'
                }
            }
        }
    }
];
