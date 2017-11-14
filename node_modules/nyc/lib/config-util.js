'use strict'

const arrify = require('arrify')
const fs = require('fs')
const path = require('path')
const findUp = require('find-up')
const testExclude = require('test-exclude')
const Yargs = require('yargs/yargs')

var Config = {}

function guessCWD (cwd) {
  cwd = cwd || process.env.NYC_CWD || process.cwd()
  const pkgPath = findUp.sync('package.json', {cwd: cwd})
  if (pkgPath) {
    cwd = path.dirname(pkgPath)
  }
  return cwd
}

function loadConfig (argv, cwd) {
  const rcPath = findUp.sync(['.nycrc', '.nycrc.json'], {cwd: cwd})
  let config = {}

  if (rcPath) {
    config = JSON.parse(
      fs.readFileSync(rcPath, 'utf-8')
    )
  }

  if (config.require) config.require = arrify(config.require)
  if (config.extension) config.extension = arrify(config.extension)
  if (config.exclude) config.exclude = arrify(config.exclude)
  if (config.include) config.include = arrify(config.include)

  return config
}

// build a yargs object, omitting any settings
// that would cause the application to exit early.
Config.buildYargs = function (cwd) {
  cwd = guessCWD(cwd)
  const config = loadConfig()
  return Yargs([])
    .usage('$0 [command] [options]')
    .usage('$0 [options] [bin-to-instrument]')
    .option('reporter', {
      alias: 'r',
      describe: 'coverage reporter(s) to use',
      default: 'text',
      globa: false
    })
    .option('report-dir', {
      describe: 'directory to output coverage reports in',
      default: 'coverage',
      global: false
    })
    .option('silent', {
      alias: 's',
      default: false,
      type: 'boolean',
      describe: "don't output a report after tests finish running",
      global: false
    })
    .option('all', {
      alias: 'a',
      default: false,
      type: 'boolean',
      describe: 'whether or not to instrument all files of the project (not just the ones touched by your test suite)',
      global: false
    })
    .option('exclude', {
      alias: 'x',
      default: testExclude.defaultExclude,
      describe: 'a list of specific files and directories that should be excluded from coverage, glob patterns are supported, node_modules is always excluded',
      global: false
    })
    .option('exclude-after-remap', {
      default: true,
      type: 'boolean',
      description: 'should exclude logic be performed after the source-map remaps filenames?',
      global: false
    })
    .option('include', {
      alias: 'n',
      default: [],
      describe: 'a list of specific files that should be covered, glob patterns are supported',
      global: false
    })
    .option('cwd', {
      describe: 'working directory used when resolving paths',
      default: cwd
    })
    .option('require', {
      alias: 'i',
      default: [],
      describe: 'a list of additional modules that nyc should attempt to require in its subprocess, e.g., babel-register, babel-polyfill',
      global: false
    })
    .option('eager', {
      default: false,
      type: 'boolean',
      describe: 'instantiate the instrumenter at startup (see https://git.io/vMKZ9)',
      global: false
    })
    .option('cache', {
      alias: 'c',
      default: true,
      type: 'boolean',
      describe: 'cache instrumentation results for improved performance',
      global: false
    })
    .option('babel-cache', {
      default: false,
      type: 'boolean',
      describe: 'cache babel transpilation results for improved performance',
      global: false
    })
    .option('extension', {
      alias: 'e',
      default: [],
      describe: 'a list of extensions that nyc should handle in addition to .js',
      global: false
    })
    .option('check-coverage', {
      type: 'boolean',
      default: false,
      describe: 'check whether coverage is within thresholds provided',
      global: false
    })
    .option('branches', {
      default: 0,
      description: 'what % of branches must be covered?',
      global: false
    })
    .option('functions', {
      default: 0,
      description: 'what % of functions must be covered?',
      global: false
    })
    .option('lines', {
      default: 90,
      description: 'what % of lines must be covered?',
      global: false
    })
    .option('statements', {
      default: 0,
      description: 'what % of statements must be covered?',
      global: false
    })
    .option('source-map', {
      default: true,
      type: 'boolean',
      description: 'should nyc detect and handle source maps?',
      global: false
    })
    .option('per-file', {
      default: false,
      type: 'boolean',
      description: 'check thresholds per file',
      global: false
    })
    .option('produce-source-map', {
      default: false,
      type: 'boolean',
      description: "should nyc's instrumenter produce source maps?",
      global: false
    })
    .option('instrument', {
      default: true,
      type: 'boolean',
      description: 'should nyc handle instrumentation?',
      global: false
    })
    .option('hook-run-in-context', {
      default: true,
      type: 'boolean',
      description: 'should nyc wrap vm.runInContext?',
      global: false
    })
    .option('hook-run-in-this-context', {
      default: true,
      type: 'boolean',
      description: 'should nyc wrap vm.runInThisContext?',
      global: false
    })
    .option('show-process-tree', {
      describe: 'display the tree of spawned processes',
      default: false,
      type: 'boolean',
      global: false
    })
    .option('clean', {
      describe: 'should the .nyc_output folder be cleaned before executing tests',
      default: true,
      type: 'boolean',
      global: false
    })
    .option('temp-directory', {
      describe: 'directory to output raw coverage information to',
      default: './.nyc_output',
      global: false
    })
    .pkgConf('nyc', cwd)
    .example('$0 npm test', 'instrument your tests with coverage')
    .example('$0 --require babel-core/register npm test', 'instrument your tests with coverage and transpile with Babel')
    .example('$0 report --reporter=text-lcov', 'output lcov report after running your tests')
    .epilog('visit https://git.io/vHysA for list of available reporters')
    .boolean('h')
    .boolean('version')
    .config(config)
    .help(false)
    .version(false)
}

// we add operations that would make yargs
// exit post-hoc, allowing for a multi-pass
// parsing step.
Config.addCommandsAndHelp = function (yargs) {
  return yargs
    .help('h')
    .alias('h', 'help')
    .version()
    .command(require('../lib/commands/check-coverage'))
    .command(require('../lib/commands/instrument'))
    .command(require('../lib/commands/report'))
}

module.exports = Config
