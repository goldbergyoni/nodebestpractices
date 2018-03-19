# Constantly and automatically inspect for vulnerable dependencies

### One Paragraph Explainer

The majority of Node.js applications rely heavily on a large number of third party modules from  NPM or Yarn package managers due to ease and speed of development. However, the downside to this benefit is the security risks of including unknown vulnerabilities into your application, which is a risk recognised by it's place in the OWASP top critical web application security risks list.

There are a number of tools available to help identify third party packages in Node.js applications which have been identified as vulnerable by the community to mitigate the risk of introducing them into your project. These can be used periodically from CLI tools or included as part of your application's build process.

### Table of Contents
- [Node Security Platform (nsp)](#node-security-platform)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### Node Security Platform (nsp)
Node Security Platform is a set of services targeted towards dependency management with a focus on security.

The most common use of this tool is the service nsp Live. This is a service which integrates into a project's CI workflow and Github Pull Requests to identify vulnerabilities present in the project. The benefits of this mean that when new modules are added, any vulnerabilites are automatically identified in order for the security risk to be mitigated before these dependencies reach master. This also includes new vulnerabilites which are found in existing dependencies, as well as when new dependencies are introduced.

There is also an nsp CLI tool, which traverses your dependencies checking for vulnerabilities against the advisories list. To use this tool:
Install the module globally.

`npm install -g nsp`

Run the CLI tool from the root of the project directory.

`nsp check`

An example output of `nsp check`:

![nsp check example](/assets/images/nsp.png)

🔗 [Read on: NSP website](https://nodesecurity.io/)

🔗 [Read on: Example advisory for a recent vulnerability in moment.js](https://nodesecurity.io/advisories/532)

### Snyk
Snyk offers a feature-rich CLI, as well as GitHub integration. Snyk goes further with this and in addition to notifying vulnerabilities, also automatically creates new pull requests fixing vulnerabilities as patches are released for known vulnerabilties.

Snyk's feature rich website also allows for ad-hoc assessment of dependencies when provided with a GitHub repository or npm module url. You can also search for npm packages which have vulnerabilties directly.

An example of the output of the Synk GitHub integration automatically created pull request:
![synk GitHub example](/assets/images/snyk.png)

🔗 [Read on: Snyk website](https://snyk.io/)

🔗 [Read on: Synk online tool to check npm packages and GitHub modules](https://snyk.io/test)

### Greenkeeper
Greenkeeper is a service which offers real-time dependency updates, which keeps an application more secure by always using the most update to date and patched dependency versions.

Greenkeeper watches the npm dependencies specified in a repository's `package.json` file, and automatically creates a working branch with each dependency update. The repository CI suite is then run to reveal any breaking changes for the updated dependency version in the application. If CI fails due the dependency update, a clear and consise issue is created in the repository to be actioned outlining the current and updated package versions, along with information and commit history of the updated version.

An example of the output of the Greenkeeper GitHub integration automatically created pull request:

![synk github example](/assets/images/greenkeeper.png)
🔗 [Read on: Greenkeeper website](https://greenkeeper.io/)

### Additional resources

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving NPM security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)
