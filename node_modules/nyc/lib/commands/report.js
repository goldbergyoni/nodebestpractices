var NYC
try {
  NYC = require('../../index.covered.js')
} catch (e) {
  NYC = require('../../index.js')
}

exports.command = 'report'

exports.describe = 'run coverage report for .nyc_output'

exports.builder = function (yargs) {
  return yargs
    .option('reporter', {
      alias: 'r',
      describe: 'coverage reporter(s) to use',
      default: 'text'
    })
    .option('report-dir', {
      describe: 'directory to output coverage reports in',
      default: 'coverage'
    })
    .option('temp-directory', {
      describe: 'directory to read raw coverage information from',
      default: './.nyc_output'
    })
    .option('show-process-tree', {
      describe: 'display the tree of spawned processes',
      default: false,
      type: 'boolean'
    })
    .example('$0 report --reporter=lcov', 'output an HTML lcov report to ./coverage')
}

exports.handler = function (argv) {
  process.env.NYC_CWD = process.cwd()
  var nyc = new NYC(argv)
  nyc.report()
}
