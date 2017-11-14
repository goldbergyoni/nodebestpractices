'use strict';

const Fs = require('fs');
const Path = require('path');

const internals = {};
internals.default = {
  check: (args) => {

    let pkg;
    try {
      pkg = JSON.parse(Fs.readFileSync(Path.join(args.path, 'package.json')));
    }
    catch (err) {
      return Promise.reject(new Error(`Unable to load package.json for project: ${Path.basename(args.path)}`));
    }

    let shrinkwrap;
    try {
      shrinkwrap = JSON.parse(Fs.readFileSync(Path.join(args.path, 'npm-shrinkwrap.json')));
    }
    catch (err) {}

    let packagelock;
    try {
      packagelock = JSON.parse(Fs.readFileSync(Path.join(args.path, 'package-lock.json')));
    }
    catch (err) {}

    return Object.assign(args, { pkg, shrinkwrap, packagelock });
  }
};

exports.load = (name) => {

  try {
    return require(`nsp-preprocessor-${name}`);
  }
  catch (err) {
    return internals.default;
  }
};
