# Use a mature logger to increase errors visibility

### One Paragraph Explainer

We all love console.log but obviously, a reputable and persistent logger like [Pino][pino] (a [newer option focused on performance][dropdiscussion]) is mandatory for serious projects. 

A set of practices and tools will help to reason about errors much quicker.
Recommendations include:

1. Log frequently using different levels (debug, info, error).
2. When logging, provide contextual information as JSON objects. 
3. Watch and filter logs using a log querying API (built-in in most loggers) or a log viewer software. 
4. Expose and curate log statements using operational intelligence tools like [Splunk][splunk].

[pino]: https://www.npmjs.com/package/pino
[dropdiscussion]:  #684
[splunk]: https://www.splunk.com/

### Blog Quote: "Logger Requirements"

 From the blog Strong Loop

> Lets identify a few requirements (for a logger):
1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
2. Logging format should be easily digestible by humans as well as machines.
3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…
