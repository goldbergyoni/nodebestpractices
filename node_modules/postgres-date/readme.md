# postgres-date [![Build Status](https://travis-ci.org/bendrucker/postgres-date.svg?branch=master)](https://travis-ci.org/bendrucker/postgres-date)

> Postgres date column parser


## Install

```
$ npm install --save postgres-date
```


## Usage

```js
var parse = require('postgres-date')
parse('2011-01-23 22:15:51Z')
// => 2011-01-23T22:15:51.000Z
```

## API

#### `parse(isoDate)` -> `date`

##### isoDate

*Required*  
Type: `string`

A date string from Postgres.

## License

MIT © [Ben Drucker](http://bendrucker.me)
