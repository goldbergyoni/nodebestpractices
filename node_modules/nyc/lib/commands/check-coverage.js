var NYC
try {
  NYC = require('../../index.covered.js')
} catch (e) {
  NYC = require('../../index.js')
}

exports.command = 'check-coverage'

exports.describe = 'check whether coverage is within thresholds provided'

exports.builder = function (yargs) {
  yargs
    .option('branches', {
      default: 0,
      description: 'what % of branches must be covered?'
    })
    .option('functions', {
      default: 0,
      description: 'what % of functions must be covered?'
    })
    .option('lines', {
      default: 90,
      description: 'what % of lines must be covered?'
    })
    .option('statements', {
      default: 0,
      description: 'what % of statements must be covered?'
    })
    .option('per-file', {
      default: false,
      description: 'check thresholds per file'
    })
    .example('$0 check-coverage --lines 95', "check whether the JSON in nyc's output folder meets the thresholds provided")
}

exports.handler = function (argv) {
  process.env.NYC_CWD = process.cwd()

  ;(new NYC(argv)).checkCoverage({
    lines: argv.lines,
    functions: argv.functions,
    branches: argv.branches,
    statements: argv.statements
  }, argv['per-file'])
}
