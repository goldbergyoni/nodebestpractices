var assert = require('assert');

var mustCallChecks = [];

function runCallChecks() {
  var failed_count = 0;
  for (var i=0 ; i< mustCallChecks.length; ++i) {
    var context = mustCallChecks[i];
    if (context.actual === context.expected) {
      continue;
    }

    failed_count++;
    console.log('Mismatched %s function calls. Expected %d, actual %d.',
                context.name,
                context.expected,
                context.actual);
    console.log(context.stack.split('\n').slice(2).join('\n'));
  }

  assert(failed_count === 0);
}

after(runCallChecks);

exports.mustCall = function(fn, expected) {
  if (typeof expected !== 'number') expected = 1;

  var context = {
    expected: expected,
    actual: 0,
    stack: (new Error).stack,
    name: fn.name || '<anonymous>'
  };

  mustCallChecks.push(context);

  return function() {
    context.actual++;
    return fn.apply(this, arguments);
  };
};
