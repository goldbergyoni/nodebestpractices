#!/usr/bin/env node

'use strict';

/**
 * Module dependencies.
 */
var program = require('commander');
var fs = require('fs');
var path = require('path');
var swaggerJSDoc = require('../');
var pkg = require('../package.json');
var jsYaml = require('js-yaml');
var chokidar = require('chokidar');

// Useful input.
var input = process.argv.slice(2);
// The spec, following a convention.
var output = 'swagger.json';

/**
 * Creates a swagger specification from a definition and a set of files.
 * @function
 * @param {object} swaggerDefinition - The swagger definition object.
 * @param {array} apis - List of files to extract documentation from.
 * @param {array} output - Name the output file.
 */
function createSpecification(swaggerDefinition, apis, output) {
  // Options for the swagger docs
  var options = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: apis,
  };

  // Initialize swagger-jsdoc -> returns validated JSON or YAML swagger spec
  var swaggerSpec;
  var ext = path.extname(output);

  if (ext === '.yml' || ext === '.yaml') {
    swaggerSpec = jsYaml.dump(swaggerJSDoc(options));
  } else {
    swaggerSpec = JSON.stringify(swaggerJSDoc(options), null, 2);
  }

  fs.writeFile(output, swaggerSpec, function writeSpecification(err) {
    if (err) {
      throw err;
    }
    console.log('Swagger specification is ready.');
  });
}

program
  .version(pkg.version)
  .usage('[options] <path ...>')
  .option('-d, --definition <swaggerDef.js>', 'Input swagger definition.')
  .option('-o, --output [swaggerSpec.json]', 'Output swagger specification.')
  .option('-w, --watch', 'Whether or not to listen for continous changes.')
  .parse(process.argv);

// If no arguments provided, display help menu.
if (!input.length) {
  program.help();
}

// Require a definition file
if (!program.definition) {
  console.log('Definition file is required.');
  console.log('You can do that, for example: ');
  console.log('$ swag-jsdoc -d swaggerDef.js ' + input.join(' '));
  program.help();
  process.exit(1);
}

// Override default output file if provided.
if (program.output) {
  output = program.output;
}

// Definition file is specified:
fs.readFile(program.definition, 'utf-8', function(err, data) {
  if (err || data === undefined) {
    return console.log('Definition file provided is not good.');
  }

  // Check whether the definition file is actually a usable .js file
  if (path.extname(program.definition) !== '.js' &&
    path.extname(program.definition) !== '.json'
  ) {
    console.log('Format as a module, it will be imported with require().');
    return console.log('Definition file should be .js or .json');
  }

  // Get an object of the definition file configuration.
  var swaggerDefinition = require(path.resolve(program.definition));

  // Check for info object in the definition.
  if (!swaggerDefinition.hasOwnProperty('info')) {
    console.log('Definition file should contain an info object!');
    return console.log('More at http://swagger.io/specification/#infoObject');
  }

  // Check for title and version properties in the info object.
  if (!swaggerDefinition.info.hasOwnProperty('title') ||
    !swaggerDefinition.info.hasOwnProperty('version')
  ) {
    console.log('The title and version properties are required!');
    return console.log('More at http://swagger.io/specification/#infoObject');
  }

  // Continue only if arguments provided.
  if (!swaggerDefinition.apis && !program.args.length) {
    console.log('You must provide sources for reading API files.');
    // jscs:disable maximumLineLength
    return console.log('Either add filenames as arguments, or add an api key in your definitions file.');
  }

  // If there's no argument passed, but the user has defined Apis in
  // the definition file, pass them them onwards.
  if (program.args.length === 0 &&
    swaggerDefinition.apis &&
    swaggerDefinition.apis instanceof Array) {
    program.args = swaggerDefinition.apis;
  }

  // If watch flag is turned on, listen for changes.
  if (program.watch) {
    var watcher = chokidar.watch(program.args, {
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100,
      },
    });

    watcher.on('ready', function startMessage() {
      console.log('Listening for changes ...');
    });

    watcher.on('change', function detectChange(path) {
      console.log('Change detected in ' + path);
    });

    watcher.on('error', function catchErr(err) {
      return console.error(err);
    });

    watcher.on('all', function regenerateSpec() {
      createSpecification(swaggerDefinition, program.args, output);
    });
  }
  // Just create the specification.
  else {
    createSpecification(swaggerDefinition, program.args, output);
  }
});
