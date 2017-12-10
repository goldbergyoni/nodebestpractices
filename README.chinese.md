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

## ![✔] 2.9 使用APM产品发现错误和宕机时间

**TL;DR:** 监控和性能产品 (别名 APM) 先前一步的检测您的代码库和API，这样他们能自动的，像使用魔法一样的强调错误，宕机和您忽略的性能慢的部分。

**否则:** 您花了很多的力气在测量API的性能和错误，但可能您从来没有意识到真实场景下您最慢的代码块和他们对UX的影响。


🔗 [**更多: 使用APM产品**](/sections/errorhandling/apmproducts.md)

<br/><br/>


## ![✔] 2.10 捕获未处理的promise rejections

**TL;DR:** 任何在promise中被抛出的异常将被收回和遗弃，除非开发者没有忘记去明确的处理。即使您的代码调用的是process.uncaughtException！解决这个问题可以注册到事件process.unhandledRejection。

**否则:** 您的错误将被回收，无踪迹可循。没有什么可以需要考虑。


🔗 [**更多: 捕获未处理的promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 快速查错，验证参数使用一个专门的库Fail fast, validate arguments using a dedicated library

**TL;DR:** 这应该是您的Express最佳实践中的一部分 – assert API输入避免难以理解的漏洞，这类漏洞以后会非常难以追踪。而验证代码通常是一件乏味的事情，除非使用一些非常炫酷的帮助库比如Joi。

**否则:** 考虑这种情况 – 您的功能期望一个数字参数 “Discount” ，然而调用者忘记传值，之后在您的代码中检查是否 Discount!=0 （允许的折扣值大于零），这样它将允许用户使用一个折扣。OMG，多么不爽的一个漏洞。你能明白吗？

🔗 [**更多: 快速查错**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `3. 编码风格实践`

## ![✔] 3.1 使用ESLint

**TL;DR:** ESLint是检查代码风格的事实上的标准，不仅要查明实际的间距问题，也要检测严重的反模式问题，像开发者没有分类的抛出异常。使用ESLint及下面列出的其他的代码风格实践，意味着和社区里的其他人保持同一种风格，以及用在核心产品本身相同的代码风格。

**否则:** 开发者必须专注于单调的间距和线宽的问题上。

<br/><br/>

## ![✔] 3.2 Node JS 特定的插件

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
  function someFunction
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

**TL;DR:** 命名所有的方法，包含闭包和回调。避免匿名方法。当剖析一个node应用的时候，这是特别有用的。命名所有的方法将会使您非常容易的理解内存快照中您正在查看的内容。

**否则:** 使用一个核心dump（内存快照）调试线上问题，会是一项非常挑战的事项，因为你注意到的严重内存泄漏问题极有可能产生于匿名的方法。

<br/><br/>

## ![✔] 3.6 变量、常量、函数和类的命名约定

**TL;DR:** 当命名变量和方法的时候，使用 ***lowerCamelCase*** ， 当命名类的时候，使用***UpperCamelCase*** （首字母大写），对于常量，则***UPPERCASE***。这将帮助您轻松地区分普通变量/函数和需要实例化的类。使用描述性名称，但使它们尽量简短。

**否则:** JavaScript是世界上唯一一门不需要实例化，就可以直接调用构造函数（"Class"）的编码语言。因此，类和函数的构造函数由采用UpperCamelCase开始区分。

### 代码示例 ###
```javascript
  // 使用UpperCamelCase命名类名
  class SomeClassExample () { 
    
    // 常量使用UPPERCASE
    const CONFIG = {
      key: 'value'
    };
    
    // 变量和方法使用lowerCamelCase
    let someVariableExample = 'value';
    function doSomething() {
      
    }

  }
```

<br/><br/>

## ![✔] 3.7 使用const优于let，废弃var

**TL;DR:** 使用` const `意味着一旦一个变量被分配，它不能被重新分配。使用const将帮助您免于使用相同的变量用于不同的用途，并使你的代码更清晰。如果一个变量需要被重新分配，以在一个循环为例，使用 `let` 声明它。let的另一个重要方面是，使用let声明的变量只在定义它的块作用域中可用。 `var` 是函数作用域，不是块级作用域，既然您有const和let让您随意使用，那么[不应该在ES6中使用var](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70)。

**否则:** 当经常更改变量时，调试变得更麻烦了。

🔗 [**更多: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Requires come first, and not inside functions

**TL;DR:** 在每个文件的起始位置，在任何函数的前面和外部 require 模块。这种简单的最佳实践，不仅能帮助您轻松快速地在文件顶部辨别出依赖关系，而且避免了一些潜在的问题。

**否则:** 在 NodeJs 中，require 是同步运行的。如果从函数中调用它们，它可能会阻塞其他请求，在更关键的时间得到处理。另外，如果所 require 的模块或它自己的任何依赖项抛出错误并使服务器崩溃，最好尽快查明它，如果该模块在函数中 require 的，则可能不是这样的情况。

<br/><br/>

## ![✔] 3.9 在文件夹上 require ，而不是直接在文件上

**TL;DR:** 当在一个文件夹中开发库/模块，放置一个文件index.js暴露模块的
内部，这样每个消费者都会通过它。这将作为您模块的一个接口，并使
未来的变化简单而不违反规则。

**否则:** 更改文件内部结构或签名可能会破坏与客户端的接口。

### 代码示例
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

### 代码示例
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

**TL;DR:** Node 8 LTS现已全面支持异步等待。这是一种新的方式处理异步请求，取代回调和promise。Async-await是非阻塞的，它使异步代码看起来像是同步的。你可以给你的代码的最好的礼物是用async-await提供了一个更紧凑的，熟悉的，类似try catch的代码语法。

**否则:** 使用回调的方式处理异步错误可能是陷入困境最快的方式 - 这种方式必须面对不停地检测错误，处理别扭的代码内嵌，难以推理编码流。

🔗[**更多:** async await 1.0 引导](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 使用 (=>) 箭头函数

**TL;DR:** 尽管使用 async-await 和避免方法作为参数是被推荐的, 但当处理那些接受promise和回调的老的API的时候 - 箭头函数使代码结构更加紧凑，并保持了根方法上的语义上下文 (例如 'this')。

**否则:** 更长的代码（在ES5方法中）更易于产生缺陷，并读起来很是笨重。

🔗 [**更多: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>


# `4. 测试和总体的质量实践`

## ![✔] 4.1 至少，编写API（组件）测试

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

# `5. 上线实践`
## ![✔] 5.1. 监控!

**TL;DR:** 监控是一种在顾客之前发现问题的游戏 – 显然这应该被赋予前所未有的重要性。考虑从定义你必须遵循的基本度量标准开始（我的建议在里面），到检查附加的花哨特性并选择解决所有问题的解决方案。市场已经淹没其中。点击下面的 ‘The Gist’ ，了解解决方案的概述。

**否则:** 错误 === 失望的客户. 非常简单.


🔗 [**更多: 监控!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. 使用智能日志增加透明度Increase transparency using smart logging

**TL;DR:** 日志可以是调试语句的一个不能说话的仓库，或者表述应用运行过程的一个漂亮仪表板的驱动。从第1天计划您的日志平台：如何收集、存储和分析日志，以确保所需信息（例如，错误率、通过服务和服务器等完成整个事务）都能被提取出来。

**否则:** 您最终像是面对一个黑盒，不知道发生了什么事情，然后你开始重新写日志语句添加额外的信息。


🔗 [**更多: Increase transparency using smart logging**](/sections/production/smartlogging.md)
	
<br/><br/>

## ![✔] 5.3. 委托一切可能的（例如：gzip，SSL）给反向代理

**TL;DR:** node处理CPU密集型任务，如gzipping，SSL termination等，表现糟糕。相反，使用一个 ‘真正’ 的中间件服务像Nginx，HAProxy或者云供应商的服务。

**否则:** 单线程的node服务器将不幸地忙于处理网络任务，而不是处理应用程序核心，性能会相应降低。


🔗 [**更多: 委托一切可能的（例如：gzip，SSL）给反向代理**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. 锁住依赖

**TL;DR:** 您的代码必须在所有的环境中是相同的，但是令人惊讶的是，NPM默认情况下会让依赖在不同环境下发生偏移 – 当在不同的环境中安装包的时候，它试图拿包的最新版本。克服这种问题可以利用NPM配置文件， .npmrc，告诉每个环境保存准确的（不是最新的）包的版本。另外，对于更精细的控制，使用NPM “shrinkwrap”。*更新：作为NPM5，依赖默认锁定。新的包管理工具，Yarn，也默认锁定。

**否则:** QA测试通过的代码和批准的版本，在生产中表现不一致。更糟糕的是，同一生产集群中的不同服务器可能运行不同的代码。


🔗 [**更多: 锁住依赖**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. 使用正确的工具保护进程正常运行

**TL;DR:** 进程必须继续运行，并在失败时重新启动。对于简单的情况下，“重启”工具如PM2可能足够，但在今天的“Dockerized”世界 – 集群管理工具也值得考虑

**否则:** 运行几十个实例没有明确的战略和太多的工具（集群管理，docker，PM2）可能导致一个DevOps混乱


🔗 [**更多: 使用正确的工具保护进程正常运行**](/sections/production/guardprocess.md)

 
<br/><br/>

## ![✔] 5.6. 利用CPU多核

**TL;DR:** 在基本形式上，node应用程序运行在单个CPU核心上，而其他都处于空闲状态。复制node进程和利用多核，这是您的职责 – 对于中小应用，您可以使用Node Cluster和PM2. 对于一个大的应用，可以考虑使用一些Docker cluster（例如k8s，ECS）复制进程或基于Linux init system（例如systemd）的部署脚本

**否则:** 您的应用可能只是使用了其可用资源中的25% (!)，甚至更少。注意，一台典型的服务器有4个或更多的CPU，默认的Node.JS部署仅仅用了一个CPU（甚至使用PaaS服务，比如AWS beanstalk，也一样）。


🔗 [**更多: 利用所有的CPU**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. 创建一个“维护端点”

**TL;DR:** 在一个安全的API中暴露一组系统相关的信息，比如内存使用情况和REPL等等。尽管这里强烈建议依赖标准和作战测试工具，但一些有价值的信息和操作更容易使用代码完成。

**否则:** 您会发现，您正在执行许多“诊断部署” — 将代码发送到生产中，仅仅只为了诊断目的提取一些信息。


🔗 [**更多: 创建一个 ‘维护端点’ **](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. 使用APM产品发现错误和宕机时间

**TL;DR:** 监控和性能的产品（即APM）先前一步地评估代码库和API，自动的超过传统的监测，并测量在服务和层级上的整体用户体验。例如，一些APM产品可以突显导致最终用户负载过慢的事务，同时指出根本原因。

**否则:** 你可能会花大力气测量API性能和停机时间，也许你永远不会知道，真实场景下哪个是你最慢的代码部分，这些怎么影响用户体验。


🔗 [**更多: 使用APM产品发现错误和宕机时间**](/sections/production/apmproducts.md)


<br/><br/>


## ![✔] 5.9. 使您的代码保持生产环境就绪

**TL;DR:** 在意识中抱着最终上线的想法进行编码，从第1天开始计划上线。这听起来有点模糊，所以我编写了一些与生产维护密切相关的开发技巧（点击下面的要点）

**否则:** 一个世界冠军级别的IT/运维人员也不能拯救一个编码低劣的系统。


🔗 [**更多: 使您的代码保持生产环境就绪**](/sections/production/productoncode.md)

<br/><br/>

## ![✔] 5.10. 测量和保护内存使用

**TL;DR:** Node.js和内存有引起争论的联系：V8引擎对内存的使用有稍微的限制（1.4GB），在node的代码里面有内存泄漏的很多途径 – 因此监视node的进程内存是必须的。在小应用程序中，你可以使用shell命令周期性地测量内存，但在中等规模的应用程序中，考虑把内存监控建成一个健壮的监控系统。

**否则:** 您的内存可能一天泄漏一百兆，就像曾发生在沃尔玛的一样。


🔗 [**更多: 测量和保护内存使用**](/sections/production/measurememory.md)

<br/><br/>


## ![✔] 5.11. Node外管理您的前端资源

**TL;DR:** 使用专门的中间件（nginx，S3，CDN）服务前端内容，这是因为在处理大量静态文件的时候，由于node的单线程模型，它的性能很受影响。

**否则:** 您的单个node线程将忙于传输成百上千的html/图片/angular/react文件，而不是分配其所有的资源为了其擅长的任务 – 服务动态内容


🔗 [**更多: Node外管理您的前端资源**](/sections/production/frontendout.md)

<br/><br/>


## ![✔] 5.12. 保持无状态，几乎每天都要停下服务器

**TL;DR:** 在外部数据存储上，存储任意类型数据（例如用户会话，缓存，上传文件）。考虑间隔地停掉您的服务器或者使用 ‘serverless’ 平台（例如 AWS Lambda），这是一个明确的强化无状态的行为。

**否则:** 某个服务器上的故障将导致应用程序宕机，而不仅仅是停用故障机器。此外，由于依赖特定服务器，伸缩弹性会变得更具挑战性。


🔗 [**Read More: 保持无状态，几乎每天都要停下服务器**](/sections/production/bestateless.md)


<br/><br/>


## ![✔] 5.13. 使用自动检测漏洞的工具

**TL;DR:** 即使是最有信誉的依赖项，比如Express，会有使系统处于危险境地的已知漏洞（随着时间推移）。通过使用社区的或者商业工具，不时的检查漏洞和警告（本地或者Github上），这类问题很容易被抑制，有些问题甚至可以立即修补。

**否则:** 否则: 在没有专用工具的情况下，使代码清除漏洞，需要不断地跟踪有关新威胁的在线出版物。相当繁琐。


🔗 [**更多: 使用自动检测漏洞的工具**](/sections/production/detectvulnerabilities.md)

<br/><br/>


## ![✔] 5.14. 在每一个log语句中指明 ‘TransactionId’ 

**TL;DR:** 在每一个请求的每一条log入口，指明同一个标识符，transaction-id: {某些值}。然后在检查日志中的错误时，很容易总结出前后发生的事情。不幸的是，由于Node异步的天性自然，这是不容易办到的，看下代码里面的例子

**否则:** 在没有上下文的情况下查看生产错误日志，这会使问题变得更加困难和缓慢去解决。


🔗 [**更多: 在每一个log语句中指明 ‘TransactionId’**](/sections/production/assigntransactionid.md)

<br/><br/>


## ![✔] 5.15. 设置NODE_ENV=production

**TL;DR:** 设置环境变量NODE_ENV为‘production’ 或者 ‘development’，这是一个是否激活上线优化的标志 - 很多NPM的包通过它来判断当前的环境，据此优化生产环境代码。

**否则:** 遗漏这个简单的属性可能大幅减弱性能。例如，在使用Express作为服务端渲染页面的时候，如果未设置NODE_ENV，性能将会减慢大概三分之一！


🔗 [**更多: 设置NODE_ENV=production**](/sections/production/setnodeenv.md)


<br/><br/>


## ![✔] 5.16. 设计自动化、原子化和零停机时间部署

**TL;DR:** 研究表明，执行许多部署的团队降低了严重上线问题的可能性。不需要危险的手动步骤和服务停机时间的快速和自动化部署大大改善了部署过程。你应该达到使用Docker结合CI工具，使他们成为简化部署的行业标准。

**否则:** 长时间部署 -> 线上宕机 & 和人相关的错误 -> 团队部署时不自信 -> 更少的部署和需求

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
