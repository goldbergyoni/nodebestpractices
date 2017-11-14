'use strict';

// node api
var fs = require('fs');

// local lib
var Logger = require('./logger');

var log = new Logger(Logger.WARNING);

var path = require('path');

exports.findCommonBase = function(files) {
  if (!files || files.length === 1) return '';
  var lastSlash = files[0].lastIndexOf(path.sep);
  if (!lastSlash) return '';
  var first = files[0].substr(0, lastSlash + 1);
  var prefixlen = first.length;
  files.forEach(function(file){
    for (var i = prefixlen; i > 0; i--) {
      if (file.substr(0,i) === first.substr(0,i)) {
        prefixlen = i;
        return;
      }
    }
    prefixlen = 0;
  });
  return first.substr(0,prefixlen);
};

exports.formatJSON = function (report) {
  return JSON.stringify(report, function(k,v){
    if (k === 'identifiers') return ['__stripped__'];
    return v;
  });
};

exports.readJSON = function (file, options) {
  if (options.q) log.level = Logger.ERROR;
  var result = {};
  if (fs.existsSync(file)) {
    log.debug('Parsing JSON from file %s', file);
    try {
      var src = fs.readFileSync(file);
      result = JSON.parse(src);
    } catch(e) {
      log.warning('Could not parse JSON from file %s', file);
    }
  } else {
    log.info('Not parsing missing file "%s"', file);
  }
  return result;
};

exports.stripComments = function (str) {
  /*jshint regexp:false */
  str = str || '';

  var multiline = /\/\*(?:(?!\*\/)|.|\n)*?\*\//g;
  var singleline = /\/\/.*/g;

  return str.replace(multiline, '').replace(singleline, '');
};

// http://stackoverflow.com/a/4835406/338762
exports.escapeHTML = function (html) {
  return html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
};
