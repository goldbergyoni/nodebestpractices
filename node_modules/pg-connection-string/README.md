pg-connection-string
====================

[![Build Status](https://travis-ci.org/iceddev/pg-connection-string.svg?branch=master)](https://travis-ci.org/iceddev/pg-connection-string)

Functions for dealing with a PostgresSQL connection string

`parse` method taken from [node-postgres](https://github.com/brianc/node-postgres.git)
Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
MIT License

## Usage

```js
var parse = require('pg-connection-string').parse;

var config = parse('postgres://someuser:somepassword@somehost:381/sometable')
```
