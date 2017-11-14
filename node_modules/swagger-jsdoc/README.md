# swagger-jsdoc

Document your code and keep a live and reusable OpenAPI (Swagger) specification. This specification can be the core of your API-driven project: generate
documentation, servers, clients, tests and much more based on the rich [OpenAPI ecosystem of tools](http://swagger.io/).

[![npm Version](https://img.shields.io/npm/v/swagger-jsdoc.svg)](https://www.npmjs.com/package/swagger-jsdoc)
[![npm Downloads](https://img.shields.io/npm/dm/swagger-jsdoc.svg)](https://www.npmjs.com/package/swagger-jsdoc)

[![Circle CI](https://img.shields.io/circleci/project/Surnet/swagger-jsdoc/master.svg)](https://circleci.com/gh/Surnet/swagger-jsdoc)
[![Dependency Status](https://img.shields.io/gemnasium/Surnet/swagger-jsdoc.svg)](https://gemnasium.com/Surnet/swagger-jsdoc)
[![Documentation Status](http://inch-ci.org/github/Surnet/swagger-jsdoc.svg?branch=master&style=flat)](http://inch-ci.org/github/Surnet/swagger-jsdoc)
[![Known Vulnerabilities](https://snyk.io/test/npm/swagger-jsdoc/badge.svg)](https://snyk.io/test/npm/swagger-jsdoc)

## Goals

**swagger-jsdoc** enables you to integrate [Swagger](http://swagger.io)
using [`JSDoc`](http://usejsdoc.org/) comments in your code. Just add `@swagger` on top of your DocBlock and declare the meaning of your code in `yaml` complying to the OpenAPI specification.

`swagger-jsdoc` will parse your documentation from
your actual living code and output an OpenAPI specification to integrate any server and client
technology as long as both sides comply with the specification.

Thus, the `swagger-jsdoc` project assumes that you want document your existing working code in a way to "give life" to it, generating a specification which can then be feeded into other Swagger tools, and not the vice-versa.

If you prefer to write the OpenAPI specification first and separately, you might check other projects facilitating this, such as
-  [swagger-editor](http://swagger.io/swagger-editor/)
- [swagger-node](https://github.com/swagger-api/swagger-node)

## Supported versions
* [OpenAPI 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) (previously known as Swagger)

## Install

```bash
$ npm install swagger-jsdoc --save
```

Or using [`yarn`](https://yarnpkg.com/en/)

```bash
$ yarn add swagger-jsdoc
```

### Quick Start

[Get started](./docs/GETTING-STARTED.md) by documenting your code.

Note that `swagger-jsdoc` uses [node glob](https://github.com/isaacs/node-glob) module in the background when taking your files. This means that you can use patterns such as `*.js` to select all javascript files or `**/*.js` to select all javascript files in sub-folders recursively.

### Example app

There is an example app in the example subdirectory.
To use it you can use the following commands:

```bash
$ git clone https://github.com/Surnet/swagger-jsdoc.git
$ cd swagger-jsdoc
$ npm install
$ npm start
```

The swagger spec will be served at http://localhost:3000/api-docs.json


### CLI

You can also use the tool via [command line interface](./docs/CLI.md). It supports selecting multiple files, recursive subdirectories and watch task for continuous listening of changes in your code.

### Contributing

- Fork this project and clone locally
- Branch for each separate feature
- Write detailed commit messages, comment unclear code blocks and update unit tests
- Push to your own repository and create a new PR to merge back into this repository

Note: If there are additions to the swagger definition object ensure that the output object keys comply with the swagger specification.  If there are keys that do not comply add them to the `excludedSwaggerProperties` list in `lib/swagger-helpers.js`.
