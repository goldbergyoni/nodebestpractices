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

## ✔ 1. Do something important 

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

<br/>

## ✔ 2. Do other thing

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

<br/><br/><br/>
# `Code Style Practices`


<br/><br/><br/>
# `Error Handling Practices`
<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

## ✔ Use async-await for async error handling

* **TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using instead a reputable promise library or async-await which provides much compact and familiar code syntax like try-catch

* **Otherwise:** Node.JS callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Use async-await for async error handling**](/sections/errorhandling/asyncawait.md)



<br/><br/><br/>
# `Going To Production Practices`


<br/><br/><br/>
# `Deployment Practices`


<br/><br/><br/>
# `Security Practices`

