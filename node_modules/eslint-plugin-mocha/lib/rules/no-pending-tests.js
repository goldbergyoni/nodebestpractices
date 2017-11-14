'use strict';

module.exports = function (context) {
    var mochaTestFunctionNames = [
        'it',
        'test',
        'specify'
    ];

    function isMochaTest(callee) {
        return callee.type === 'Identifier' &&
            mochaTestFunctionNames.indexOf(callee.name) !== -1;
    }

    function isPendingMochaTest(node) {
        return isMochaTest(node.callee) &&
            node.arguments.length === 1 &&
            node.arguments[0].type === 'Literal';
    }

    return {
        CallExpression: function (node) {
            if (node.callee && isPendingMochaTest(node)) {
                context.report({
                    node: node,
                    message: 'Unexpected pending mocha test.'
                });
            }
        }
    };
};
