"use strict";

var ESLINT = require("eslint");

exports.process = function (source, options/*, reportInfo */) {
  var results = lint(source, options);
  var report = generateReport(results);
  return report;
};

function generateReport(data) {

  var out = {
    messages : []
  };

  data.results.forEach(function (result) {
    out.messages.push({
      severity : 'error',
      line     : result.line,
      column   : result.column,
      message  : result.message,
      source   : result.source
    });
  });

  return out;
}

function lint(source, config) {
  config = config || {};

  var results = [];
  var data = [];

  // Remove potential Unicode BOM.
  source = source.replace(/^\uFEFF/, "");

  var messages = ESLINT.linter.verify(source, config);
  results = results.concat(messages);

  return {
    results : results,
    data : data
  };
}

