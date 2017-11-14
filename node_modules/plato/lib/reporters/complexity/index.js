'use strict';

var escomplex = require('typhonjs-escomplex'),
    _         = require('lodash');

exports.process = function(source, options, reportInfo) {

  var report = escomplex.analyzeModule(source, options);
  // Make the short filename easily accessible
  report.module = reportInfo.fileShort;

  // `typhonjs-escomplex` stores class methods inside `classes` entries. For now this is a hack to add class methods
  // to the end of module methods. Plato needs to be updated to support classes.
  if (_.isArray(report.methods) && _.isArray(report.classes)) {
    _.each(report.classes, function (clazz) {
      _.each(clazz.methods, function (method) {
        report.methods.push(method);
      });
    });
  }

  return report;
};
