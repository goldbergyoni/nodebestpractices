#!/usr/bin/env node

var path = require('path');

var AWS = require('../index');

var license = [
  '// AWS SDK for JavaScript v' + AWS.VERSION,
  '// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  '// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt'
].join('\n') + '\n';

function minify(code) {
  var uglify = require('uglify-js');
  var minified = uglify.minify(code, {fromString: true});
  return minified.code;
}

function stripComments(code) {
  var lines = code.split(/\r?\n/);
  var multiLine = false;
  lines = lines.map(function (line) {
    var rLine = line;
    if (line.match(/^\s*\/\//)) {
      rLine = null;
    } else if (line.match(/^\s*\/\*/)) {
      multiLine = true;
      rLine = null;
    }

    if (multiLine) {
      var multiLineEnd = line.match(/\*\/(.*)/);
      if (multiLineEnd) {
        multiLine = false;
        rLine = multiLineEnd[1];
      } else {
        rLine = null;
      }
    }

    return rLine;
  }).filter(function(l) { return l !== null; });

  var newCode = lines.join('\n');
  newCode = newCode.replace(/\/\*\*[\s\S]+?Copyright\s+.+?Amazon[\s\S]+?\*\//g, '');
  return newCode;
}

function build(options, callback) {
  if (arguments.length === 1) {
    callback = options;
    options = {};
  }

  var img = require('insert-module-globals');
  img.vars.process = function() { return '{browser:true}'; };

  if (options.services) process.env.AWS_SERVICES = options.services;

  var browserify = require('browserify');
  var brOpts = { basedir: path.resolve(__dirname, '..') };
  browserify(brOpts).add('./').ignore('domain').bundle(function(err, data) {
    if (err) return callback(err);

    var code = (data || '').toString();
    if (options.minify) code = minify(code);
    else code = stripComments(code);

    code = license + code;
    callback(null, code);
  });
}

// run if we called this tool directly
if (require.main === module) {
  var opts = {
    services: process.argv[2] || process.env.SERVICES,
    minify: process.env.MINIFY ? true : false
  };
  build(opts, function(err, code) {
    if (err) console.error(err.message);
    else console.log(code);
  });
}

build.license = license;
module.exports = build;
