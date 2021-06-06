# 使用工具自动检测有漏洞的依赖项

<br/><br/>

### 一段解释

现代node应用有数十个, 有时是数以百计的依赖。如果您使用的任何依赖项存在已知的安全漏洞, 您的应用也很容易受到攻击。
下列工具自动检查依赖项中的已知安全漏洞:
[npm audit](https://docs.npmjs.com/cli/audit) - Node 安全工程
[snyk](https://snyk.io/) - 持续查找和修复依赖中的漏洞

<br/><br/>

### 其他博主说什么
摘自博客 [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/) :

> ...被用来管理您应用的依赖是强大且方便的。但是, 您使用的依赖包可能存在严重的安全漏洞, 也会影响您的应用。您的应用的安全性仅仅与您的依赖组件中的 "最薄弱的一环" 一样严重。幸运的是, 您可以使用两种有用的工具来确保您使用的第三方库: ** 和 requireSafe。这两种工具在很大程度上都是一样的, 所以使用两种方法都可能过于夸张, 但 "安全比抱歉" 更安全...
