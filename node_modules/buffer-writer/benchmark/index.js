var fs = require('fs');
var path = require('path');

var bench = require('bench');
var async = require('async');
var rmdir = require('rmdir');
var ok = require('okay');
var cloned = require('cloned');
cloned.workingDir = __dirname + '/versions';

exports.compare = {
  'math': function() {
    var two = 1 + 1;
  },
  'another': function() {
    var yay = 2 + 2;
  }
};

var clone = function(rev, cb) {
  var outputDir = path.join(cloned.workingDir, rev);
  console.log(outputDir)
  if(fs.existsSync(outputDir)) {
    return cb(null, {
      rev: rev,
      dir: outputDir
    });
  }
  console.log('cloning version ' + rev);
  cloned(rev, ok(cb, function(dir) {
    console.log('cloned version ' + rev + ' to ' + dir);
    cb(null, {
      rev: rev,
      dir: dir
    });
  }));
};

var versions = [
  'ef599d3'
];

var scripts = fs.readdirSync(__dirname).filter(function(x) {
  return x.indexOf('benchmark') > 0;
});

if(process.argv[2]) {
  scripts = [process.argv[2]]
}


var run = function() {
  async.map(versions, clone, function(err, results) {
    if(err) throw err;
    exports.compare = { };
    var suites = [];
    scripts.forEach(function(script) {
      for(var i = 0; i < results.length; i++) {
        var result = results[i];
        var benchPath = path.join(result.dir, 'benchmark', script);
        var suite = {};
        suites.push(suite);
        if(fs.existsSync(benchPath)) {
          var bench = require(benchPath);
          suite[script + '@' + result.rev] = bench;
        } else {
          console.log('%s missing at revision %s', benchPath, result.rev);
        }
      }
      suite[script + '@HEAD'] = require(__dirname + '/' + script);
    });
    var compare = function(suite, cb) {
      console.log('running...')
      bench.compare(suite, null, null, null, function(err, data) {
        if(err) return cb(err);
        bench.show(data);
        cb(null);
      });
    }
    async.eachSeries(suites, compare, function(err, res) {
      console.log('all suites done')
    })
  });
};

run();
