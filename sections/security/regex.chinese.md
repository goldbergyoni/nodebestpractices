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

// should output false because the emailRegex is vulnerable to redos attacks
console.log(saferegex(emailRegex));

// instead of the regex pattern, use validator:
var validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### Book Quote: "A vulnerable Regular Expression is known as one which applies repetition"

From the book [Essential Node.js Security](https://leanpub.com/nodejssecurity) by Liran Tal
> Often, programmers will use RegEx to validate that an input received from a user conforms to an expected condition. A vulnerable Regular Expression is known as one which applies repetition to a repeating capturing group, and where the string to match is composed of a suffix of a valid matching pattern plus characters that aren't matching the capturing group.

