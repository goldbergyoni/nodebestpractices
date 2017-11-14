"use strict";

var JSHINT = require("jshint").JSHINT;
var jsHintCli = require("jshint/src/cli.js");

// Provides a regexp to test for ES6 / ES Modules. If the pass tests then esversion is set to 6 if not already specified.
var esmRegex = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s* (\{|default|function|class|var|const|let|async\s+function))/;

exports.process = function (source, options/*, reportInfo */) {
  if (options == null || Object.getOwnPropertyNames(options).length === 0) {
    options = { options : {}, globals : {}};
    var jsHintOptions = jsHintCli.getConfig(source);

    delete jsHintOptions.dirname;
    if (jsHintOptions != null && Object.getOwnPropertyNames(jsHintOptions).length > 0) {
      if (jsHintOptions.globals) {
        options.globals = jsHintOptions.globals;
        delete jsHintOptions.globals;
      }
      options.options = jsHintOptions;
    }
  }

  // Detect if source is an ES Module.
  if (esmRegex.test(source)) {
    // Make sure `options.options` is defined
    if (typeof options.options !== 'object') {
      options.options = {};
    }

    // If esversion is not already specified then set `esversion` to 6.
    if (typeof options.options.esversion !== 'number') {
      options.options.esversion = 6;
    }
  }

  var results = lint(source, options.options, options.globals);

  return generateReport(results);
};

function generateReport(data) {

  var out = {
    messages : []
  };

  data.results.forEach(function (result) {
    out.messages.push({
      severity : 'error',
      line     : result.error.line,
      column   : result.error.character,
      message  : result.error.reason,
      source   : result.error.raw
    });
  });

  return out;
}

function lint(source, config, globals) {
  config = config || {};

  var results = [];
  var data = [];

  // Remove potential Unicode BOM.
  source = source.replace(/^\uFEFF/, "");
  if (!JSHINT(source, config, globals)) {
    JSHINT.errors.forEach(function (err) {
      if (err) results.push({ error: err });
    });
  }

  var lintData = JSHINT.data();
  if (lintData) data.push(lintData);

  return {
    results : results,
    data : data
  };
}
