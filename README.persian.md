[✔]: assets/images/checkbox-small-blue.png

# node js best practices

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices"/>
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 items"/> <img id="last-update-badge" src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20June%2018%2C%202022-green.svg" alt="Last update: June 18, 2022" /> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Updated for Node 14.0.0"/>
</div>
<br/>

<details>
  <summary>
    <a href="#1-project-structure-practices">1. Project Structure Practices (5)</a>
  </summary>

&emsp;&emsp;[1.1 Structure your solution by components `#strategic`](#-11-structure-your-solution-by-components)</br>
&emsp;&emsp;[1.2 Layer your components, keep the web layer within its boundaries `#strategic`](#-12-layer-your-components-keep-the-web-layer-within-its-boundaries)</br>
&emsp;&emsp;[1.3 Wrap common utilities as npm packages](#-13-wrap-common-utilities-as-npm-packages)</br>
&emsp;&emsp;[1.4 Separate Express 'app' and 'server'](#-14-separate-express-app-and-server)</br>
&emsp;&emsp;[1.5 Use environment aware, secure and hierarchical config `#modified-recently`](#-15-use-environment-aware-secure-and-hierarchical-config)</br>

</details>

<details>
  <summary>
    <a href="#2-error-handling-practices">2. Error Handling Practices (12)</a>
  </summary>

&emsp;&emsp;[2.1 Use Async-Await or promises for async error handling](#-21-use-async-await-or-promises-for-async-error-handling)</br>
&emsp;&emsp;[2.2 Use only the built-in Error object `#strategic`](#-22-use-only-the-built-in-error-object)</br>
&emsp;&emsp;[2.3 Distinguish operational vs programmer errors `#strategic`](#-23-distinguish-operational-vs-programmer-errors)</br>
&emsp;&emsp;[2.4 Handle errors centrally, not within a middleware `#strategic`](#-24-handle-errors-centrally-not-within-a-middleware)</br>
&emsp;&emsp;[2.5 Document API errors using Swagger or GraphQL `#modified-recently`](#-25-document-api-errors-using-swagger-or-graphql)</br>
&emsp;&emsp;[2.6 Exit the process gracefully when a stranger comes to town `#strategic`](#-26-exit-the-process-gracefully-when-a-stranger-comes-to-town)</br>
&emsp;&emsp;[2.7 Use a mature logger to increase error visibility](#-27-use-a-mature-logger-to-increase-error-visibility)</br>
&emsp;&emsp;[2.8 Test error flows using your favorite test framework](#-28-test-error-flows-using-your-favorite-test-framework)</br>
&emsp;&emsp;[2.9 Discover errors and downtime using APM products](#-29-discover-errors-and-downtime-using-apm-products)</br>
&emsp;&emsp;[2.10 Catch unhandled promise rejections `#modified-recently`](#-210-catch-unhandled-promise-rejections)</br>
&emsp;&emsp;[2.11 Fail fast, validate arguments using a dedicated library](#-211-fail-fast-validate-arguments-using-a-dedicated-library)</br>
&emsp;&emsp;[2.12 Always await promises before returning to avoid a partial stacktrace `#new`](#-212-always-await-promises-before-returning-to-avoid-a-partial-stacktrace)</br>

</details>

<details>
  <summary>
    <a href="#3-code-style-practices">3. Code Style Practices (12)</a>
  </summary>

&emsp;&emsp;[3.1 Use ESLint `#strategic`](#-31-use-eslint)</br>
&emsp;&emsp;[3.2 Node.js specific plugins](#-32-nodejs-specific-plugins)</br>
&emsp;&emsp;[3.3 Start a Codeblock's Curly Braces on the Same Line](#-33-start-a-codeblocks-curly-braces-on-the-same-line)</br>
&emsp;&emsp;[3.4 Separate your statements properly](#-34-separate-your-statements-properly)</br>
&emsp;&emsp;[3.5 Name your functions](#-35-name-your-functions)</br>
&emsp;&emsp;[3.6 Use naming conventions for variables, constants, functions and classes](#-36-use-naming-conventions-for-variables-constants-functions-and-classes)</br>
&emsp;&emsp;[3.7 Prefer const over let. Ditch the var](#-37-prefer-const-over-let-ditch-the-var)</br>
&emsp;&emsp;[3.8 Require modules first, not inside functions](#-38-require-modules-first-not-inside-functions)</br>
&emsp;&emsp;[3.9 Require modules by folders, as opposed to the files directly](#-39-require-modules-by-folders-as-opposed-to-the-files-directly)</br>
&emsp;&emsp;[3.10 Use the === operator](#-310-use-the--operator)</br>
&emsp;&emsp;[3.11 Use Async Await, avoid callbacks `#strategic`](#-311-use-async-await-avoid-callbacks)</br>
&emsp;&emsp;[3.12 Use arrow function expressions (=>)](#-312-use-arrow-function-expressions-)</br>

</details>

<details>
  <summary>
    <a href="#4-testing-and-overall-quality-practices">4. Testing And Overall Quality Practices (13)</a>
  </summary>

&emsp;&emsp;[4.1 At the very least, write API (component) testing `#strategic`](#-41-at-the-very-least-write-api-component-testing)</br>
&emsp;&emsp;[4.2 Include 3 parts in each test name `#new`](#-42-include-3-parts-in-each-test-name)</br>
&emsp;&emsp;[4.3 Structure tests by the AAA pattern `#strategic`](#-43-structure-tests-by-the-aaa-pattern)</br>
&emsp;&emsp;[4.4 Detect code issues with a linter](#-44-detect-code-issues-with-a-linter)</br>
&emsp;&emsp;[4.5 Avoid global test fixtures and seeds, add data per-test `#strategic`](#-45-avoid-global-test-fixtures-and-seeds-add-data-per-test)</br>
&emsp;&emsp;[4.6 Constantly inspect for vulnerable dependencies](#-46-constantly-inspect-for-vulnerable-dependencies)</br>
&emsp;&emsp;[4.7 Tag your tests  `#advanced`](#-47-tag-your-tests)</br>
&emsp;&emsp;[4.8 Check your test coverage, it helps to identify wrong test patterns](#-48-check-your-test-coverage-it-helps-to-identify-wrong-test-patterns)</br>
&emsp;&emsp;[4.9 Inspect for outdated packages](#-49-inspect-for-outdated-packages)</br>
&emsp;&emsp;[4.10 Use production-like environment for e2e testing](#-410-use-production-like-environment-for-e2e-testing)</br>
&emsp;&emsp;[4.11 Refactor regularly using static analysis tools](#-411-refactor-regularly-using-static-analysis-tools)</br>
&emsp;&emsp;[4.12 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)](#-412-carefully-choose-your-ci-platform-jenkins-vs-circleci-vs-travis-vs-rest-of-the-world)</br>
&emsp;&emsp;[4.13 Test your middlewares in isolation](#-413-test-your-middlewares-in-isolation)</br>

</details>

<details>
  <summary>
    <a href="#5-going-to-production-practices">5. Going To Production Practices (19)</a>
  </summary>

&emsp;&emsp;[5.1. Monitoring `#strategic`](#-51-monitoring)</br>
&emsp;&emsp;[5.2. Increase transparency using smart logging `#strategic`](#-52-increase-transparency-using-smart-logging)</br>
&emsp;&emsp;[5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy `#strategic`](#-53-delegate-anything-possible-eg-gzip-ssl-to-a-reverse-proxy)</br>
&emsp;&emsp;[5.4. Lock dependencies](#-54-lock-dependencies)</br>
&emsp;&emsp;[5.5. Guard process uptime using the right tool](#-55-guard-process-uptime-using-the-right-tool)</br>
&emsp;&emsp;[5.6. Utilize all CPU cores](#-56-utilize-all-cpu-cores)</br>
&emsp;&emsp;[5.7. Create a ‘maintenance endpoint’](#-57-create-a-maintenance-endpoint)</br>
&emsp;&emsp;[5.8. Discover errors and downtime using APM products  `#advanced`](#-58-discover-errors-and-downtime-using-apm-products)</br>
&emsp;&emsp;[5.9. Make your code production-ready](#-59-make-your-code-production-ready)</br>
&emsp;&emsp;[5.10. Measure and guard the memory usage `#advanced`](#-510-measure-and-guard-the-memory-usage)</br>
&emsp;&emsp;[5.11. Get your frontend assets out of Node](#-511-get-your-frontend-assets-out-of-node)</br>
&emsp;&emsp;[5.12. Be stateless, kill your servers almost every day](#-512-be-stateless-kill-your-servers-almost-every-day)</br>
&emsp;&emsp;[5.13. Use tools that automatically detect vulnerabilities](#-513-use-tools-that-automatically-detect-vulnerabilities)</br>
&emsp;&emsp;[5.14. Assign a transaction id to each log statement `#advanced`](#-514-assign-a-transaction-id-to-each-log-statement)</br>
&emsp;&emsp;[5.15. Set NODE_ENV=production](#-515-set-node_envproduction)</br>
&emsp;&emsp;[5.16. Design automated, atomic and zero-downtime deployments  `#advanced`](#-516-design-automated-atomic-and-zero-downtime-deployments)</br>
&emsp;&emsp;[5.17. Use an LTS release of Node.js](#-517-use-an-lts-release-of-nodejs)</br>
&emsp;&emsp;[5.18. Don't route logs within the app](#-518-dont-route-logs-within-the-app)</br>
&emsp;&emsp;[5.19. Install your packages with npm ci `#new`](#-519-install-your-packages-with-npm-ci)</br>

</details>

<details>
  <summary>
    <a href="#6-security-best-practices">6. Security Practices (25)</a>
  </summary>

&emsp;&emsp;[6.1. Embrace linter security rules](#-61-embrace-linter-security-rules)</br>
&emsp;&emsp;[6.2. Limit concurrent requests using a middleware](#-62-limit-concurrent-requests-using-a-middleware)</br>
&emsp;&emsp;[6.3 Extract secrets from config files or use packages to encrypt them  `#strategic`](#-63-extract-secrets-from-config-files-or-use-packages-to-encrypt-them)</br>
&emsp;&emsp;[6.4. Prevent query injection vulnerabilities with ORM/ODM libraries `#strategic`](#-64-prevent-query-injection-vulnerabilities-with-ormodm-libraries)</br>
&emsp;&emsp;[6.5. Collection of generic security best practices](#-65-collection-of-generic-security-best-practices)</br>
&emsp;&emsp;[6.6. Adjust the HTTP response headers for enhanced security](#-66-adjust-the-http-response-headers-for-enhanced-security)</br>
&emsp;&emsp;[6.7. Constantly and automatically inspect for vulnerable dependencies `#strategic`](#-67-constantly-and-automatically-inspect-for-vulnerable-dependencies)</br>
&emsp;&emsp;[6.8. Protect Users' Passwords/Secrets using bcrypt or scrypt `#strategic`](#-68-protect-users-passwordssecrets-using-bcrypt-or-scrypt)</br>
&emsp;&emsp;[6.9. Escape HTML, JS and CSS output](#-69-escape-html-js-and-css-output)</br>
&emsp;&emsp;[6.10. Validate incoming JSON schemas `#strategic`](#-610-validate-incoming-json-schemas)</br>
&emsp;&emsp;[6.11. Support blocklisting JWTs](#-611-support-blocklisting-jwts)</br>
&emsp;&emsp;[6.12. Prevent brute-force attacks against authorization `#advanced`](#-612-prevent-brute-force-attacks-against-authorization)</br>
&emsp;&emsp;[6.13. Run Node.js as non-root user](#-613-run-nodejs-as-non-root-user)</br>
&emsp;&emsp;[6.14. Limit payload size using a reverse-proxy or a middleware](#-614-limit-payload-size-using-a-reverse-proxy-or-a-middleware)</br>
&emsp;&emsp;[6.15. Avoid JavaScript eval statements](#-615-avoid-javascript-eval-statements)</br>
&emsp;&emsp;[6.16. Prevent evil RegEx from overloading your single thread execution](#-616-prevent-evil-regex-from-overloading-your-single-thread-execution)</br>
&emsp;&emsp;[6.17. Avoid module loading using a variable](#-617-avoid-module-loading-using-a-variable)</br>
&emsp;&emsp;[6.18. Run unsafe code in a sandbox](#-618-run-unsafe-code-in-a-sandbox)</br>
&emsp;&emsp;[6.19. Take extra care when working with child processes  `#advanced`](#-619-take-extra-care-when-working-with-child-processes)</br>
&emsp;&emsp;[6.20. Hide error details from clients](#-620-hide-error-details-from-clients)</br>
&emsp;&emsp;[6.21. Configure 2FA for npm or Yarn `#strategic`](#-621-configure-2fa-for-npm-or-yarn)</br>
&emsp;&emsp;[6.22. Modify session middleware settings](#-622-modify-session-middleware-settings)</br>
&emsp;&emsp;[6.23. Avoid DOS attacks by explicitly setting when a process should crash  `#advanced`](#-623-avoid-dos-attacks-by-explicitly-setting-when-a-process-should-crash)</br>
&emsp;&emsp;[6.24. Prevent unsafe redirects](#-624-prevent-unsafe-redirects)</br>
&emsp;&emsp;[6.25. Avoid publishing secrets to the npm registry](#-625-avoid-publishing-secrets-to-the-npm-registry)</br>

</details>

<details>
  <summary>
    <a href="#7-draft-performance-best-practices">7. Performance Practices (2) (Work In Progress️ ✍️)</a>
  </summary>

&emsp;&emsp;[7.1. Don't block the event loop](#-71-dont-block-the-event-loop)</br>
&emsp;&emsp;[7.2. Prefer native JS methods over user-land utils like Lodash](#-72-prefer-native-js-methods-over-user-land-utils-like-lodash)</br>

</details>

<details>
  <summary>
    <a href="#8-docker-best-practices">8. Docker Practices (15)</a>
  </summary>

&emsp;&emsp;[8.1 Use multi-stage builds for leaner and more secure Docker images `#strategic`](#-81-use-multi-stage-builds-for-leaner-and-more-secure-docker-images)</br>
&emsp;&emsp;[8.2. Bootstrap using node command, avoid npm start](#-82-bootstrap-using-node-command-avoid-npm-start)</br>
&emsp;&emsp;[8.3. Let the Docker runtime handle replication and uptime `#strategic`](#-83-let-the-docker-runtime-handle-replication-and-uptime)</br>
&emsp;&emsp;[8.4. Use .dockerignore to prevent leaking secrets](#-84-use-dockerignore-to-prevent-leaking-secrets)</br>
&emsp;&emsp;[8.5. Clean-up dependencies before production](#-85-clean-up-dependencies-before-production)</br>
&emsp;&emsp;[8.6. Shutdown smartly and gracefully  `#advanced`](#-86-shutdown-smartly-and-gracefully)</br>
&emsp;&emsp;[8.7. Set memory limits using both Docker and v8 `#advanced #strategic`](#-87-set-memory-limits-using-both-docker-and-v8)</br>
&emsp;&emsp;[8.8. Plan for efficient caching](#-88-plan-for-efficient-caching)</br>
&emsp;&emsp;[8.9. Use explicit image reference, avoid latest tag](#-89-use-explicit-image-reference-avoid-latest-tag)</br>
&emsp;&emsp;[8.10. Prefer smaller Docker base images](#-810-prefer-smaller-docker-base-images)</br>
&emsp;&emsp;[8.11. Clean-out build-time secrets, avoid secrets in args  `#strategic #new`](#-811-clean-out-build-time-secrets-avoid-secrets-in-args)</br>
&emsp;&emsp;[8.12. Scan images for multi layers of vulnerabilities  `#advanced`](#-812-scan-images-for-multi-layers-of-vulnerabilities)</br>
&emsp;&emsp;[8.13 Clean NODE_MODULE cache](#-813-clean-node_module-cache)</br>
&emsp;&emsp;[8.14. Generic Docker practices](#-814-generic-docker-practices)</br>
&emsp;&emsp;[8.15. Lint your Dockerfile  `#new`](#-815-lint-your-dockerfile)</br>

</details>

<br/><br/>


# `1. بهترین روش های برای ساختار پروژه`

## ![✔] 1.1 با استفاده از کامپوننت ها پروژه خود را ساختار بندی کنید

**TL;DR:** The worst large applications pitfall is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Instead, partition your code into components, each gets its folder or a dedicated codebase, and ensure that each unit is kept small and simple. Visit 'Read More' below to see examples of correct project structure

**Otherwise:** When developers who code new features struggle to realize the impact of their change and fear to break other dependent components - deployments become slower and riskier. It's also considered harder to scale-out when all the business units are not separated

🔗 [**Read More: structure by components**](./sections/projectstructre/breakintcomponents.md)

<br/><br/>
