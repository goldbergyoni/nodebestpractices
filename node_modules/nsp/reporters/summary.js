'use strict';

const Chalk = require('chalk');
const Table = require('cli-table2');

exports.error = function (err, args) {

  console.error(Chalk.yellow('(+)'), err.message);
};

exports.success = function (result, args) {

  console.log(Chalk.green('(+)'), result.message);
};

exports.check = {};
exports.check.success = function (result, args) {

  if (!result.data.length) {
    return console.log(Chalk.green('(+)'), result.message);
  }

  console.log(Chalk.red('(+)'), result.message);

  const table = new Table({
    head: ['Name', 'Installed', 'Patched', 'Path', 'More Info'],
    chars: {
      top: '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      bottom: '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      left: '',
      'left-mid': '',
      mid: '',
      'mid-mid': '',
      right: '',
      'right-mid': '',
      middle: ' '
    }
  });

  result.data.forEach((finding) => {

    table.push([
      finding.module,
      finding.version,
      finding.patched_versions === '<0.0.0' ? 'None' : finding.patched_versions,
      finding.path.join(' > '),
      finding.advisory
    ]);
  });

  console.log(table.toString());
  console.log();
};
