'use strict';

const internals = {};
internals._parseModule = function (module, path, name, results) {

  const moduleName = `${name || module.name}@${module.version}`;

  if (results[moduleName]) {
    results[moduleName].paths.push(path.concat(moduleName));
  }
  else {
    results[moduleName] = {
      name: name || module.name,
      version: module.version,
      paths: [path.concat(moduleName)]
    };
  }

  if (!module.dependencies) {
    module.dependencies = {};
  }

  for (const child in module.dependencies) {
    internals._parseModule(module.dependencies[child], path.concat(moduleName), child, results);
  }
};

exports.getShrinkwrapDependencies = function (shrinkwrap) {

  const results = {};
  try {
    internals._parseModule(shrinkwrap, [], null, results);
  }
  catch (err) {
    // $lab:coverage:off$
    return Promise.reject(err);
    // $lab:coverage:on$
  }

  return Promise.resolve(results);
};
