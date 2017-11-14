'use strict';

/**
 * @fileoverview Disallow arrow functions as arguments to Mocha globals
 * @author Paul Melnikow
 */

var R = require('ramda'),
    mochaFunctionNames = [
        'describe',
        'describe.skip',
        'xdescribe',
        'suite',
        'context',
        'xcontext',
        'specify',
        'xspecify',
        'it',
        'it.only',
        'xit',
        'test',
        'test.only',
        'specify',
        'specify.only',
        'before',
        'after',
        'beforeEach',
        'afterEach'
    ];

module.exports = function (context) {
    function getCalleeName(callee) {
        if (callee.type === 'MemberExpression') {
             return callee.object.name + '.' + callee.property.name;
        }

        return callee.name;
    }

    function isLikelyMochaGlobal(scope, name) {
        return !R.find(R.propEq('name', name), scope.variables);
    }

    function fixArrowFunction(fixer, fn) {
        var sourceCode = context.getSourceCode(),
            paramsLeftParen = sourceCode.getFirstToken(fn),
            paramsRightParen = sourceCode.getTokenBefore(sourceCode.getTokenBefore(fn.body)),
            paramsFullText =
                sourceCode.text.slice(paramsLeftParen.range[0], paramsRightParen.range[1]),
            functionKeyword = 'function',
            bodyText;

        if (fn.async) {
            // When 'async' specified, take care about the keyword.
            functionKeyword = 'async function';
            // Strip 'async (...)' to ' (...)'
            paramsFullText = paramsFullText.slice(5);
        }

        if (fn.params.length > 0) {
            paramsFullText = '(' + sourceCode.text.slice(fn.params[0].start, R.last(fn.params).end) + ')';
        }

        if (fn.body.type === 'BlockStatement') {
            // When it((...) => { ... }),
            // simply replace '(...) => ' with 'function () '
            return fixer.replaceTextRange(
                [ fn.start, fn.body.start ],
                functionKeyword + paramsFullText + ' '
            );
        }

        bodyText = sourceCode.text.slice(fn.body.range[0], fn.body.range[1]);
        return fixer.replaceTextRange(
            [ fn.start, fn.end ],
            functionKeyword + paramsFullText + ' { return ' + bodyText + '; }'
        );
    }

    return {
        CallExpression: function (node) {
            var name = getCalleeName(node.callee),
                fnArg;

            if (name && mochaFunctionNames.indexOf(name) > -1) {
                fnArg = node.arguments.slice(-1)[0];
                if (fnArg && fnArg.type === 'ArrowFunctionExpression') {
                    if (isLikelyMochaGlobal(context.getScope(), name)) {
                        context.report({
                            node: node,
                            message: 'Do not pass arrow functions to ' + name + '()',
                            fix: function (fixer) {
                                return fixArrowFunction(fixer, fnArg);
                            }
                        });
                    }
                }
            }
        }
    };
};
