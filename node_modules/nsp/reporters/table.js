'use strict';

const Chalk = require('chalk');
const Table = require('cli-table2');
const Cvss = require('cvss');

exports.error = function (err) {

  console.error(Chalk.yellow('(+)'), err.message);
};

exports.success = function (result) {

  console.log(Chalk.green('(+)'), result.message);
};

exports.check = {};
exports.check.success = function (result) {

  if (!result.data.length) {
    return console.log(Chalk.green('(+)'), result.message);
  }

  console.log(Chalk.red('(+)'), result.message);

  result.data.forEach((finding) => {

    const table = new Table({
      head: ['', finding.title],
      colWidths: [12, 68],
      wordWrap: true
    });

    table.push(['Name', finding.module]);
    table.push(['CVSS', `${finding.cvss_score} (${Cvss.getRating(finding.cvss_score)})`]);
    table.push(['Installed', finding.version]);
    table.push(['Vulnerable', finding.vulnerable_versions === '<=99.999.99999' ? 'All' : finding.vulnerable_versions]);
    table.push(['Patched', finding.patched_versions === '<0.0.0' ? 'None' : finding.patched_versions]);
    table.push(['Path', finding.path.join(' > ')]);
    table.push(['More Info', finding.advisory]);

    console.log(table.toString());
    console.log();
  });
};
