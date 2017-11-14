/*
 * console-test.js: Tests for instances of the Console transport
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

var path = require('path'),
    vows = require('vows'),
    assert = require('assert'),
    winston = require('../../lib/winston'),
    helpers = require('../helpers'),
    stdMocks = require('std-mocks');

var npmTransport = new (winston.transports.Console)(),
    syslogTransport = new (winston.transports.Console)({ levels: winston.config.syslog.levels }),
    alignTransport = new (winston.transports.Console)({ showLevel: true, align: true }),
    defaultTransport = new (winston.transports.Console)(),
    rawTransport = new (winston.transports.Console)({ level: 'verbose', raw: true }),
    debugStdoutTransport = new (winston.transports.Console)({ debugStdout: true }),
    stderrLevelsTransport = new (winston.transports.Console)({ stderrLevels: ['info', 'warn'] }),
    customLevels = {
      alpha: 0,
      beta: 1,
      gamma: 2,
      delta: 3,
      epsilon: 4,
    },
    customLevelsAndStderrTransport = new (winston.transports.Console)({
      levels: customLevels,
      stderrLevels: ['delta', 'epsilon']
    }),
    noStderrTransport = new (winston.transports.Console)({ stderrLevels: [] });

vows.describe('winston/transports/console').addBatch({
  "An instance of the Console Transport": {
    "with showLevel off": {
      topic : function() {
        npmTransport.showLevel = false;
        stdMocks.use();
        npmTransport.log('info', 'Le message', { meta: true }, this.callback);
      },
      "should not have level prepended": function () {
        stdMocks.restore();
        var output = stdMocks.flush(),
            line   = output.stdout[0];

        assert.equal(line, 'Le message meta=true\n');
      }
    }
  }
}).addBatch({
  "An instance of the Console Transport": {
    "with showLevel on": {
      topic : function() {
        npmTransport.showLevel = true;
        stdMocks.use();
        npmTransport.log('info', '');
      },
      "should have level prepended": function () {
        stdMocks.restore();
        var output = stdMocks.flush(),
            line   = output.stdout[0];

        assert.equal(line, 'info: \n');
      }
    },
  }
}).addBatch({
  "An instance of the Console Transport": {
    "with npm levels": {
      "should have the proper methods defined": function () {
        helpers.assertConsole(npmTransport);
      },
      "the log() method": helpers.testNpmLevels(npmTransport, "should respond with true", function (ign, err, logged) {
        assert.isNull(err);
        assert.isTrue(logged);
      })
    },
    "with syslog levels": {
      "should have the proper methods defined": function () {
        helpers.assertConsole(syslogTransport);
      },
      "the log() method": helpers.testSyslogLevels(syslogTransport, "should respond with true", function (ign, err, logged) {
        assert.isNull(err);
        assert.isTrue(logged);
      })
    },
    "with end-of-line": {
      topic : function() {
        npmTransport.eol = 'X';
        stdMocks.use();
        npmTransport.log('info', 'Le message', { meta: true }, this.callback);
      },
      "should have end-of-line character appended": function () {
        stdMocks.restore();
        var output = stdMocks.flush(),
            line   = output.stdout[0];
        console.dir(line);

        assert.equal(line, 'info: Le message meta=trueX');
      }
    }
  }
}).addBatch({
  "An instance of the Console Transport with the align option on": {
    topic : function() {
      stdMocks.use();
      alignTransport.log('info', '');
    },
    "should have logs aligned": function () {
      stdMocks.restore();
      var output = stdMocks.flush(),
          line   = output.stdout[0];

      assert.equal(line, 'info\011: \n');
    }
  }
}).addBatch({
  "with align off": {
    topic : function() {
      alignTransport.align = false;
      stdMocks.use();
      alignTransport.log('info', '');
    },
    "should not have logs aligned": function () {
      stdMocks.restore();
      var output = stdMocks.flush(),
          line   = output.stdout[0];

      assert.equal(line, 'info: \n');
    }
  }
}).addBatch({
  'An instance of a raw Console transport': {
    'logging to stdout': {
      topic: function () {
        stdMocks.use();
        rawTransport.log('verbose', 'hello there');
      }, 'should output json with message property': function () {
        stdMocks.restore();
        var output = stdMocks.flush();
        assert.ok(output.stdout[0].indexOf('"message":"hello there"') > -1);
      }
    }
  }
}).addBatch({
  "An instance of the Console Transport with no options": {
    "should set stderrLevels to 'error' and 'debug' by default": helpers.assertStderrLevels(
      defaultTransport,
      ['error', 'debug']
    ),
    "should log only 'error' and 'debug' to stderr": helpers.testLoggingToStreams(
      winston.config.npm.levels, defaultTransport, ['debug', 'error'], stdMocks
    )
  }
}).addBatch({
  "An instance of the Console Transport with debugStdout set": {
    "should throw an Error if stderrLevels is set": helpers.assertOptionsThrow(
      { debugStdout: true, stderrLevels: ['debug'] },
      "Error: Cannot set debugStdout and stderrLevels together"
    ),
    "should set stderrLevels to 'error' by default": helpers.assertStderrLevels(
      debugStdoutTransport,
      ['error']
    ),
    "should log only the 'error' level to stderr": helpers.testLoggingToStreams(
      winston.config.npm.levels, debugStdoutTransport, ['error'], stdMocks
    )
  }
}).addBatch({
  "An instance of the Console Transport with stderrLevels set": {
    "should throw an Error if stderrLevels is set but not an Array": helpers.assertOptionsThrow(
      { debugStdout: false, stderrLevels: new String('Not an Array') },
      "Error: Cannot set stderrLevels to type other than Array"
    ),
    "should throw an Error if stderrLevels contains non-string elements": helpers.assertOptionsThrow(
      { debugStdout: false, stderrLevels: ["good", /^invalid$/, "valid"] },
      "Error: Cannot have non-string elements in stderrLevels Array"
    ),
    "should correctly set stderrLevels": helpers.assertStderrLevels(
      stderrLevelsTransport,
      ['info', 'warn']
    ),
    "should log only the levels in stderrLevels to stderr": helpers.testLoggingToStreams(
      winston.config.npm.levels, stderrLevelsTransport, ['info', 'warn'], stdMocks
    )
  }
}).addBatch({
  "An instance of the Console Transport with stderrLevels set to an empty array": {
    "should log only to stdout, and not to stderr": helpers.testLoggingToStreams(
      winston.config.npm.levels, noStderrTransport, [], stdMocks
    )
  }
}).addBatch({
  "An instance of the Console Transport with custom levels and stderrLevels set": {
    "should log only the levels in stderrLevels to stderr": helpers.testLoggingToStreams(
      customLevels, customLevelsAndStderrTransport, ['delta', 'epsilon'], stdMocks
    )
  }
}).export(module);
