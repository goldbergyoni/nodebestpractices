# Eslint Watch
[![](https://img.shields.io/badge/release-notes-blue.svg)](https://github.com/rizowski/eslint-watch/releases/latest)
[![Build Status](https://travis-ci.org/rizowski/eslint-watch.svg?branch=master)](https://travis-ci.org/rizowski/eslint-watch)
[![Coverage Status](https://coveralls.io/repos/github/rizowski/eslint-watch/badge.svg?branch=master)](https://coveralls.io/github/rizowski/eslint-watch?branch=master)
[![Code Climate](https://codeclimate.com/github/rizowski/eslint-watch/badges/gpa.svg)](https://codeclimate.com/github/rizowski/eslint-watch)
[![Reference Status](https://www.versioneye.com/nodejs/eslint-watch/reference_badge.svg?style=flat-square)](https://www.versioneye.com/nodejs/eslint-watch/references)

Donate:
  - (Ƀitcoin): `13V7iDxBhnFASw7avGGRk64ExDGTirhx37`
  - (PayPal): [https://www.paypal.me/rizowski](https://www.paypal.me/rizowski)

Don't want to import Webpack, Grunt, or some other task package into your project? Then this is the tool for you.
Eslint Watch is a simple command line tool that wraps [Eslint](https://www.npmjs.com/package/eslint). Eslint Watch provides file watching and command line improvements to the currently existing Eslint command line interface. All commands that Eslint offers can be used with the addition of a watch command and a couple new templating views. Don't believe me? Checkout the [code](https://github.com/rizowski/eslint-watch) or some of the features below!

## Requirements
To use this tool we require eslint to be installed on your project. The versions supported are:
  - `"eslint": ">=0.19.0 <5.0.0"`
  - `node >= 4.0.0`
    - Note: Node v8 could be temperamental and is not currently tested for this project.

## Getting started
To run eslint-watch without the global install, make an npm script.

### NPM 2
  - `npm i -g eslint-watch` or `npm i -D eslint-watch`

### NPM 3
  - `npm i -g eslint eslint-watch` or `npm i -D eslint eslint-watch`

## Features added
  - Watching
    - Multi-directory watching
    - Runs a full directory lint before the watch
    - Press `enter` to rerun directory lint while watching
  - Eslint Overrides
    - Default directory linting. A directory is no longer required.
  - [Simple formatters](#new-formatters)
    - simple-detail (default)
    - simple
    - simple-success

## Options/Usage
Eslint-Watch replaces only a few commands that it needs to take control over. All other commands are forwarded to Eslint unmodified. Please refer to their help text for full command support as the one provided below might not be up to date with the latest Eslint changes.
```
esw [options] [file.js ...] [dir ...]

Options:
  -h, --help                   Show help
  -f, --format String          Use a specific output format - default: simple-detail
  -w, --watch                  Enable file watch
  --changed                    Enables single file linting while watch is enabled
  --clear                      Clear terminal when running lint
  --esw-version                Prints Eslint-Watch's Version
  -c, --config path::String    Use configuration from this file or shareable config
  --no-eslintrc                Disable use of configuration from .eslintrc
  --env [String]               Specify environments
  --ext [String]               Specify JavaScript file extensions - default: .js
  --global [String]            Define global variables
  --parser String              Specify the parser to be used
  --parser-options Object      Specify parser options
  --cache                      Only check changed files - default: false
  --cache-file path::String    Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory
  --rulesdir [path::String]    Use additional rules from this directory
  --plugin [String]            Specify plugins
  --rule Object                Specify rules
  --ignore-path path::String   Specify path of ignore file
  --no-ignore                  Disable use of ignore files and patterns
  --ignore-pattern [String]    Pattern of files to ignore (in addition to those in .eslintignore)
  --stdin                      Lint code provided on <STDIN> - default: false
  --stdin-filename String      Specify filename to process STDIN as
  --quiet                      Report errors only - default: false
  --max-warnings Int           Number of warnings to trigger nonzero exit code - default: -1
  -o, --output-file path::String  Specify file to write report to
  --color, --no-color          Force enabling/disabling of color
  --init                       Run config initialization wizard - default: false
  --fix                        Automatically fix problems
  --debug                      Output debugging information
  -v, --version                Output the version number
  --no-inline-config           Prevent comments from changing config or rules
  --print-config path::String  Print the configuration for the given file
```

### Other Options

Eslint-Watch uses [`chokidar`](https://github.com/paulmillr/chokidar) under the hood to watch for changes. Chokidar can be configured to poll for changes (this might be necessary if you are running Eslint-Watch inside a VM or Container) by setting the `CHOKIDAR_USEPOLLING` environment variable to `true`.

## Functionality
[![Simple lint and watch](https://thumbs.gfycat.com/AgreeableForsakenIvorygull-size_restricted.gif)](https://fat.gfycat.com/AgreeableForsakenIvorygull.gif)

## New Formatters
[![simple simple-success simple-detail](http://i.imgur.com/m757NwM.png)](http://i.imgur.com/m757NwM.png)
