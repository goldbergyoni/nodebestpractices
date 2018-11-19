# 拥抱linter安全规则

### 一段解释

ESLint的安全插件，例如[eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)提供了基于一些已知代码漏洞的安全性检查，例如不安全的RegEx，对`eval()`的不安全使用，以及在访问应用程序中的文件系统时使用了非文字的文件名。通过git钩子的使用，比如[pre-git](https://github.com/bahmutov/pre-git)，可以在将源代码发送到remotes之前进一步执行对于源代码控制的任意规则，其中之一项就是检查源代码控制中没有添加任何机密信息。

### `eslint-plugin-security` 例子

`eslint-plugin-security`检测到一些不安全实践规则的示例：

`detect-pseudoRandomBytes`

```javascript
const insecure = crypto.pseudoRandomBytes(5);
```

`detect-non-literal-fs-filename`

```javascript
const path = req.body.userinput;
fs.readFile(path);
```

`detect-eval-with-expression`

```javascript
const userinput = req.body.userinput;
eval(userinput);
```

`detect-non-literal-regexp`

```javascript
const unsafe = new RegExp('/(x+x+)+y/)');
```

使用上述不安全的代码实践，在Node.js项目上运行`eslint-plugin-security`的示例：

![nsp check example](/assets/images/eslint-plugin-security.png)

### 其他博客作者怎么说

博客来自 [Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> 检查（Linting）工具不一定只会强制执行有关空格，分号或eval语句的迂腐规则。ESLint提供了一个强大的框架，用于消除代码中的各种潜在危险模式（正则表达式，输入验证，等等）。我认为它提供了一个强大的新工具，更值得被具有安全意识的JavaScript开发者考虑。
