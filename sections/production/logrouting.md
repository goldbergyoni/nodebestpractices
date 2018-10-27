# Your application code should not handle log routing

<br/><br/>

### One Paragraph Explainer

Application code should not handle log routing, but instead just use the `console` module to write to `stdout/stderr`.“Log routing” means picking up and pushing logs to a some other location than your application or application process, for example, writing the logs to a file, database, etc. The reason for this is mostly two-fold: 1) separation of concerns and 2) [12-Factor best practices for modern applications](https://12factor.net/logs).

We often think of "separation of conerns" in terms of pieces of code between services and between services themselves, but this applies to the more “infrastructural” components as well. Your application code should not handle something that should be handled by infrastructure/the execution environment (most often these days, containers). What happens if you define the log locations in your application, but later you need to change that location? That results in a code change and deployment. Also, when working with container-based/cloud-based platforms, containers can spin up and shut down when scaling to performance demands, so we can't be sure where a logfile will end up. The execution environment (container) should decide where the log files get routed to instead. The application should just log what it needs to to `stdout` / `stderr`, and the execution environment should be configured to pick up the log stream from there and route it to where it needs to go.

Benefits:
- keeping the log routing responsibility out of your application code:
    - keeps the code cleaner
    - makes log routing locations easier to change without deployments
- scaling applications/containers means it’s harder to have control over logfiles
- scaling applications also means they’re more ephemeral, meaning logfiles might not be there depending on the state of the container
- writing to, say a file or database, over stdout/stderr ties you down to those log targets, takes away your flexibility to pipe the output of stdout/stderr to whatever targets you want, and change this at the infrastructure or container level

<br/><br/>

### Code Example – Log routing tightly coupled to application

```javascript
const { createLogger, transports, winston } = require('winston');
const winston-mongodb = require('winston-mongodb');
 
// log to two different files, which the application now must be concerned with
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' }),
 
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});
 
// log to MongoDB, which the application now must be concerned with
winston.add(winston.transports.MongoDB, options);
```
Doing it this way, the application now handles both application/business logic AND log routing logic!

<br/><br/>

### Code Example – Better log handling + Docker example
In the application:
```javascript
console.log('something we want to log here') // this writes to stdout
```
Then, in the docker container `daemon.json`:
```javascript
{
  "log-driver": "splunk", // just using Splunk as an example, it could be another storage type
  "log-opts": {
    "splunk-token": "",
    "splunk-url": "",
    ...
  }
}
```
So this example ends up looking like `log -> stdout -> Docker container -> Splunk`

<br/><br/>

### Blog Quote: "O'Reilly"

From the [O'Reilly blog](https://www.oreilly.com/ideas/a-cloud-native-approach-to-logs),
 > When you have a fixed number of instances on a fixed number of servers, storing logs on disk seems to make sense. However, when your application can dynamically go from 1 running instance to 100, and you have no idea where those instances are running, you need your cloud provider to deal with aggregating those logs on your behalf.

<br/><br/>

 ### Example: Architecture overview using Docker and Splunk as an example

![alt text](/assets/images/logging-overview.png "Log routing overview")

<br/><br/>
