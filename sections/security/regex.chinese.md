# 防止恶意RegEx让Node.js的单线程过载执行

### 一段解释

使用正则表达式的固有风险是解析文本和匹配指定模式所需的计算资源。对于单线程事件循环占主导地位的 Node.js 平台，像解析正则表达式模式这样的 CPU 绑定的操作将使应用程序无响应。
尽可能避免使用 RegEx 或将任务交给一些专用库，如 [validator.js](https://github.com/chriso/validator.js) 或 [safe-regex](https://github.com/substack/safe-regex) 来检查 RegEx 模式是否安全。

针对易受攻击的 RegEx 模式的一些 [OWASP示例](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS):
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### 代码示例 – 验证指数时间 RegEx，并使用验证器代替 RegEx

```javascript
const saferegex = require('safe-regex');
const emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// should output false because the emailRegex is vulnerable to redos attacks
console.log(saferegex(emailRegex));

// instead of the regex pattern, use validator:
const validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### 引用："A vulnerable Regular Expression is known as one which applies repetition"

来自 Liran Tal 的书 [Essential Node.js Security](https://leanpub.com/nodejssecurity)
> 通常，程序员会使用 RegEx 来验证从用户收到的输入是否符合预期条件。 易受攻击的正则表达式被称为将重复应用于重复捕获组的正则表达式，其中要匹配的字符串由有效匹配模式的后缀加上与捕获组不匹配的字符组成。