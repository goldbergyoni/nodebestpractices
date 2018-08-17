[✔]: assets/images/checkbox-small-blue.png

# Node.js 모범 사례

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="53 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Apr%2023%202018-green.svg" alt="Last update: Apr 23, 2018"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.11-brightgreen.svg" alt="Updated for Node v.8.11">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **트위터에서 팔로우 하세요!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

다른 언어로 읽기: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![RU](/assets/flags/RU.png)**RU**, ![TR](/assets/flags/TR.png)**TR** 는 작업중입니다!)](#translations)

<br/>

# 안녕하세요! 먼저 알아야 할 3가지가 있습니다:

**1. 이 문서를 읽는 것은, 사실상 수십 개의 베스트 Node.js 문서를 읽는 것입니다. -** 이 문서는 Node.js 의 가장 인기 있는 모범사례(Best Practice)들을 모은 요약집 및 큐레이션입니다.

**2. 가장 큰 모음집이며, 매주 성장하고 있습니다. -** 현재, 50개 이상의 모범사례들과, 스타일 가이드, 아키텍처적인 팁들이 제공되고 있습니다. 이 문서의 업데이트를 위해 새로운 이슈들과 PR들이 매일 만들어지고 있습니다. 우리는 이 문서의 잘못된 코드를 고치거나 새로운 아이디어들을 제안하는 것을 매우 환영합니다. [마일스톤 보러가기](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open)

**3. 항목 대부분은 추가적인 정보가 있습니다 -** 항목 옆쪽에 존재하는 **🔗자세히 보기** 링크에서 코드 예제, 참조 블로그 또는 기타 정보들을 확인 할 수 있습니다.

<br/><br/><br/>

## 목차

1. [프로젝트 구조 설계 (5)](#1-프로젝트-구조-설계)
2. [에러 처리 방법 (11)](#2-에러-처리-방법)
3. [코드 스타일 (12) ](#3-코드-스타일)
4. [테스트 및 전체 품질 관리 (8) ](#4-테스트-및-전체-품질-관리)
5. [운영 환경으로 전환하기 (16) ](#5-운영-환경으로-전환하기)
6.  보안 ([예정](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))
7.  성능 ([예정](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))

<br/><br/><br/>

# `1. 프로젝트 구조 설계`

## ![✔] 1.1 컴포넌트 기반으로 설계하라

**핵심요약:** 큰 프로젝트에서 빠지기 쉬운 가장 안좋은 함정은 많은 수백개의 의존성을 가진 커다란 소스코드를 유지보수하는 것이다. 그렇게 하나로 통째로 짜여진 코드는 개발자가 새로운 기능들을 협업하는 속도를 느려지게 한다. 그 대신에 당신의 코드를 컴포넌트로 나누고, 각각의 컴포넌트가 자신의 폴더 혹은 할당된 코드베이스를 가지게 하고 컴포넌트의 각 단위가 작고 간단하게 유지되도록 하라. 아래의 '자세히 보기'를 눌러 올바를 프로젝트 구조의 예시를 확인하라.

**그렇게 하지 않을 경우:** 새로운 기능을 작성하는 개발자가 변경사항이 미치는 영향을 깨닫기위해 몸부림치거나 의존하고 있는 다른 컴포넌트를 망칠까봐 두려워 할때 배포는 느려지고 더 위험해진다. 비지니스 단위가 나눠져 있지 않으면 확장(scale-out)하기도 쉽지 않다.

🔗 [**자세히 보기: 컴포넌트로 구조화하기**](/sections/projectstructre/breakintcomponents.korean.md)

<br/><br/>

## ![✔] 1.2 컴포넌트를 계층화(layer)하고, Express를 그 경계 안에 둬라.

**핵심요약:** 각각의 컴포넌트는 웹, 로직, 데이터 접근 코드을 위한 객체인 '계층'을 포함해야 한다. 이것은 우려를 깨끗하게 분리할 뿐만 아니라 가짜 객체를 만들거나(mocking) 테스트하기가 굉장히 쉽게 만든다. 이것은 굉장히 일반적인 패턴이지만, API 개발자는 웹 계층의 객체 (Express req, res)를 비지니스 로직과 데이터 계층으로 보내서 계층을 뒤섞어버리는 경향이 있다. 이것은 당신의 어플리케이션에 의존성을 만들고 Expres에서만 접근 가능하도록 만든다.

**그렇게 하지 않을 경우:** 웹 객체를 다른 계층과 뒤섞은 앱은 테스트 코드, CRON 작업이나 Express가 아닌 다른 곳에서 접근이 불가능하게 한다.

🔗 [**자세히 보기: 앱을 계층화하기**](/sections/projectstructre/createlayers.korean.md)

<br/><br/>

## ![✔] 1.3 유틸리티들을 NPM 패키지로 감싸라(wrap)

**핵심요약:** 커다란 코드 기반으로 구성되어있는 커다란 앱에서는 로깅, 암호화 같은 횡단 관심사(cross-cutting-concern)가 존재하는 유틸의 경우 당신 자신의 코드로 감싸져야하며 개인 NPM package로 노출이 되어야한다. 이것은 여러 코드 기반과 프로젝트들 사이에서 그것들을 공유가 가능하도록 해준다.

**그렇게 하지 않을 경우:** 당신 자신만의 배포 및 의존성 바퀴(wheel)를 새로 발명해야 할 것이다.

🔗 [**자세히 보기: 기능으로 구조화 하기**](/sections/projectstructre/wraputilities.korean.md)

<br/><br/>

## ![✔] 1.4 Express의 app과 server를 분리하라

**핵심요약:** 'Express' 정의를 적어도 API 선언(app.js)과 네트워크 부분(WWW)의 두 개 파일로 나눠서 전체 [Express](https://expressjs.com/)앱을 하나의 큰 파일에 정의하는 불쾌한 습관을 피해라. 더 좋은 구조는 API 선언을 컴포넌트에 위치시키는 것이다.

**그렇게 하지 않을 경우:** API는 HTTP 요청으로만 테스트가 가능 할것이다(커버리지 보고서를 생성하기가 더 느려지고 훨씬 힘들어진다). 수백줄의 코드를 하나의 파일에서 관리하는 것은 큰 기쁨이 아닐 것이다.

🔗 [**자세히 보기: Express를 'app'과 'server'로 분리하기**](/sections/projectstructre/separateexpress.korean.md)

<br/><br/>

## ![✔] 1.5 Use environment aware, secure and hierarchical config

**TL;DR:** A perfect and flawless configuration setup should ensure (a) keys can be read from file AND from environment variable (b) secrets are kept outside committed code (c) config is hierarchical for easier findability. There are a few packages that can help tick most of those boxes like [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) and [config](https://www.npmjs.com/package/config)

**Otherwise:** Failing to satisfy any of the config requirements will simply bog down the development or devops team. Probably both

🔗 [**자세히 보기: configuration best practices**](/sections/projectstructre/configguide.korean.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `2. 에러 처리 방법`

## ![✔] 2.1 Use Async-Await or promises for async error handling

**TL;DR:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using a reputable promise library or async-await instead which enables a much more compact and familiar code syntax like try-catch

**Otherwise:** Node.js callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting and awkward coding patterns

🔗 [**자세히 보기: avoiding callbacks**](/sections/errorhandling/asyncerrorhandling.korean.md)

<br/><br/>

## ![✔] 2.2 Use only the built-in Error object

**TL;DR:** Many throws errors as a string or as some custom type – this complicates the error handling logic and the interoperability between modules. Whether you reject a promise, throw an exception or an emit error – using only the built-in Error object will increase uniformity and prevent loss of information

**Otherwise:** When invoking some component, being uncertain which type of errors come in return – it makes proper error handling much harder. Even worse, using custom types to describe errors might lead to loss of critical error information like the stack trace!

🔗 [**자세히 보기: using the built-in error object**](/sections/errorhandling/useonlythebuiltinerror.korean.md)

<br/><br/>

## ![✔] 2.3 Distinguish operational vs programmer errors

**TL;DR:** Operational errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully. On the other hand, programmer error (e.g. trying to read undefined variable) refers to unknown code failures that dictate to gracefully restart the application

**Otherwise:** You may always restart the application when an error appears, but why let ~5000 online users down because of a minor, predicted, operational error? the opposite is also not ideal – keeping the application up when an unknown issue (programmer error) occurred might lead to an unpredicted behavior. Differentiating the two allows acting tactfully and applying a balanced approach based on the given context

🔗 [**자세히 보기: operational vs programmer error**](/sections/errorhandling/operationalvsprogrammererror.korean.md)

<br/><br/>

## ![✔] 2.4 Handle errors centrally, not within an Express middleware

**TL;DR:** Error handling logic such as mail to admin and logging should be encapsulated in a dedicated and centralized object that all endpoints (e.g. Express middleware, cron jobs, unit-testing) call when an error comes in

**Otherwise:** Not handling errors within a single place will lead to code duplication and probably to improperly handled errors

🔗 [**자세히 보기: handling errors in a centralized place**](/sections/errorhandling/centralizedhandling.korean.md)

<br/><br/>

## ![✔] 2.5 Document API errors using Swagger

**TL;DR:** Let your API callers know which errors might come in return so they can handle these thoughtfully without crashing. This is usually done with REST API documentation frameworks like Swagger

**Otherwise:** An API client might decide to crash and restart only because he received back an error he couldn’t understand. Note: the caller of your API might be you (very typical in a microservice environment)

🔗 [**자세히 보기: documenting errors in Swagger**](/sections/errorhandling/documentingusingswagger.korean.md)

<br/><br/>

## ![✔] 2.6 Shut the process gracefully when a stranger comes to town

**TL;DR:** When an unknown error occurs (a developer error, see best practice number #3)- there is uncertainty about the application healthiness. A common practice suggests restarting the process carefully using a ‘restarter’ tool like Forever and PM2

**Otherwise:** When an unfamiliar exception is caught, some object might be in a faulty state (e.g an event emitter which is used globally and not firing events anymore due to some internal failure) and all future requests might fail or behave crazily

🔗 [**자세히 보기: shutting the process**](/sections/errorhandling/shuttingtheprocess.korean.md)

<br/><br/>

## ![✔] 2.7 Use a mature logger to increase error visibility

**TL;DR:** A set of mature logging tools like Winston, Bunyan or Log4J, will speed-up error discovery and understanding. So forget about console.log

**Otherwise:** Skimming through console.logs or manually through messy text file without querying tools or a decent log viewer might keep you busy at work until late

🔗 [**자세히 보기: using a mature logger**](/sections/errorhandling/usematurelogger.korean.md)

<br/><br/>

## ![✔] 2.8 Test error flows using your favorite test framework

**TL;DR:** Whether professional automated QA or plain manual developer testing – Ensure that your code not only satisfies positive scenario but also handle and return the right errors. Testing frameworks like Mocha & Chai can handle this easily (see code examples within the "Gist popup")

**Otherwise:** Without testing, whether automatically or manually, you can’t rely on our code to return the right errors. Without meaningful errors – there’s no error handling

🔗 [**자세히 보기: testing error flows**](/sections/errorhandling/testingerrorflows.korean.md)

<br/><br/>

## ![✔] 2.9 Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge your codebase or API so they can automagically highlight errors, crashes and slow parts that you were missing

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which are your slowest code parts under real-world scenario and how these affect the UX

🔗 [**자세히 보기: using APM products**](/sections/errorhandling/apmproducts.korean.md)

<br/><br/>

## ![✔] 2.10 Catch unhandled promise rejections

**TL;DR:** Any exception thrown within a promise will get swallowed and discarded unless a developer didn’t forget to explicitly handle. Even if your code is subscribed to process.uncaughtException! Overcome this by registering to the event process.unhandledRejection

**Otherwise:** Your errors will get swallowed and leave no trace. Nothing to worry about

🔗 [**자세히 보기: catching unhandled promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.korean.md)

<br/><br/>

## ![✔] 2.11 Fail fast, validate arguments using a dedicated library

**TL;DR:** This should be part of your Express best practices – Assert API input to avoid nasty bugs that are much harder to track later. The validation code is usually tedious unless you are using a very cool helper library like Joi

**Otherwise:** Consider this – your function expects a numeric argument “Discount” which the caller forgets to pass, later on, your code checks if Discount!=0 (amount of allowed discount is greater than zero), then it will allow the user to enjoy a discount. OMG, what a nasty bug. Can you see it?

🔗 [**자세히 보기: failing fast**](/sections/errorhandling/failfast.korean.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `3. 코드 스타일`

## ![✔] 3.1 Use ESLint

**TL;DR:** [ESLint](https://eslint.org) is the de-facto standard for checking possible code errors and fixing code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. Though ESLint can automatically fix code styles, other tools like [prettier](https://www.npmjs.com/package/prettier) and [beautify](https://www.npmjs.com/package/js-beautify) are more powerful in formatting the fix and work in conjunction with ESLint

**Otherwise:** Developers will focus on tedious spacing and line-width concerns and time might be wasted overthinking about the project's code style

<br/><br/>

## ![✔] 3.2 Node.js Specific Plugins

**TL;DR:** On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Otherwise:** Many faulty Node.js code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.js linters can detect such patterns and complain early

<br/><br/>

## ![✔] 3.3 Start a Codeblock's Curly Braces on the Same Line

**TL;DR:** The opening curly braces of a code block should be in the same line of the opening statement

### Code Example

```javascript
// Do
function someFunction() {
  // code block
}

// Avoid
function someFunction()
{
  // code block
}
```

**Otherwise:** Deferring from this best practice might lead to unexpected results, as seen in the StackOverflow thread below:

🔗 [**자세히 보기:** "Why does a results vary based on curly brace placement?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Don't Forget the Semicolon

**TL;DR:** While not unanimously agreed upon, it is still recommended to put a semicolon at the end of each statement. This will make your code more readable and explicit to other developers who read it

**Otherwise:** As seen in the previous section, JavaScript's interpreter automatically adds a semicolon at the end of a statement if there isn't one which might lead to some undesired results

<br/><br/>

## ![✔] 3.5 Name Your Functions

**TL;DR:** Name all functions, including closures and callbacks. Avoid anonymous functions. This is especially useful when profiling a node app. Naming all functions will allow you to easily understand what you're looking at when checking a memory snapshot

**Otherwise:** Debugging production issues using a core dump (memory snapshot) might become challenging as you notice significant memory consumption from anonymous functions

<br/><br/>

## ![✔] 3.6 Naming conventions for variables, constants, functions and classes

**TL;DR:** Use **_lowerCamelCase_** when naming constants, variables and functions and **_UpperCamelCase_** (capital first letter as well) when naming classes. This will help you to easily distinguish between plain variables/functions, and classes that require instantiation. Use descriptive names, but try to keep them short

**Otherwise:** Javascript is the only language in the world which allows invoking a constructor ("Class") directly without instantiating it first. Consequently, Classes and function-constructors are differentiated by starting with UpperCamelCase

### Code Example

```javascript
// for class name we use UpperCamelCase
class SomeClassExample {}

// for const names we use the const keyword and lowerCamelCase
const config = {
  key: 'value'
};

// for variables and functions names we use lowerCamelCase
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Prefer const over let. Ditch the var

**TL;DR:** Using `const` means that once a variable is assigned, it cannot be reassigned. Preferring const will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop, for example, use `let` to declare it. Another important aspect of `let` is that a variable declared using it is only available in the block scope in which it was defined. `var` is function scoped, not block scoped, and [shouldn't be used in ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) now that you have const and let at your disposal

**Otherwise:** Debugging becomes way more cumbersome when following a variable that frequently changes

🔗 [**자세히 보기: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Requires come first, and not inside functions

**TL;DR:** Require modules at the beginning of each file, before and outside of any functions. This simple best practice will not only help you easily and quickly tell the dependencies of a file right at the top but also avoids a couple of potential problems

**Otherwise:** Requires are run synchronously by Node.js. If they are called from within a function, it may block other requests from being handled at a more critical time. Also, if a required module or any of its own dependencies throw an error and crash the server, it is best to find out about it as soon as possible, which might not be the case if that module is required from within a function

<br/><br/>

## ![✔] 3.9 Do Require on the folders, not directly on the files

**TL;DR:** When developing a module/library in a folder, place an index.js file that exposes the module's
internals so every consumer will pass through it. This serves as an 'interface' to your module and eases
future changes without breaking the contract

**Otherwise:** Changing the internal structure of files or the signature may break the interface with
clients

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

**TL;DR:** Prefer the strict equality operator `===` over the weaker abstract equality operator `==`. `==` will compare two variables after converting them to a common type. There is no type conversion in `===`, and both variables must be of the same type to be equal

**Otherwise:** Unequal variables might return true when compared with the `==` operator

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

**TL;DR:** Node 8 LTS now has full support for Async-await. This is a new way of dealing with asynchronous code which supersedes callbacks and promises. Async-await is non-blocking, and it makes asynchronous code look synchronous. The best gift you can give to your code is using async-await which provides a much more compact and familiar code syntax like try-catch

**Otherwise:** Handling async errors in callback style is probably the fastest way to hell - this style forces to check errors all over, deal with awkward code nesting and make it difficult to reason about the code flow

🔗[**자세히 보기:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use Fat (=>) Arrow Functions

**TL;DR:** Though it's recommended to use async-await and avoid function parameters when dealing with older API that accept promises or callbacks - arrow functions make the code structure more compact and keep the lexical context of the root function (i.e. 'this')

**Otherwise:** Longer code (in ES5 functions) is more prone to bugs and cumbersome to read

🔗 [**Read mode: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `4. 테스트 및 전체 품질 관리`

## ![✔] 4.1 At the very least, write API (component) testing

**TL;DR:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' run out of control and being abandoned. For that reason, prioritize and start with API testing which is the easiest to write and provide more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterward, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**Otherwise:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Detect code issues with a linter

**TL;DR:** Use a code linter to check basic quality and detect anti-patterns early. Run it before any test and add it as a pre-commit git-hook to minimize the time needed to review and correct any issue. Also check [Section 3](https://github.com/i0natan/nodebestpractices#3-code-style-practices) on Code Style Practices

**Otherwise:** You may let pass some anti-pattern and possible vulnerable code to your production environment.

<br/><br/>

## ![✔] 4.3 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it became much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**Otherwise:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**자세히 보기: Choosing CI platform**](/sections/testingandquality/citools.korean.md)

<br/><br/>

## ![✔] 4.4 Constantly inspect for vulnerable dependencies

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [nsp](https://github.com/nodesecurity/nsp) that can be invoked from your CI on every build

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.5 Tag your tests

**TL;DR:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**Otherwise:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

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

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `5. 운영 환경으로 전환하기`

## ![✔] 5.1. Monitoring!

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**Otherwise:** Failure === disappointed customers. Simple

🔗 [**자세히 보기: Monitoring!**](/sections/production/monitoring.korean.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end-up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**자세히 보기: Increase transparency using smart logging**](/sections/production/smartlogging.korean.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**Otherwise:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**자세히 보기: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.korean.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly NPM lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using NPM config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use NPM” shrinkwrap”. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code

🔗 [**자세히 보기: Lock dependencies**](/sections/production/lockdependencies.korean.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenarios, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to a DevOps chaos

🔗 [**자세히 보기: Guard process uptime using the right tool**](/sections/production/guardprocess.korean.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all other are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**자세히 보기: Utilize all CPU cores**](/sections/production/utilizecpu.korean.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**자세히 보기: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.korean.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affects the UX

🔗 [**자세히 보기: Discover errors and downtime using APM products**](/sections/production/apmproducts.korean.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Otherwise:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**자세히 보기: Make your code production-ready**](/sections/production/productoncode.korean.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**자세히 보기: Measure and guard the memory usage**](/sections/production/measurememory.korean.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single threaded model

**Otherwise:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**자세히 보기: Get your frontend assets out of Node**](/sections/production/frontendout.korean.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your Servers almost every day

**TL;DR:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**자세히 보기: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.korean.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Otherwise: Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

🔗 [**자세히 보기: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.korean.md)

<br/><br/>

## ![✔] 5.14. Assign ‘TransactionId’ to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**자세히 보기: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.korean.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many NPM packages determining the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes the slower by a factor of three!

🔗 [**자세히 보기: Set NODE_ENV=production**](/sections/production/setnodeenv.korean.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**Otherwise:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**자세히 보기: Use an LTS release of Node.js**](/sections/production/LTSrelease.korean.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `보안`

## 컨트리뷰터들이 현재 작업중 입니다. 함께 하시겠습니까?

<br/><br/><br/>

# `성능`

## 컨트리뷰터들이 현재 작업중 입니다. 함께 하시겠습니까?

<br/><br/><br/>

# 마일스톤

이 가이드를 관리하고 최신 버전을 유지하기 위해, 우리는 지속해서 가이드라인과 모범 사례들을 커뮤니티의 도움으로 업데이트하고 개선해 나가고 있습니다. 만약 이 프로젝트에 기여를 하고 싶으시면 [마일스톤](https://github.com/i0natan/nodebestpractices/milestones) 을 보고 참여하십시오.

<br/><br/>

## 번역

모든 번역은 커뮤니티에 의해 기여되고 있습니다. 이미 완성된 번역이나, 진행중, 새로운 번역에 대한 도움은 언제나 환영합니다!

### 번역 작업 완료

* ![CN](/assets/flags/CN.png) [Chinese](README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)

### 번역 작업중

* ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
* ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
* ![KR](/assets/flags/KR.png) [Korean](https://github.com/i0natan/nodebestpractices/blob/korean-translation/README.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
* ![RU](/assets/flags/RU.png) [Russian](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
* ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
* ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/><br/>

# Contributors

## `Yoni Goldberg`

Independent Node.js consultant who works with customers in USA, Europe, and Israel on building large-scale scalable Node applications. Many of the best practices above were first published in his blog post at [http://www.goldbergyoni.com](http://www.goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

## `Ido Richter`

👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)

Node.js Core Collaborator, been noding since 0.4, and have noded in multiple production sites. Founded `node4good` home of [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), and [`asynctrace`](https://github.com/node4good/asynctrace).
`refack` on freenode, Twitter, GitHub, GMail, and many other platforms. DMs are open, happy to help

## `Bruno Scheufler`

💻 full-stack web developer and Node.js enthusiast

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)
Full Stack Developer based in New Zealand, interested in architecting and building Node.js applications to perform at global scale. Keen contributor to open source software, including Node.js Core.

<br/><br/><br/>

# Thank You Notes

This repository is being kept up to date thanks to the help from the community. We appreciate any contribution, from a single word fix to a new best practice. Below is a list of everyone who contributed to this project. A 🌻 marks a successful pull request and a ⭐ marks an approved new best practice

### Flowers <br/>

🌻 [Kevin Rambaud](https://github.com/kevinrambaud),
🌻 [Michael Fine](https://github.com/mfine15),
🌻 [Shreya Dahal](https://github.com/squgeim),
🌻 [ChangJoo Park](https://github.com/ChangJoo-Park),
🌻 [Matheus Cruz Rocha](https://github.com/matheusrocha89),
🌻 [Yog Mehta](https://github.com/BitYog),
🌻 [Kudakwashe Paradzayi](https://github.com/kudapara),
🌻 [t1st3](https://github.com/t1st3),
🌻 [mulijordan1976](https://github.com/mulijordan1976),
🌻 [Matan Kushner](https://github.com/matchai),
🌻 [Fabio Hiroki](https://github.com/fabiothiroki),
🌻 [James Sumners](https://github.com/jsumners),
🌻 [Chandan Rai](https://github.com/crowchirp),
🌻 [Dan Gamble](https://github.com/dan-gamble),
🌻 [PJ Trainor](https://github.com/trainorpj),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Yoni Jah](https://github.com/yonjah),
🌻 [Misha Khokhlov](https://github.com/hazolsky),
🌻 [Evgeny Orekhov](https://github.com/EvgenyOrekhov),
🌻 [Gediminas Petrikas](https://github.com/gediminasml),
🌻 [Isaac Halvorson](https://github.com/hisaac),
🌻 [Vedran Karačić](https://github.com/vkaracic),
🌻 [lallenlowe](https://github.com/lallenlowe),
🌻 [Nathan Wells](https://github.com/nwwells),
🌻 [Paulo Vítor S Reis](https://github.com/paulovitin),
🌻 [syzer](https://github.com/syzer),
🌻 [David Sancho](https://github.com/davesnx),
🌻 [Robert Manolea](https://github.com/pupix),
🌻 [Xavier Ho](https://github.com/spaxe),
🌻 [Aaron Arney](https://github.com/ocularrhythm),
🌻 [Jan Charles Maghirang Adona](https://github.com/septa97),
🌻 [Allen Fang](https://github.com/AllenFang),
🌻 [Leonardo Villela](https://github.com/leonardovillela),
🌻 [Michal Zalecki](https://github.com/MichalZalecki)
🌻 [Chris Nicola](https://github.com/chrisnicola),
🌻 [Alejandro Corredor](https://github.com/aecorredor),
🌻 [Ye Min Htut](https://github.com/ymhtut),
🌻 [cwar](https://github.com/cwar),
🌻 [Yuwei](https://github.com/keyfoxth),
🌻 [Utkarsh Bhatt](https://github.com/utkarshbhatt12)
🌻 [Duarte Mendes](https://github.com/duartemendes)
🌻 [Sagir Khan](https://github.com/sagirk)
🌻 [Jason Kim](https://github.com/serv)


### Stars <br/>

⭐ [Kyle Martin](https://github.com/js-kyle)

<br/><br/><br/>
