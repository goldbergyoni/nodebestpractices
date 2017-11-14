'use strict';

var OverviewHistory = require('../lib/models/OverviewHistory');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['history'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'test base object' : function(test) {
    test.expect(1);

    var history = new OverviewHistory();

    test.deepEqual(history.length, 0, 'Expect empty array-like object');

    test.done();

  },
  'test new historical report generation for overview' : function(test) {
    var history = new OverviewHistory();
    var newReport = {
      summary: {
        total: {
          sloc: 1000,
          maintainability: 2000
        },
        average: {
          sloc: 100,
          maintainability: 200
        }
      },
    };
    history.addReport(newReport);
    test.equal(history[0].total.sloc, newReport.summary.total.sloc, 'Should have added values into an array');
    test.equal(history[0].total.maintainability, newReport.summary.total.maintainability, 'Should have added values into an array');
    test.equal(history[0].average.sloc, newReport.summary.average.sloc, 'Should have added values into an array');
    test.equal(history[0].average.maintainability, newReport.summary.average.maintainability, 'Should have added values into an array');
    test.done();
  },
  'test history generation from existing history' : function(test) {
    var data = [{
      total : {
        sloc : 1000 ,
        maintainability: 1001
      },
      average : {
        sloc : 2000 ,
        maintainability: 2001
      }
    }];
    var history = new OverviewHistory(data);
    test.deepEqual(history.total, data.total, 'Should populate itself properly');
    test.deepEqual(history.average, data.average, 'Should populate itself properly');
    test.done();
  }

};
