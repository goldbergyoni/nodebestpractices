'use strict';

/**
 * Partially applies arguments that will be appended to those provided
 * to the returned function.
 *
 * ```js
 * function fullname(first, last) {
 *   return first + ' ' + last;
 * }
 *
 * var name = partialRight(fn, 'Woodward');
 * name('Brian');
 * //=> 'Brian Woodward'
 * ```
 *
 * @name .partialRight
 * @param {Object} `ctx` Optionally supply an invocation context for the returned function.
 * @param {Function} `fn` The function to which arguments should be partially applied.
 * @param {...*} `arguments` List of arguments to be partially applied.
 * @return {Function} Returns a function with partially applied arguments.
 * @api public
 */

module.exports = function partialRight(ctx, fn/*, arguments*/) {
  var args = [].slice.call(arguments, 1);
  ctx = typeof ctx !== 'function' ? args.shift() : fn;
  return function () {
    var args = [].slice.call(arguments).concat(args);
    return fn.apply(ctx, args);
  };
};
