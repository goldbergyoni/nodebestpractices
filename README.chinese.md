[✔]: assets/images/checkbox-small-blue.png

# Node.js 最佳实践

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2082%20Best%20Practices-blue.svg" alt="82 items"/> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Jun%205%202019-green.svg" alt="Last update: June 5, 2019"/> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.4.0%20LTS-brightgreen.svg" alt="Updated for Node 12.4.0 LTS"/>
</div>

<br/>

 [![nodepractices](./assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Follow us on Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)
 <br/>

# 欢迎! 首先您应该知道的三件事情

**1. 当您读到这里，实际上您读了很多关于Node.js的优秀文章 -** 这是对Node.js最佳实践中排名最高的内容的总结和分享

**2. 这里是最大的汇集，且每周都在增长 -** 当前，超过50个最佳实现，样式指南，架构建议已经呈现。每天都有新的issue和PR被创建，以使这本在线书籍不断更新。我们很乐于见到您能在这里做出贡献，不管是修复一些代码的错误，或是提出绝妙的新想法。请查看我们的[milestones](https://github.com/goldbergyoni/nodebestpractices/milestones?direction=asc&sort=due_date&state=open)

**3. 大部分的条目包含额外的信息 -** 大部分的最佳实践条目的旁边，您将发现 **🔗Read More** 链接，它将呈现给您示例代码，博客引用和更多信息

<br/><br/><br/>

## [目录](#table-of-contents)

1. [项目结构实践 (5) ](#1-project-structure-practices)
2. [异常处理实践 (11) ](#2-error-handling-practices)
3. [编码规范实践 (12) ](#3-code-style-practices)
4. [测试和总体质量实践 (8) ](#4-testing-and-overall-quality-practices)
5. [进入生产实践 (16) ](#5-going-to-production-practices)
6. :star: 新: [安全实践(23)](#6-security-best-practices)
7. Performance Practices ([coming soon](https://github.com/goldbergyoni/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))

<br/><br/><br/>
<h1 id="1-project-structure-practices"><code>1. 项目结构实践</code></h1>

## ![✔] 1.1 组件式构建你的解决方案

 **TL;DR:** 大型项目的最坏的隐患就是维护一个庞大的，含有几百个依赖的代码库 - 当开发人员准备整合新的需求的时候，这样一个庞然大物势必减缓了开发效率。反之，把您的代码拆分成组件，每一个组件有它自己的文件夹和代码库，并且确保每一个组件小而简单。查看正确的项目结构的例子请访问下面的 ‘更多’ 链接。

**否则:** 当编写新需求的开发人员逐步意识到他所做改变的影响，并担心会破坏其他的依赖模块 - 部署会变得更慢，风险更大。当所有业务逻辑没有被分开，这也会被认为很难扩展

🔗 [**更多: 组件结构**](./sections/projectstructre/breakintcomponents.chinese.md)

<br/><br/>

## ![✔] 1.2 分层设计组件，保持Express在特定的区域

**TL;DR:** 每一个组件都应该包含'层级' - 一个专注的用于接入网络，逻辑，数据的概念。这样不仅获得一个清晰的分离考量，而且使仿真和测试系统变得异常容易。尽管这是一个普通的模式，但接口开发者易于混淆层级关系，比如把网络层的对象（Express req, res）传给业务逻辑和数据层 - 这会令您的应用彼此依赖，并且只能通过Express使用。

**否则:** 对于混淆了网络层和其它层的应用，将不易于测试，执行CRON的任务，其它非-Express的调用者无法使用

🔗 [**更多: 应用分层**](./sections/projectstructre/createlayers.chinese.md)

<br/><br/>

## ![✔] 1.3 封装公共模块成为NPM的包

**TL;DR:** 由大量代码构成的一个大型应用中，贯彻全局的，比如日志，加密和其它类似的公共组件，应该进行封装，并暴露成一个私有的NPM包。这将使其在更多的代码库和项目中被使用变成了可能。

**否则:** 您将不得不重造部署和依赖的轮子

🔗 [**更多: 通过需求构建**](./sections/projectstructre/wraputilities.chinese.md)

<br/><br/>

## ![✔] 1.4 分离 Express 'app' and 'server'

**TL;DR:** 避免定义整个[Express](https://expressjs.com/)应用在一个单独的大文件里， 这是一个不好的习惯 - 分离您的 'Express' 定义至少在两个文件中： API声明(app.js) 和 网络相关(WWW)。对于更好的结构，是把你的API声明放在组件中。

**否则:** 您的API将只能通过HTTP的调用进行测试（慢，并且很难产生测试覆盖报告）。维护一个有着上百行代码的文件也不是一个令人开心的事情。

🔗 [**更多: 分离 Express 'app' and 'server'**](./sections/projectstructre/separateexpress.chinese.md)

<br/><br/>

## ![✔] 1.5 使用易于设置环境变量，安全和分级的配置

**TL;DR:** 一个完美无瑕的配置安装应该确保 (a) 元素可以从文件中，也可以从环境变量中读取 (b) 密码排除在提交的代码之外 (c) 为了易于检索，配置是分级的。仅有几个包可以满足这样的条件，比如[rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config) 和 [convict](https://www.npmjs.com/package/convict)。

**否则:** 不能满足任意的配置要求将会使开发，运维团队，或者两者，易于陷入泥潭。

🔗 [**更多: 配置最佳实践**](./sections/projectstructre/configguide.chinese.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回顶部</a></p>

<h1 id="2-error-handling-practices"><code>2. 错误处理最佳实践</code></h1>

## ![✔] 2.1  使用 Async-Await 和 promises 用于异步错误处理

**TL;DR:** 使用回调的方式处理异步错误可能是导致灾难的最快的方式(a.k.a the pyramid of doom)。对您的代码来说，最好的礼物就是使用规范的promise库或async-await来替代，这会使其像try-catch一样更加简洁，具有熟悉的代码结构。

**否则:** Node.js回调特性, function(err, response), 是导致不可维护代码的一个必然的方式。究其原因，是由于混合了随意的错误处理代码，臃肿的内嵌，蹩脚的代码模式。

🔗 [**更多: 避免回调**](./sections/errorhandling/asyncerrorhandling.chinese.md)

<br/><br/>

## ![✔] 2.2 仅使用内建的错误对象

**TL;DR:** 很多人抛出异常使用字符串类型或一些自定义类型 - 这会导致错误处理逻辑和模块间的调用复杂化。是否您reject一个promise，抛出异常或发出(emit)错误 - 使用内建的错误对象将会增加设计一致性，并防止信息的丢失。

**否则:** 调用某些模块，将不确定哪种错误类型会返回 - 这将会使恰当的错误处理更加困难。更坏的情况是，使用特定的类型描述错误，会导致重要的错误信息缺失，比如stack trace！

🔗 [**更多: 使用内建错误对象**](./sections/errorhandling/useonlythebuiltinerror.chinese.md)

<br/><br/>

## ![✔] 2.3 区分运行错误和程序设计错误

**TL;DR:** 运行错误（例如, API接受到一个无效的输入）指的是一些已知场景下的错误，这类错误的影响已经完全被理解，并能被考虑周全的处理掉。同时，程序设计错误（例如，尝试读取未定义的变量）指的是未知的编码问题，影响到应用得当的重启。

**否则:** 当一个错误产生的时候，您总是得重启应用，但为什么要让 ~5000 个在线用户不能访问，仅仅是因为一个细微的，可以预测的，运行时错误？相反的方案，也不完美 – 当未知的问题（程序问题）产生的时候，使应用依旧可以访问，可能导致不可预测行为。区分两者会使处理更有技巧，并在给定的上下文下给出一个平衡的对策。

🔗 [**更多: 运行错误和程序设计错误**](./sections/errorhandling/operationalvsprogrammererror.chinese.md)

<br/><br/>

## ![✔] 2.4 集中处理错误，不要在Express中间件中处理错误

**TL;DR:** 错误处理逻辑，比如给管理员发送邮件，日志应该封装在一个特定的，集中的对象当中，这样当错误产生的时候，所有的终端（例如 Express中间件，cron任务，单元测试）都可以调用。

**否则:** 错误处理的逻辑不放在一起将会导致代码重复和非常可能不恰当的错误处理。

🔗 [**更多: 集中处理错误**](./sections/errorhandling/centralizedhandling.chinese.md)

<br/><br/>

## ![✔] 2.5 对API错误使用Swagger文档化

**TL;DR:** 让你的API调用者知道哪种错误会返回，这样他们就能完全的处理这些错误，而不至于系统崩溃。Swagger，REST API的文档框架，通常处理这类问题。

**否则:** 任何API的客户端可能决定崩溃并重启，仅仅因为它收到一个不能处理的错误。注意：API的调用者可能是你（在微服务环境中非常典型）。

🔗 [**更多: 使用Swagger记录错误**](./sections/errorhandling/documentingusingswagger.chinese.md)

<br/><br/>

## ![✔] 2.6 当一个特殊的情况产生，停掉服务是得体的

**TL;DR:** 当一个不确定错误产生（一个开发错误，最佳实践条款#3) - 这就意味着对应用运转健全的不确定。一个普通的实践将是建议仔细地重启进程，并使用一些‘启动器’工具，比如Forever和PM2。

**否则:** 当一个未知的异常被抛出，意味着某些对象包含错误的状态（例如某个全局事件发生器由于某些内在的错误，不在产生事件），未来的请求可能失败或者行为异常。

🔗 [**更多: 停掉服务**](./sections/errorhandling/shuttingtheprocess.chinese.md)

<br/><br/>

## ![✔] 2.7 使用一个成熟的日志工具提高错误的可见性

**TL;DR:** 一系列成熟的日志工具，比如Winston，Bunyan和Log4J，会加速错误的发现和理解。忘记console.log吧。

**否则:** 浏览console的log，和不通过查询工具或者一个好的日志查看器，手动浏览繁琐的文本文件，会使你忙于工作到很晚。

🔗 [**更多: 使用好用的日志工具**](./sections/errorhandling/usematurelogger.chinese.md)

<br/><br/>

## ![✔] 2.8 使用你最喜欢的测试框架测试错误流

**TL;DR:** 无论专业的自动化测试或者简单的手动开发测试 - 确保您的代码不仅满足正常的场景，而且处理并且返回正确的错误。测试框架，比如Mocha & Chai可以非常容易的处理这些问题（在"Gist popup"中查看代码实例） 。

**否则:** 没有测试，不管自动还是手动，您不可能依赖代码去返回正确的错误。而没有可以理解的错误，那将毫无错误处理可言。

🔗 [**更多: 测试错误流向**](./sections/errorhandling/testingerrorflows.chinese.md)

<br/><br/>

## ![✔] 2.9 使用APM产品发现错误和宕机时间

**TL;DR:** 监控和性能产品 (别名 APM) 先前一步的检测您的代码库和API，这样他们能自动的，像使用魔法一样的强调错误，宕机和您忽略的性能慢的部分。

**否则:** 您花了很多的力气在测量API的性能和错误，但可能您从来没有意识到真实场景下您最慢的代码块和他们对UX的影响。

🔗 [**更多: 使用APM产品**](./sections/errorhandling/apmproducts.chinese.md)

<br/><br/>

## ![✔] 2.10 捕获未处理的promise rejections

**TL;DR:** 任何在promise中被抛出的异常将被收回和遗弃，除非开发者没有忘记去明确的处理。即使您的代码调用的是process.uncaughtException！解决这个问题可以注册到事件process.unhandledRejection。

**否则:** 您的错误将被回收，无踪迹可循。没有什么可以需要考虑。

🔗 [**更多: 捕获未处理的promise rejection**](./sections/errorhandling/catchunhandledpromiserejection.chinese.md)

<br/><br/>

## ![✔] 2.11 快速查错，验证参数使用一个专门的库

**TL;DR:** 这应该是您的Express最佳实践中的一部分 – assert API输入避免难以理解的漏洞，这类漏洞以后会非常难以追踪。而验证代码通常是一件乏味的事情，除非使用一些非常炫酷的帮助库比如Joi。

**否则:** 考虑这种情况 – 您的功能期望一个数字参数 “Discount” ，然而调用者忘记传值，之后在您的代码中检查是否 Discount!=0 （允许的折扣值大于零），这样它将允许用户使用一个折扣。OMG，多么不爽的一个漏洞。你能明白吗？

🔗 [**更多: 快速查错**](./sections/errorhandling/failfast.chinese.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回顶部</a></p>

<h1 id="3-code-style-practices"><code>3. 编码风格实践</code></h1>

## ![✔] 3.1 使用ESLint

**TL;DR:** [ESLint](https://eslint.org)是检查可能的代码错误和修复代码样式的事实上的标准，不仅可以识别实际的间距问题, 而且还可以检测严重的反模式代码, 如开发人员在不分类的情况下抛出错误。尽管ESlint可以自动修复代码样式，但其他的工具比如[prettier](https://www.npmjs.com/package/prettier)和[beautify](https://www.npmjs.com/package/js-beautify)在格式化修复上功能强大，可以和Eslint结合起来使用。

**否则:** 开发人员将必须关注单调乏味的间距和线宽问题, 并且时间可能会浪费在过多考虑项目的代码样式。

<br/><br/>

## ![✔] 3.2 Node.js特定的插件

**TL;DR:** 除了仅仅涉及 vanilla JS 的 ESLint 标准规则，添加 Node 相关的插件，比如[eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**否则:** 许多错误的Node.js代码模式可能在检测下逃生。例如，开发人员可能需要某些文件，把一个变量作为路径名 (variableAsPath) ，这会导致攻击者可以执行任何JS脚本。Node.JS linters可以检测这类模式，并及早预警。

<br/><br/>

## ![✔] 3.3 在同一行开始一个代码块的大括号

**TL;DR:** 代码块的第一个大括号应该和声明的起始保持在同一行中。

### 代码示例

```javascript
  // 建议
  function someFunction() {
    // 代码块
  }

  // 避免
  function someFunction()
  {
    // 代码块
  }
```

**否则:** 不遵守这项最佳实践可能导致意外的结果，在Stackoverflow的帖子中可以查看到，如下：

🔗 [**更多:** "Why does a results vary based on curly brace placement?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 不要忘记分号

**TL;DR:** 即使没有获得一致的认同，但在每一个表达式后面放置分号还是值得推荐的。这将使您的代码, 对于其他阅读代码的开发者来说，可读性，明确性更强。

**否则:** 在前面的章节里面已经提到，如果表达式的末尾没有添加分号，JavaScript的解释器会在自动添加一个，这可能会导致一些意想不到的结果。

<br/><br/>

## ![✔] 3.5 命名您的方法

**TL;DR:** 命名所有的方法，包含闭包和回调, 避免匿名方法。当剖析一个node应用的时候，这是特别有用的。命名所有的方法将会使您非常容易的理解内存快照中您正在查看的内容。

**否则:** 使用一个核心dump（内存快照）调试线上问题，会是一项非常挑战的事项，因为你注意到的严重内存泄漏问题极有可能产生于匿名的方法。

<br/><br/>

## ![✔] 3.6 变量、常量、函数和类的命名约定

**TL;DR:** 当命名变量和方法的时候，使用 ***lowerCamelCase*** ，当命名类的时候，使用 ***UpperCamelCase*** （首字母大写），对于常量，则 ***UPPERCASE*** 。这将帮助您轻松地区分普通变量/函数和需要实例化的类。使用描述性名称，但使它们尽量简短。

**否则:** JavaScript是世界上唯一一门不需要实例化，就可以直接调用构造函数（"Class"）的编码语言。因此，类和函数的构造函数由采用UpperCamelCase开始区分。

### 3.6 代码示例

```javascript
  // 使用UpperCamelCase命名类名
  class SomeClassExample () {

    // 常量使用const关键字，并使用lowerCamelCase命名
    const config = {
      key: 'value'
    };

    // 变量和方法使用lowerCamelCase命名
    let someVariableExample = 'value';
    function doSomething() {

    }

  }
```

<br/><br/>

## ![✔] 3.7 使用const优于let，废弃var

**TL;DR:** 使用`const`意味着一旦一个变量被分配，它不能被重新分配。使用const将帮助您免于使用相同的变量用于不同的用途，并使你的代码更清晰。如果一个变量需要被重新分配，以在一个循环为例，使用`let`声明它。let的另一个重要方面是，使用let声明的变量只在定义它的块作用域中可用。 `var`是函数作用域，不是块级作用域，既然您有const和let让您随意使用，那么[不应该在ES6中使用var](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70)。

**否则:** 当经常更改变量时，调试变得更麻烦了。

🔗 [**更多: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 先require, 而不是在方法内部

**TL;DR:** 在每个文件的起始位置，在任何函数的前面和外部require模块。这种简单的最佳实践，不仅能帮助您轻松快速地在文件顶部辨别出依赖关系，而且避免了一些潜在的问题。

**否则:** 在Node.js中，require 是同步运行的。如果从函数中调用它们，它可能会阻塞其他请求，在更关键的时间得到处理。另外，如果所require的模块或它自己的任何依赖项抛出错误并使服务器崩溃，最好尽快查明它，如果该模块在函数中require的，则可能不是这样的情况。

<br/><br/>

## ![✔] 3.9 require 文件夹，而不是文件

**TL;DR:** 当在一个文件夹中开发库/模块，放置一个文件index.js暴露模块的
内部，这样每个消费者都会通过它。这将作为您模块的一个接口，并使未来的变化简单而不违反规则。

**否则:** 更改文件内部结构或签名可能会破坏与客户端的接口。

### 3.9 代码示例

```javascript
  // 建议
  module.exports.SMSProvider = require('./SMSProvider');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver');

  // 避免
  module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 使用 `===` 操作符

**TL;DR:** 对比弱等于 `==`，优先使用严格的全等于 `===` 。`==`将在它们转换为普通类型后比较两个变量。在 `===` 中没有类型转换，并且两个变量必须是相同的类型。

**否则:** 与 `==` 操作符比较，不相等的变量可能会返回true。

### 3.10 代码示例

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

如果使用`===`， 上面所有语句都将返回 false。

<br/><br/>

## ![✔] 3.11 使用 Async Await, 避免回调

**TL;DR:** Node 8 LTS现已全面支持异步等待。这是一种新的方式处理异步请求，取代回调和promise。Async-await是非阻塞的，它使异步代码看起来像是同步的。您可以给你的代码的最好的礼物是用async-await提供了一个更紧凑的，熟悉的，类似try catch的代码语法。

**否则:** 使用回调的方式处理异步错误可能是陷入困境最快的方式 - 这种方式必须面对不停地检测错误，处理别扭的代码内嵌，难以推理编码流。

🔗[**更多:** async await 1.0 引导](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 使用 (=>) 箭头函数

**TL;DR:** 尽管使用 async-await 和避免方法作为参数是被推荐的, 但当处理那些接受promise和回调的老的API的时候 - 箭头函数使代码结构更加紧凑，并保持了根方法上的语义上下文 (例如 'this')。

**否则:** 更长的代码（在ES5方法中）更易于产生缺陷，并读起来很是笨重。

🔗 [**更多: 这是拥抱箭头函数的时刻**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回顶部</a></p>

<h1 id="4-testing-and-overall-quality-practices"><code>4. 测试和总体的质量实践</code></h1>

## ![✔] 4.1 至少，编写API（组件）测试

**TL;DR:** 大多数项目只是因为时间表太短而没有进行任何自动化测试，或者测试项目失控而正被遗弃。因此，优先从API测试开始，这是最简单的编写和提供比单元测试更多覆盖率的事情（你甚至可能不需要编码而进行API测试，像[Postman](https://www.getpostman.com/)。之后，如果您有更多的资源和时间，继续使用高级测试类型，如单元测试、DB测试、性能测试等。

**否则:** 您可能需要花很长时间编写单元测试，才发现只有20%的系统覆盖率。

<br/><br/>

## ![✔] 4.2 使用一个linter检测代码问题

**TL;DR:** 使用代码linter检查基本质量并及早检测反模式。在任何测试之前运行它, 并将其添加为预提交的git钩子, 以最小化审查和更正任何问题所需的时间。也可在[Section 3](https://github.com/goldbergyoni/nodebestpractices#3-code-style-practices)中查阅编码样式实践

**否则:** 您可能让一些反模式和易受攻击的代码传递到您的生产环境中。

<br/><br/>

## ![✔] 4.3 仔细挑选您的持续集成（CI）平台

**TL;DR:** 您的持续集成平台（cicd）将集成各种质量工具（如测试、lint），所以它应该是一个充满活力的生态系统，包含各种插件。[jenkins](https://jenkins.io/)曾经是许多项目的默认选项，因为它有最大的社区，同时也是一个非常强大的平台，这样的代价是要求一个陡峭的学习曲线。如今，使用SaaS工具，比如[CircleCI](https://circleci.com)及其他，安装一套CI解决方案，相对是一件容易的事情。这些工具允许构建灵活的CI管道，而无需管理整个基础设施。最终，这是一个鲁棒性和速度之间的权衡 - 仔细选择您支持的方案。

**否则:** 一旦您需要一些高级定制，选择一些细分市场供应商可能会让您停滞不前。另一方面，伴随着jenkins，可能会在基础设施设置上浪费宝贵的时间。

🔗 [**更多: 挑选 CI 平台**](./sections/testingandquality/citools.chinese.md)

<br/><br/>

## ![✔] 4.4 经常检查易受攻击的依赖

**TL;DR:** 即使是那些最有名的依赖模块，比如Express，也有已知的漏洞。使用社区和商业工具，比如 🔗 [npm audit](https://docs.npmjs.com/cli/audit) ，集成在您的CI平台上，在每一次构建的时候都会被调用，这样可以很容易地解决漏洞问题。

**否则:** 在没有专用工具的情况下，使代码清除漏洞，需要不断地跟踪有关新威胁的在线出版物，相当繁琐。

<br/><br/>

## ![✔] 4.5 测试标签化

**TL;DR:**  不同的测试必须运行在不同的情景：quick smoke，IO-less，当开发者保存或提交一个文件，测试应该启动；完整的端到端的测试通常运行在一个新的pull request被提交之后，等等。这可以通过对测试用例设置标签，比如关键字像#cold #api #sanity，来完成。这样您可以对您的测试集进行grep，调用需要的子集。例如，这就是您通过[Mocha](https://mochajs.org/)仅仅调用sanity测试集所需要做的：mocha --grep 'sanity'。

**否则:** 运行所有的测试，包括执行数据库查询的几十个测试，任何时候开发者进行小的改动都可能很慢，这使得开发者不愿意运行测试。

<br/><br/>

## ![✔] 4.6 检查测试覆盖率，它有助于识别错误的测试模式

**TL;DR:** 代码覆盖工具比如 [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc)，很好用有3个原因：它是免费的（获得这份报告不需要任何开销），它有助于确定测试覆盖率降低的部分，以及最后但非最不重要的是它指出了测试中的不匹配：通过查看颜色标记的代码覆盖报告您可以注意到，例如，从来不会被测到的代码片段像catch语句（即测试只是调用正确的路径，而不调用应用程序发生错误时的行为）。如果覆盖率低于某个阈值，则将其设置为失败的构建。

**否则:** 当你的大部分代码没有被测试覆盖时，就不会有任何自动化的度量指标告诉你了。

<br/><br/>

## ![✔] 4.7 检查过期的依赖包

**TL;DR:** 使用您的首选工具 (例如 “npm outdated” or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) 来检测已安装的过期依赖包, 将此检查注入您的 CI 管道, 甚至在严重的情况下使构建失败。例如, 当一个已安装的依赖包滞后5个补丁时 (例如:本地版本是1.3.1 的, 存储库版本是1.3.8 的), 或者它被其作者标记为已弃用, 可能会出现严重的情况 - 停掉这次构建并防止部署此版本。

**否则:** 您的生产环境将运行已被其作者明确标记为有风险的依赖包

<br/><br/>

## ![✔] 4.8 对于e2e testing，使用docker-compose

**TL;DR:** 端对端(e2e)测试包含现场数据，由于它依赖于很多重型服务如数据库，习惯被认为是CI过程中最薄弱的环节。Docker-compose通过制定类似生产的环境，并使用一个简单的文本文件和简单的命令，轻松化解了这个问题。它为了e2e测试，允许制作所有相关服务，数据库和隔离网络。最后但并非最不重要的一点是，它可以保持一个无状态环境，该环境在每个测试套件之前被调用，然后立即消失。

**否则:** 没有docker-compose，团队必须维护一个测试数据库在每一个测试环境上，包含开发机器，保持所有数据同步，这样测试结果不会因环境不同而不同。

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回顶部</a></p>

<h1 id="5-going-to-production-practices"><code>5. 上线实践</code></h1>

## ![✔] 5.1. 监控

**TL;DR:** 监控是一种在顾客之前发现问题的游戏 – 显然这应该被赋予前所未有的重要性。考虑从定义你必须遵循的基本度量标准开始（我的建议在里面），到检查附加的花哨特性并选择解决所有问题的解决方案。市场已经淹没其中。点击下面的 ‘The Gist’ ，了解解决方案的概述。

**否则:** 错误 === 失望的客户. 非常简单.

🔗 [**更多: 监控!**](./sections/production/monitoring.chinese.md)

<br/><br/>

## ![✔] 5.2. 使用智能日志增加透明度

**TL;DR:** 日志可以是调试语句的一个不能说话的仓库，或者表述应用运行过程的一个漂亮仪表板的驱动。从第1天计划您的日志平台：如何收集、存储和分析日志，以确保所需信息（例如，错误率、通过服务和服务器等完成整个事务）都能被提取出来。

**否则:** 您最终像是面对一个黑盒，不知道发生了什么事情，然后你开始重新写日志语句添加额外的信息。

🔗 [**更多: 使用智能日志增加透明度**](./sections/production/smartlogging.chinese.md)

<br/><br/>

## ![✔] 5.3. 委托可能的一切（例如：gzip，SSL）给反向代理

**TL;DR:** Node处理CPU密集型任务，如gzipping，SSL termination等，表现糟糕。相反，使用一个 ‘真正’ 的中间件服务像Nginx，HAProxy或者云供应商的服务。

**否则:** 可怜的单线程Node将不幸地忙于处理网络任务，而不是处理应用程序核心，性能会相应降低。

🔗 [**更多: 委托可能的一切（例如：gzip，SSL）给反向代理**](./sections/production/delegatetoproxy.chinese.md)

<br/><br/>

## ![✔] 5.4. 锁住依赖

**TL;DR:** 您的代码必须在所有的环境中是相同的，但是令人惊讶的是，NPM默认情况下会让依赖在不同环境下发生偏移 – 当在不同的环境中安装包的时候，它试图拿包的最新版本。克服这种问题可以利用NPM配置文件， .npmrc，告诉每个环境保存准确的（不是最新的）包的版本。另外，对于更精细的控制，使用NPM “shrinkwrap”。*更新：作为NPM5，依赖默认锁定。新的包管理工具，Yarn，也默认锁定。

**否则:** QA测试通过的代码和批准的版本，在生产中表现不一致。更糟糕的是，同一生产集群中的不同服务器可能运行不同的代码。

🔗 [**更多: 锁住依赖**](./sections/production/lockdependencies.chinese.md)

<br/><br/>

## ![✔] 5.5. 使用正确的工具保护进程正常运行

**TL;DR:** 进程必须继续运行，并在失败时重新启动。对于简单的情况下，“重启”工具如PM2可能足够，但在今天的“Dockerized”世界 – 集群管理工具也值得考虑

**否则:** 运行几十个实例没有明确的战略和太多的工具（集群管理，docker，PM2）可能导致一个DevOps混乱

🔗 [**更多: 使用正确的工具保护进程正常运行**](./sections/production/guardprocess.chinese.md)

<br/><br/>

## ![✔] 5.6. 利用CPU多核

**TL;DR:** 在基本形式上，node应用程序运行在单个CPU核心上，而其他都处于空闲状态。复制node进程和利用多核，这是您的职责 – 对于中小应用，您可以使用Node Cluster和PM2. 对于一个大的应用，可以考虑使用一些Docker cluster（例如k8s，ECS）复制进程或基于Linux init system（例如systemd）的部署脚本

**否则:** 您的应用可能只是使用了其可用资源中的25% (!)，甚至更少。注意，一台典型的服务器有4个或更多的CPU，默认的Node.js部署仅仅用了一个CPU（甚至使用PaaS服务，比如AWS beanstalk，也一样）。

🔗 [**更多: 利用所有的CPU**](./sections/production/utilizecpu.chinese.md)

<br/><br/>

## ![✔] 5.7. 创建一个“维护端点”

**TL;DR:** 在一个安全的API中暴露一组系统相关的信息，比如内存使用情况和REPL等等。尽管这里强烈建议依赖标准和作战测试工具，但一些有价值的信息和操作更容易使用代码完成。

**否则:** 您会发现，您正在执行许多“诊断部署” – 将代码发送到生产中，仅仅只为了诊断目的提取一些信息。

🔗 [**更多: 创建一个 '维护端点'**](./sections/production/createmaintenanceendpoint.chinese.md)

<br/><br/>

## ![✔] 5.8. 使用APM产品发现错误和宕机时间

**TL;DR:** 监控和性能的产品（即APM）先前一步地评估代码库和API，自动的超过传统的监测，并测量在服务和层级上的整体用户体验。例如，一些APM产品可以突显导致最终用户负载过慢的事务，同时指出根本原因。

**否则:** 你可能会花大力气测量API性能和停机时间，也许你永远不会知道，真实场景下哪个是你最慢的代码部分，这些怎么影响用户体验。

🔗 [**更多: 使用APM产品发现错误和宕机时间**](./sections/production/apmproducts.chinese.md)

<br/><br/>

## ![✔] 5.9. 使您的代码保持生产环境就绪

**TL;DR:** 在意识中抱着最终上线的想法进行编码，从第1天开始计划上线。这听起来有点模糊，所以我编写了一些与生产维护密切相关的开发技巧（点击下面的要点）

**否则:** 一个世界冠军级别的IT/运维人员也不能拯救一个编码低劣的系统。

🔗 [**更多: 使您的代码保持生产环境就绪**](./sections/production/productioncode.chinese.md)

<br/><br/>

## ![✔] 5.10. 测量和保护内存使用

**TL;DR:** Node.js和内存有引起争论的联系：V8引擎对内存的使用有稍微的限制（1.4GB），在node的代码里面有内存泄漏的很多途径 – 因此监视node的进程内存是必须的。在小应用程序中，你可以使用shell命令周期性地测量内存，但在中等规模的应用程序中，考虑把内存监控建成一个健壮的监控系统。

**否则:** 您的内存可能一天泄漏一百兆，就像曾发生在沃尔玛的一样。

🔗 [**更多: 测量和保护内存使用**](./sections/production/measurememory.chinese.md)

<br/><br/>

## ![✔] 5.11. Node外管理您的前端资源

**TL;DR:** 使用专门的中间件（nginx，S3，CDN）服务前端内容，这是因为在处理大量静态文件的时候，由于node的单线程模型，它的性能很受影响。

**否则:** 您的单个node线程将忙于传输成百上千的html/图片/angular/react文件，而不是分配其所有的资源为了其擅长的任务 – 服务动态内容

🔗 [**更多: Node外管理您的前端资源**](./sections/production/frontendout.chinese.md)

<br/><br/>

## ![✔] 5.12. 保持无状态，几乎每天都要停下服务器

**TL;DR:** 在外部数据存储上，存储任意类型数据（例如用户会话，缓存，上传文件）。考虑间隔地停掉您的服务器或者使用 ‘serverless’ 平台（例如 AWS Lambda），这是一个明确的强化无状态的行为。

**否则:** 某个服务器上的故障将导致应用程序宕机，而不仅仅是停用故障机器。此外，由于依赖特定服务器，伸缩弹性会变得更具挑战性。

🔗 [**更多: 保持无状态，几乎每天都要停下服务器**](./sections/production/bestateless.chinese.md)

<br/><br/>

## ![✔] 5.13. 使用自动检测漏洞的工具

**TL;DR:** 即使是最有信誉的依赖项，比如Express，会有使系统处于危险境地的已知漏洞（随着时间推移）。通过使用社区的或者商业工具，不时的检查漏洞和警告（本地或者Github上），这类问题很容易被抑制，有些问题甚至可以立即修补。

**否则:** 否则: 在没有专用工具的情况下，使代码清除漏洞，需要不断地跟踪有关新威胁的在线出版物。相当繁琐。

🔗 [**更多: 使用自动检测漏洞的工具**](./sections/production/detectvulnerabilities.chinese.md)

<br/><br/>

## ![✔] 5.14. 在每一个log语句中指明 ‘TransactionId’

**TL;DR:** 在每一个请求的每一条log入口，指明同一个标识符，transaction-id: {某些值}。然后在检查日志中的错误时，很容易总结出前后发生的事情。不幸的是，由于Node异步的天性自然，这是不容易办到的，看下代码里面的例子

**否则:** 在没有上下文的情况下查看生产错误日志，这会使问题变得更加困难和缓慢去解决。

🔗 [**更多: 在每一个log语句中指明 ‘TransactionId’**](./sections/production/assigntransactionid.chinese.md)

<br/><br/>

## ![✔] 5.15. 设置NODE_ENV=production

**TL;DR:** 设置环境变量NODE_ENV为‘production’ 或者 ‘development’，这是一个是否激活上线优化的标志 - 很多NPM的包通过它来判断当前的环境，据此优化生产环境代码。

**否则:** 遗漏这个简单的属性可能大幅减弱性能。例如，在使用Express作为服务端渲染页面的时候，如果未设置NODE_ENV，性能将会减慢大概三分之一！

🔗 [**更多: 设置NODE_ENV=production**](./sections/production/setnodeenv.chinese.md)

<br/><br/>

## ![✔] 5.16. 设计自动化、原子化和零停机时间部署

**TL;DR:** 研究表明，执行许多部署的团队降低了严重上线问题的可能性。不需要危险的手动步骤和服务停机时间的快速和自动化部署大大改善了部署过程。你应该达到使用Docker结合CI工具，使他们成为简化部署的行业标准。

**否则:** 长时间部署 -> 线上宕机 & 和人相关的错误 -> 团队部署时不自信 -> 更少的部署和需求

<br/><br/>

## ![✔] 5.17. 使用 Node.js 的 LTS 版本

**TL;DR:** 确保您是使用LTS版本的Node.js来获取关键的错误修复、安全更新和性能改进。

**否则:** 新发现的错误或漏洞可能会被用于生产环境中运行的应用程序，您的应用程序可能会变得难以维护且不受各种模块支持.

🔗 [**更多: 使用node.js的LTS版本**](./sections/production/LTSrelease.chinese.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回顶部</a></p>

<h1 id="6-security-best-practices"><code>6. 安全最佳实践</code></h1>

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="53 items"/>
</div>

## ![✔] 6.1. 拥护linter安全准则

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** 使用安全相关的linter插件，比如[eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)，尽早捕获安全隐患或者问题，最好在编码阶段。这能帮助察觉安全的问题，比如使用eval，调用子进程，或者根据字面含义（比如，用户输入）引入模块等等。点击下面‘更多’获得一个安全linter可以检测到的代码示例。

**Otherwise:** 在开发过程中, 可能一个直白的安全隐患, 成为生产环境中一个严重问题。此外, 项目可能没有遵循一致的安全规范, 而导致引入漏洞, 或敏感信息被提交到远程仓库中。

🔗 [**更多: Lint 规范**](./sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. 使用中间件限制并发请求

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS攻击非常流行而且相对容易处理。使用外部服务，比如cloud负载均衡, cloud防火墙, nginx, 或者（对于小的，不是那么重要的app）一个速率限制中间件(比如[express-rate-limit](https://www.npmjs.com/package/express-rate-limit))，来实现速率限制。

**否则:** 应用程序可能受到攻击, 导致拒绝服务, 在这种情况下, 真实用户会遭受服务降级或不可用。

🔗 [**更多: 实施速率限制**](./sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 把机密信息从配置文件中抽离出来，或者使用包对其加密

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** 不要在配置文件或源代码中存储纯文本机密信息。相反, 使用诸如Vault产品、Kubernetes/Docker Secrets或使用环境变量之类的安全管理系统。最后一个结果是, 存储在源代码管理中的机密信息必须进行加密和管理 (滚动密钥(rolling keys)、过期时间、审核等)。使用pre-commit/push钩子防止意外提交机密信息。

**否则:** 源代码管理, 即使对于私有仓库, 也可能会被错误地公开, 此时所有的秘密信息都会被公开。外部组织的源代码管理的访问权限将无意中提供对相关系统 (数据库、api、服务等) 的访问。

🔗 [**更多: 安全管理**](./sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. 使用 ORM/ODM 库防止查询注入漏洞

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** 要防止 SQL/NoSQL 注入和其他恶意攻击, 请始终使用 ORM/ODM 或database库来转义数据或支持命名的或索引的参数化查询, 并注意验证用户输入的预期类型。不要只使用JavaScript模板字符串或字符串串联将值插入到查询语句中, 因为这会将应用程序置于广泛的漏洞中。所有知名的Node.js数据访问库(例如[Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose))包含对注入漏洞的内置包含措施。

**否则:** 未经验证或未脱敏处理的用户输入，可能会导致操作员在使用MongoDB进行NoSQL操作时进行注入, 而不使用适当的过滤系统或ORM很容易导致SQL注入攻击, 从而造成巨大的漏洞。

🔗 [**更多: 使用 ORM/ODM 库防止查询注入**](./sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. 通用安全最佳实践集合

**TL;DR:** 这些是与Node.js不直接相关的安全建议的集合-Node的实现与任何其他语言没有太大的不同。单击 "阅读更多" 浏览。

🔗 [**更多: 通用安全最佳实践**](./sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. 调整 HTTP 响应头以加强安全性

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 应用程序应该使用安全的header来防止攻击者使用常见的攻击方式，诸如跨站点脚本(XSS)、点击劫持和其他恶意攻击。可以使用模块，比如 [helmet](https://www.npmjs.com/package/helmet)轻松进行配置。

**否则:** 攻击者可以对应用程序的用户进行直接攻击, 导致巨大的安全漏洞

🔗 [**更多: 在应用程序中使用安全的header**](./sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. 经常自动检查易受攻击的依赖库

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** 在npm的生态系统中, 一个项目有许多依赖是很常见的。在找到新的漏洞时, 应始终将依赖项保留在检查中。使用工具，类似于[npm audit](https://docs.npmjs.com/cli/audit) 或者 [snyk](https://snyk.io/)跟踪、监视和修补易受攻击的依赖项。将这些工具与 CI 设置集成, 以便在将其上线之前捕捉到易受攻击的依赖库。

**否则:** 攻击者可以检测到您的web框架并攻击其所有已知的漏洞。

🔗 [**更多: 安全依赖**](./sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. 避免使用Node.js的crypto库处理密码，使用Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 密码或机密信息(API密钥)应该使用安全的哈希+salt函数(如 "bcrypt")来存储, 因为性能和安全原因, 这应该是其JavaScript实现的首选。

**否则:** 在不使用安全功能的情况下，保存的密码或秘密信息容易受到暴力破解和字典攻击, 最终会导致他们的泄露。

🔗 [**更多: 使用Bcrypt**](./sections/security/bcryptpasswords.chinese.md)

<br/><br/>

## ![✔] 6.9. 转义 HTML、JS 和 CSS 输出

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** 发送给浏览器的不受信任数据可能会被执行, 而不是显示, 这通常被称为跨站点脚本(XSS)攻击。使用专用库将数据显式标记为不应执行的纯文本内容(例如:编码、转义)，可以减轻这种问题。

**否则:** 攻击者可能会将恶意的JavaScript代码存储在您的DB中, 然后将其发送给可怜的客户端。

🔗 [**更多: 转义输出**](./sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. 验证传入的JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** 验证传入请求的body payload，并确保其符合预期要求, 如果没有, 则快速报错。为了避免每个路由中繁琐的验证编码, 您可以使用基于JSON的轻量级验证架构，比如[jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**否则:** 您疏忽和宽松的方法大大增加了攻击面, 并鼓励攻击者尝试许多输入, 直到他们找到一些组合, 使应用程序崩溃。

🔗 [**更多: 验证传入的JSON schemas**](./sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. 支持黑名单的JWT

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 当使用JSON Web Tokens(例如, 通过[Passport.js](https://github.com/jaredhanson/passport)), 默认情况下, 没有任何机制可以从发出的令牌中撤消访问权限。一旦发现了一些恶意用户活动, 只要它们持有有效的标记, 就无法阻止他们访问系统。通过实现一个不受信任令牌的黑名单，并在每个请求上验证，来减轻此问题。

**否则:** 过期或错误的令牌可能被第三方恶意使用，以访问应用程序，并模拟令牌的所有者。

🔗 [**更多: 为JSON Web Token添加黑名单**](./sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. 限制每个用户允许的登录请求

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 一类保护暴力破解的中间件，比如[express-brute](https://www.npmjs.com/package/express-brute)，应该被用在express的应用中，来防止暴力/字典攻击；这类攻击主要应用于一些敏感路由，比如/admin 或者 /login，基于某些请求属性, 如用户名, 或其他标识符, 如正文参数等。

**否则:** 攻击者可以发出无限制的密码匹配尝试, 以获取对应用程序中特权帐户的访问权限。

🔗 [**更多: 限制登录频率**](./sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. 使用非root用户运行Node.js

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Node.js作为一个具有无限权限的root用户运行，这是一种普遍的情景。例如，在Docker容器中，这是默认行为。建议创建一个非root用户，并保存到Docker镜像中（下面给出了示例），或者通过调用带有"-u username" 的容器来代表此用户运行该进程。

**否则:** 在服务器上运行脚本的攻击者在本地计算机上获得无限制的权利 (例如，改变iptable，引流到他的服务器上)

🔗 [**更多: 使用非root用户运行Node.js**](./sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. 使用反向代理或中间件限制负载大小

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 请求body有效载荷越大, Node.js的单线程就越难处理它。这是攻击者在没有大量请求(DOS/DDOS 攻击)的情况下，就可以让服务器跪下的机会。在边缘上（例如，防火墙，ELB）限制传入请求的body大小，或者通过配置[express body parser](https://github.com/expressjs/body-parser)仅接收小的载荷，可以减轻这种问题。

**否则:** 您的应用程序将不得不处理大的请求, 无法处理它必须完成的其他重要工作, 从而导致对DOS攻击的性能影响和脆弱性。

🔗 [**更多: 限制负载大小**](./sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. 避免JavaScript的eval声明

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` 是邪恶的, 因为它允许在运行时执行自定义的JavaScript代码。这不仅是一个性能方面的问题, 而且也是一个重要的安全问题, 因为恶意的JavaScript代码可能来源于用户输入。应该避免的另一种语言功能是 `new Function` 构造函数。`setTimeout` 和 `setInterval` 也不应该传入动态JavaScript代码。

**否则:** 恶意JavaScript代码查找传入 `eval` 或其他实时判断的JavaScript函数的文本的方法, 并将获得在该页面上javascript权限的完全访问权。此漏洞通常表现为XSS攻击。

🔗 [**更多: 避免JavaScript的eval声明**](./sections/security/avoideval.chinese.md)

<br/><br/>

## ![✔] 6.16. 防止恶意RegEx让Node.js的单线程过载执行

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 正则表达式，在方便的同时，对JavaScript应用构成了真正的威胁，特别是Node.js平台。匹配文本的用户输入需要大量的CPU周期来处理。在某种程度上，正则处理是效率低下的，比如验证10个单词的单个请求可能阻止整个event loop长达6秒，并让CPU引火烧身。由于这个原因，偏向第三方的验证包，比如[validator.js](https://github.com/chriso/validator.js)，而不是采用正则，或者使用[safe-regex](https://github.com/substack/safe-regex)来检测有问题的正则表达式。

**否则:** 写得不好的正则表达式可能容易受到正则表达式DoS攻击的影响, 这将完全阻止event loop。例如，流行的`moment`包在2017年的11月，被发现使用了错误的RegEx用法而易受攻击。

🔗 [**更多: 防止恶意正则**](./sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. 使用变量避免模块加载

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 避免通过作为参数的路径requiring/importing另一个文件, 原因是它可能源自用户输入。此规则可扩展为访问一般文件(即:`fs.readFile()`)或使用来自用户输入的动态变量访问其他敏感资源。[Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter可以捕捉这样的模式, 并尽早提前警告。

**否则:** 恶意用户输入可以找到用于获得篡改文件的参数, 例如, 文件系统上以前上载的文件, 或访问已有的系统文件。

🔗 [**更多: 安全地加载模块**](./sections/security/safemoduleloading.chinese.md)

<br/><br/>

## ![✔] 6.18. 在沙箱中运行不安全代码

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 当任务执行在运行时给出的外部代码时(例如, 插件), 使用任何类型的`沙盒`执行环境保护主代码，并隔离开主代码和插件。这可以通过一个专用的过程来实现 (例如:cluster.fork()), 无服务器环境或充当沙盒的专用npm包。

**否则:** 插件可以通过无限循环、内存超载和对敏感进程环境变量的访问等多种选项进行攻击

🔗 [**更多: 在沙箱中运行不安全代码**](./sections/security/sandbox.chinese.md)

<br/><br/>

## ![✔] 6.19. 使用子进程时要格外小心

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 尽可能地避免使用子进程，如果您仍然必须这样做，验证和清理输入以减轻shell注入攻击。更喜欢使用 "child_process"。execFile 的定义将只执行具有一组属性的单个命令, 并且不允许 shell 参数扩展。倾向于使用`child_process.execFile`，从定义上来说，它将仅仅执行具有一组属性的单个命令，并且不允许shell参数扩展。

**否则:** 由于将恶意用户输入传递给未脱敏处理的系统命令, 直接地使用子进程可能导致远程命令执行或shell注入攻击。

🔗 [**更多: 处理子进程时要格外小心**](./sections/security/childprocesses.chinese.md)

<br/><br/>

## ![✔] 6.20. 隐藏客户端的错误详细信息

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 默认情况下, 集成的express错误处理程序隐藏错误详细信息。但是, 极有可能, 您实现自己的错误处理逻辑与自定义错误对象(被许多人认为是最佳做法)。如果这样做, 请确保不将整个Error对象返回到客户端, 这可能包含一些敏感的应用程序详细信息。

**否则:** 敏感应用程序详细信息(如服务器文件路径、使用中的第三方模块和可能被攻击者利用的应用程序的其他内部工作流)可能会从stack trace发现的信息中泄露。

🔗 [**更多: 隐藏客户端的错误详细信息**](./sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. 对npm或Yarn，配置2FA

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 开发链中的任何步骤都应使用MFA(多重身份验证)进行保护, npm/Yarn对于那些能够掌握某些开发人员密码的攻击者来说是一个很好的机会。使用开发人员凭据, 攻击者可以向跨项目和服务广泛安装的库中注入恶意代码。甚至可能在网络上公开发布。在npm中启用2因素身份验证（2-factor-authentication）, 攻击者几乎没有机会改变您的软件包代码。

**否则:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. 修改session中间件设置

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 每个web框架和技术都有其已知的弱点-告诉攻击者我们使用的web框架对他们来说是很大的帮助。使用session中间件的默认设置, 可以以类似于`X-Powered-By`header的方式向模块和框架特定的劫持攻击公开您的应用。尝试隐藏识别和揭露技术栈的任何内容(例如:Nonde.js, express)。

**否则:** 可以通过不安全的连接发送cookie, 攻击者可能会使用会话标识来标识web应用程序的基础框架以及特定于模块的漏洞。

🔗 [**更多: cookie和session安全**](./sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. 通过显式设置进程应崩溃的情况，以避免DOS攻击

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 当错误未被处理时, Node进程将崩溃。即使错误被捕获并得到处理，许多最佳实践甚至建议退出。例如, Express会在任何异步错误上崩溃 - 除非使用catch子句包装路由。这将打开一个非常惬意的攻击点, 攻击者识别哪些输入会导致进程崩溃并重复发送相同的请求。没有即时补救办法, 但一些技术可以减轻苦楚: 每当进程因未处理的错误而崩溃，都会发出警报，验证输入并避免由于用户输入无效而导致进程崩溃，并使用catch将所有路由处理包装起来，并在请求中出现错误时, 考虑不要崩溃(与全局发生的情况相反)。

**否则:** 这只是一个起到教育意义的假设: 给定许多Node.js应用程序, 如果我们尝试传递一个空的JSON正文到所有POST请求 - 少数应用程序将崩溃。在这一点上, 我们可以只是重复发送相同的请求, 就可以轻松地搞垮应用程序。

<br/><br/><br/>

## ![✔] 6.24. 避免不安全的重定向

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** 不验证用户输入的重定向可使攻击者启动网络钓鱼诈骗，窃取用户凭据，以及执行其他恶意操作。

**否则:** 当攻击者发现你没有校验用户提供的外部输入时，他们会在论坛、社交媒体以和其他公共场合发布他们精心制作的链接来诱使用户点击，以此达到漏洞利用的目的。

🔗 [**阅读更多: 避免不安全的重定向**](./sections/security/saferedirects.chinese.md)

<br/><br/><br/>

## ![✔] 6.25. 避免将机密信息发布到NPM仓库

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 您应该采取预防措施来避免偶然地将机密信息发布到npm仓库的风险。 一个 `.npmignore` 文件可以被用作忽略掉特定的文件或目录, 或者一个在 `package.json` 中的 `files` 数组可以起到一个白名单的作用.

**否则:** 您项目的API密钥、密码或者其它机密信息很容易被任何碰到的人滥用，这可能会导致经济损失、身份冒充以及其它风险。

🔗 [**阅读更多: 避免发布机密信息**](./sections/security/avoid_publishing_secrets.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. 草稿: 有关性能的最佳实践`

## 我们的贡献者们正在努力完善这个章节。 [你想要加入吗?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. 不要阻塞事件循环

**TL;DR:** 避免执行CPU密集型的任务，并将这些任务转移到基于上下文的专用线程中，因为它们会阻塞大多数单线程事件循环。

**否则:** 由于事件循环被阻塞了，Node.js 将无法处理其它请求，从而导致同时请求的用户的延迟。 **3000 位用户正在等待响应，内容本身已经准备好了提供服务， 但是一个单独的请求阻止了服务器将结果分发回去。**

🔗 [**阅读更多: 不要阻塞事件循环**](./sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. 优先使用原生的JS方法，而不是像 Lodash 这样的用户空间级别的实用工具

**TL;DR:** 使用像 `lodash` 和 `underscore` 这样的实用库替代原生的JS方法，通常来说这么做更不好，因为它导致了一些不必要的依赖项以及更差的性能表现。
请记住，随着新的V8引擎以及新的ES标准的引入，原生方法得到了改进，它们现在会比这些实用工具库高出大概 50% 的性能。

**否则:** 你将不得不维护一些性能更低的项目，在这些项目中，你本可以很简单的使用那些已经可以用的东西，或者用几行代码来取代掉几个文件。

🔗 [**阅读更多: 原生方法胜过实用工具**](./sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

<br/><br/><br/>

# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/goldbergyoni/nodebestpractices/milestones) and join the working groups if you want to contribute to this project.

<br/><br/>

# Contributors

## `Yoni Goldberg`

Independent Node.js consultant who works with customers at USA, Europe and Israel on building large-scale scalable Node applications. Many of the best practices above were first published on his blog post at [http://www.goldbergyoni.com](http://www.goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

## `Ido Richter`

👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast.

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)

Node.js Core Collaborator, been noding since 0.4, and have noded in multiple production sites. Founded `node4good` home of [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), and [`asynctrace`](https://github.com/node4good/asynctrace).
`refack` on freenode, Twitter, GitHub, GMail, and many other platforms. DMs are open, happy to help.

## `Bruno Scheufler`

💻 full-stack web developer and Node.js enthusiast.

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)

Full Stack Developer based in New Zealand, interested in architecting and building Node.js applications to perform at global scale. Keen contributor to open source software, including Node.js Core.

<br/><br/>

## Thank You Notes

We appreciate any contribution, from a single word fix to a new best practice. View our contributors and [contributing documentation here!](./README.md#contributors-)

<br/><br/><br/>
