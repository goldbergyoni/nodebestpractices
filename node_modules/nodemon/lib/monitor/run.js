var debug = require('debug')('nodemon');
var utils = require('../utils');
var bus = utils.bus;
var childProcess = require('child_process');
var spawn = childProcess.spawn;
var exec = childProcess.exec;
var watch = require('./watch').watch;
var config = require('../config');
var child = null; // the actual child process we spawn
var killedAfterChange = false;
var noop = function () {};
var restart = null;
var psTree = require('ps-tree');
var hasPS = true;
var path = require('path');

// discover if the OS has `ps`, and therefore can use psTree
exec('ps', function (error) {
  if (error) {
    hasPS = false;
  }
});

function run(options) {
  var cmd = config.command.raw;

  var runCmd = !options.runOnChangeOnly || config.lastStarted !== 0;
  if (runCmd) {
    utils.log.status('starting `' + config.command.string + '`');
  }

  /*jshint validthis:true*/
  restart = run.bind(this, options);
  run.restart = restart;

  config.lastStarted = Date.now();

  var stdio = ['pipe', 'pipe', 'pipe'];

  if (config.options.stdout) {
    stdio = ['pipe',
             process.stdout,
             process.stderr,];
  }

  var sh = 'sh';
  var shFlag = '-c';

  if (utils.isWindows) {
    sh = 'cmd';
    shFlag = '/c';
  }

  var executable = cmd.executable;

  if (utils.isWindows) {
    // under windows if the executable path contains a forward slash, that will
    // fail with cmd.exe, so we need to normalize it
    if (executable.indexOf('/') !== -1) {
      executable = path.normalize(executable);
    }

    // if the executable path contains a space the whole string must be quoted
    // to get windows treat it as 1 argument for cmd.exe
    if (executable.indexOf(' ') !== -1 && executable[0] !== '\"'
        && executable[executable.length - 1] !== '\"') {
      // remove all quotes from executable (possible backward compat hacks)
      executable = executable.replace (/\"/g, '');
    }
  }

  var args = runCmd ? utils.stringify(executable, cmd.args) : ':';
  var spawnArgs = [sh, [shFlag, args]];
  debug('spawning', args);

  if (utils.version.major === 0 && utils.version.minor < 8) {
    // use the old spawn args :-\
  } else {
    spawnArgs.push({
      env: utils.merge(options.execOptions.env, process.env),
      stdio: stdio,
    });
  }

  child = spawn.apply(null, spawnArgs);

  if (config.required) {
    var emit = {
      stdout: function (data) {
        bus.emit('stdout', data);
      },
      stderr: function (data) {
        bus.emit('stderr', data);
      },
    };

    // now work out what to bind to...
    if (config.options.stdout) {
      child.on('stdout', emit.stdout).on('stderr', emit.stderr);
    } else {
      child.stdout.on('data', emit.stdout);
      child.stderr.on('data', emit.stderr);

      bus.stdout = child.stdout;
      bus.stderr = child.stderr;
    }
  }

  bus.emit('start');

  utils.log.detail('child pid: ' + child.pid);

  child.on('error', function (error) {
    bus.emit('error', error);
    if (error.code === 'ENOENT') {
      utils.log.error('unable to run executable: "' + cmd.executable + '"');
      process.exit(1);
    } else {
      utils.log.error('failed to start child process: ' + error.code);
      throw error;
    }
  });

  child.on('exit', function (code, signal) {
    if (code === 127) {
      utils.log.error('failed to start process, "' + cmd.executable +
        '" exec not found');
      bus.emit('error', code);
      process.exit();
    }

    if (code === 2) {
      // something wrong with parsed command
      utils.log.error('failed to start process, possible issue with exec ' +
        'arguments');
      bus.emit('error', code);
      process.exit();
    }

    // In case we killed the app ourselves, set the signal thusly
    if (killedAfterChange) {
      killedAfterChange = false;
      signal = config.signal;
    }
    // this is nasty, but it gives it windows support
    if (utils.isWindows && signal === 'SIGTERM') {
      signal = config.signal;
    }

    if (signal === config.signal || code === 0) {
      // this was a clean exit, so emit exit, rather than crash
      debug('bus.emit(exit) via ' + config.signal);
      bus.emit('exit');

      // exit the monitor, but do it gracefully
      if (signal === config.signal) {
        return restart();
      } else if (code === 0) { // clean exit - wait until file change to restart
        if (runCmd) {
          utils.log.status('clean exit - waiting for changes before restart');
        }
        child = null;
      }
    } else {
      bus.emit('crash');
      if (options.exitcrash) {
        utils.log.fail('app crashed');
        if (!config.required) {
          process.exit(1);
        }
      } else {
        utils.log.fail('app crashed - waiting for file changes before' +
        ' starting...');
        child = null;
      }
    }

    if (config.options.restartable) {
      // stdin needs to kick in again to be able to listen to the
      // restart command
      process.stdin.resume();
    }
  });

  run.kill = function (noRestart, callback) {
    // I hate code like this :(  - Remy (author of said code)
    if (typeof noRestart === 'function') {
      callback = noRestart;
      noRestart = false;
    }

    if (!callback) {
      callback = noop;
    }

    if (child !== null) {
      // if the stdin piping is on, we need to unpipe, but also close stdin on
      // the child, otherwise linux can throw EPIPE or ECONNRESET errors.
      if (options.stdin) {
        if (process.stdin.unpipe) { // node > 0.8
          process.stdin.unpipe(child.stdin);
        }
      }

      if (utils.isWindows) {
        // For the on('exit', ...) handler above the following looks like a
        // crash, so we set the killedAfterChange flag
        killedAfterChange = true;
      }

      /* Now kill the entire subtree of processes belonging to nodemon */
      var oldPid = child.pid;
      if (child) {
        kill(child, config.signal, function () {
          // this seems to fix the 0.11.x issue with the "rs" restart command,
          // though I'm unsure why. it seems like more data is streamed in to
          // stdin after we close.
          if (child && options.stdin && oldPid === child.pid) {
            // this is stupid and horrible, but node 0.12 on windows blows up
            // with this line, so we'll skip it entirely.
            if (!utils.isWindows) {
              child.stdin.end();
            }
          }
          callback();
        });
      }
    } else if (!noRestart) {
      // if there's no child, then we need to manually start the process
      // this is because as there was no child, the child.on('exit') event
      // handler doesn't exist which would normally trigger the restart.
      bus.once('start', callback);
      restart();
    } else {
      callback();
    }
  };

  // connect stdin to the child process (options.stdin is on by default)
  if (options.stdin) {
    process.stdin.resume();
    // FIXME decide whether or not we need to decide the encoding
    // process.stdin.setEncoding('utf8');
    process.stdin.pipe(child.stdin);

    bus.once('exit', function () {
      if (child && process.stdin.unpipe) { // node > 0.8
        process.stdin.unpipe(child.stdin);
      }
    });
  }

  debug('start watch on: %s', config.options.watch);
  if (config.options.watch !== false) {
    watch();
  }
}

function kill(child, signal, callback) {
  if (!callback) {
    callback = function () {};
  }

  if (utils.isWindows) {
    // When using CoffeeScript under Windows, child's process is not node.exe
    // Instead coffee.cmd is launched, which launches cmd.exe, which starts
    // node.exe as a child process child.kill() would only kill cmd.exe, not
    // node.exe
    // Therefore we use the Windows taskkill utility to kill the process and all
    // its children (/T for tree).
    // Force kill (/F) the whole child tree (/T) by PID (/PID 123)
    exec('taskkill /pid ' + child.pid + ' /T /F');
    callback();
  } else {
    if (hasPS) {
      // we use psTree to kill the full subtree of nodemon, because when
      // spawning processes like `coffee` under the `--debug` flag, it'll spawn
      // it's own child, and that can't be killed by nodemon, so psTree gives us
      //  an array of PIDs that have spawned under nodemon, and we send each the
      //   configured signal (defaul: SIGUSR2) signal, which fixes #335
      psTree(child.pid, function (err, kids) {
        spawn('kill', ['-s', signal, child.pid].concat(kids.map(function (p) {
          return p.PID;
        }))).on('close', callback);
      });
    } else {
      exec('kill -s ' + signal + ' ' + child.pid, function () {
        // ignore if the process has been killed already
        callback();
      });
    }
  }
}

// stubbed out for now, filled in during run
run.kill = function (flag, callback) {
  if (callback) {
    callback();
  }
};
run.restart = noop;

bus.on('quit', function onQuit() {
  // remove event listener
  var exitTimer = null;
  var exit = function () {
    clearTimeout(exitTimer);
    exit = noop; // null out in case of race condition
    child = null;
    if (!config.required) {
      // Execute all other quit listeners.
      bus.listeners('quit').forEach(function (listener) {
        if (listener !== onQuit) {
          listener();
        }
      });
      process.exit(0);
    } else {
      bus.emit('exit');
    }
  };

  // if we're not running already, don't bother with trying to kill
  if (config.run === false) {
    return exit();
  }

  // immediately try to stop any polling
  config.run = false;

  if (child) {
    // give up waiting for the kids after 10 seconds
    exitTimer = setTimeout(exit, 10 * 1000);
    child.removeAllListeners('exit');
    child.once('exit', exit);

    kill(child, 'SIGINT');
  } else {
    exit();
  }
});

bus.on('restart', function () {
  // run.kill will send a SIGINT to the child process, which will cause it
  // to terminate, which in turn uses the 'exit' event handler to restart
  run.kill();
});

// remove the flag file on exit
process.on('exit', function () {
  utils.log.detail('exiting');
  if (child) { child.kill(); }
});

// because windows borks when listening for the SIG* events
if (!utils.isWindows) {
  // usual suspect: ctrl+c exit
  process.once('SIGINT', function () {
    bus.emit('quit');
  });

  process.once('SIGTERM', function () {
    bus.emit('quit');
    if (child) { child.kill('SIGTERM'); }
    process.exit(0);
  });
}


module.exports = run;
