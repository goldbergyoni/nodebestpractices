# Make your code production-ready

<br/><br/>

### One Paragraph Explainer

Following is a list of development tips that greatly affect the production maintenance and stability:

* The twelve-factor guide – Get familiar with the [Twelve factors](https://12factor.net/) guide
* Be stateless – Save no data locally on a specific web server (see separate bullet – ‘Be Stateless’)
* Cache – Utilize cache heavily, yet never fail because of cache mismatch
* Test memory – gauge memory usage and leaks as part your development flow, tools such as ‘memwatch’ can greatly facilitate this task
* Name functions – Minimize the usage of anonymous functions (i.e. inline callback) as a typical memory profiler will provide memory usage per method name
* Use CI tools – Use CI tool to detect failures before sending to production. For example, use ESLint to detect reference errors and undefined variables. Use –trace-sync-io to identify code that uses synchronous APIs (instead of the async version)
* Log wisely – Include in each log statement contextual information, hopefully in JSON format so log aggregators tools such as Elastic can search upon those properties (see separate bullet – ‘Increase visibility using smart logs’). Also, include transaction-id that identifies each request and allows to correlate lines that describe the same transaction (see separate bullet – ‘Include Transaction-ID’)
* Error management – Error handling is the Achilles’ heel of Node.js production sites – many Node processes are crashing because of minor errors while others hang on alive in a faulty state instead of crashing. Setting your error handling strategy is absolutely critical, read here my [error handling best practices](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)
