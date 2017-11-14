var assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    vows = require('vows'),
    winston = require('../../lib/winston'),
    helpers = require('../helpers');

var maxfilesTransport = new winston.transports.File({
  timestamp: false,
  json: false,
  filename: path.join(__dirname, '..', 'fixtures', 'logs', 'testtailrollingfiles.log'),
  maxsize: 4096,
  maxFiles: 3,
  tailable: true
});

process.on('uncaughtException', function (err) {
  console.log('caught exception');
  console.error(err);
});

vows.describe('winston/transports/file/tailrolling').addBatch({
  "An instance of the File Transport": {
    "when delete old test files": {
      topic: function () {
        var logs = path.join(__dirname, '..', 'fixtures', 'logs');
        fs.readdirSync(logs).forEach(function (file) {
          if (~file.indexOf('testtailrollingfiles')) {
            fs.unlinkSync(path.join(logs, file));
          }
        });

        this.callback();
      },
      "and when passed more files than the maxFiles": {
        topic: function () {
          var that = this,
              created = 0;

          function data(ch) {
            return new Array(1018).join(String.fromCharCode(65 + ch));
          };

          function logKbytes(kbytes, txt) {
            //
            // With no timestamp and at the info level,
            // winston adds exactly 7 characters:
            // [info](4)[ :](2)[\n](1)
            //
            for (var i = 0; i < kbytes; i++) {
              maxfilesTransport.log('info', data(txt), null, function () { });
            }
          }

          maxfilesTransport.on('logged', function () {
            if (++created == 4) {
              return that.callback();
            }

            logKbytes(4, created);
          });

          logKbytes(4, created);
        },
        "should be 3 log files, base to maxFiles - 1": function () {
          var file, fullpath;
          for (var num = 0; num < 4; num++) {
            file = !num ? 'testtailrollingfiles.log' : 'testtailrollingfiles' + num + '.log';
            fullpath = path.join(__dirname, '..', 'fixtures', 'logs', file);

            if (num == 3) {
              return assert.ok(!fs.existsSync(fullpath));
            }

            assert.ok(fs.existsSync(fullpath));
          }

          return false;
        },
        "should have files in correct order": function () {
          var file, fullpath, content;
          ['D', 'C', 'B'].forEach(function (letter, i) {
            file = !i ? 'testtailrollingfiles.log' : 'testtailrollingfiles' + i + '.log';
            content = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'logs', file), 'ascii');

            assert.lengthOf(content.match(new RegExp(letter, 'g')), 4068);
          });
        }
      }
    }
  }
}).export(module);