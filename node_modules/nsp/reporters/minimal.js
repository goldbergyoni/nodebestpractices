'use strict';

const Chalk = require('chalk');

exports.error = function (err) {

  console.error(Chalk.yellow('(+)'), err.message);
};

exports.success = function (result) {

  if (result.data.length) {
    return console.log(Chalk.red('(+)'), result.message);
  }

  console.log(Chalk.green('(+)'), result.message);
};
