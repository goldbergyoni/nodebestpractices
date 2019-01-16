# 防止恶意RegEx使您的单个线程超载执行

### 一段解释

使用正则表达式内在的风险是分析文本和匹配给定模式所需的计算资源。对于Node.js平台，单线程事件循环占主导地位, CPU绑定操作(如解析正则表达式模式)将使应用程序无响应。
当可能的时候，避免RegEx，或者转交这个任务给一些专门的库，比如[validator.js](https://github.com/chriso/validator.js), 或者[safe-regex](https://github.com/substack/safe-regex)，来检测正则表达式是否安全。

一些[OWASP示例](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)演示有风险的正则匹配:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### 代码示例 – 使用Express框架启用SSL/TLS

```javascript
var saferegex = require('safe-regex');
var emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// 应该输出false, 因为电子邮件RegEx很容易受到redos攻击
console.log(saferegex(emailRegex));

// 使用validator替代正则表达式
var validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### 书本引用: "易受攻击的正则表达式被称为重复应用的表达式

摘自Liran Tal的书[Essential Node.js Security](https://leanpub.com/nodejssecurity)
> 通常, 程序员会使用RegEx来验证从用户收到的输入是否符合预期的条件。易受攻击的正则表达式被称为将重复应用于重复匹配组, 以及要匹配的字符串由有效匹配模式的后缀加上与匹配组不匹配的字符组成的表达式。

