'use strict';

const Path = require('path');

const loadInternalReporter = function (name) {

  try {
    return require(Path.join(__dirname, name));
  }
  catch (err) {}
};

const loadExternalReporter = function (name) {

  try {
    return require(`nsp-reporter-${name}`);
  }
  catch (err) {}
};

exports.load = function (name) {

  return loadInternalReporter(name) || loadExternalReporter(name) || loadInternalReporter('table');
};
