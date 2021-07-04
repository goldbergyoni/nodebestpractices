# 拥抱Linter安全规则

### 一段解释

eslint和tslint的安全插件，如[eslint-plugin-security](https://github.com/nodeseecurity/eslint-plugin-security)和[tslint-config-security](https://www.npmjs.com/package/tslint-config-security)提供基于许多已知漏洞的代码安全检查，例如不安全正则表达式，不安全使用`eval()`，以及在应用程序中访问文件系统时使用的非文字文件名。使用Git钩子，如[pre-git](https://github.com/bahmutov/pre-git)允许在分发到遥控器之前进一步强制执行任何规则，例如可以检查没有将密码添加到源中。

### `eslint-plugin-security` 示例

`eslint-plugin-security`检测到的不安全实践规则的一些示例:

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

使用上述不安全的代码在Node.js项目上实践运行`eslint-plugin-security`的示例：

![nsp check example](/assets/images/eslint-plugin-security.png)

### 其他博主说什么

来自博客[Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> Linting不只是一个执行关于空格，分号或eval语句的迂腐规则的工具。eslint提供了一个强大的框架，用于消除代码中的各种潜在的危险模式（正则表达式，输入验证等）。我认为它提供了一个强大的新工具，值得通过安全意识的JavaScript开发人员考虑。