var utils = require('./utils');
var merge = utils.merge;
var bus = utils.bus;
var childProcess = require('child_process');
var _spawn = childProcess.spawn;

module.exports = function spawn(command, config, eventArgs) {
  var stdio = ['pipe', 'pipe', 'pipe'];
  var child = null;

  if (config.options.stdout) {
    stdio = ['pipe', process.stdout, process.stderr];
  }

  var sh = 'sh';
  var shFlag = '-c';

  if (utils.isWindows) {
    sh = 'cmd';
    shFlag = '/c';
  }

  var args = '';

  if (!Array.isArray(command)) {
    command = [command];
  }

  args = command.join(' ');

  if (utils.version.major >= 1 || utils.version.minor >= 8) {
    var env = merge(process.env, { FILENAME: eventArgs[0] });
    child = _spawn(sh, [shFlag, args], {
      env: merge(config.options.execOptions.env, env),
      stdio: stdio,
    });
  } else {
    child = spawn(sh, args);
  }

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
};
