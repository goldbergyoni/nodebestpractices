[✔]: assets/images/checkbox-small-blue.png

# Node.js Best Practices

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<br/>

<div align="center">
<img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="50 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Oct%2020%202017-green.svg" alt="Last update: Oct 20, 2017"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.4-brightgreen.svg" alt="Updated for Node v.8.4">
	</div>

<br/>

 [![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Follow us on Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)
 <br/>

# Welcome! 3 Things You Ought To Know First:
**1. When you read here, you in fact read dozens of the best Node.JS articles -** this is a summary and curation of the top-ranked content on Node JS best practices

**2. It is the largest compilation, and it is growing every week -** currently, more than 50 best practices, style guides, and architectural tips are presented. We welcome issues and PR to ever keep this live book updated. We'd love to see you contributing here, whether fixing some  code mistake or suggesting brilliant new ideas - be part of the Node.JS best practices book

**3. Most bullets have additional info -** nearby most best practice bullets you'll find **🔗Read More** link that will present you with code examples, quotes from selected blogs and more info

<br/><br/><br/>

## Table of Contents
1. [Project structure Practices (5)](#1-project-structure-practices)
2. [Error Handling Practices (11) ](#2-error-handling-practices)
3. [Code Style Practices (12) ](#3-code-style-practices)
4. [Testing And Overall Quality Practices (8) ](#4-testing-and-overall-quality-practices)
5. [Going To Production Practices (16) ](#5-going-to-production-practices)
6. Security Practices (coming soon)
7. Performance Practices (coming soon)


<br/><br/><br/>
# `1. Project Structure Practices`

## ![✔] 1.1 Structure your solution by components

 **TL;DR:** The worst large applications pitfall is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Instead, partition your code into components, each gets its own folder or a dedicated codebase, and ensure that each unit is kept small and simple. Visit 'Read More' below to see examples of correct project structure

**Otherwise:** When developers who code new features struggle to realize the impact of their change and fear to break other dependant components - deployments become slower and more risky. It's also considered harder to scale-out when all the business units are not separated

🔗 [**Read More: structure by components**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Layer your components, keep Express within its boundaries

**TL;DR:** Each component should contain 'layers' - a dedicated object for the web, logic and data access code. This not only draws a clean separation of concerns but also significantly ease mocking and testing the system. Though this is a very common pattern, API developers tend to mix layers by passing the web layer objects (Express req, res) to business logic and data layers - this makes your application dependant on and accessible by Express only

**Otherwise:** App that mixes web objects with other layers can not be accessed by testing code, CRON jobs and other non-Express callers

🔗 [**Read More: layer your app**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Wrap common utilities as NPM packages

**TL;DR:** In a large app that constitutes a large code base, cross-cutting-concern utilities like logger, encryption and alike, should be wrapped by your own code and exposed as private NPM packages. This allows sharing them among multiple code bases and projects

**Otherwise:** You'll have to invent your own deployment and dependency wheel

🔗 [**Read More: Structure by feature**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Separate Express 'app' and 'server'

**TL;DR:** Avoid the nasty habit of defining the entire [Express](https://expressjs.com/) app in a single huge file - separate your 'Express' definition to at least two files: the API declaration (app.js) and the networking concerns (WWW). For even better structure, locate your API declaration within components

**Otherwise:** Your API will be accessible for testing via HTTP calls only (slower and much harder to generate coverage reports). It probably won't be a big pleasure to maintain hundreds of lines of code in a single file

🔗 [**Read More: separate Express 'app' and 'server'**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Use environment aware, secure and hierarchical config


**TL;DR:** A perfect and flawless configuration setup should ensure (a) keys can be read from file AND from environment variable (b) secrets are kept outside committed code (c) config is hierarchical for easier findability. There are only a few packages that can help tick most of those boxes like [nconf](https://www.npmjs.com/package/nconf) and [config](https://www.npmjs.com/package/config).

**Otherwise:** Failing to satisfy any of the config requirements will simply bog down the development or devops team. Probably both

🔗 [**Read More: configuration best practices**](/sections/projectstructre/configguide.md)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `2. Error Handling Practices`

## ![✔] 2.1  Use Async-Await or promises for async error handling

**TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using a reputable promise library or async-await instead which enables a much more compact and familiar code syntax like try-catch

**Otherwise:** Node.JS callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Read More: avoiding callbacks**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Use only the built-in Error object

**TL;DR:** Many throws errors as a string or as some custom type – this complicates the error handling logic and the interoperability between modules. Whether you reject a promise, throw exception or emit error – using only the built-in Error object will increase uniformity and prevent loss of information


**Otherwise:** When invoking some component, being uncertain which type of errors come in return – it makes proper error handling much harder. Even worse, using custom types to describe errors might lead to loss of critical error information like the stack trace!

🔗 [**Read More: using the built-in error object**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Distinguish operational vs programmer errors

**TL;DR:** Operational errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully. On the other hand, programmer error (e.g. trying to read undefined variable) refers to unknown code failures that dictate to gracefully restart the application

**Otherwise:** You may always restart the application when an error appears, but why let ~5000 online users down because of a minor, predicted, operational error? the opposite is also not ideal – keeping the application up when an unknown issue (programmer error) occurred might lead to an unpredicted behavior. Differentiating the two allows acting tactfully and applying a balanced approach based on the given context

  🔗 [**Read More: operational vs programmer error**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Handle errors centrally, not within an Express middleware

**TL;DR:** Error handling logic such as mail to admin and logging should be encapsulated in a dedicated and centralized object that all endpoints (e.g. Express middleware, cron jobs, unit-testing) call when an error comes in.

**Otherwise:** Not handling errors within a single place will lead to code duplication and probably to improperly handled errors

🔗 [**Read More: handling errors in a centralized place**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Document API errors using Swagger

**TL;DR:** Let your API callers know which errors might come in return so they can handle these thoughtfully without crashing. This is usually done with REST API documentation frameworks like Swagger

**Otherwise:** An API client might decide to crash and restart only because he received back an error he couldn’t understand. Note: the caller of your API might be you (very typical in a microservice environment)


🔗 [**Read More: documenting errors in Swagger**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Shut the process gracefully when a stranger comes to town

**TL;DR:** When an unknown error occurs (a developer error, see best practice number #3)- there is uncertainty about the application healthiness. A common practice suggests restarting the process carefully using a ‘restarter’ tool like Forever and PM2

**Otherwise:** When an unfamiliar exception is caught, some object might be in a faulty state (e.g an event emitter which is used globally and not firing events anymore due to some internal failure) and all future requests might fail or behave crazily

🔗 [**Read More: shutting the process**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>



## ![✔] 2.7 Use a mature logger to increase error visibility

**TL;DR:** A set of mature logging tools like Winston, Bunyan or Log4J, will speed-up error discovery and understanding. So forget about console.log.

**Otherwise:** Skimming through console.logs or manually through messy text file without querying tools or a decent log viewer might keep you busy at work until late

🔗 [**Read More: using a mature logger**](/sections/errorhandling/usematurelogger.md)


<br/><br/>


## ![✔] 2.8 Test error flows using your favorite test framework

**TL;DR:** Whether professional automated QA or plain manual developer testing – Ensure that your code not only satisfies positive scenario but also handle and return the right errors. Testing frameworks like Mocha & Chai can handle this easily (see code examples within the "Gist popup")

**Otherwise:** Without testing, whether automatically or manually, you can’t rely on our code to return the right errors. Without meaningful errors – there’s no error handling


🔗 [**Read More: testing error flows**](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge your codebase or API so they can auto-magically highlight errors, crashes and slow parts that you were missing

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which are your slowest code parts under real world scenario and how these affects the UX


🔗 [**Read More: using APM products**](/sections/errorhandling/apmproducts.md)

<br/><br/>


## ![✔] 2.10 Catch unhandled promise rejections

**TL;DR:** Any exception thrown within a promise will get swallowed and discarded unless a developer didn’t forget to explictly handle. Even if your code is subscribed to process.uncaughtException! Overcome this by registering to the event process.unhandledRejection

**Otherwise:** Your errors will get swallowed and leave no trace. Nothing to worry about


🔗 [**Read More: catching unhandled promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Fail fast, validate arguments using a dedicated library

**TL;DR:** This should be part of your Express best practices – Assert API input to avoid nasty bugs that are much harder to track later. Validation code is usually tedious unless using a very cool helper libraries like Joi

**Otherwise:** Consider this – your function expects a numeric argument “Discount” which the caller forgets to pass, later on your code checks if Discount!=0 (amount of allowed discount is greater than zero), then it will allow the user to enjoy a discount. OMG, what a nasty bug. Can you see it?

🔗 [**Read More: failing fast**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `3. Code Style Practices`

## ![✔] 3.1 Use ESLint

**TL;DR:** ESLint is the de-facto standard for checking code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. Using ESLint and following the rest of the code style practices below means following the same styles used by the rest of the community, as well as the same code styles used in the core products themselves.

**Otherwise:** developers will focus on tedious spacing and line-width concerns

<br/><br/>

## ![✔] 3.2 Node JS Specific Plugins

**TL;DR:** On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Otherwise:** Many faulty Node.JS code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.JS linters can detect such patterns and complain early

<br/><br/>

## ![✔] 3.3 Start a Codeblock's Curly Braces in the Same Line

**TL;DR:** The opening curly braces of a code block should be in the same line of the opening statement.

### Code Example
```javascript
  // Do
  function someFunction() {
    // code block
  }

  //Avoid
  function someFunction
  {
    // code block
  }
```

**Otherwise:** Deferring from this best practice might lead to unexpected results, as seen in the Stackoverflow thread below:

🔗 [**Read more:** "Why does a results vary based on curly brace placement?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Don't Forget the Semicolon

**TL;DR:** While not unanimously agreed upon, it is still recommended to put a semicolon at the end of each statement. This will make your code more readable and explicit to other developers who read it.

**Otherwise:** As seen in the previous section, JavaScript's interpeter automatically adds a semicolon at the end of a statement if there isn't one which might lead to some undesired results.

<br/><br/>

## ![✔] 3.5 Name Your Functions

**TL;DR:** Name all functions, including closures and callbacks. Avoid anonymous functions. This is especially useful when profiling a node app. Naming all functions will allow you to easily understand what you're looking at when checking a memory snapshot.

**Otherwise:** Debugging production issues using a core dump (memory snapshot) might become challenging as you notice significant memory consumption from anonymous functions.

<br/><br/>

## ![✔] 3.6 Naming conventions for variables, constants, functions and classes

**TL;DR:** Use ***lowerCamelCase*** when naming variables and functions, ***UpperCamelCase*** (capital first letter as well) when naming classes and ***UPPERCASE*** for constants. This will help you to easily distinguish between plain variables / functions, and classes that require instantiation. Use descriptive names, but try to keep them short.

**Otherwise:** Javascript is the only language in the world which allows to invoke a constructor ("Class") directly without instantiating it first. Consequently, Classes and function-constructors are differentiated by starting with UpperCamelCase.

### Code Example ###
```javascript
  // for class name we use UpperCamelCase
  class SomeClassExample () { 
    
    // for const name we use UPPERCASE
    const CONFIG = {
      key: 'value'
    };
    
    // for variables and functions names we use lowerCamelCase
    let someVariableExample = 'value';
    function doSomething() {
      
    }

  }
```

<br/><br/>

## ![✔] 3.7 Prefer const over let. Ditch the var

**TL;DR:** Using `const` means that once a variable is assigned, it cannot be reassigned. Prefering const will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop for example, use `let` to declare it. Another important aspect of let is that a variable declared using let is only available in the block scope in which it was defined. `var` is function scoped, not block scoped, and [shouldn't be used in ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) now that you have const and let at your disposal.

**Otherwise:** Debugging becomes way more cumbersome when following a variable that frequently changes.

🔗 [**Read more: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Requires come first, and not inside functions

**TL;DR:** Require modules at the beginning of each file, before and outside of any functions. This simple best practice will not only help you easily and quickly tell the dependencies of a file right at the top, but also avoids a couple of potential problems.

**Otherwise:** Requires are run synchronously by NodeJS. If they are called from within a function, it may block other requests from being handled at a more critical time. Also, if a required module or any of its own dependencies throw an error and crash the server, it is best to find out about it as soon as possible, which might not be the case if that module is required from within a function.

<br/><br/>

## ![✔] 3.9 Do Require on the folders, not directly on the files

**TL;DR:** When developing a module/library in a folder, place an index.js file that exposes the module's
internals so every consumer will pass through it. This serves as an 'interface' to your module and ease
future changes without breaking the contract.

**Otherwise:** Changing to the internal structure of files or the signature may break the interface with
clients.

### Code example
```javascript
  // Do
  module.exports.SMSProvider = require('./SMSProvider');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver');

  // Avoid
  module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>


## ![✔] 3.10 Use the `===` operator

**TL;DR:** Prefer the strict equality operator `===` over the weaker abstract equality operator `==`. `==` will compare two variables after converting them to a common type. There is no type conversion in `===`, and both variables must be of the same type to be equal.

**Otherwise:** Unequal variables might return true when compared with the `==` operator.

### Code example
```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```
All statements above will return false if used with `===`

<br/><br/>

## ![✔] 3.11 Use Async Await, avoid callbacks

**TL;DR:** Node 8 LTS now has full support for Async-await. This is a new way of dealing with asyncronous code which supersedes callbacks and promises. Async-await is non-blocking, and it makes asynchronous code look synchronous. The best gift you can give to your code is using async-await which provides a much more compact and familiar code syntax like try-catch.

**Otherwise:** Handling async errors in callback style is probably the fastest way to hell - this style forces to check errors all over, deal with akward code nesting and make it difficult to reason about the code flow.

🔗[**Read more:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use Fat (=>) Arrow Functions

**TL;DR:** Though it's recommended to use async-await and avoid function parameters, when dealing with older API that accept promises or callbacks - arrow functions make the code structure more compact and keep the lexical context of the root function (i.e. 'this').

**Otherwise:** Longer code (in ES5 functions) is more prone to bugs and cumbersome to read.

🔗 [**Read mode: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>


# `4. Testing And Overall Quality Practices`

## ![✔] 4.1 At the very least, write API (component) testing

**TL;DR:** Most projects just don't have any automated testing due to short time tables or often the 'testing project' run out of control and being abandoned. For that reason, prioritize and start with API testing which are the easiest to write and provide more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterwards, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**Otherwise:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Detect code issues with ESLint + specific Node plugin rules

**TL;DR:** ESLint is the de-facto standard for checking code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Otherwise:** Many faulty Node.JS code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.JS linters can detect such patterns and complain early


<br/><br/>

## ![✔] 4.3 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowdays, it became much easier to setup a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully.

**Otherwise:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**Read More: Choosing CI platform**](/sections/testingandquality/citools.md)

<br/><br/>

## ![✔] 4.4 Constantly inspect for vulnerable dependencies

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [nsp](https://github.com/nodesecurity/nsp) that can be invoked from your CI on every build

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.5 Tag your tests

**TL;DR:**  Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/):  mocha --grep 'sanity'

**Otherwise:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremly slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.6 Check your test coverage, it helps to identify wrong test patterns

**TL;DR:** Code coverage tools like [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**Otherwise:** There won't be any automated metric telling you when a large portion of your code is not covered by testing



<br/><br/>

## ![✔] 4.7 Inspect for outdated packages

**TL;DR:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**Otherwise:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 4.8 Use docker-compose for e2e testing

**TL;DR:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Docker-compose turns this problem into a breeze by crafting production-like environment using a simple text file and easy commands. It allows crafting all the dependent services, DB and isolated network for e2e testing. Last but not least, it can keep a stateless environment that is invoked before each test suite and dies right after


**Otherwise:** Without docker-compose teams must maintain a testing DB for each testing environment including developers machines, keep all those DBs in sync so test results won't vary across environments


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `5. Going To Production Practices`
## ![✔] 5.1. Monitoring!

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.


🔗 [**Read More: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day  1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information


🔗 [**Read More: Increase transparency using smart logging**](/sections/production/smartlogging.md)
	
<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. Instead, use a ‘real’ middleware services like nginx, HAproxy or cloud vendor services

**Otherwise:** Your poor single thread will keep busy doing networking tasks instead of dealing with your application core and performance will degrade accordingly


🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly NPM lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using NPM config files , .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use NPM” shrinkwrap”. *Update: as of NPM5 , dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code


🔗 [**Read More: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenario, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without clear strategy and too many tools together (cluster management, docker, PM2) might lead to a devops chaos


🔗 [**Read More: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

 
<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all other are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.JS utilizes only 1 (even using PaaS services like AWS beanstalk!)


🔗 [**Read More: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes


🔗 [**Read More: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real world scenario and how these affects the UX


🔗 [**Read More: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)


<br/><br/>


## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Otherwise:** A world champion IT/devops guy won’t save a system that is badly written


🔗 [**Read More: Make your code production-ready**](/sections/production/productoncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps you may gauge memory  periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like happened in Wallmart


🔗 [**Read More: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>


## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single threaded model

**Otherwise:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of  allocating all its resources for the task it was born for – serving dynamic content


🔗 [**Read More: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>


## ![✔] 5.12. Be stateless, kill your Servers almost every day

**TL;DR:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server


🔗 [**Read More: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)


<br/><br/>


## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Otherwise: Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious


🔗 [**Read More: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>


## ![✔] 5.14. Assign ‘TransactionId’ to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue


🔗 [**Read More: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>


## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many NPM packages determining the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server side rendering omitting NODE_ENV makes the slower by a factor of three!


🔗 [**Read More: Set NODE_ENV=production**](/sections/production/setnodeenv.md)


<br/><br/>


## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `Security Practices`

## Our contributors are working on this section. Would you like to join?

<br/><br/><br/>
# `Performance Practices`

## Our contributors are working on this section. Would you like to join?


<br/><br/><br/>
# Contributors
## `Yoni Goldberg`
Developer & consultant, Backend expert, JavaScript enthusiast, focused on Node.JS. Many of the bullets was first published on his blog post [http://www.goldbergyoni.com](http://www.goldbergyoni.com)

## `Ido Richter`
👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast.
