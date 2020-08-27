# Wrap common utilities as npm packages

<br/><br/>

### One Paragraph Explainer

Once you start growing and have different components on different servers which consumes similar utilities, you should start managing the dependencies - how can you keep 1 copy of your utility code and let multiple consumer components use and deploy it? well, there is a tool for that, it's called npm... Start by wrapping 3rd party utility packages with your own code to make it easily replaceable in the future and publish your own code as private npm package. Now, all your code base can import that code and benefit free dependency management tool. It's possible to publish npm packages for your own private use without sharing it publicly using [private modules](https://docs.npmjs.com/private-modules/intro), [private registry](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) or [local npm packages](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)


# Thease are all the options for using private packages:

```
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>
```
More information: npm install docs: https://docs.npmjs.com/cli/install

<br/><br/>

### Sharing your own common utilities across environments and components

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/Privatenpm.png "Structuring solution by components")
