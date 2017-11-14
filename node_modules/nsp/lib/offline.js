'use strict';

const NPMUtils = require('nodesecurity-npm-utils');
const Semver = require('semver');

const internals = {};
internals.exceptionRegex = /^https\:\/\/nodesecurity\.io\/advisories\/([0-9]+)$/;

exports.check = function (options) {

  if (!options.shrinkwrap &&
      !options.packagelock) {

    return Promise.reject(new Error('npm-shrinkwrap.json or package-lock.json is required for offline checks'));
  }

  const exceptions = options.exceptions.filter((exception) => {

    return internals.exceptionRegex.test(exception);
  }).map((exception) => {

    return Number(internals.exceptionRegex.exec(exception)[1]);
  });

  return NPMUtils.getShrinkwrapDependencies(options.shrinkwrap || options.packagelock, options.package).then((tree) => {

    const result = [];
    Object.keys(tree).map((child) => {

      const mod = tree[child];
      const matches = [];

      for (const advisory of options.advisories) {
        if (mod.name === advisory.module_name &&
            !exceptions.includes(advisory.id) &&
            Semver.satisfies(mod.version, advisory.vulnerable_versions)) {

          matches.push(advisory);
        }
      }

      return {
        module: mod.name,
        version: mod.version,
        vulnerabilities: matches
      };
    }).filter((mod) => {


      return mod.vulnerabilities.length > 0;
    }).forEach((finding) => {

      for (const vuln of finding.vulnerabilities) {
        const paths = tree[`${finding.module}@${finding.version}`].paths;

        for (const path of paths) {
          result.push({
            id: vuln.id,
            module: finding.module,
            version: finding.version,
            vulnerable_versions: vuln.vulnerable_versions,
            patched_versions: vuln.patched_versions,
            title: vuln.title,
            advisory: `https://nodesecurity.io/advisories/${vuln.id}`,
            updated_at: vuln.updated_at,
            created_at: vuln.created_at,
            publish_date: vuln.publish_date,
            overview: vuln.overview,
            recommendation: vuln.recommendation,
            cvss_vector: vuln.cvss_vector,
            cvss_score: vuln.cvss_score,
            path
          });
        }
      }
    });

    return {
      data: result
    };
  }).catch((err) => {

    throw Object.assign(new Error('Unable to parse dependency tree'), { error: err });
  });
};
