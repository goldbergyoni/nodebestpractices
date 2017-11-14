'use strict';

const internals = {};
internals.whitelist = [
  'name',
  'version',
  'engine',
  'dependencies',
  'devDependencies',
  'optionalDependencies',
  'peerDependencies',
  'bundleDependencies',
  'bundledDependencies'
];

exports.sanitize = function (pkg) {

  const result = {};
  for (const key in pkg) {
    if (internals.whitelist.includes(key)) {
      result[key] = pkg[key];
    }
  }

  return result;
};
