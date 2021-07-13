# Constantly and automatically inspect for vulnerable dependencies

### One Paragraph Explainer

The majority of Node.js applications rely heavily on a large number of third party modules from npm or Yarn, both popular package registries, due to ease and speed of development. However, the downside to this benefit is the security risks of including unknown vulnerabilities into your application, which is a risk recognised by its place in the OWASP top critical web application security risks list.

There is a number of tools available to help identify third-party packages in Node.js applications which have been identified as vulnerable by the community to mitigate the risk of introducing them into your project. These can be used periodically from CLI tools or included as part of your application's build process.

### Table of Contents

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)
- [Additional Resources](#additional-resources)

### NPM Audit

`npm audit` is a new cli tool introduced with NPM@6.

Running `npm audit` will produce a report of security vulnerabilities with the affected package name, vulnerability severity and description, path, and other information, and, if available, commands to apply patches to resolve vulnerabilities.

![npm audit example](../../assets/images/npm-audit.png)

🔗 [Read on: NPM blog](https://docs.npmjs.com/getting-started/running-a-security-audit)

### Snyk

Snyk offers a feature-rich CLI, as well as GitHub integration. Snyk goes further with this and in addition to notifying vulnerabilities, also automatically creates new pull requests fixing vulnerabilities as patches are released for known vulnerabilities.

Snyk's feature rich website also allows for ad-hoc assessment of dependencies when provided with a GitHub repository or npm module url. You can also search for npm packages which have vulnerabilities directly.

An example of the output of the Snyk GitHub integration automatically created pull request:
![snyk GitHub example](../../assets/images/snyk.png)

🔗 [Read on: Snyk website](https://snyk.io/)

🔗 [Read on: Synk online tool to check npm packages and GitHub modules](https://snyk.io/test)

### Greenkeeper

Greenkeeper is a service which offers real-time dependency updates, which keeps an application more secure by always using the most up to date and patched dependency versions.

Greenkeeper watches the npm dependencies specified in a repository's `package.json` file, and automatically creates a working branch with each dependency update. The repository CI suite is then run to reveal any breaking changes for the updated dependency version in the application. If CI fails due to the dependency update, a clear and concise issue is created in the repository to be auctioned, outlining the current and updated package versions, along with information and commit history of the updated version.

An example of the output of the Greenkeeper GitHub integration automatically created pull request:

![synk github example](../../assets/images/greenkeeper.png)
🔗 [Read on: Greenkeeper website](https://greenkeeper.io/)

### Additional resources

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving npm security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)
