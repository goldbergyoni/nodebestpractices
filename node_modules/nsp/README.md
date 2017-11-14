# nsp [![Build Status](https://drone.andyet.com/api/badges/nodesecurity/nsp/status.svg)](https://drone.andyet.com/nodesecurity/nsp)

## About Node Security

Node Security helps you keep your node applications secure. With Node Security you can:

* Make use of the CLI tool to help identify [known vulnerabilities](https://nodesecurity.io/advisories/) in your own projects.
* Get access to Node Security news and information from the ^lift team.

## Installing the CLI (nsp)

* To install the Node Security command line tool: `npm install -g nsp`
* Then run `nsp --help` to find out more.

## Filter and threshold

The results of the `check` command may be altered based on either a `filter` or `threshold`.

- `--filter`: hide all vulnerabilities below the given CVSS score
- `--threshold`: display all vulnerabilities, but only exit with an error code if at least one finding has a CVSS score above the given value

## Exit codes

The CLI tool exits with the following codes to signify state

- 0: command ran with success
- 1: command run was 'check', was successful, but returned vulnerabilities outside of the threshold or filter
- 2: command received a server error (5xx)
- 3: unknown error
- 4: there was an error in the output reporter

## Output Reporters

You can adjust how the client outputs findings by specifying one of the following built in reporters:

- table
- summary
- json
- codeclimate
- minimal

Example: `nsp check --reporter summary`

Additionally, you can use [third-party reporter](https://www.npmjs.com/search?q=nsp+reporter). The packages of custom reporters must adhere to the naming scheme `nsp-reporter-<name>` and can then be referenced by that name:
```bash
$ npm install -g nsp nsp-reporter-checkstyle
$ nsp check --reporter checkstyle
```
Please note that in case of naming conflicts built-in reporters (as listed above) take precedence. For instance, `nsp-reporter-json` would never be used since nsp ships with a `json` formatter.

### Creating a reporter

A custom reporter should be a module named with the prefix `nsp-reporter-`, it must export two functions at minimum `error` and `success`.

The `error` function accepts two arguments, `(err, args)` where `err` is an `Error` object representing the failure that occurred during whatever command may have been run, and `args` is an object representing all of the
command line arguments that were passed to the CLI at run time.

The `success` function also accepts two arguments `(result, args)` where `args` is the same CLI arguments and `result` is an object with these three properties:

- `message`: a string summary of the command's result
- `data`: the actual result of the command, the shape of this parameter varies for each command
- `meta`: detailed information from behind the scenes (response headers, etc)

In addition to the top level `success` and `error` functions, specific handlers may be specified for each command that the CLI tool handles. For example

```js
exports.error = function (err, args) {
  // run for all failures of any command
};

exports.success = function (result, args) {
  // run for success of any command _except_ for 'check'
};

exports.check = {};
exports.check.success = function (result, args) {
  // run for success of _only_ the 'check' command
};
```

Any of these functions may return a Promise if they perform any asynchronous actions to guarantee that they complete before the process exits. If the returned Promise rejects, the `error` handler will also be called with the
result of the rejected Promise.

## Input Preprocessors

You may also alter a project's `package.json`, `npm-shrinkwrap.json` and/or `package-lock.json` by using an input preprocessor.

The default, built in, preprocessor simply reads these files and returns their JSON parsed content as-is. You can use a third party preprocessor like so: `nsp check --preprocessor example` which, much like third party reporters
would attempt to require the module `nsp-preprocessor-example`. If the given preprocessor is not found, the default will be used.

### Creating a preprocessor

A custom preprocessor should be a module named with the prefix `nsp-preprocessor-`. It must export an object where each property is the name of a command executable by the `nsp` script. The value of each of these properties must
be a function that accepts a single argument `args` which represents the command line arguments passed at execution time, it must return a promise modifying or extending the `args` object.


Example:
```js
module.exports = {
  check: function (args) {

    // do something to read or generate package.json, npm-shrinkwrap.json and package-lock.json
    // the path to the project can be found as `args.path`
    // `pkg` must be the JSON parsed contents of package.json
    // `shrinkwrap` must be the JSON parsed contents of npm-shrinkwrap.json, if it exists. this may be left out.
    // `packagelock` must be the JSON parsed contents of package-lock.json, if it exists. this may also be left out.
    return Object.assign(args, { pkg, shrinkwrap, packagelock });
  }
};
```

## Exceptions

The Node Security CLI supports adding exceptions. These are advisories that you have evaluated and personally deemed unimportant for your project.

There are two ways to leverage this capability, online or offline. To use online exceptions, register your project on [our online portal](https://nodesecurity.io). From there you can manage your exceptions from a central location.

In order to inform the CLI tool that it should use these settings, you'll have to create a settings file (and login if your project is private). You'll need both the organization name and the UUID for your project, these can be
retrieved from the URL from our portal. For example, if your project is [hapi](https://github.com/hapijs/hapi) and your project URL is https://nodesecurity.io/orgs/hapi/projects/2a6e5642-b7a1-4b93-b8fb-21c1a5043f42 then your
organization name is `hapi` and your project UUID is `2a6e5642-b7a1-4b93-b8fb-21c1a5043f42`.

Using that information, create a `.nsprc` file with the following content:

```js
{
  "org": "hapi",
  "integration": "2a6e5642-b7a1-4b93-b8fb-21c1a5043f42"
}
```

When you next run `nsp check` your exceptions will be retrieved from online. If your project is a private one, you will additionally need to run `npm login` which will create another `.nsprc` file in your home directory with an
authentication token that will allow the CLI tool to look up your settings.

For offline exceptions, create a `.nsprc` file in the root of your project with content like the following:

```js
{
  "exceptions": ["https://nodesecurity.io/advisories/12"]
}
```

The URLs used in the array should match the advisory link that the CLI reports. With this in place, you will no longer receive warnings about any advisories in the exceptions array.

Be careful using this feature. If you add code later that is impacted by an excluded advisory, Node Security has no way of knowing. Keep a careful eye on your exceptions.

`.nsprc` is read using [rc](https://github.com/dominictarr/rc), so it supports comments using [json-strip-comments](https://github.com/sindresorhus/strip-json-comments).

## Proxy Support

The Node Security CLI has proxy support by using [https-proxy-agent](https://www.npmjs.com/package/https-proxy-agent).

To configure the proxy set the proxy key in your `.nsprc` file. This can be put in the root of your project or in your home directory.

```js
{
    "proxy": "http://127.0.0.1:8080"
}
```

The CLI tool will also automatically detect your proxy if it is exported to the environment as `HTTP_PROXY` or `HTTPS_PROXY`.

## Offline mode

Run `nsp gather` to save `advisories.json` locally, then `nsp check --offline` or `nsp check --offline --advisories /path/to/advisories.json`

## Code Climate Node Security Engine

`codeclimate-nodesecurity` is a Code Climate engine that wraps the Node Security CLI. You can run it on your command line using the Code Climate CLI, or Code Climate's <a href="http://codeclimate.com">hosted analysis platform</a>.

Note that this engine *only* works if your code has a `npm-shrinkwrap.json` or `package-lock.json` file committed.

### Testing

First, build this repo with docker

```
git clone git@github.com:nodesecurity/nsp
cd nsp
docker build -t codeclimate/codeclimate-nodesecurity .
```

Install the codeclimate CLI

```
brew tap codeclimate/formulae
brew install codeclimate
```

Go into your project's directory and enable codeclimate

```
codeclimate init
```

Then edit `.codeclimate.yml` to add the engine like so

```yaml
---
engines:
  nodesecurity:
    enabled: true
exclude_paths: []
```

And finally run it

```
codeclimate analyze --dev
```

## Suggesting Changes to Advisories
Should you come across data in an advisory that you feel is wrong or is a false positive please let us know at report@nodesecurity.io. We endeavor to make this process better in the future, however this is the best place to resolve these issues at the present.

## Contact

Node Security (+) is brought to you by [^lift security](https://liftsecurity.io).

## License

    Copyright (c) 2016 by ^Lift Security

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

    See the License for the specific language governing permissions and
    limitations under the License.

Note: the above text describes the license for the code located in this repository *only*. Usage of this tool or the API this tool accesses implies acceptance of our [terms of service](https://nodesecurity.io/tos).
