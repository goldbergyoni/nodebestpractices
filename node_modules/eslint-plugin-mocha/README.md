[![NPM Version](https://img.shields.io/npm/v/eslint-plugin-mocha.svg?style=flat)](https://www.npmjs.org/package/eslint-plugin-mocha)
[![Build Status](https://img.shields.io/travis/lo1tuma/eslint-plugin-mocha/master.svg?style=flat)](https://travis-ci.org/lo1tuma/eslint-plugin-mocha)
[![Coverage Status](https://img.shields.io/coveralls/lo1tuma/eslint-plugin-mocha/master.svg?style=flat)](https://coveralls.io/r/lo1tuma/eslint-plugin-mocha)
[![Peer Dependencies](http://img.shields.io/david/peer/lo1tuma/eslint-plugin-mocha.svg?style=flat)](https://david-dm.org/lo1tuma/eslint-plugin-mocha#info=peerDependencies&view=table)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-plugin-mocha.svg?style=flat)](https://www.npmjs.org/package/eslint-plugin-mocha)

# eslint-plugin-mocha

ESLint rules for [mocha](http://mochajs.org/).

## Install and configure

This plugin requires ESLint `2.0.0` or later.

`npm install --save-dev eslint-plugin-mocha`

Then add a reference to this plugin and selected rules in your eslint config:

```json
{
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error"
  }
}
```
See [Configuring Eslint](http://eslint.org/docs/user-guide/configuring) on [eslint.org](http://eslint.org) for more info.

## Rules documentation

The documentation of the rules can be found [here](docs/rules).

## When Not To Use It

If you are not using mocha you should not use this plugin.
