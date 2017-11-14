var debug = require('debug')('nodemon');
var fs = require('fs');
var path = require('path');
var exists = fs.exists || path.exists;
var utils = require('../utils');
var rules = require('../rules');
var parse = require('../rules/parse');
var exec = require('./exec');
var defaults = require('./defaults');

module.exports = load;

/**
 * Load the nodemon config, first reading the global root/nodemon.json, then
 * the local nodemon.json to the exec and then overwritting using any user
 * specified settings (i.e. from the cli)
 *
 * @param  {Object} settings user defined settings
 * @param  {Function} ready    callback that recieves complete config
 */
function load(settings, options, config, callback) {
  config.loaded = [];
  // first load the root nodemon.json
  loadFile(options, config, utils.home, function (options) {
    // then load the user's local configuration file
    if (settings.configFile) {
      options.configFile = path.resolve(settings.configFile);
    }
    loadFile(options, config, process.cwd(), function (options) {
      // Then merge over with the user settings (parsed from the cli).
      // Note that merge protects and favours existing values over new values,
      // and thus command line arguments get priority
      options = utils.merge(settings, options);

      // legacy support
      if (!Array.isArray(options.ignore)) {
        options.ignore = [options.ignore];
      }

      if (!options.ignoreRoot) {
        options.ignoreRoot = defaults.ignoreRoot;
      }

      // blend the user ignore and the default ignore together
      if (options.ignoreRoot && options.ignore) {
        if (!Array.isArray(options.ignoreRoot)) {
          options.ignoreRoot = [options.ignoreRoot];
        }
        options.ignore = options.ignoreRoot.concat(options.ignore);
      } else {
        options.ignore = defaults.ignore.concat(options.ignore);
      }


      // add in any missing defaults
      options = utils.merge(options, defaults);

      // work out the execOptions based on the final config we have
      options.execOptions = exec({
        script: options.script,
        exec: options.exec,
        args: options.args,
        scriptPosition: options.scriptPosition,
        nodeArgs: options.nodeArgs,
        ext: options.ext,
        env: options.env,
      }, options.execMap);

      // clean up values that we don't need at the top level
      delete options.scriptPosition;
      delete options.script;
      delete options.args;
      delete options.ext;

      if (options.quiet) {
        utils.quiet();
      }

      if (options.verbose) {
        utils.debug = true;
      }

      // simplify the ready callback to be called after the rules are normalised
      // from strings to regexp through the rules lib. Note that this gets
      // created *after* options is overwritten twice in the lines above.
      var ready = function (options) {
        normaliseRules(options, callback);
      };

      // if we didn't pick up a nodemon.json file & there's no cli ignores
      // then try loading an old style .nodemonignore file
      if (config.loaded.length === 0) {
        // TODO decide whether this is just confusing...
        var legacy = loadLegacyIgnore.bind(null, options, ready);

        // first try .nodemonignore, if that doesn't exist, try nodemon-ignore
        return legacy('.nodemonignore', function () {
          legacy('nodemon-ignore', function (options) {
            ready(options);
          });
        });
      }

      ready(options);
    });
  });
}

/**
 * Loads the old style nodemonignore files which are simply a list of patterns
 * in a file to ignore
 *
 * @param  {Object} options    nodemon user options
 * @param  {Function} success
 * @param  {String} filename   ignore file (.nodemonignore or nodemon-ignore)
 * @param  {Function} fail     (optional) failure callback
 */
function loadLegacyIgnore(options, success, filename, fail) {
  var ignoreFile = path.join(process.cwd(), filename);

  exists(ignoreFile, function (exists) {
    if (exists) {
      return parse(ignoreFile, function (error, rules) {
        options.ignore = rules.raw;
        success(options);
      });
    }

    if (fail) {
      fail(options);
    } else {
      success(options);
    }
  });
}

function normaliseRules(options, ready) {
  // convert ignore and watch options to rules/regexp
  rules.watch.add(options.watch);
  rules.ignore.add(options.ignore);

  // normalise the watch and ignore arrays
  options.watch = options.watch === false ? false : rules.rules.watch;
  options.ignore = rules.rules.ignore;

  ready(options);
}

/**
 * Looks for a config in the current working directory, and a config in the
 * user's home directory, merging the two together, giving priority to local
 * config. This can then be overwritten later by command line arguments
 *
 * @param  {Function} ready callback to pass loaded settings to
 */
function loadFile(options, config, dir, ready) {
  if (!ready) {
    ready = function () {};
  }

  var callback = function (settings) {
    // prefer the local nodemon.json and fill in missing items using
    // the global options
    ready(utils.merge(settings, options));
  };

  if (!dir) {
    return callback({});
  }

  var filename = options.configFile || path.join(dir, 'nodemon.json');
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      if (err.code === 'ENOENT') {
        if (!options.configFile && dir !== utils.home) {
          // if no specified local config file and local nodemon.json
          // doesn't exist, try the package.json
          return loadPackageJSON(config, callback);
        }
      }
      return callback({});
    }

    var settings = {};

    try {
      settings = JSON.parse(data.toString('utf8').replace(/^\uFEFF/, ''));
      config.loaded.push(filename);
    } catch (e) {
      console.error(e);
      utils.log.fail('Failed to parse config ' + filename);
      process.exit(1);
    }

    // options values will overwrite settings
    callback(settings);
  });
}

function loadPackageJSON(config, ready) {
  if (!ready) {
    ready = function () {};
  }

  utils.log.detail('Looking in package.json for nodemonConfig');

  var dir = process.cwd();
  var filename = path.join(dir, 'package.json');
  var packageLoadOptions = { configFile: filename };
  return loadFile(packageLoadOptions, config, dir, function (settings) {
    ready(settings.nodemonConfig || {});
  });
}
