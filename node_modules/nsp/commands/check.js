'use strict';

const Fs = require('fs');
const Path = require('path');

const API = require('../lib/api');
const Command = require('../lib/command');
const Offline = require('../lib/offline');
const Package = require('../lib/package');

exports.command = 'check [path]';
exports.description = 'checks a project for known vulnerabilities against the Node Security API';

exports.builder = {
  'warn-only': {
    boolean: true,
    default: false,
    description: 'display vulnerabilities but do not exit with an error code',
    group: 'Output:'
  },
  offline: {
    boolean: true,
    description: 'execute checks without an internet connection',
    group: 'Offline:'
  },
  advisories: {
    description: 'path to local advisories database used in offline checks',
    group: 'Offline:'
  },
  'cvss-threshold': {
    alias: 'threshold',
    description: 'cvss threshold that must be reached in order to exit with an error',
    type: 'number',
    group: 'Output:'
  },
  'cvss-filter': {
    alias: 'filter',
    description: 'cvss score below which findings will be hidden',
    type: 'number',
    group: 'Output:'
  },
  exceptions: {
    type: 'array',
    description: 'advisories to ignore while running this check',
    default: [],
    group: 'Project:'
  },
  org: {
    description: 'nodesecurity organization your project is contained in',
    implies: 'integration',
    group: 'Project:'
  },
  integration: {
    description: 'your project\'s uuid',
    implies: 'org',
    group: 'Project:'
  }
};

exports.handler = Command.wrap('check', (args) => {

  let pkg = args.pkg;
  const { shrinkwrap, packagelock } = args;

  pkg = Package.sanitize(pkg);

  if (!pkg.name) {
    pkg.name = Path.basename(args.path);
  }

  if (shrinkwrap &&
      !shrinkwrap.name) {

    shrinkwrap.name = pkg.name;
  }

  if (packagelock &&
      !packagelock.name) {

    packagelock.name = pkg.name;
  }

  let check;
  if (!args.offline) {
    const api = new API(args);
    check = api.check(args, { package: pkg, shrinkwrap, packagelock, exceptions: args.exceptions });
  }
  else {
    let advisories;
    try {
      if (args.advisories) {
        advisories = JSON.parse(Fs.readFileSync(Path.resolve(process.cwd(), args.advisories)));
      }
      else {
        advisories = JSON.parse(Fs.readFileSync(Path.join(args.path, 'advisories.json')));
      }
    }
    catch (err) {
      return Promise.reject(new Error('Unable to load local advisories database - run \'nsp gather\''));
    }

    check = Offline.check({ package: pkg, shrinkwrap, packagelock, advisories, exceptions: args.exceptions });
  }

  return check.then((results) => {

    results.message = results.data.length ? `${results.data.length} ${results.data.length === 1 ? 'vulnerability' : 'vulnerabilities'} found` : 'No known vulnerabilities found';
    results.data = results.data.sort((a, b) => b.cvss_score - a.cvss_score);
    return results;
  });
});
