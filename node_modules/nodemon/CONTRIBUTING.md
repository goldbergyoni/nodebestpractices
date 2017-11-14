# Contributing

## Commit messages

Commit messages must follow the [Angular-style](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format) commit format (but excluding the scope).

i.e:

```text
fix: minified scripts being removed

Also includes tests
```

This will allow for the automatic changelog to generate correctly.

## Code standards

Ensure that your code adheres to the included `.jshintrc` and `.jscsrc` configs.

## Sending pull requests

- new command line options are generally discouraged unless there's a *really* good reason
- add tests for newly added code (and try to mirror directory and file structure if possible)
- spell check
- PRs will not be code reviewed unless all tests are passing

*Important:* when fixing a bug, please commit a **failing test** first so that Travis CI (or I can) can show the code failing. Once that commit is in place, then commit the bug fix, so that we can test *before* and *after*.

Remember that you're developing for multiple platforms and versions of node, so if the tests pass on your Mac or Linux or Windows machine, it *may* not pass elsewhere. I personally have Mac and Linux coverage, I need help with Windows tests.

## Issues

- Please include the output from `nodemon --dump` for diagnosis
- If there's a script that nodemon is having trouble with or is causing nodemon to throw exceptions, please include it in your filed issue to allow me to replicate the issue.