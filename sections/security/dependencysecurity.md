# Constantly and automatically inspect for vulnerable dependencies

### One Paragraph Explainer

The majority of Node.js applications rely heavily on a large number of third party modules from  NPM or Yarn package managers due to ease and speed of development. However, the downside to this benefit is the security risks of including unknown vulnerabilities into your application, which is a risk recognised by it's place in the OWASP top critical web application security risks list.

There are a number of tools available to help identify third party packages in Node.js applications which have been identified as vulnerable by the community to mitigate the risk of introducing them into your project. These can be used periodically from CLI tools or included as part of your application's build process.

Another thing to consider along with using these mitigation tools is to identify what dependencies are no longer being used in the application, and whether or not they are still required or could be implemented in Node.js without needing to reinvent the wheel.

### Table of Contents
- [Node Security Platform (nsp)](#node-security-platform)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### Node Security Platform (nsp)
Node Security Platform is a set of services targeted towards dependency management with a focus on security.

The most common use of this tool is the service nsp Live. This is a service which integratse into a project's CI workflow and Github Pull Requests to identify vulnerabilities present in the project. The benefits of this mean that when new modules are added, any vulnerabilites are automatically identified in order for the security risk to be mitigated before these dependencies reach master. This also includes new vulnerabilites which are found in existing dependencies, as well as when new dependencies are introduced.

There is also an nsp CLI tool, which traverses your dependencies checking for vulnerabilities against the advisories list. To use this tool:
Install the module globally.
`npm install -g nsp`
Run the CLI tool from the root of the project directory.
`nsp check`
An example of output of nsp check
![nsp check example](https://i.stack.imgur.com/uvxjQ.png)

🔗 [Read on: NSP website](https://nodesecurity.io/)

### Snyk
Synk offers a feature-rich CLI, as well as Github integration. Synk goes further with this and in addition to notifing vulnerabilities, also automatically creates new pull requests fixing vulnerabilities as patches are released for known vulnerabilties.

Synk's feature rich website also allows for ad-hoc assessment of dependencies when provided with a Github reposity or npm module url. You can also search for npm packages which have vulnerabilties directly https://snyk.io/vuln?packageManager=npm
An example of the output of this tool [can be found here](https://snyk.io/test/npm/passport), which shows the current vulnerability status of the latest Passport.js npm package. 

🔗 [Read on: Snyk website](https://snyk.io/)

### Greenkeeper
Greenkeeper is a service which offers real-time dependency updates, which keeps an application more secure by always using the most update to date and patched dependency versions.

Greenkeeper watches the npm dependencies specified in a repository's `package.json` file, and automatically creates a working branch with each dependency update. The repository CI suite is then run to reveal any breaking changes for the updated dependency version in the application. If CI fails due the dependency update, a clear and consise issue is created in the repository to be actioned outlining the current and updated package versions, along with information and commit history of the updated version.

🔗 [Read on: Greenkeeper website](https://greenkeeper.io/)

### Additional resources

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving NPM security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)