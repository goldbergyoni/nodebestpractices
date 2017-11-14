Node.js - klaw
==============

A Node.js file system walker extracted from [fs-extra](https://github.com/jprichardson/node-fs-extra).

[![npm Package](https://img.shields.io/npm/v/klaw.svg?style=flat-square)](https://www.npmjs.org/package/klaw)
[![build status](https://api.travis-ci.org/jprichardson/node-klaw.svg)](http://travis-ci.org/jprichardson/node-klaw)
[![windows build status](https://ci.appveyor.com/api/projects/status/github/jprichardson/node-klaw?branch=master&svg=true)](https://ci.appveyor.com/project/jprichardson/node-klaw/branch/master)

<!-- [![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard) -->
<a href="http://standardjs.com"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard" width="100"></a>

Install
-------

    npm i --save klaw


Name
----

`klaw` is `walk` backwards :p


Usage
-----

### klaw(directory, [options])

Returns a [Readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) that iterates
through every file and directory starting with `dir` as the root. Every `read()` or `data` event
returns an object with two properties: `path` and `stats`. `path` is the full path of the file and
`stats` is an instance of [fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats).

- `directory`: The directory to recursively walk. Type `string`.
- `options`: [Readable stream options](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) and
the following:
  - `queueMethod` (`string`, default: `'shift'`): Either `'shift'` or `'pop'`. On `readdir()` array, call either `shift()` or `pop()`.
  - `pathSorter` (`function`, default: `undefined`): Sorting [function for Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
  - `fs` (`object`, default: `require('fs')`): Use this to hook into the `fs` methods or to use [`mock-fs`](https://github.com/tschaub/mock-fs)
  - `filter` (`function`, default: `undefined`): Filtering [function for Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Streams 1 (push) example:**

```js
var klaw = require('klaw')

var items = [] // files, directories, symlinks, etc
klaw('/some/dir')
  .on('data', function (item) {
    items.push(item.path)
  })
  .on('end', function () {
    console.dir(items) // => [ ... array of files]
  })
```

**Streams 2 & 3 (pull) example:**

```js
var klaw = require('klaw')

var items = [] // files, directories, symlinks, etc
klaw('/some/dir')
  .on('readable', function () {
    var item
    while ((item = this.read())) {
      items.push(item.path)
    }
  })
  .on('end', function () {
    console.dir(items) // => [ ... array of files]
  })
```

If you're not sure of the differences on Node.js streams 1, 2, 3 then I'd
recommend this resource as a good starting point: https://strongloop.com/strongblog/whats-new-io-js-beta-streams3/.


### Error Handling

Listen for the `error` event.

Example:

```js
var klaw = require('klaw')
klaw('/some/dir')
  .on('readable', function () {
    var item
    while ((item = this.read())) {
      // do something with the file
    }
  })
  .on('error', function (err, item) {
    console.log(err.message)
    console.log(item.path) // the file the error occurred on
  })
  .on('end', function () {
    console.dir(items) // => [ ... array of files]
  })

```


### Aggregation / Filtering / Executing Actions (Through Streams)

On many occasions you may want to filter files based upon size, extension, etc.
Or you may want to aggregate stats on certain file types. Or maybe you want to
perform an action on certain file types.

You should use the module [`through2`](https://www.npmjs.com/package/through2) to easily
accomplish this.

Install `through2`:

    npm i --save through2


**Example (skipping directories):**

```js
var klaw = require('klaw')
var through2 = require('through2')

var excludeDirFilter = through2.obj(function (item, enc, next) {
  if (!item.stats.isDirectory()) this.push(item)
  next()
})

var items = [] // files, directories, symlinks, etc
klaw('/some/dir')
  .pipe(excludeDirFilter)
  .on('data', function (item) {
    items.push(item.path)
  })
  .on('end', function () {
    console.dir(items) // => [ ... array of files without directories]
  })

```
**Example (ignore hidden directories):**
```js
var klaw = require('klaw')
var path = require('path')

var filterFunc = function(item){
  var basename = path.basename(item)
  return basename === '.' || basename[0] !== '.'
}

klaw('/some/dir', { filter : filterFunc  })
  .on('data', function(item){
    // only items of none hidden folders will reach here
  })
    
```

**Example (totaling size of PNG files):**

```js
var klaw = require('klaw')
var path = require('path')
var through2 = require('through2')

var totalPngsInBytes = 0
var aggregatePngSize = through2.obj(function (item, enc, next) {
  if (path.extname(item.path) === '.png') {
    totalPngsInBytes += item.stats.size
  }
  this.push(item)
  next()
})

klaw('/some/dir')
  .pipe(aggregatePngSize)
  .on('data', function (item) {
    items.push(item.path)
  })
  .on('end', function () {
    console.dir(totalPngsInBytes) // => total of all pngs (bytes)
  })
```


**Example (deleting all .tmp files):**

```js
var fs = require('fs')
var klaw = require('klaw')
var through2 = require('through2')

var deleteAction = through2.obj(function (item, enc, next) {
  this.push(item)

  if (path.extname(item.path) === '.tmp') {
    item.deleted = true
    fs.unklink(item.path, next)
  } else {
    item.deleted = false
    next()
  }  
})

var deletedFiles = []
klaw('/some/dir')
  .pipe(deleteAction)
  .on('data', function (item) {
    if (!item.deleted) return
    deletedFiles.push(item.path)
  })
  .on('end', function () {
    console.dir(deletedFiles) // => all deleted files
  })
```

You can even chain a bunch of these filters and aggregators together. By using
multiple pipes.

**Example (using multiple filters / aggregators):**

```js
klaw('/some/dir')
  .pipe(filterCertainFiles)
  .pipe(deleteSomeOtherFiles)
  .on('end', function () {
    console.log('all done!')
  })
```

**Example passing (piping) through errors:**

Node.js does not `pipe()` errors. This means that the error on one stream, like
`klaw` will not pipe through to the next. If you want to do this, do the following:

```js
var klaw = require('klaw')
var through2 = require('through2')

var excludeDirFilter = through2.obj(function (item, enc, next) {
  if (!item.stats.isDirectory()) this.push(item)
  next()
})

var items = [] // files, directories, symlinks, etc
klaw('/some/dir')
  .on('error', function (err) { excludeDirFilter.emit('error', err) }) // forward the error on
  .pipe(excludeDirFilter)
  .on('data', function (item) {
    items.push(item.path)
  })
  .on('end', function () {
    console.dir(items) // => [ ... array of files without directories]
  })
```


### Searching Strategy

Pass in options for `queueMethod` and `pathSorter` to affect how the file system
is recursively iterated. See the code for more details, it's less than 50 lines :)



License
-------

MIT

Copyright (c) 2015 [JP Richardson](https://github.com/jprichardson)
