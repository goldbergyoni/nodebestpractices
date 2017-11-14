# winston

[![Join the chat at https://gitter.im/winstonjs/winston](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/winstonjs/winston?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Version npm](https://img.shields.io/npm/v/winston.svg?style=flat-square)](https://www.npmjs.com/package/winston)[![npm Downloads](https://img.shields.io/npm/dm/winston.svg?style=flat-square)](https://www.npmjs.com/package/winston)[![Build Status](https://img.shields.io/travis/winstonjs/winston/master.svg?style=flat-square)](https://travis-ci.org/winstonjs/winston)[![Dependencies](https://img.shields.io/david/winstonjs/winston.svg?style=flat-square)](https://david-dm.org/winstonjs/winston)

[![NPM](https://nodei.co/npm/winston.png?downloads=true&downloadRank=true)](https://nodei.co/npm/winston/)

A multi-transport async logging library for node.js. <span style="font-size:28px; font-weight:bold;">&quot;CHILL WINSTON! ... I put it in the logs.&quot;</span>

## Motivation
Winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.

There also seemed to be a lot of logging libraries out there that coupled their implementation of logging (i.e. how the logs are stored / indexed) to the API that they exposed to the programmer. This library aims to decouple those parts of the process to make it more flexible and extensible.

## Installation

```bashp
npm install winston
```

## Usage
There are two different ways to use winston: directly via the default logger, or by instantiating your own Logger. The former is merely intended to be a convenient shared logger to use throughout your application if you so choose.

* [Logging](#logging)
  * [Using the Default Logger](#using-the-default-logger)
  * [Instantiating your own Logger](#instantiating-your-own-logger)
  * [Logging with Metadata](#logging-with-metadata)
  * [String interpolation](#string-interpolation)
* [Transports](https://github.com/winstonjs/winston/blob/master/docs/transports.md)
  * [Multiple transports of the same type](#multiple-transports-of-the-same-type)
* [Profiling](#profiling)
* [Streaming Logs](#streaming-logs)
* [Querying Logs](#querying-logs)
* [Exceptions](#exceptions)
  * [Handling Uncaught Exceptions with winston](#handling-uncaught-exceptions-with-winston)
  * [To Exit or Not to Exit](#to-exit-or-not-to-exit)
* [Logging Levels](#logging-levels)
  * [Using Logging Levels](#using-logging-levels)
  * [Using Custom Logging Levels](#using-custom-logging-levels)
* [Further Reading](#further-reading)
  * [Events and Callbacks in Winston](#events-and-callbacks-in-winston)
  * [Working with multiple Loggers in winston](#working-with-multiple-loggers-in-winston)
  * [Using winston in a CLI tool](#using-winston-in-a-cli-tool)
  * [Filters and Rewriters](#filters-and-rewriters)
  * [Adding Custom Transports](#adding-custom-transports)
* [Installation](#installation)
* [Run Tests](#run-tests)


## Logging

Logging levels in `winston` conform to the severity ordering specified by [RFC5424](https://tools.ietf.org/html/rfc5424): _severity of all levels is assumed to be numerically **ascending** from most important to least important._

### Using the Default Logger
The default logger is accessible through the winston module directly. Any method that you could call on an instance of a logger is available on the default logger:

``` js
  var winston = require('winston');

  winston.log('info', 'Hello distributed log files!');
  winston.info('Hello again distributed logs');

  winston.level = 'debug';
  winston.log('debug', 'Now my debug messages are written to console!');
```

By default, only the Console transport is set on the default logger. You can add or remove transports via the add() and remove() methods:

``` js
  winston.add(winston.transports.File, { filename: 'somefile.log' });
  winston.remove(winston.transports.Console);
```

Or do it with one call to configure():

``` js
  winston.configure({
    transports: [
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });
```

For more documentation about working with each individual transport supported by Winston see the [Winston Transports](docs/transports.md) document.

### Instantiating your own Logger
If you would prefer to manage the object lifetime of loggers you are free to instantiate them yourself:

``` js
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });
```

You can work with this logger in the same way that you work with the default logger:

``` js
  //
  // Logging
  //
  logger.log('info', 'Hello distributed log files!');
  logger.info('Hello again distributed logs');

  //
  // Adding / Removing Transports
  //   (Yes It's chainable)
  //
  logger
    .add(winston.transports.File)
    .remove(winston.transports.Console);
```

You can also wholesale reconfigure a `winston.Logger` instance using the `configure` method:

``` js
  var logger = new winston.Logger({
    level: 'info',
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });

  //
  // Replaces the previous transports with those in the
  // new configuration wholesale.
  //
  logger.configure({
    level: 'verbose',
    transports: [
      new (require('winston-daily-rotate-file'))(opts)
    ]
  });
```


### Logging with Metadata
In addition to logging string messages, winston will also optionally log additional JSON metadata objects. Adding metadata is simple:

``` js
  winston.log('info', 'Test Log Message', { anything: 'This is metadata' });
```

The way these objects are stored varies from transport to transport (to best support the storage mechanisms offered). Here's a quick summary of how each transports handles metadata:

1. __Console:__ Logged via util.inspect(meta)
2. __File:__ Logged via util.inspect(meta)

## Multiple transports of the same type

It is possible to use multiple transports of the same type e.g. `winston.transports.File` by passing in a custom `name` when you construct the transport.

``` js
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'filelog-info.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error'
    })
  ]
});
```

If you later want to remove one of these transports you can do so by using the string name. e.g.:

``` js
logger.remove('info-file');
```

In this example, one could also remove by passing in the instance of the Transport itself. e.g. this is equivalent to the string example above:

``` js
// Notice it was first in the Array above
var infoFile = logger.transports[0];
logger.remove(infoFile);
```

## Profiling
In addition to logging messages and metadata, winston also has a simple profiling mechanism implemented for any logger:

``` js
  //
  // Start profile of 'test'
  // Remark: Consider using Date.now() or winston.startTimer() with async operations
  //
  winston.profile('test');

  setTimeout(function () {
    //
    // Stop profile of 'test'. Logging will now take place:
    //   "17 Jan 21:00:00 - info: test duration=1000ms"
    //
    winston.profile('test');
  }, 1000);
```

Also you can start a timer and keep a reference that you can call .done() on
``` js
   // Returns an object corresponding to a specific timing. When done
   // is called the timer will finish and log the duration. e.g.:
   //
   var timer = winston.startTimer()
   setTimeout(function(){
     timer.done("Logging message");
   }, 1000);
```

All profile messages are set to 'info' level by default and both message and metadata are optional. There are no plans in the Roadmap to make this configurable, but I'm open to suggestions / issues.

### String interpolation
The `log` method provides the same string interpolation methods like [`util.format`][10].

This allows for the following log messages.
``` js
logger.log('info', 'test message %s', 'my string');
// info: test message my string

logger.log('info', 'test message %d', 123);
// info: test message 123

logger.log('info', 'test message %j', {number: 123}, {});
// info: test message {"number":123}
// meta = {}

logger.log('info', 'test message %s, %s', 'first', 'second', {number: 123});
// info: test message first, second
// meta = {number: 123}

logger.log('info', 'test message', 'first', 'second', {number: 123});
// info: test message first second
// meta = {number: 123}

logger.log('info', 'test message %s, %s', 'first', 'second', {number: 123}, function(){});
// info: test message first, second
// meta = {number: 123}
// callback = function(){}

logger.log('info', 'test message', 'first', 'second', {number: 123}, function(){});
// info: test message first second
// meta = {number: 123}
// callback = function(){}
```





## Querying Logs
Winston supports querying of logs with Loggly-like options. [See Loggly Search API](https://www.loggly.com/docs/api-retrieving-data/).
Specifically: `File`, `Couchdb`, `Redis`, `Loggly`, `Nssocket`, and `Http`.

``` js
  var options = {
    from: new Date - 24 * 60 * 60 * 1000,
    until: new Date,
    limit: 10,
    start: 0,
    order: 'desc',
    fields: ['message']
  };

  //
  // Find items logged between today and yesterday.
  //
  winston.query(options, function (err, results) {
    if (err) {
      throw err;
    }

    console.log(results);
  });
```

## Streaming Logs
Streaming allows you to stream your logs back from your chosen transport.

``` js
  //
  // Start at the end.
  //
  winston.stream({ start: -1 }).on('log', function(log) {
    console.log(log);
  });
```

## Exceptions

### Handling Uncaught Exceptions with winston

With `winston`, it is possible to catch and log `uncaughtException` events from your process. There are two distinct ways of enabling this functionality either through the default winston logger or your own logger instance.

If you want to use this feature with the default logger, simply call `.handleExceptions()` with a transport instance.

``` js
  //
  // You can add a separate exception logger by passing it to `.handleExceptions`
  //
  winston.handleExceptions(new winston.transports.File({ filename: 'path/to/exceptions.log' }));

  //
  // Alternatively you can set `.handleExceptions` to true when adding transports to winston.
  // You can use the `.humanReadableUnhandledException` option to get more readable exceptions.
  //
  winston.add(winston.transports.File, {
    filename: 'path/to/all-logs.log',
    handleExceptions: true,
    humanReadableUnhandledException: true
  });

  //
  // Exceptions can also be handled by multiple transports.
  //
  winston.handleExceptions([ transport1, transport2, ... ]);
```

### To Exit or Not to Exit

By default, winston will exit after logging an uncaughtException. If this is not the behavior you want,
set `exitOnError = false`

``` js
  var logger = new (winston.Logger)({ exitOnError: false });

  //
  // or, like this:
  //
  logger.exitOnError = false;
```

When working with custom logger instances, you can pass in separate transports to the `exceptionHandlers` property or set `.handleExceptions` on any transport.

Example 1

``` js
  var logger = new (winston.Logger)({
    transports: [
      new winston.transports.File({ filename: 'path/to/all-logs.log' })
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: 'path/to/exceptions.log' })
    ]
  });
```

Example 2

``` js
var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      json: true
    })
  ],
  exitOnError: false
});
```

The `exitOnError` option can also be a function to prevent exit on only certain types of errors:

``` js
  function ignoreEpipe(err) {
    return err.code !== 'EPIPE';
  }

  var logger = new (winston.Logger)({ exitOnError: ignoreEpipe });

  //
  // or, like this:
  //
  logger.exitOnError = ignoreEpipe;
```

## Logging Levels

Each `level` is given a specific integer priority. The higher the priority the more important the message is considered to be, and the lower the corresponding integer priority.  For example, `npm` logging levels are prioritized from 0 to 5 (highest to lowest):

``` js
{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
```

Similarly, as specified exactly in RFC5424 the `syslog` levels are prioritized from 0 to 7 (highest to lowest).

```js
{ emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 }
```

If you do not explicitly define the levels that `winston` should use the `npm` levels above will be used.

### Using Logging Levels
Setting the level for your logging message can be accomplished in one of two ways. You can pass a string representing the logging level to the log() method or use the level specified methods defined on every winston Logger.

``` js
  //
  // Any logger instance
  //
  logger.log('silly', "127.0.0.1 - there's no place like home");
  logger.log('debug', "127.0.0.1 - there's no place like home");
  logger.log('verbose', "127.0.0.1 - there's no place like home");
  logger.log('info', "127.0.0.1 - there's no place like home");
  logger.log('warn', "127.0.0.1 - there's no place like home");
  logger.log('error', "127.0.0.1 - there's no place like home");
  logger.info("127.0.0.1 - there's no place like home");
  logger.warn("127.0.0.1 - there's no place like home");
  logger.error("127.0.0.1 - there's no place like home");

  //
  // Default logger
  //
  winston.log('info', "127.0.0.1 - there's no place like home");
  winston.info("127.0.0.1 - there's no place like home");
```

`winston` allows you to define a `level` property on each transport which specifies the **maximum** level of messages that a transport should log. For example, using the `npm` levels you could log only `error` messages to the console and everything `info` and below to a file (which includes `error` messages):

``` js
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'error' }),
      new (winston.transports.File)({
        filename: 'somefile.log',
        level: 'info'
      })
    ]
  });
```

You may also dynamically change the log level of a transport:

``` js
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'warn' }),
      new (winston.transports.File)({ filename: 'somefile.log', level: 'error' })
    ]
  });
  logger.debug("Will not be logged in either transport!");
  logger.transports.console.level = 'debug';
  logger.transports.file.level = 'verbose';
  logger.verbose("Will be logged in both transports!");
```

As of 0.2.0, winston supports customizable logging levels, defaulting to [npm][0] style logging levels. Changing logging levels is easy:

``` js
  //
  // Change levels on the default winston logger
  //
  winston.setLevels(winston.config.syslog.levels);

  //
  // Change levels on an instance of a logger
  //
  logger.setLevels(winston.config.syslog.levels);
```

Calling `.setLevels` on a logger will remove all of the previous helper methods for the old levels and define helper methods for the new levels. Thus, you should be careful about the logging statements you use when changing levels. For example, if you ran this code after changing to the syslog levels:

``` js
  //
  // Logger does not have 'silly' defined since that level is not in the syslog levels
  //
  logger.silly('some silly message');
```

### Using Custom Logging Levels
In addition to the predefined `npm` and `syslog` levels available in Winston, you can also choose to define your own:

``` js
  var myCustomLevels = {
    levels: {
      foo: 0,
      bar: 1,
      baz: 2,
      foobar: 3
    },
    colors: {
      foo: 'blue',
      bar: 'green',
      baz: 'yellow',
      foobar: 'red'
    }
  };

  var customLevelLogger = new (winston.Logger)({ levels: myCustomLevels.levels });
  customLevelLogger.foobar('some foobar level-ed message');
```

Although there is slight repetition in this data structure, it enables simple encapsulation if you do not want to have colors. If you do wish to have colors, in addition to passing the levels to the Logger itself, you must make winston aware of them:

``` js
  //
  // Make winston aware of these colors
  //
  winston.addColors(myCustomLevels.colors);
```

This enables transports with the 'colorize' option set to appropriately color the output of custom levels.

## Further Reading

### Events and Callbacks in Winston
Each instance of winston.Logger is also an instance of an [EventEmitter][1]. A log event will be raised each time a transport successfully logs a message:

``` js
  logger.on('logging', function (transport, level, msg, meta) {
    // [msg] and [meta] have now been logged at [level] to [transport]
  });

  logger.info('CHILL WINSTON!', { seriously: true });
```

It is also worth mentioning that the logger also emits an 'error' event which you should handle or suppress if you don't want unhandled exceptions:

``` js
  //
  // Handle errors
  //
  logger.on('error', function (err) { /* Do Something */ });

  //
  // Or just suppress them.
  //
  logger.emitErrs = false;
```

Every logging method described in the previous section also takes an optional callback which will be called only when all of the transports have logged the specified message.

``` js
  logger.info('CHILL WINSTON!', { seriously: true }, function (err, level, msg, meta) {
    // [msg] and [meta] have now been logged at [level] to **every** transport.
  });
```

### Working with multiple Loggers in winston

Often in larger, more complex, applications it is necessary to have multiple logger instances with different settings. Each logger is responsible for a different feature area (or category). This is exposed in `winston` in two ways: through `winston.loggers` and instances of `winston.Container`. In fact, `winston.loggers` is just a predefined instance of `winston.Container`:

``` js
  var winston = require('winston');

  //
  // Configure the logger for `category1`
  //
  winston.loggers.add('category1', {
    console: {
      level: 'silly',
      colorize: true,
      label: 'category one'
    },
    file: {
      filename: '/path/to/some/file'
    }
  });

  //
  // Configure the logger for `category2`
  //
  winston.loggers.add('category2', {
    couchdb: {
      host: '127.0.0.1',
      port: 5984
    }
  });
```

Now that your loggers are setup, you can require winston _in any file in your application_ and access these pre-configured loggers:

``` js
  var winston = require('winston');

  //
  // Grab your preconfigured logger
  //
  var category1 = winston.loggers.get('category1');

  category1.info('logging from your IoC container-based logger');
```

If you prefer to manage the `Container` yourself, you can simply instantiate one:

``` js
  var winston = require('winston'),
      container = new winston.Container();

  container.add('category1', {
    console: {
      level: 'silly',
      colorize: true
    },
    file: {
      filename: '/path/to/some/file'
    }
  });
```

### Sharing transports between Loggers in winston

``` js
  var winston = require('winston');

  //
  // Setup transports to be shared across all loggers
  // in three ways:
  //
  // 1. By setting it on the default Container
  // 2. By passing `transports` into the constructor function of winston.Container
  // 3. By passing `transports` into the `.get()` or `.add()` methods
  //

  //
  // 1. By setting it on the default Container
  //
  winston.loggers.options.transports = [
    // Setup your shared transports here
  ];

  //
  // 2. By passing `transports` into the constructor function of winston.Container
  //
  var container = new winston.Container({
    transports: [
      // Setup your shared transports here
    ]
  });

  //
  // 3. By passing `transports` into the `.get()` or `.add()` methods
  //
  winston.loggers.add('some-category', {
    transports: [
      // Setup your shared transports here
    ]
  });

  container.add('some-category', {
    transports: [
      // Setup your shared transports here
    ]
  });
```

### Using winston in a CLI tool
A common use-case for logging is output to a CLI tool. Winston has a special helper method which will pretty print output from your CLI tool. Here's an example from the [require-analyzer][2] written by [Nodejitsu][3]:

```
  info:   require-analyzer starting in /Users/Charlie/Nodejitsu/require-analyzer
  info:   Found existing dependencies
  data:   {
  data:     colors: '0.x.x',
  data:     eyes: '0.1.x',
  data:     findit: '0.0.x',
  data:     npm: '1.0.x',
  data:     optimist: '0.2.x',
  data:     semver: '1.0.x',
  data:     winston: '0.2.x'
  data:   }
  info:   Analyzing dependencies...
  info:   Done analyzing raw dependencies
  info:   Retrieved packages from npm
  warn:   No additional dependencies found
```

Configuring output for this style is easy, just use the `.cli()` method on `winston` or an instance of `winston.Logger`:

``` js
  var winston = require('winston');

  //
  // Configure CLI output on the default logger
  //
  winston.cli();

  //
  // Configure CLI on an instance of winston.Logger
  //
  var logger = new winston.Logger({
    transports: [
      new (winston.transports.Console)()
    ]
  });

  logger.cli();
```

### Filters and Rewriters
Filters allow modifying the contents of **log messages**, and Rewriters allow modifying the contents of **log meta** e.g. to mask data that should not appear in logs.

Both filters and rewriters are simple Arrays of functions which can be provided when creating a `new winston.Logger(options)`. e.g.:

``` js
var logger = new winston.Logger({
  rewriters: [function (level, msg, meta) { /* etc etc */ }],
  filters:   [function (level, msg, meta) { /* etc etc */ }]
})
```

Like any Array, they can also be modified at runtime with no adverse side-effects to the `winston` internals.

``` js
logger.filters.push(function(level, msg, meta) {
  return meta.production
    ? maskCardNumbers(msg)
    : msg;
});

logger.info('transaction with card number 123456789012345 successful.');
```

This may result in this output:

```
info: transaction with card number 123456****2345 successful.
```

Where as for rewriters, if you wanted to sanitize the `creditCard` field of your `meta` you could:

``` js
logger.rewriters.push(function(level, msg, meta) {
  if (meta.creditCard) {
    meta.creditCard = maskCardNumbers(meta.creditCard)
  }

  return meta;
});

logger.info('transaction ok', { creditCard: 123456789012345 });
```

which may result in this output:

```
info: transaction ok creditCard=123456****2345
```

See [log-filter-test.js](./test/log-filter-test.js), where card number masking is implemented as an example along with [log-rewriter-test.js](./test/log-rewriter-test.js)

## Adding Custom Transports
Adding a custom transport is actually pretty easy. All you need to do is accept a couple of options, set a name, implement a log() method, and add it to the set of transports exposed by winston.

``` js
  var util = require('util'),
      winston = require('winston');

  var CustomLogger = winston.transports.CustomLogger = function (options) {
    //
    // Name this logger
    //
    this.name = 'customLogger';

    //
    // Set the level from your options
    //
    this.level = options.level || 'info';

    //
    // Configure your storage backing as you see fit
    //
  };

  //
  // Inherit from `winston.Transport` so you can take advantage
  // of the base functionality and `.handleExceptions()`.
  //
  util.inherits(CustomLogger, winston.Transport);

  CustomLogger.prototype.log = function (level, msg, meta, callback) {
    //
    // Store this message and metadata, maybe use some custom logic
    // then callback indicating success.
    //
    callback(null, true);
  };
```

### Custom Log Format
To specify a custom log format for a transport, you should set a formatter function. Currently supported transports are: Console, File, Memory.
An options object will be passed to the formatter function. Its general properties are: timestamp, level, message, meta. Depending on the transport type, there may be additional properties.

``` js
var config = winston.config;
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: function() {
        return Date.now();
      },
      formatter: function(options) {
        // - Return string will be passed to logger.
        // - Optionally, use options.colorize(options.level, <string>) to
        //   colorize output based on the log level.
        return options.timestamp() + ' ' +
          config.colorize(options.level, options.level.toUpperCase()) + ' ' +
          (options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
      }
    })
  ]
});
logger.info('Data to log.');
```

### Inspirations
1. [npm][0]
2. [log.js][4]
3. [socket.io][5]
4. [node-rlog][6]
5. [BigBrother][7]
6. [Loggly][8]

## Installation

### Installing npm (node package manager)
```
  curl https://npmjs.org/install.sh | sh
```

### Installing winston
```
  [sudo] npm install winston
```

## Run Tests
All of the winston tests are written in [vows][9], and designed to be run with npm.

``` bash
  $ npm test
```

#### Author: [Charlie Robbins](http://twitter.com/indexzero)
#### Contributors: [Matthew Bergman](http://github.com/fotoverite), [Marak Squires](http://github.com/marak)

[0]: https://github.com/npm/npmlog/blob/master/log.js
[1]: http://nodejs.org/docs/v0.3.5/api/events.html#events.EventEmitter
[2]: http://github.com/nodejitsu/require-analyzer
[3]: http://nodejitsu.com
[4]: https://github.com/visionmedia/log.js
[5]: http://socket.io
[6]: https://github.com/jbrisbin/node-rlog
[7]: https://github.com/feisty/BigBrother
[8]: http://loggly.com
[9]: http://vowsjs.org
[10]: http://nodejs.org/api/util.html#util_util_format_format
[14]: http://nodejs.org/api/stream.html#stream_class_stream_writable
[16]: https://github.com/indexzero/winston-mongodb
[17]: https://github.com/indexzero/winston-riak
[18]: https://github.com/appsattic/winston-simpledb
[19]: https://github.com/wavded/winston-mail
[21]: https://github.com/jesseditson/winston-sns
[22]: https://github.com/flite/winston-graylog2
[23]: https://github.com/kenperkins/winston-papertrail
[24]: https://github.com/jorgebay/winston-cassandra
[25]: https://github.com/jesseditson/winston-sns
[26]: https://github.com/inspiredjw/winston-dynamodb/
