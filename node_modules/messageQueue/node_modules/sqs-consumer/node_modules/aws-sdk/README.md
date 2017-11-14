# AWS SDK for JavaScript

[![NPM](https://nodei.co/npm/aws-sdk.svg?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aws-sdk/)

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/aws/aws-sdk-js)

[![Version](https://badge.fury.io/js/aws-sdk.svg)](http://badge.fury.io/js/aws-sdk) [![Build Status](https://travis-ci.org/aws/aws-sdk-js.svg?branch=master)](https://travis-ci.org/aws/aws-sdk-js) [![Coverage Status](https://coveralls.io/repos/aws/aws-sdk-js/badge.svg?branch=master)](https://coveralls.io/r/aws/aws-sdk-js?branch=master)

The official AWS SDK for JavaScript, available for browsers and mobile devices,
or Node.js backends

For release notes, see the [CHANGELOG](CHANGELOG.md). Prior to v2.4.8, release notes can be found at https://aws.amazon.com/releasenotes/?tag=releasenotes%23keywords%23javascript

<p class="note">
If you are upgrading from 1.x to 2.0 of the SDK, please see
the {file:UPGRADING.md} notes for information on how to migrate existing code
to work with the new major version.
</p>

## Installing

### In the Browser

To use the SDK in the browser, simply add the following script tag to your
HTML pages:

    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.141.0.min.js"></script>

You can also build a custom browser SDK with your specified set of AWS services.
This can allow you to reduce the SDK's size, specify different API versions of
services, or use AWS services that don't currently support CORS if you are
working in an environment that does not enforce CORS. To get started:

http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/building-sdk-for-browsers.html

The AWS SDK is also compatible with [browserify](http://browserify.org).

### In Node.js

The preferred way to install the AWS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install aws-sdk
```

### In React Native
To use the SDK in a react native project, first install the SDK using npm:

```sh
npm install aws-sdk
```

Then within your application, you can reference the react native compatible version of the SDK with the following:

```javascript
var AWS = require('aws-sdk/dist/aws-sdk-react-native');
```

### Using Bower

You can also use [Bower](http://bower.io) to install the SDK by typing the
following into a terminal window:

```sh
bower install aws-sdk-js
```

## Usage and Getting Started

You can find a getting started guide at:

http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide

## Usage with TypeScript
The AWS SDK for JavaScript bundles TypeScript definition files for use in TypeScript projects and to support tools that can read `.d.ts` files.
Our goal is to keep these TypeScript definition files updated with each release for any public api.

### Pre-requisites
Before you can begin using these TypeScript definitions with your project, you need to make sure your project meets a few of these requirements:

 * Use TypeScript v2.x
 * Includes the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:

    ```sh
    npm install --save-dev @types/node
    ```

 * Your `tsconfig.json` or `jsconfig.json` includes `'dom'` and `'es2015.promise'` under `compilerOptions.lib`.
 See [tsconfig.json](./ts/tsconfig.json) for an example.

### In the Browser
To use the TypeScript definition files with the global `AWS` object in a front-end project, add the following line to the top of your JavaScript file:

```javascript
/// <reference types="aws-sdk" />
```

This will provide support for the global `AWS` object.

### In Node.js
To use the TypeScript definition files within a Node.js project, simply import `aws-sdk` as you normally would.

In a TypeScript file:

```javascript
// import entire SDK
import AWS = require('aws-sdk');
// import AWS object without services
import AWS = require('aws-sdk/global');
// import individual service
import S3 = require('aws-sdk/clients/s3');
```

In a JavaScript file:

```javascript
// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');
```

### With Angular
Due to the SDK's reliance on node.js typings, you may encounter compilation 
[issues](https://github.com/aws/aws-sdk-js/issues/1271) when using the
typings provided by the SDK in an Angular project created using the Angular CLI.

To resolve these issues, either add `"types": ["node"]` to the project's `tsconfig.app.json`
file, or remove the `"types"` field entirely.

### Known Limitations
There are a few known limitations with the bundled TypeScript definitions at this time:

 * Service client typings reflect the latest `apiVersion`, regardless of which `apiVersion` is specified when creating a client.
 * Service-bound parameters use the `any` type.

## Getting Help
Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

 * Ask a question on [StackOverflow](https://stackoverflow.com/) and tag it with `aws-sdk-js`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js?source=orgpage)
 * Open a support ticket with [AWS Support](https://console.aws.amazon.com/support/home#/)
 * If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js/issues/new)

## Opening Issues
If you encounter a bug with the AWS SDK for JavaScript we would like to hear
about it. Search the [existing issues](https://github.com/aws/aws-sdk-js/issues)
and try to make sure your problem doesn’t already exist before opening a new
issue. It’s helpful if you include the version of the SDK, Node.js or browser
environment and OS you’re using. Please include a stack trace and reduced repro
case when appropriate, too.

The GitHub issues are intended for bug reports and feature requests. For help
and questions with using the AWS SDK for JavaScript please make use of the
resources listed in the [Getting Help](https://github.com/aws/aws-sdk-js#getting-help)
section. There are limited resources available for handling issues and by
keeping the list of open issues lean we can respond in a timely manner.

## Supported Services

Please see [SERVICES.md](./SERVICES.md) for a list of supported services.

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
