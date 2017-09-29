<!--- # Node.JS Best Practices -->
<!--- ![Node.js Best Practices](assets/images/banner-2.jpg) -->
<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="53 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%206%20days%20ago-green.svg" alt="Last update: 7 days ago"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.4-brightgreen.svg" alt="Updated for Node v.8.4">

<!--- ![Node.js Best Practices](assets/images/banner-1.png) -->

# Welcome to Node.js Best Practices

Welcome to the biggest compilation of Node.JS best practices. The content below was gathered from all top ranked books and posts and is updated constantly - when you read here rest assure that no significant tip slipped away. Feel at home - we love to discuss via PRs, issues or Gitter.

## Table of Contents
* [Project Setup Practices (18)](#project-setup-practices)
* [Code Style Practices (11) ](#code-style-practices)
* [Error Handling Practices (14) ](#error-handling-practices)
* [Going To Production Practices (21) ](#going-to-production-practices)
* [Testing Practices (9) ](#deployment-practices)
* [Security Practices (8) ](#security-practices)


<br/><br/>
# `Project Setup Practices`

## ✔ 1. Structure your solution by feature ('microservices')

**TL&DR:** The worst large applications pitfal is a huge code base where hundreds of dependencies slow down developers as try to incorporate new features. Partioning into small units ensures that each unit is kept simple and very easy to maintain. This strategy pushes the complexity to the higher level - designing the cross-component interactions. 

**Otherwise:** Developing a new feature with a change to few objects demands to evaluate how this changes might affect dozends of dependants and ach deployment becomes a fear.

🔗 [**Read More: Structure by feature*](/sections/errorhandling/asyncawait.md)

<br/><br/>

## ✔ 2. Layer your app, keep Express within its boundaries

**TL&DR:** It's very common to see Express API passes the express objects (req, res) to business logic and data layers, sometimes even to every function - this makes your application depedant on and accessible by Express only. What if your code should be reached by testing console or CRON job? instead create your own context object with cross-cutting-concern properties like the user roles and inject into other layers, or use 'thread-level variables' libraries like continuation local storage

**Otherwise:** Application can be accessed by Express only and require to create complex testing mocks

🔗 [**Read More: Structure by feature*](/sections/errorhandling/asyncawait.md)

<br/><br/>

## ✔ 3. Configure ESLint with node-specific plugins

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Structure by feature*](/sections/errorhandling/asyncawait.md)


<br/><br/>
# `Code Style Practices`


<br/><br/><br/>
# `Error Handling Practices`
<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

## ✔ 1.  Use Async-Await or promises for async error handling

**TL&DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using instead a reputable promise library or async-await which provides much compact and familiar code syntax like try-catch

**Otherwise:** Node.JS callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Read More: text*](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ✔ 2. Use only the built-in Error object

**TL&DR:** Many throws errors as a string or as some custom type – this complicates the error handling logic and the interoperability between modules. Whether you reject a promise, throw exception or emit error – using only the built-in Error object will increases uniformity and prevents loss of information


**Otherwise:** When invoking some component, being uncertain which type of errors come in return – makes it much harder to handle errors properly. Even worth, using custom types to describe errors might lead to loss of critical error information like the stack trace!

🔗 [**Read More: text*](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ✔ 3. Distinguish operational vs programmer errors

**TL&DR:** Operational errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully. On the other hand, programmer error (e.g. trying to read undefined variable) refers to unknown code failures that dictate to gracefully restart the application

**Otherwise:** You may always restart the application when an error appear, but why letting ~5000 online users down because of a minor, predicted, operational error? the opposite is also not ideal – keeping the application up when unknown issue (programmer error) occurred might lead to an unpredicted behavior. Differentiating the two allows acting tactfully and applying a balanced approach based on the given context

  🔗 [**Read More: text*](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ✔ 4. Handle errors centrally, not within an Express middleware

**TL&DR:** Error handling logic such as mail to admin and logging should be encapsulated in a dedicated and centralized object that all end-points (e.g. Express middleware, cron jobs, unit-testing) call when an error comes in.

**Otherwise:** Not handling errors within a single place will lead to code duplication and probably to errors that are handled improperly

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

<br/><br/>

## ✔ 5. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

<br/><br/>

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

## ✔ 6. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

<br/><br/>

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

## ✔ 7. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

<br/><br/>

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

## ✔ 8. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

<br/><br/>

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

## ✔ 9. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

<br/><br/>

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

## ✔ 10. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

<br/><br/>

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

## ✔ 11. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

<br/><br/>

## ✔ 12. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

🔗 [**Read More: text*](/sections/errorhandling/monitoring)

<br/><br/>

## ✔ 13. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

🔗 [**Read More: text*](/sections/errorhandling/monitoring)



<br/><br/><br/>
# `Going To Production Practices`
## ✔ 1. Monitoring!

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.

🔗 [**Read More: text*](/sections/errorhandling/monitoring)



<br/><br/><br/>
# `Deployment Practices`


<br/><br/><br/>
# `Security Practices`

