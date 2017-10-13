[✔]: assets/images/checkmark-green.png "✔"
<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<br/>

<div align="center">
<img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="53 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%206%20days%20ago-green.svg" alt="Last update: 7 days ago"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.4-brightgreen.svg" alt="Updated for Node v.8.4">
	</div>

<br/>

# Welcome to Node.js Best Practices

Welcome to the biggest compilation of Node.JS best practices. The content below was gathered from all top ranked books and posts and is updated constantly - when you read here rest assure that no significant tip slipped away. Feel at home - we love to discuss via PRs, issues or Gitter.

<br/><br/><br/>

## Table of Contents
1. [Project structure Practices (6)](#project-setup-practices)
2. [Code Style Practices (9) ](#code-style-practices)
3. [Error Handling Practices (11) ](#error-handling-practices)
4. [Going To Production Practices (17) ](#going-to-production-practices)
5. [Testing And Overall Quality Practices (6) ](#testing-practices)
6. [Security Practices (soon) ](#security-practices)
7. [Performance Practices (soon) ](#performance-practices)
8. [API Practices (soon) ](#API-practices)


<br/><br/><br/>
# `Project Structure Practices`

## 1.1 Structure your solution by components

✔ **TL;DR:** The worst large applications pitfal is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Partioning into small units, components or microservices, ensures that each unit is kept simple and very easy to maintain. There no neccessity to start with full-blown 'microservices' architecture, even using a single codebase it's possible to achieve low complexity as long as you partition your code into self-contained components

✔ **Otherwise:** When developers who code new features fear to break other dependant components, deployments become slower and more risky

🔗 [**Read More: structure by components**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ✔ 1.2 Layer your components, keep Express within its boundaries

**TL;DR:** Grouping code by technical concerns, layering, is a common pattern among all platforms and Node JS apps should be no different. At its most basic level, each component should contain a web, service/logic and data access layers. This not only draws a clean separation of concerns but also significantly ease mocking and testing the system. Though this is a very common pattern, API developers tend to mix layers by passing the express objects (req, res) to business logic and data layers - this makes your application dependant on and accessible by Express only

**Otherwise:** App that mixes web objects with other layers can not be accessed by testing code, CRON jobs and other non-Express callers

🔗 [**Read More: layer your app**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Keep components thin enough

**TL;DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Structure by feature*](/sections/projectstructre/thincomponents.md)

<br/><br/>

## ![✔] 1.4 Wrap common utilities as NPM packages

**TL;DR:** In large app that constitues multiple code base, cross-cutting-conern utilities like logger, encryption and a like, should be wrapped by your own code as private NPM packages and get shared among environments using NPM registry

**Otherwise:** You'll have to invent your own deployment and dependency wheel

🔗 [**Read More: Structure by feature*](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.5 Separate Express 'app' and 'server'

**TL;DR:** Avoid the nasty habit of defining the Express app in a single huge file - separate your 'Express' definition to at least two files: the API declaration (app.js) and the networking concerns (WWW). Even better, locate your app declaration within components

**Otherwise:** Your API will be accessible via networks calls only so in-process testing (faster and can generate coverage reports) won't be possible. It will also probably won't be a big pleasure to maintain hundreds of lines of code in a single file

🔗 [**Read More: Structure by feature*](/sections/errorhandling/separateexpress.md)

<br/><br/>

## ![✔] 1.6 Use environment aware, secure and hirearchical config

**TL;DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Structure by feature*](/sections/errorhandling/configguide.md)

<br/><br/>

<br/><br/><br/>
# `Code Style Practices`


<br/><br/><br/>
# `Error Handling Practices`
<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

## ✔ 1.  Use Async-Await or promises for async error handling

**TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using instead a reputable promise library or async-await which provides much compact and familiar code syntax like try-catch

**Otherwise:** Node.JS callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Read More: avoiding callbacks*](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ✔ 2. Use only the built-in Error object

**TL;DR:** Many throws errors as a string or as some custom type – this complicates the error handling logic and the interoperability between modules. Whether you reject a promise, throw exception or emit error – using only the built-in Error object will increases uniformity and prevents loss of information


**Otherwise:** When invoking some component, being uncertain which type of errors come in return – makes it much harder to handle errors properly. Even worth, using custom types to describe errors might lead to loss of critical error information like the stack trace!

🔗 [**Read More: using the built-in error object*](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ✔ 3. Distinguish operational vs programmer errors

**TL;DR:** Operational errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully. On the other hand, programmer error (e.g. trying to read undefined variable) refers to unknown code failures that dictate to gracefully restart the application

**Otherwise:** You may always restart the application when an error appear, but why letting ~5000 online users down because of a minor, predicted, operational error? the opposite is also not ideal – keeping the application up when unknown issue (programmer error) occurred might lead to an unpredicted behavior. Differentiating the two allows acting tactfully and applying a balanced approach based on the given context

  🔗 [**Read More: operational vs programmer error*](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ✔ 4. Handle errors centrally, not within an Express middleware

**TL;DR:** Error handling logic such as mail to admin and logging should be encapsulated in a dedicated and centralized object that all end-points (e.g. Express middleware, cron jobs, unit-testing) call when an error comes in.

**Otherwise:** Not handling errors within a single place will lead to code duplication and probably to errors that are handled improperly

🔗 [**Read More: handling errors in a centralized place*](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ✔ 5. Document API errors using Swagger

**TL;DR:** Let your API callers know which errors might come in return so they can handle these thoughtfully without crashing. This is usually done with REST API documentation frameworks like Swagger

**Otherwise:** An API client might decide to crash and restart only because he received back an error he couldn’t understand. Note: the caller of your API might be you (very typical in a microservices environment)


🔗 [**Read More: documenting errors in Swagger*](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ✔ 6. Shut the process gracefully when a stranger comes to town

**TL;DR:** When an unknown error occurs (a developer error, see best practice number #3)- there is uncertainty about the application healthiness. A common practice suggests restarting the process carefully using a ‘restarter’ tool like Forever and PM2

**Otherwise:** When an unfamiliar exception is caught, some object might be in a faulty state (e.g an event emitter which is used globally and not firing events anymore due to some internal failure) and all future requests might fail or behave crazily

🔗 [**Read More: shutting the process*](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>



## ✔ 7. Use a mature logger to increase errors visibility

**TL;DR:** A set of mature logging tools like Winston, Bunyan or Log4J, will speed-up error discovery and understanding. So forget about console.log.

**Otherwise:** Skimming through console.logs or manually through messy text file without querying tools or a decent log viewer might keep you busy at work until late

🔗 [**Read More: using a mature logger*](/sections/errorhandling/usematurelogger.md)


<br/><br/>


## ✔ 8. Test error flows using your favorite test framework

**TL;DR:** Whether professional automated QA or plain manual developer testing – Ensure that your code not only satisfies positive scenario but also handle and return the right errors. Testing framework like Mocha & Chai can handle this easily (see code examples within the "Gist popup")

**Otherwise:** Without testing, whether automatically or manually, you can’t rely on our code to return the right errors. Without meaningful errors – there’s no error handling


🔗 [**Read More: testing error flows*](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ✔ 9. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge your codebase or API so they can auto-magically highlight errors, crashes and slow parts that you were missing

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which are your slowest code parts under real world scenario and how these affects the UX


🔗 [**Read More: using APM products*](/sections/errorhandling/apmproducts.md)

<br/><br/>


## ✔ 10. Catch unhandled promise rejections

**TL;DR:** Any exception thrown within a promise will get swallowed and discarded unless a developer didn’t forget to explictly handle. Even if you’re code is subscribed to process.uncaughtException! Overcome this by registering to the event process.unhandledRejection

**Otherwise:** Your errors will get swallowed and leave no trace. Nothing to worry about


🔗 [**Read More: catching unhandled promise rejection *](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ✔ 11. Fail fast, validate arguments using a dedicated library

**TL;DR:** This should be part of your Express best practices – Assert API input to avoid nasty bugs that are much harder to track later. Validation code is usually tedious unless using a very cool helper libraries like Joi

**Otherwise:** Consider this – your function expects a numeric argument “Discount” which the caller forgets to pass, later on your code checks if Discount!=0 (amount of allowed discount is greater than zero), then it will allow the user to enjoy a discount. OMG, what a nasty bug. Can you see it?

🔗 [**Read More: failing fast*](/sections/errorhandling/failfast.md)


<br/><br/><br/>

# `Going To Production Practices`
## ✔ 1. Monitoring!

**TL;DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.


🔗 [**Read More: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ✔ 2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day  1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information


🔗 [**Read More: Increase transparency using smart logging**](/sections/production/smartlogging.md)
	
<br/><br/>

## ✔ 3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. Instead, use a ‘real’ middleware services like nginx, HAproxy or cloud vendor services

**Otherwise:** Your poor single thread will keep busy doing networking tasks instead of dealing with your application core and performance will degrade accordingly


🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ✔ 4. Lock dependencies

**TL;DR:** Your code must be identical across all environments but amazingly NPM lets dependencies drift across environments be default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using NPM config files , .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use NPM” shrinkwrap”. *Update: as of NPM5 , dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code


🔗 [**Read More: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ✔ 5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenario, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without clear strategy and too many tools together (cluster management, docker, PM2) might lead to a devops chaos


🔗 [**Read More: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

 
<br/><br/>

## ✔ 6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs over a single CPU core while as all other are left idle. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.JS utilizes only 1 (even using PaaS services like AWS beanstalk!)


🔗 [**Read More: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ✔ 7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes


🔗 [**Read More: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ✔ 8. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real world scenario and how these affects the UX


🔗 [**Read More: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)


<br/><br/>


## ✔ 9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled inside (click Gist below) few development tips that are closely related to production maintenance

**Otherwise:** A world champion IT/devops guy won’t save a system that is badly written


🔗 [**Read More: Make your code production-ready**](/sections/production/productoncode.md)

<br/><br/>

## ✔ 10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps you may gauge memory  periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like happened in Wallmart


🔗 [**Read More: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>


## ✔ 11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really get hurts when dealing with many static files due to its single threaded model

**Otherwise:** Your single Node thread will keep busy streaming hundreds of html/images/angular/react files instead of  allocating all its resources for the task it was born for – serving dynamic content


🔗 [**Read More: monitoring*](/sections/errorhandling/frontendout.md)

<br/><br/>


## ✔ 12. Be stateless, kill your Servers almost every day

**TL;DR:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of a just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server


🔗 [**Read More: monitoring*](/sections/errorhandling/bestateless.md)


<br/><br/>


## ✔ 13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities from time to time that put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Otherwise: Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious


🔗 [**Read More: monitoring*](/sections/errorhandling/detectvulerabilities.md)

<br/><br/>


## ✔ 14. Assign ‘TransactionId’ to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue


🔗 [**Read More: monitoring*](/sections/errorhandling/assigntransactionid.md)

<br/><br/>


## ✔ 15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many NPM packages determining the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server side rendering omitting NODE_ENV makes the slower by a factor of three!


🔗 [**Read More: monitoring*](/sections/errorhandling/monitoring.md)


<br/><br/>


## ✔ 16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features


🔗 [**Read More: monitoring*](/sections/errorhandling/automateddeployment.md)


<br/><br/><br/>
# `Testing And Overall Quality Practices`

## ✔ 1. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 2. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 2. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 2. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 2. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 3. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 4. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 4. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 5. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>

## ✔ 6. At the very least, write API (component) testing

**TL;DR:** text here

**Otherwise:** text here

🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>


## ✔ 7. Bump your NPM version in each deployment

**TL;DR:** Anytime a new version is released, increase the package.json version attribute so that it will become clear in production which version is deployed. All the more so in MicroService environment where different servers might hold different versions. The command “npm version” can achieve that for you automatically

**Otherwise:** Frequently developers try to hunt a production bug within a distributed system (i.e.multiple versions of multiple services) only to realize that the presumed version is not deployed where they look at


🔗 [**Read More: monitoring*](/sections/testingandquality/bumpversion.md)

<br/><br/>


<br/><br/><br/>
# `Security Practices`

## our contributirs working on this section, would you like to join?

<br/><br/><br/>
# `Performance Practices`

## our contributirs working on this section, would you like to join?

<br/><br/><br/>
# `API Practices`

## our contributirs working on this section, would you like to join?


