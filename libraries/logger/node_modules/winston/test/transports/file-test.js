/*
 * file-test.js: Tests for instances of the File transport
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

var path = require('path'),
    vows = require('vows'),
    fs = require('fs'),
    assert = require('assert'),
    winston = require('../../lib/winston'),
    stdMocks = require('std-mocks'),
    helpers = require('../helpers');

var transport = require('./transport');

var stream = fs.createWriteStream(
      path.join(__dirname, '..', 'fixtures', 'logs', 'testfile.log')
    ),
    fileTransport = new (winston.transports.File)({
      filename: path.join(__dirname, '..', 'fixtures', 'logs', 'testfilename.log')
    }),
    failedFileTransport = new (winston.transports.File)({
      filename: path.join(__dirname, '..', 'fixtures', 'logs', 'dir404', 'testfile.log')
    }),
    streamTransport = new (winston.transports.File)({ stream: stream });

vows.describe('winston/transports/file').addBatch({
  "An instance of the File Transport": {
    "when passed a valid filename": {
      "should have the proper methods defined": function () {
        helpers.assertFile(fileTransport);
      },
      "the log() method": helpers.testNpmLevels(fileTransport, "should respond with true", function (ign, err, logged) {
        assert.isNull(err);
        assert.isTrue(logged);
      })
    },
    "when passed an invalid filename": {
      "should have proper methods defined": function () {
        helpers.assertFile(failedFileTransport);
      },
      "should enter noop failed state": function () {
        helpers.assertFailedTransport(failedFileTransport);
      }
    },
    "when passed a valid file stream": {
      "should have the proper methods defined": function () {
        helpers.assertFile(streamTransport);
      },
      "the log() method": helpers.testNpmLevels(streamTransport, "should respond with true", function (ign, err, logged) {
        assert.isNull(err);
        assert.isTrue(logged);
      })
    },
    "streaming to stdout": {
      topic: function () {
        var transport = new (winston.transports.File)({
          stream: process.stdout, timestamp: false, json: false
        });
        stdMocks.use();
        return transport;
      },
      "with showLevel off": {
        topic: function (stdoutStreamTransport) {
          stdoutStreamTransport.showLevel = false;
          stdoutStreamTransport.log('info', '', undefined, this.callback);
        },
        "should not have level prepended": function () {
          var output = stdMocks.flush(),
            line = output.stdout[0];

          assert.equal(line, '\n');
        }
      },
      // there would be a "with showLevel on" here but I think it's a bug in
      // this version of vows.  ugprading causes even more problems
      teardown: function() {
        stdMocks.restore();
      }
    }
  }
}).addBatch({
  "These tests have a non-deterministic end": {
    topic: function () {
      setTimeout(this.callback, 200);
    },
    "and this should be fixed before releasing": function () {
      assert.isTrue(true);
    }
  }
}).addBatch({
  "Error object in metadata #610": {
    topic: function () {
      var myErr = new Error("foo");

      fileTransport.log('info', 'test message', myErr, this.callback.bind(this, null, myErr));
    },
    "should not be modified": function (err, myErr) {
      assert.equal(myErr.message, "foo");
      // Not sure if this is the best possible way to check if additional props appeared
      assert.deepEqual(Object.getOwnPropertyNames(myErr), Object.getOwnPropertyNames(new Error("foo")));
    }
  }
}).addBatch({
  "Date object in metadata": {
    topic: function () {
      var obj = new Date(1000);

      fileTransport.log('info', 'test message', obj, this.callback.bind(this, null, obj));
    },
    "should not be modified": function (err, obj) {
      // Not sure if this is the best possible way to check if additional props appeared
      assert.deepEqual(Object.getOwnPropertyNames(obj), Object.getOwnPropertyNames(new Date()));
    }
  }
}).addBatch({
  "Plain object in metadata": {
    topic: function () {
      var obj = { message: "foo" };

      fileTransport.log('info', 'test message', obj, this.callback.bind(this, null, obj));
    },
    "should not be modified": function (err, obj) {
      assert.deepEqual(obj, { message: "foo" });
    }
  }
}).addBatch({
  "An instance of the File Transport": transport(winston.transports.File, {
    filename: path.join(__dirname, '..', 'fixtures', 'logs', 'testfile.log')
  })
}).export(module);
