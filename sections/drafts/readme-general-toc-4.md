<!--- # Node.js Best Practices -->
<!--- ![Node.js Best Practices](../../assets/images/banner-2.jpg) -->
<h1 align="center">
  <img src="../../assets/images/banner-4.jpg" alt="Node.js Best Practices" />
</h1>

<img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="53 items"/> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%206%20days%20ago-green.svg" alt="Last update: 7 days ago"/> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.4-brightgreen.svg" alt="Updated for Node v.8.4"/>

<!--- ![Node.js Best Practices](../../assets/images/banner-1.png) -->

# Welcome to Node.js Best Practices

Welcome to the biggest compilation of Node.js best practices, based on our check it's also the largest collection on any programming language (more than 53 items). The content below was gathered from all top ranked books and posts and is updated constantly - if you read here you can rest assure that no significant tip slipped away. Feel at home - we love to discuss via PRs, issues or Gitter.

## Table of Contents
* [Project Setup Practices (18)](#project-setup-practices)
* [Code Style Practices (11) ](#code-style-practices)
* [Error Handling Practices (14) ](#error-handling-practices)
* [Going To Production Practices (21) ](#going-to-production-practices)
* [Testing Practices (9) ](#deployment-practices)
* [Security Practices (8) ](#security-practices)

<br/><br/>
# `Project Setup Practices`

## ![](../../assets/images/checkbox-sm.png) 1. Structure your solution by feature ('microservices')

**TL&DR:** The worst large applications pitfal is a huge code base where hundreds of dependencies slow down developers as try to incorporate new features. Partitioning into small units ensures that each unit is kept simple and very easy to maintain. This strategy pushes the complexity to the higher level - designing the cross-component interactions. 

**Otherwise:** Developing a new feature with a change to few objects demands to evaluate how this changes might affect dozends of dependants and ach deployment becomes a fear.

🔗 [**Read More: Structure by feature*](../errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![](../../assets/images/checkbox-sm.png) 2. Layer your app, keep Express within its boundaries

**TL&DR:** It's very common to see Express API passes the express objects (req, res) to business logic and data layers, sometimes even to every function - this makes your application depedant on and accessible by Express only. What if your code should be reached by testing console or CRON job? instead create your own context object with cross-cutting-concern properties like the user roles and inject into other layers, or use 'thread-level variables' libraries like continuation local storage

**Otherwise:** Application can be accesses by Express only and require to create complex testing mocks

🔗 [**Read More: Structure by feature*](../errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![](../../assets/images/checkbox-sm.png) 3. Configure ESLint with node-specific plugins

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Structure by feature*](../errorhandling/asyncerrorhandling.md)



<br/><br/>

## Additional 15 bullets will appear here

<br/><br/><br/>
# `Code Style Practices`

## ![](../../assets/images/checkbox-sm.png) 1. Use async-await

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Structure by feature*](../errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![](../../assets/images/checkbox-sm.png) 2. Break into small classes or objects

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Structure by feature*](../errorhandling/asyncerrorhandling.md)

<br/><br/><br/>
# `Error Handling Practices`
<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

## <img src="../../assets/images/checkbox-sm.png"/> Use async-await for async error handling

**TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using instead a reputable promise library or async-await which provides much compact and familiar code syntax like try-catch

**Otherwise:** Node.js callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Use async-await for async error handling**](../errorhandling/asyncerrorhandling.md)

<br/><br/>

## <img src="../../assets/images/checkbox-sm.png"/> Use async-await for async error handling

**TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using instead a reputable promise library or async-await which provides much compact and familiar code syntax like try-catch

**Otherwise:** Node.js callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Use async-await for async error handling**](../errorhandling/asyncerrorhandling.md)



<br/><br/><br/>
# `Going To Production Practices`


<br/><br/><br/>
# `Deployment Practices`


<br/><br/><br/>
# `Security Practices`

