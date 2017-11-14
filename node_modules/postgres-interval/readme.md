# postgres-interval [![Build Status](https://travis-ci.org/bendrucker/postgres-interval.svg?branch=master)](https://travis-ci.org/bendrucker/postgres-interval)

> Parse Postgres interval columns


## Install

```
$ npm install --save postgres-interval
```


## Usage

```js
var parse = require('postgres-interval')
var interval = parse('01:02:03')
//=> {hours: 1, minutes: 2, seconds: 3}
interval.toPostgres()
// 3 seconds 2 minutes 1 hours
interval.toISO()
// P0Y0M0DT1H2M3S
```

## API

#### `parse(pgInterval)` -> `interval`

##### pgInterval

*Required*  
Type: `string`

A Postgres interval string.

#### `interval.toPostgres()` -> `string`

Returns an interval string. This allows the interval object to be passed into prepared statements.

#### `interval.toISO()` -> `string`

Returns an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) compliant string.

## License

MIT © [Ben Drucker](http://bendrucker.me)
