Node.js: fs-extra
=================

`fs-extra` adds file system methods that aren't included in the native `fs` module. It is a drop in replacement for `fs`.

[![npm Package](https://img.shields.io/npm/v/fs-extra.svg?style=flat-square)](https://www.npmjs.org/package/fs-extra)
[![build status](https://api.travis-ci.org/jprichardson/node-fs-extra.svg)](http://travis-ci.org/jprichardson/node-fs-extra)
[![windows Build status](https://img.shields.io/appveyor/ci/jprichardson/node-fs-extra/master.svg?label=windows%20build)](https://ci.appveyor.com/project/jprichardson/node-fs-extra/branch/master)
[![downloads per month](http://img.shields.io/npm/dm/fs-extra.svg)](https://www.npmjs.org/package/fs-extra)
[![Coverage Status](https://img.shields.io/coveralls/jprichardson/node-fs-extra.svg)](https://coveralls.io/r/jprichardson/node-fs-extra)

<a href="https://github.com/feross/standard"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard JavaScript" width="100"></a>

**NOTE (2016-04-28):** Node v0.10 will be unsupported 2016-10-01. Node v0.12 will be unsupported on 2017-04-01.


Why?
----

I got tired of including `mkdirp`, `rimraf`, and `ncp` in most of my projects.




Installation
------------

    npm install --save fs-extra



Usage
-----

`fs-extra` is a drop in replacement for native `fs`. All methods in `fs` are unmodified and attached to `fs-extra`.

You don't ever need to include the original `fs` module again:

```js
var fs = require('fs') // this is no longer necessary
```

you can now do this:

```js
var fs = require('fs-extra')
```

or if you prefer to make it clear that you're using `fs-extra` and not `fs`, you may want
to name your `fs` variable `fse` like so:

```js
var fse = require('fs-extra')
```

you can also keep both, but it's redundant:

```js
var fs = require('fs')
var fse = require('fs-extra')
```

Sync vs Async
-------------
Most methods are async by default (they take a callback with an `Error` as first argument).

Sync methods on the other hand will throw if an error occurs.

Example:

```js
var fs = require('fs-extra')

fs.copy('/tmp/myfile', '/tmp/mynewfile', function (err) {
  if (err) return console.error(err)
  console.log("success!")
});

try {
  fs.copySync('/tmp/myfile', '/tmp/mynewfile')
  console.log("success!")
} catch (err) {
  console.error(err)
}
```


Methods
-------
- [copy](#copy)
- [copySync](#copy)
- [emptyDir](#emptydirdir-callback)
- [emptyDirSync](#emptydirdir-callback)
- [ensureFile](#ensurefilefile-callback)
- [ensureFileSync](#ensurefilefile-callback)
- [ensureDir](#ensuredirdir-callback)
- [ensureDirSync](#ensuredirdir-callback)
- [ensureLink](#ensurelinksrcpath-dstpath-callback)
- [ensureLinkSync](#ensurelinksrcpath-dstpath-callback)
- [ensureSymlink](#ensuresymlinksrcpath-dstpath-type-callback)
- [ensureSymlinkSync](#ensuresymlinksrcpath-dstpath-type-callback)
- [mkdirs](#mkdirsdir-callback)
- [mkdirsSync](#mkdirsdir-callback)
- [move](#movesrc-dest-options-callback)
- [outputFile](#outputfilefile-data-options-callback)
- [outputFileSync](#outputfilefile-data-options-callback)
- [outputJson](#outputjsonfile-data-options-callback)
- [outputJsonSync](#outputjsonfile-data-options-callback)
- [readJson](#readjsonfile-options-callback)
- [readJsonSync](#readjsonfile-options-callback)
- [remove](#removedir-callback)
- [removeSync](#removedir-callback)
- [walk](#walk)
- [writeJson](#writejsonfile-object-options-callback)
- [writeJsonSync](#writejsonfile-object-options-callback)


**NOTE:** You can still use the native Node.js methods. They are copied over to `fs-extra`.


### copy()

**copy(src, dest, [options], callback)**


Copy a file or directory. The directory can have contents. Like `cp -r`.

Options:
- clobber (boolean): overwrite existing file or directory
- dereference (boolean): dereference symlinks
- preserveTimestamps (boolean): will set last modification and access times to the ones of the original source files, default is `false`.
- filter: Function or RegExp to filter copied files. If function, return true to include, false to exclude. If RegExp, same as function, where `filter` is `filter.test`.

Sync: `copySync()`

Example:

```js
var fs = require('fs-extra')

fs.copy('/tmp/myfile', '/tmp/mynewfile', function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) // copies file

fs.copy('/tmp/mydir', '/tmp/mynewdir', function (err) {
  if (err) return console.error(err)
  console.log('success!')
}) // copies directory, even if it has subdirectories or files
```


### emptyDir(dir, [callback])

Ensures that a directory is empty. Deletes directory contents if the directory is not empty. If the directory does not exist, it is created. The directory itself is not deleted.

Alias: `emptydir()`

Sync: `emptyDirSync()`, `emptydirSync()`

Example:

```js
var fs = require('fs-extra')

// assume this directory has a lot of files and folders
fs.emptyDir('/tmp/some/dir', function (err) {
  if (!err) console.log('success!')
})
```


### ensureFile(file, callback)

Ensures that the file exists. If the file that is requested to be created is in directories that do not exist, these directories are created. If the file already exists, it is **NOT MODIFIED**.

Alias: `createFile()`

Sync: `createFileSync()`,`ensureFileSync()`


Example:

```js
var fs = require('fs-extra')

var file = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureFile(file, function (err) {
  console.log(err) // => null
  // file has now been created, including the directory it is to be placed in
})
```


### ensureDir(dir, callback)

Ensures that the directory exists. If the directory structure does not exist, it is created.

Sync: `ensureDirSync()`


Example:

```js
var fs = require('fs-extra')

var dir = '/tmp/this/path/does/not/exist'
fs.ensureDir(dir, function (err) {
  console.log(err) // => null
  // dir has now been created, including the directory it is to be placed in
})
```


### ensureLink(srcpath, dstpath, callback)

Ensures that the link exists. If the directory structure does not exist, it is created.

Sync: `ensureLinkSync()`


Example:

```js
var fs = require('fs-extra')

var srcpath = '/tmp/file.txt'
var dstpath = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureLink(srcpath, dstpath, function (err) {
  console.log(err) // => null
  // link has now been created, including the directory it is to be placed in
})
```


### ensureSymlink(srcpath, dstpath, [type], callback)

Ensures that the symlink exists. If the directory structure does not exist, it is created.

Sync: `ensureSymlinkSync()`


Example:

```js
var fs = require('fs-extra')

var srcpath = '/tmp/file.txt'
var dstpath = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureSymlink(srcpath, dstpath, function (err) {
  console.log(err) // => null
  // symlink has now been created, including the directory it is to be placed in
})
```


### mkdirs(dir, callback)

Creates a directory. If the parent hierarchy doesn't exist, it's created. Like `mkdir -p`.

Alias: `mkdirp()`

Sync: `mkdirsSync()` / `mkdirpSync()`


Examples:

```js
var fs = require('fs-extra')

fs.mkdirs('/tmp/some/long/path/that/prob/doesnt/exist', function (err) {
  if (err) return console.error(err)
  console.log("success!")
})

fs.mkdirsSync('/tmp/another/path')
```


### move(src, dest, [options], callback)

Moves a file or directory, even across devices.

Options:
- clobber (boolean): overwrite existing file or directory
- limit (number): number of concurrent moves, see ncp for more information

Example:

```js
var fs = require('fs-extra')

fs.move('/tmp/somefile', '/tmp/does/not/exist/yet/somefile', function (err) {
  if (err) return console.error(err)
  console.log("success!")
})
```


### outputFile(file, data, [options], callback)

Almost the same as `writeFile` (i.e. it [overwrites](http://pages.citebite.com/v2o5n8l2f5reb)), except that if the parent directory does not exist, it's created. `options` are what you'd pass to [`fs.writeFile()`](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback).

Sync: `outputFileSync()`


Example:

```js
var fs = require('fs-extra')
var file = '/tmp/this/path/does/not/exist/file.txt'

fs.outputFile(file, 'hello!', function (err) {
  console.log(err) // => null

  fs.readFile(file, 'utf8', function (err, data) {
    console.log(data) // => hello!
  })
})
```



### outputJson(file, data, [options], callback)

Almost the same as `writeJson`, except that if the directory does not exist, it's created.
`options` are what you'd pass to [`jsonFile.writeFile()`](https://github.com/jprichardson/node-jsonfile#writefilefilename-options-callback).

Alias: `outputJSON()`

Sync: `outputJsonSync()`, `outputJSONSync()`


Example:

```js
var fs = require('fs-extra')
var file = '/tmp/this/path/does/not/exist/file.txt'

fs.outputJson(file, {name: 'JP'}, function (err) {
  console.log(err) // => null

  fs.readJson(file, function(err, data) {
    console.log(data.name) // => JP
  })
})
```



### readJson(file, [options], callback)

Reads a JSON file and then parses it into an object. `options` are the same
that you'd pass to [`jsonFile.readFile`](https://github.com/jprichardson/node-jsonfile#readfilefilename-options-callback).

Alias: `readJSON()`

Sync: `readJsonSync()`, `readJSONSync()`


Example:

```js
var fs = require('fs-extra')

fs.readJson('./package.json', function (err, packageObj) {
  console.log(packageObj.version) // => 0.1.3
})
```

`readJsonSync()` can take a `throws` option set to `false` and it won't throw if the JSON is invalid. Example:

```js
var fs = require('fs-extra')
var file = path.join('/tmp/some-invalid.json')
var data = '{not valid JSON'
fs.writeFileSync(file, data)

var obj = fs.readJsonSync(file, {throws: false})
console.log(obj) // => null
```


### remove(dir, callback)

Removes a file or directory. The directory can have contents. Like `rm -rf`.

Sync: `removeSync()`


Examples:

```js
var fs = require('fs-extra')

fs.remove('/tmp/myfile', function (err) {
  if (err) return console.error(err)

  console.log('success!')
})

fs.removeSync('/home/jprichardson') //I just deleted my entire HOME directory.
```

### walk()

**walk(dir, [streamOptions])**

The function `walk()` from the module [`klaw`](https://github.com/jprichardson/node-klaw).

Returns a [Readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) that iterates
through every file and directory starting with `dir` as the root. Every `read()` or `data` event
returns an object with two properties: `path` and `stats`. `path` is the full path of the file and
`stats` is an instance of [fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats).

Streams 1 (push) example:

```js
var items = [] // files, directories, symlinks, etc
fse.walk(TEST_DIR)
  .on('data', function (item) {
    items.push(item.path)
  })
  .on('end', function () {
    console.dir(items) // => [ ... array of files]
  })
```

Streams 2 & 3 (pull) example:

```js
var items = [] // files, directories, symlinks, etc
fse.walk(TEST_DIR)
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

**See [`klaw` documentation](https://github.com/jprichardson/node-klaw) for more detailed usage.**


### writeJson(file, object, [options], callback)

Writes an object to a JSON file. `options` are the same that
you'd pass to [`jsonFile.writeFile()`](https://github.com/jprichardson/node-jsonfile#writefilefilename-options-callback).

Alias: `writeJSON()`

Sync: `writeJsonSync()`, `writeJSONSync()`

Example:

```js
var fs = require('fs-extra')
fs.writeJson('./package.json', {name: 'fs-extra'}, function (err) {
  console.log(err)
})
```


Third Party
-----------

### Promises

Use [Bluebird](https://github.com/petkaantonov/bluebird). See https://github.com/petkaantonov/bluebird/blob/master/API.md#promisification. `fs-extra` is
explicitly listed as supported.

```js
var Promise = require('bluebird')
var fs = Promise.promisifyAll(require('fs-extra'))
```

Or you can use the package [`fs-extra-promise`](https://github.com/overlookmotel/fs-extra-promise) that marries the two together.


### TypeScript

If you like TypeScript, you can use `fs-extra` with it: https://github.com/borisyankov/DefinitelyTyped/tree/master/fs-extra


### File / Directory Watching

If you want to watch for changes to files or directories, then you should use [chokidar](https://github.com/paulmillr/chokidar).


### Misc.

- [mfs](https://github.com/cadorn/mfs) - Monitor your fs-extra calls.



Hacking on fs-extra
-------------------

Wanna hack on `fs-extra`? Great! Your help is needed! [fs-extra is one of the most depended upon Node.js packages](http://nodei.co/npm/fs-extra.png?downloads=true&downloadRank=true&stars=true). This project
uses [JavaScript Standard Style](https://github.com/feross/standard) - if the name or style choices bother you,
you're gonna have to get over it :) If `standard` is good enough for `npm`, it's good enough for `fs-extra`.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

What's needed?
- First, take a look at existing issues. Those are probably going to be where the priority lies.
- More tests for edge cases. Specifically on different platforms. There can never be enough tests.
- Improve test coverage. See coveralls output for more info.
- After the directory walker is integrated, any function that needs to traverse directories like
`copy`, `remove`, or `mkdirs` should be built on top of it.

Note: If you make any big changes, **you should definitely file an issue for discussion first.**

### Running the Test Suite

fs-extra contains hundreds of tests.

- `npm run lint`: runs the linter ([standard](http://standardjs.com/))
- `npm run unit`: runs the unit tests
- `npm test`: runs both the linter and the tests


### Windows

If you run the tests on the Windows and receive a lot of symbolic link `EPERM` permission errors, it's
because on Windows you need elevated privilege to create symbolic links. You can add this to your Windows's
account by following the instructions here: http://superuser.com/questions/104845/permission-to-make-symbolic-links-in-windows-7
However, I didn't have much luck doing this.

Since I develop on Mac OS X, I use VMWare Fusion for Windows testing. I create a shared folder that I map to a drive on Windows.
I open the `Node.js command prompt` and run as `Administrator`. I then map the network drive running the following command:

    net use z: "\\vmware-host\Shared Folders"

I can then navigate to my `fs-extra` directory and run the tests.


Naming
------

I put a lot of thought into the naming of these functions. Inspired by @coolaj86's request. So he deserves much of the credit for raising the issue. See discussion(s) here:

* https://github.com/jprichardson/node-fs-extra/issues/2
* https://github.com/flatiron/utile/issues/11
* https://github.com/ryanmcgrath/wrench-js/issues/29
* https://github.com/substack/node-mkdirp/issues/17

First, I believe that in as many cases as possible, the [Node.js naming schemes](http://nodejs.org/api/fs.html) should be chosen. However, there are problems with the Node.js own naming schemes.

For example, `fs.readFile()` and `fs.readdir()`: the **F** is capitalized in *File* and the **d** is not capitalized in *dir*. Perhaps a bit pedantic, but they should still be consistent. Also, Node.js has chosen a lot of POSIX naming schemes, which I believe is great. See: `fs.mkdir()`, `fs.rmdir()`, `fs.chown()`, etc.

We have a dilemma though. How do you consistently name methods that perform the following POSIX commands: `cp`, `cp -r`, `mkdir -p`, and `rm -rf`?

My perspective: when in doubt, err on the side of simplicity. A directory is just a hierarchical grouping of directories and files. Consider that for a moment. So when you want to copy it or remove it, in most cases you'll want to copy or remove all of its contents. When you want to create a directory, if the directory that it's suppose to be contained in does not exist, then in most cases you'll want to create that too.

So, if you want to remove a file or a directory regardless of whether it has contents, just call `fs.remove(path)`. If you want to copy a file or a directory whether it has contents, just call `fs.copy(source, destination)`. If you want to create a directory regardless of whether its parent directories exist, just call `fs.mkdirs(path)` or `fs.mkdirp(path)`.


Credit
------

`fs-extra` wouldn't be possible without using the modules from the following authors:

- [Isaac Shlueter](https://github.com/isaacs)
- [Charlie McConnel](https://github.com/avianflu)
- [James Halliday](https://github.com/substack)
- [Andrew Kelley](https://github.com/andrewrk)




License
-------

Licensed under MIT

Copyright (c) 2011-2016 [JP Richardson](https://github.com/jprichardson)

[1]: http://nodejs.org/docs/latest/api/fs.html


[jsonfile]: https://github.com/jprichardson/node-jsonfile
