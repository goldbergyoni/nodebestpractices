module.exports.watch = watch;
module.exports.resetWatchers = resetWatchers;

var debug = require('debug')('nodemon:watch');
var debugRoot = require('debug')('nodemon');
var Promise = require('es6-promise').Promise; // jshint ignore:line
var chokidar = require('chokidar');
var undefsafe = require('undefsafe');
var config = require('../config');
var path = require('path');
var utils = require('../utils');
var bus = utils.bus;
var match = require('./match');
var watchers = [];
var debouncedBus;

bus.on('reset', resetWatchers);

function resetWatchers() {
  debug('resetting watchers');
  watchers.forEach(function (watcher) {
    watcher.close();
  });
  watchers = [];
}


function watch() {
  if (watchers.length) {
    debug('early exit on watch, still watching (%s)', watchers.length);
    return;
  }

  var dirs = [].slice.call(config.dirs);

  debugRoot('start watch on: %s', dirs.join(', '));
  debugRoot('ignore dirs regex(%s)', config.options.ignore.re);

  var promises = [];
  var watchedFiles = [];

  dirs.forEach(function (dir) {
    var promise = new Promise(function (resolve) {
      var ignored = config.options.ignore.re;
      var dotFilePattern = /[\/\\]\./;

      // don't ignore dotfiles if explicitly watched.
      if (!dir.match(dotFilePattern)) {
        ignored = [ignored, dotFilePattern];
      }

      var watcher = chokidar.watch(dir, {
        ignored: ignored,
        persistent: true,
        usePolling: config.options.legacyWatch || false,
        interval: config.options.pollingInterval,
      });

      watcher.ready = false;

      var total = 0;

      watcher.on('change', filterAndRestart);
      watcher.on('add', function (file) {
        if (watcher.ready) {
          return filterAndRestart(file);
        }

        watchedFiles.push(file);
        total++;
        debug('watching dir: %s', file);
      });
      watcher.on('ready', function () {
        watcher.ready = true;
        resolve(total);
        debugRoot('watch is complete');
      });

      watcher.on('error', function (error) {
        if (error.code === 'EINVAL') {
          utils.log.error('Internal watch failed. Likely cause: too many ' +
            'files being watched (perhaps from the root of a drive?\n' +
            'See https://github.com/paulmillr/chokidar/issues/229 for details');
        } else {
          utils.log.error('Internal watch failed: ' + error.message);
          process.exit(1);
        }
      });

      watchers.push(watcher);
    });
    promises.push(promise);
  });

  return Promise.all(promises).then(function (res) {
    var total = res.reduce(function (acc, curr) {
      acc += curr;
      return acc;
    }, 0);

    var count = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    utils.log.detail('watching ' + count + ' files');
    return watchedFiles;
  });
}

function filterAndRestart(files) {
  if (!Array.isArray(files)) {
    files = [files];
  }
  if (files.length) {
    if (utils.isWindows) {
      // ensure the drive letter is in uppercase (c:\foo -> C:\foo)
      files = files.map(function (f) {
        return f[0].toUpperCase() + f.slice(1);
      });
    }

    var cwd = process.cwd();
    utils.log.detail('files triggering change check: ' +
      files.map(function (file) {
        return path.relative(cwd, file);
      }).join(', '));

    var matched = match(
      files,
      config.options.monitor,
      undefsafe(config, 'options.execOptions.ext')
    );

    utils.log.detail('changes after filters (before/after): ' +
      [files.length, matched.result.length].join('/'));

    // reset the last check so we're only looking at recently modified files
    config.lastStarted = Date.now();

    if (matched.result.length) {
      if (config.options.delay > 0) {
        utils.log.detail('delaying restart for ' + config.options.delay + 'ms');
        if (debouncedBus === undefined) {
          debouncedBus = debounce(restartBus, config.options.delay);
        }
        debouncedBus(matched);
      } else {
        return restartBus(matched);
      }
    }
  }
}


function restartBus(matched) {
  utils.log.status('restarting due to changes...');
  matched.result.map(function (file) {
    utils.log.detail(path.relative(process.cwd(), file));
  });

  if (config.options.verbose) {
    utils.log._log('');
  }

  bus.emit('restart', matched.result);
}

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
