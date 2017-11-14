var _ = require('../utils');


/**
 * Patch the transport's connection pool to schedule a sniff after a connection fails.
 * When a connection fails for the first time it will schedule a sniff 1 second in the
 * future, and increase the timeout based on the deadTimeout algorithm chosen by the
 * connectionPool, and the number of times the sniff has failed.
 *
 * @param  {Transport} transport - the transport that will be using this behavior
 * @return {undefined}
 */
module.exports = function setupSniffOnConnectionFault(transport) {
  var failures = 0;
  var pool = transport.connectionPool;
  var originalOnDied = pool._onConnectionDied;

  // do the actual sniff, if the sniff is unable to
  // connect to a node this function will be called again by the connectionPool
  var work = function () {
    work.timerId = transport._timeout(work.timerId);
    transport.sniff();
  };

  // create a function that will count down to a
  // point n milliseconds into the future
  var countdownTo = function (ms) {
    var start = _.now();
    return function () {
      return start - ms;
    };
  };

  // overwrite the function, but still call it
  pool._onConnectionDied = function (connection, wasAlreadyDead) {
    var ret = originalOnDied.call(pool, connection, wasAlreadyDead);

    // clear the failures if this is the first failure we have seen
    failures = work.timerId ? failures + 1 : 0;

    var ms = pool.calcDeadTimeout(failures, 1000);

    if (work.timerId && ms < work.timerId && work.countdown()) {
      // clear the timer
      work.timerId = transport._timeout(work.timerId);
    }

    if (!work.timerId) {
      work.timerId = transport._timeout(work, ms);
      work.countdown = countdownTo(ms);
    }

    return ret;
  };

  pool._onConnectionDied.restore = function () {
    pool._onConnectionDied = originalOnDied;
  };
};
