'use strict';

var FileHistory = require('../lib/models/FileHistory');

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

exports['FileHistory'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'test new historical report generation for overview' : function(test) {
    var history = new FileHistory();
    var newReport = require('./fixtures/model_history.json');
    history.addReport(newReport);

    test.equal(history[0].sloc, newReport.complexity.methodAggregate.sloc.physical);
    test.equal(history[0].lloc, newReport.complexity.methodAggregate.sloc.logical);
    test.equal(history[0].deliveredBugs, newReport.complexity.methodAggregate.halstead.bugs);
    test.equal(history[0].difficulty, newReport.complexity.methodAggregate.halstead.difficulty);
    test.equal(history[0].maintainability, newReport.complexity.maintainability);
    test.equal(history[0].functions, newReport.complexity.methods.length);
    test.equal(history[0].lintErrors, newReport.jshint.messages.length);
    test.done();
  }

};
