'use strict';

var R = require('ramda');

module.exports = function (context) {
    var possibleAsyncFunctionNames = [
        'it',
        'it.only',
        'test',
        'test.only',
        'specify',
        'specify.only',
        'before',
        'after',
        'beforeEach',
        'afterEach'
    ];

    function getCalleeName(callee) {
        if (callee.type === 'MemberExpression') {
             return callee.object.name + '.' + callee.property.name;
        }

        return callee.name;
    }

    function hasParentMochaFunctionCall(functionExpression) {
        var name;

        if (functionExpression.parent && functionExpression.parent.type === 'CallExpression') {
            name = getCalleeName(functionExpression.parent.callee);
            return possibleAsyncFunctionNames.indexOf(name) > -1;
        }

        return false;
    }

    function isAsyncFunction(functionExpression) {
        return functionExpression.params.length === 1;
    }

    function findParamInScope(paramName, scope) {
        return R.find(function (variable) {
            return variable.name === paramName && variable.defs[0].type === 'Parameter';
        }, scope.variables);
    }

    function isReferenceHandled(reference) {
        var parent = context.getNodeByRangeIndex(reference.identifier.range[0]).parent;

        return parent.type === 'CallExpression';
    }

    function hasHandledReferences(references) {
        return references.some(isReferenceHandled);
    }

    function checkAsyncMochaFunction(functionExpression) {
        var scope = context.getScope(),
            callback = functionExpression.params[0],
            callbackName = callback.name,
            callbackVariable = findParamInScope(callbackName, scope);

        if (callbackVariable && !hasHandledReferences(callbackVariable.references)) {
            context.report(callback, 'Expected "{{name}}" callback to be handled.', { name: callbackName });
        }
    }

    function check(node) {
        if (hasParentMochaFunctionCall(node) && isAsyncFunction(node)) {
            checkAsyncMochaFunction(node);
        }
    }

    return {
        FunctionExpression: check,
        ArrowFunctionExpression: check
    };
};
