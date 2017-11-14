'use strict';

module.exports = function (context) {
    var testFunctionNames = [
            'it',
            'it.only',
            'it.skip',
            'test',
            'test.only',
            'test.skip',
            'specify',
            'specify.only',
            'specify.skip'
        ];

    function getFnName(callee) {
        if (callee.type === 'MemberExpression') {
            if (callee.computed) {
                return callee.object.name + '.' + callee.property.value;
            }

            return callee.object.name + '.' + callee.property.name;
        }

        return callee.name;
    }

    function isGlobalScope(scope) {
        return scope.type === 'global' || scope.type === 'module';
    }

    return {
        CallExpression: function (node) {
            var callee = node.callee,
                fnName = getFnName(callee),
                scope = context.getScope();

            if (testFunctionNames.indexOf(fnName) !== -1 && isGlobalScope(scope)) {
                context.report(callee, 'Unexpected global mocha test.');
            }
        }
    };
};
