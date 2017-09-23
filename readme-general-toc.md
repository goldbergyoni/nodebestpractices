# Node.JS Best Practices

<img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="53 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%206%20days%20ago-green.svg" alt="Last update: 7 days ago"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.4-brightgreen.svg" alt="Updated for Node v.8.4">

![Node.js Best Practices](assets/images/banner-1.png)

## **Welcome**

This repository summarizes and curates most of the knowledge gathered to date on Node.js best practices. It contains more than 53 quotes, code examples and diagrams from the highest ranked blog posts and StackOverflow threads.

## Table of Contents
* [Project Setup Practices](#project-setup-practices)
* [Code Style Practices](#code-style-practices)
* [Error Handling Practices](#error-handling-practices)
* [Going To Production Practices](#going-to-production-practices)
* [Deployment Practices](#deployment-practices)
* [Security Practices](#security-practices)


# `Project Setup Practices`

## ✔ 1. Do something important 

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information

## ✔ 2. Do other thing

**TL&DR:** Monitoring is a game of finding out issues before our customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my sug

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information






# `Code Style Practices`





# `Error Handling Practices`

## ✔ Use async-await for async error handling

**TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using instead a reputable promise library or async-await which provides much compact and familiar code syntax like try-catch

**Otherwise:** Node.JS callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**Use async-await for async error handling**](/sections/errorhandling/asyncawait.md)






# `Going To Production Practices`





# `Deployment Practices`


# `Security Practices`

