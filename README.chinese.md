[✔]: assets/images/checkbox-small-blue.png

# Node.js 最佳实践

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

# 欢迎! 首先您应该知道的三件事情:
**1. 当您读到这里，实际上您读了很多关于Node.JS的优秀文章 -** 这里是关于Node JS 最佳实践的优质内容的总结和管理

**2. 这里是最大的汇集，且每周都在增长 -** 当前，超过50个最佳实现，样式指南，架构建议已经呈现。我们欢迎议题和PR使这本在线书籍不断更新。我们也乐于见到您能在这里做出贡献，不管是修复一些代码的错误，或是建议卓越的新想法 - 作为Node.JS最佳实践这本书中的一部分

**3. 大部分的条目包含额外的信息 -** 大部分的最佳实践条目的旁边，您将发现 **🔗Read More** 链接，它将呈现给您示例代码，博客引用和更多信息

<br/><br/><br/>

## 目录
1. [项目结构实践 (5)](#1-project-structure-practices)
2. [异常处理实践 (11) ](#2-error-handling-practices)
3. [编码规范实践 (12) ](#3-code-style-practices)
4. [测试和总体质量实践 (8) ](#4-testing-and-overall-quality-practices)
5. [Going To Production Practices (16) ](#5-going-to-production-practices)
6. Security Practices (coming soon)
7. Performance Practices (coming soon)


<br/><br/><br/>
# `1. 项目结构实践`

## ![✔] 1.1 组件式构建你的解决方案Structure your solution by components

 **TL;DR:** 最大的项目隐患就是维护一个巨大的，含有几百个依赖的代码库 - 当开发人员准备整合新的需求的时候，这样一个庞然大物势必减缓了开发效率。反之，把您的代码拆分成组件，每一个组件有它自己的文件夹和代码库，并且确保每一个组件小而简单。查看正确的项目结构的例子请访问下面的 ‘更多’ 链接。

**否则:** 当编写新需求的开发人员逐步意识到他所做改变的影响，并担心会破坏其他的依赖模块 - 部署会变得更慢，风险更大。当所有业务逻辑没有被分开，这也会被认为很难扩展

🔗 [**更多: 组件结构**](/sections/projectstructre/breakintcomponents.chinese.md)

<br/><br/>

## ![✔] 1.2 分层设计组件，保持Express在特定的区域

**TL;DR:** 每一个组件都应该包含'层级' - 一个专注的用于接入网络，逻辑，数据的概念。这样不仅获得一个清晰的分离考量，而且使仿真和测试系统变得异常容易。尽管这是一个普通的模式，但接口开发者易于混淆层级关系，比如把网络层的对象（Express req, res）传给业务逻辑和数据层 - 这会令您的应用彼此依赖，并且只能通过Express使用。

**否则:** 对于混淆了网络层和其它层的应用，将不易于测试，执行CRON的任务，其它非-Express的调用者无法使用

🔗 [**更多: 应用分层**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 封装公共模块成为NPM的包

**TL;DR:** 由大量代码构成的一个大型应用中，贯彻全局的，比如日志，加密和其它类似的公共组件，应该进行封装，并暴露成一个私有的NPM包。这将使其在更多的代码库和项目中被使用变成了可能。

**否则:** 您将不得不重造部署和依赖的轮子

🔗 [**更多: 通过需求构建**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 分离 Express 'app' and 'server'

**TL;DR:** 避免定义整个[Express](https://expressjs.com/)应用在一个单独的大文件的不好习惯 - 分离您的 'Express' 定义至少在两个文件中： API声明(app.js) 和 网络相关(WWW)。对于更好的结构，是把你的API声明放在组件中。

**否则:** 您的API将只能通过HTTP的调用进行测试（慢，并且很难产生测试覆盖报告）。维护一个有着上百行代码的文件也不是一个令人开心的事情。

🔗 [**更多: 分离 Express 'app' and 'server'**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 使用易于设置环境变量，安全和分级的配置


**TL;DR:** 一个完美无瑕的配置安装应该确保 (a) 元素可以从文件中，也可以从环境变量中读取 (b) 密码排除在提交的代码之外 (c) 为了易于检索，配置是分级的。仅有几个包可以满足这样的条件，比如[nconf](https://www.npmjs.com/package/nconf) 和 [config](https://www.npmjs.com/package/config)。

**否则:** 不能满足任意的配置要求将会使开发，运维团队，或者两者，易于陷入泥潭。
🔗 [**更多: 配置最佳实践**](/sections/projectstructre/configguide.md)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `2. 错误处理最佳实践`

## ![✔] 2.1  使用 Async-Await 和 promises 用于异步错误处理

**TL;DR:** 使用回调的方式处理异步错误可能是导致灾难的最快的方式(a.k.a the pyramid of doom)。对您的代码来说，最好的礼物就是使用规范的promise库或async-await来替代，这会使其像try-catch一样更加简洁，熟悉的代码结构。 

**否则:** Node.JS 回调特性, function(err, response), 是导致不可维护代码的一个必然的方式。究其原因，是由于混合了随意的错误处理代码，臃肿的内嵌，蹩脚的代码模式。

🔗 [**更多: 避免回调**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 仅使用内建的错误对象

**TL;DR:** 很多人抛出异常使用字符串类型或一些自定义类型 - 这会导致错误处理逻辑和模块间的调用复杂化。是否您reject一个promise，抛出异常或发出(emit)错误 - 使用内建的错误对象将会增加设计一致性，并防止信息的丢失。


**否则:** 调用某些模块，将不确定哪种错误类型会返回 - 这将会使恰当的错误处理更加困难。更坏的情况是，使用特定的类型描述错误，会导致重要的错误信息缺失，比如stack trace！

🔗 [**更多: 使用内建错误对象**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 区分运行错误和程序设计错误

**TL;DR:** 运行错误（例如, API接受到一个无效的输入）指的是一些已知场景下的错误，这类错误的影响已经完全被理解，并能被考虑周全的处理掉。同时，程序设计错误（例如，尝试读取未定义的变量）指的是未知的编码问题，影响到应用得当的重启。

**否则:** 当一个错误产生的时候，您总是得重启应用，但为什么要让 ~5000 个在线用户不能访问，仅仅是因为一个细微的，可以预测的，运行时错误？相反的方案，也不完美 – 当未知的问题（程序问题）产生的时候，使应用依旧可以访问，可能导致不可预测行为。区分两者会使处理更有技巧，并在给定的上下文下给出一个平衡的对策。

🔗 [**更多: 运行错误和程序设计错误**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 集中处理错误，不要在Express中间件中处理错误

**TL;DR:** 错误处理逻辑，比如给管理员发送邮件，日志应该封装在一个特定的，集中的对象当中，这样当错误产生的时候，所有的终端（例如 Express中间件，cron任务，单元测试）都可以调用。

**否则:** 错误处理的逻辑不放在一起将会导致代码重复和非常可能不恰当的错误处理。

🔗 [**更多: 集中处理错误**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 对API错误使用Swagger文档化

**TL;DR:** 让你的API调用者知道哪种错误会返回，这样他们就能完全的处理这些错误，而不至于系统崩溃。Swagger，REST API的文档框架，通常处理这类问题。
**否则:** 任何API的客户端可能决定崩溃并重启，仅仅因为它收到一个不能处理的错误。注意：API的调用者可能是你（在微服务环境中非常典型）。


🔗 [**更多: 使用Swagger记录错误**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 当一个特殊的情况产生，停掉服务是得体的

**TL;DR:** 当一个不确定错误产生（一个开发错误，最佳实践条款#3) - 这就意味着对应用运转健全的不确定。一个普通的实践将是建议仔细地重启进程，并使用一些‘启动器’工具，比如Forever和PM2。

**否则:** 当一个未知的异常被抛出，意味着某些对象包含错误的状态（例如某个全局事件发生器由于某些内在的错误，不在产生事件），未来的请求可能失败或者行为异常。

🔗 [**更多: 停掉服务**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>



## ![✔] 2.7 使用一个成熟的日志工具提高错误的可见性

**TL;DR:** 一系列成熟的日志工具，比如Winston，Bunyan和Log4J，会加速错误的发现和理解。忘记console.log吧。

**否则:** 浏览console的log，和不通过查询工具或者一个好的日志查看器，手动浏览繁琐的文本文件，会使你忙于工作到很晚。

🔗 [**更多: 使用好用的日志工具**](/sections/errorhandling/usematurelogger.md)


<br/><br/>


## ![✔] 2.8 使用你最喜欢的测试框架测试错误流

**TL;DR:** 无论专业的自动化测试或者简单的手动开发测试 - 确保您的代码不仅满足正常的场景，而且处理并且返回正确的错误。测试框架，比如Mocha & Chai可以非常容易的处理这些问题（在"Gist popup"中查看代码实例） 。

**否则:** 没有测试，不管自动还是手动，您不可能依赖代码去返回正确的错误。而没有可以理解的错误，那将毫无错误处理可言。


🔗 [**更多: 测试错误流向**](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge your codebase or API so they can auto-magically highlight errors, crashes and slow parts that you were missing

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which are your slowest code parts under real world scenario and how these affects the UX


🔗 [**Read More: using APM products**](/sections/errorhandling/apmproducts.md)

<br/><br/>


## ![✔] 2.10 捕获未处理的promise rejections

**TL;DR:** 任何在promise中被抛出的异常将被收回和遗弃，除非开发者没有忘记去明确的处理。即使您的代码调用的是process.uncaughtException！解决这个问题可以注册到事件process.unhandledRejection。

**否则:** 您的错误将被回收，无踪迹可循。没有什么可以需要考虑。


🔗 [**更多: 捕获未处理的promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Fail fast, validate arguments using a dedicated library

**TL;DR:** This should be part of your Express best practices – Assert API input to avoid nasty bugs that are much harder to track later. Validation code is usually tedious unless using a very cool helper libraries like Joi

**Otherwise:** Consider this – your function expects a numeric argument “Discount” which the caller forgets to pass, later on your code checks if Discount!=0 (amount of allowed discount is greater than zero), then it will allow the user to enjoy a discount. OMG, what a nasty bug. Can you see it?

🔗 [**Read More: failing fast**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `3. 编码风格实践`

## ![✔] 3.1 使用ESLint

**TL;DR:** ESLint is the de-facto standard for checking code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. Using ESLint and following the rest of the code style practices below means following the same styles used by the rest of the community, as well as the same code styles used in the core products themselves.

**Otherwise:** developers will focus on tedious spacing and line-width concerns

<br/><br/>

## ![✔] 3.2 Node JS 特定的插件

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

## ![✔] 3.4 不要忘记分号

**TL;DR:** 即使没有获得一致的认同，但在每一个表达式后面放置分号还是值得推荐的。这将使您的代码, 对于其他阅读代码的开发者来说，可读性，明确性更强。

**否则:** 在前面的章节里面已经提到，如果表达式的末尾没有添加分号，JavaScript的解释器会在自动添加一个，这可能会导致一些意想不到的结果。

<br/><br/>

## ![✔] 3.5 命名您的方法

**TL;DR:** 命名所有的方法，包含闭包和回调。避免匿名方法。当剖析一个node应用的时候，这是特别有用的。命名所有的方法将会使您非常容易的理解内存快照中您正在查看的内容。

**否则:** 使用一个核心dump（内存快照）调试线上问题，会是一项非常挑战的事项，因为你注意到的严重内存泄漏问题极有可能产生于匿名的方法。

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


## ![✔] 5.15. 设置NODE_ENV=production

**TL;DR:** 设置环境变量NODE_ENV为‘production’ 或者 ‘development’，这是一个是否激活上线优化的标志 - 很多NPM的包通过它来判断当前的环境，据此优化生产环境代码。

**否则:** 遗漏这个简单的属性可能大幅减弱性能。例如，在使用Express作为服务端渲染页面的时候，如果未设置NODE_ENV，性能将会减慢大概三分之一！


🔗 [**更多: 设置NODE_ENV=production**](/sections/production/setnodeenv.md)


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
