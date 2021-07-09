# Use a mature logger to increase error visibility

### One Paragraph Explainer

We love console.log but a reputable and persistent logger like [Pino][pino] (a newer option focused on performance) is mandatory for serious projects. 
High-performance logging tools help identify errors and possible issues. Logging recommendations include:

1. Log frequently using different levels (debug, info, error).
2. When logging, provide contextual information as JSON objects. 
3. Monitor and filter logs with a log querying API (built-in to many loggers) or log viewer software. 
4. Expose and curate log statements with operational intelligence tools such as [Splunk][splunk].

[pino]: https://www.npmjs.com/package/pino
[splunk]: https://www.splunk.com/

### Code Example

```JavaScript
const pino = require('pino');

// your centralized logger object
const logger = pino();

// custom code somewhere using the logger
logger.info({ anything: 'This is metadata' }, 'Test Log Message with some parameter %s', 'some parameter');
```

### Blog Quote: "Logger Requirements"

 From the StrongLoop blog ("Comparing Winston and Bunyan Node.js Logging" by Alex Corbatchev, Jun 24, 2014):

> Let's identify a few requirements (for a logger):
> 1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
> 2. Logging format should be easily digestible by humans as well as machines.
> 3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time.

### Where's Winston?

For more information on why traditional favorites (e.g., Winston) may not be included in the current list of recommended best practices, please see [#684][#684].

[#684]: https://github.com/goldbergyoni/nodebestpractices/issues/684

