# Contributing to Sinon.JS

There are several ways of contributing to Sinon.JS

* Look into [issues tagged `help-wanted`](https://github.com/sinonjs/sinon/issues?q=is%3Aopen+is%3Aissue+label%3A%22Help+wanted%22)
* Help [improve the documentation](https://github.com/sinonjs/sinon/tree/master/docs) published
  at [the Sinon.JS website](http://sinonjs.org). [Documentation issues](https://github.com/sinonjs/sinon/issues?q=is%3Aopen+is%3Aissue+label%3ADocumentation).
* Help someone understand and use Sinon.JS on [the mailing list](http://groups.google.com/group/sinonjs) or on [Stack Overflow](https://stackoverflow.com/questions/tagged/sinon)
* Report an issue, please read instructions below
* Help with triaging the [issues](http://github.com/cjohansen/Sinon.JS/issues). The clearer they are, the more likely they are to be fixed soon.
* Contribute to the code base.

## Reporting an issue

To save everyone time and make it much more likely for your issue to be understood, worked on and resolved quickly, it would help if you're mindful of [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) when pressing the "Submit new issue" button.

As a minimum, please report the following:

* Which environment are you using? Browser? Node? Which version(s)?
* Which version of SinonJS?
* How are you loading SinonJS?
* What other libraries are you using?
* What you expected to happen
* What actually happens
* Describe **with code** how to reproduce the faulty behaviour

See [our issue template](https://github.com/sinonjs/sinon/blob/master/.github/) for all details.

## Contributing to the code base

Pick [an issue](http://github.com/cjohansen/Sinon.JS/issues) to fix, or pitch
new features. To avoid wasting your time, please ask for feedback on feature
suggestions either with [an issue](http://github.com/cjohansen/Sinon.JS/issues/new)
or on [the mailing list](http://groups.google.com/group/sinonjs).

### Making a pull request

Please try to [write great commit messages](http://chris.beams.io/posts/git-commit/).

There are numerous benefits to great commit messages

* They allow Sinon.JS users to easily understand the consequences of updating to a newer version
* They help contributors understand what is going on with the codebase, allowing features and fixes to be developed faster
* They save maintainers time when compiling the changelog for a new release

If you're already a few commits in by the time you read this, you can still [change your commit messages](https://help.github.com/articles/changing-a-commit-message/).

Also, before making your pull request, consider if your commits make sense on their own (and potentially should be multiple pull requests) or if they can be squashed down to one commit (with a great message). There are no hard and fast rules about this, but being mindful of your readers greatly help you author good commits.

### Use EditorConfig

To save everyone some time, please use [EditorConfig](http://editorconfig.org), so your editor helps make
sure we all use the same encoding, indentation, line endings, etc.

### Installation

The Sinon.JS developer environment requires Node/NPM. Please make sure you have
Node installed, and install Sinon's dependencies:

    $ npm install

This will also install a pre-commit hook, that runs style validation on staged files.

#### PhantomJS

In order to run the tests, you'll need a [PhantomJS](http://phantomjs.org) global.

The test suite runs well with both `1.9.x` and `2.0.0`

### Compatibility

#### ES5.1

Sinon's source is written as [ES5.1][ES5] and requires no transpiler or polyfills.

Sinon.JS uses feature detection to support [ES6][ES6] features, but does not rely on any of the new syntax introduced in [ES6][ES6] and remains compatible with [ES5.1][ES5] runtimes.

#### Runtimes

Sinon.JS aims at supporting the following runtimes:

* Firefox 45+
* Chrome 48+
* Internet Explorer 11+
* Edge 14+
* Safari 9+
* Node LTS versions


### Style

Sinon.JS uses [ESLint](http://eslint.org) to keep consistent style. You probably want to install a plugin for your editor.

The ESLint test will be run before unit tests in the CI environment, your build will fail if it doesn't pass the style check.

```
$ npm run lint
```

To ensure consistent reporting of lint warnings, you should use the same version as CI environment (defined in `package.json`)

### Run the tests

Following command runs unit tests in PhantomJS, Node and WebWorker

    $ npm test

##### Testing in development

Sinon.JS uses [Mocha](https://mochajs.org/), please read those docs if you're unfamiliar with it.

If you're doing more than a one line edit, you'll want to have finer control and less restarting of the Mocha

To start tests in dev mode run

    $ npm run test-dev

Dev mode features:
 * [watching related files](https://mochajs.org/#w---watch) to restart tests once changes are made
 * using [Min reporter](https://mochajs.org/#min), which cleans the console each time tests run, so test results are always on top

Note that in dev mode tests run only in Node. Before creating your PR please ensure tests are passing in Phantom and WebWorker as well. To check this please use [Run the tests](#run-the-tests) instructions.

### Compiling a built version

Build requires Node. Under the hood [Browserify](http://browserify.org/) is used.

To build simply run

    $ node build.js


[ES5]: http://www.ecma-international.org/ecma-262/5.1/
[ES6]: http://www.ecma-international.org/ecma-262/6.0/
