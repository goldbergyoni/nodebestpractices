# Use a mature logger to increase errors visibility

### One Paragraph Explainer

We all love console.log but obviously, a reputable and persistent logger like [Winston][winston], [Bunyan][bunyan] (highly popular) or [Pino][pino] (the new kid in town which is focused on performance) is mandatory for serious projects. A set of practices and tools will help to reason about errors much quicker – (1) log frequently using different levels (debug, info, error), (2) when logging, provide contextual information as JSON objects, see example below. (3) watch and filter logs using a log querying API (built-in in most loggers) or a log viewer software
(4) Expose and curate log statement for the operation team using operational intelligence tools like Splunk

[winston]: https://www.npmjs.com/package/winston
[bunyan]: https://www.npmjs.com/package/bunyan
[pino]: https://www.npmjs.com/package/pino

### Code Example – Winston Logger in action

```javascript
// your centralized logger object
var logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

// custom code somewhere using the logger
logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });

```

### Code Example – Querying the log folder (searching for entries)

```javascript
var options = {
  from: new Date - 24 * 60 * 60 * 1000,
  until: new Date,
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};


// Find items logged between today and yesterday.
winston.query(options, function (err, results) {
  // execute callback with results
});
```

### Blog Quote: "Logger Requirements"

 From the blog Strong Loop

> Lets identify a few requirements (for a logger):
1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
2. Logging format should be easily digestible by humans as well as machines.
3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…
