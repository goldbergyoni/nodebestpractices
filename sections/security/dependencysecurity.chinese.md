# 不断并自动检查是否存在易受攻击的依赖关系

### 一段解释

由于开发方便及开发效率高，大多数的Node.js应用严重依赖大量来着npm和Yarn（这两者都是非常流行的包注册管理工具）的第三方模块。但是, 便利的缺点是将未知漏洞包含到应用程序中的安全风险, 这是可以通过owasp最严重的web应用程序安全风险列表中的排名所认识到的风险。

有许多工具可用于帮助鉴别Node.js中的第三方包，及已被社区确定为易受攻击的js应用程序, 以降低将其引入项目的风险。这些工具可以定期通过cli工具使用, 也可以作为应用程序构建过程的一个环节包括在内。

### 内容列表

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### NPM Audit

`npm audit`时随着NPM@6引入的一个新的cli工具。 

Running `npm audit` will produce a report of security vulnerabilities with the affected package name, vulnerability severity and description, path, and other information, and, if available, commands to apply patches to resolve vulnerabilities.

![npm audit example](/assets/images/npm-audit.png)

🔗 [Read on: NPM blog](https://docs.npmjs.com/getting-started/running-a-security-audit)

### Snyk

Snyk offers a feature-rich CLI, as well as GitHub integration. Snyk goes further with this and in addition to notifying vulnerabilities, also automatically creates new pull requests fixing vulnerabilities as patches are released for known vulnerabilities.

Snyk's feature rich website also allows for ad-hoc assessment of dependencies when provided with a GitHub repository or npm module url. You can also search for npm packages which have vulnerabilities directly.

An example of the output of the Synk GitHub integration automatically created pull request:
![synk GitHub example](/assets/images/snyk.png)

🔗 [Read on: Snyk website](https://snyk.io/)

🔗 [Read on: Synk online tool to check npm packages and GitHub modules](https://snyk.io/test)

### Greenkeeper

Greenkeeper is a service which offers real-time dependency updates, which keeps an application more secure by always using the most update to date and patched dependency versions.

Greenkeeper watches the npm dependencies specified in a repository's `package.json` file, and automatically creates a working branch with each dependency update. The repository CI suite is then run to reveal any breaking changes for the updated dependency version in the application. If CI fails due to the dependency update, a clear and concise issue is created in the repository to be auctioned, outlining the current and updated package versions, along with information and commit history of the updated version.

An example of the output of the Greenkeeper GitHub integration automatically created pull request:

![synk github example](/assets/images/greenkeeper.png)
🔗 [Read on: Greenkeeper website](https://greenkeeper.io/)

### Additional resources

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving npm security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)
