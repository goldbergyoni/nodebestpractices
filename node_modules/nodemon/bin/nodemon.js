#!/usr/bin/env node
'use strict';
var cli = require('../lib/cli');
var nodemon = require('../lib/');
var options = cli.parse(process.argv);

nodemon(options);

var fs = require('fs');

// checks for available update and returns an instance
var defaults = require('lodash.defaults');
var pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

require('update-notifier')({
  pkg: defaults(pkg, { version: '0.0.0' }),
}).notify();
