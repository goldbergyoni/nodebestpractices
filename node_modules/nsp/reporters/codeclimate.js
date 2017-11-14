'use strict';

const Fs = require('fs');
const Path = require('path');

const internals = {};
internals.findLines = function (shrinkwrap, mod, version) {

  const modRE = new RegExp(`\\s*\"${mod}\":\\s*\\{\\s*([^\\}]*)\\}`, 'gm');
  const versionRE = new RegExp(`\\s*\"version\":\\s*\"${version}\"`, 'gm');
  let found = false;

  let match;
  while (!found) {
    match = modRE.exec(shrinkwrap);
    if (versionRE.test(match[0])) {
      found = true;
    }

  }

  const start = shrinkwrap.slice(0, match.index).split('\n').length + 1;
  const end = shrinkwrap.slice(0, match.index + match[0].length).split('\n').length;

  return {
    start,
    end
  };
};

exports.error = function (err, args) {

  console.error(err.stack);
};

exports.success = function (result, args) {
};

exports.check = {};
exports.check.success = function (result, args) {

  if (!result.data.length) {
    return;
  }

  let filename = 'npm-shrinkwrap.json';

  let data;
  try {
    data = Fs.readFileSync(Path.join(args.path, 'npm-shrinkwrap.json'), 'utf8');
  }
  catch (err) {
  }

  if (!data) {
    filename = 'package-lock.json';
    data = Fs.readFileSync(Path.join(args.path, 'package-lock.json'), 'utf8');
  }

  result.data.forEach((finding) => {

    const lines = internals.findLines(data, finding.module, finding.version);
    const content = [
      `# ${finding.title}`,
      '## Overview:',
      finding.overview
    ];

    if (finding.recommendation) {
      content.push('');
      content.push('## Recommendation:');
      content.push(finding.recommendation);
    }

    if (finding.references) {
      content.push('');
      content.push('## References:');
      content.push(finding.references);
    }

    const row = JSON.stringify({
      type: 'issue',
      check_name: `Vulnerable module "${finding.module}" identified`,
      description: `\`${finding.module}\` ${finding.title}`,
      categories: ['Security'],
      remediation_points: 300000,
      content: {
        body: content.join('\n')
      },
      location: {
        path: filename,
        lines: {
          begin: lines.start,
          end: lines.end
        }
      }
    });

    console.log(`${row}\0`);
  });
};
