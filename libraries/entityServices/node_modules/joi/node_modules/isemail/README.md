# isemail

Node email address validation library

[![Build Status](https://travis-ci.org/hapijs/isemail.png)](https://travis-ci.org/hapijs/isemail)<a href="#footnote-1"><sup>&#91;1&#93;</sup></a>

Lead Maintainer: [Eli Skeggs][skeggse]

This library is a port of the PHP `is_email` function by Dominic Sayers.

Install
=======

```sh
$ npm install isemail
```

Test
====

The tests were pulled from `is_email`'s extensive [test suite][tests] on October 15, 2013. Many thanks to the contributors! Additional tests have been added to increase code coverage and verify edge-cases.

Run any of the following.

```sh
$ lab
$ npm test
$ make test
```

_remember to_ `npm install` to get the development dependencies!

API
===

validate(email, [options], [callback])
--------------------------------------

Determines whether the `email` is valid or not, for various definitions thereof. Optionally accepts an `options` object and a `callback` function. Options may include `errorLevel`. The `callback` function will always be called if specified, and the result of the operation supplied as the only parameter to the callback function. `validate()` will synchronously return the result of the operation if no callback is provided.

Use `errorLevel` to specify the type of result for `validate()`. Passing a `false` literal will result in a true or false boolean indicating whether the email address is sufficiently defined for use in sending an email. Passing a `true` literal will result in a more granular numeric status, with zero being a perfectly valid email address. Passing a number will return `0` if the numeric status is below the `errorLevel` and the numeric status otherwise.

The `tldBlacklist` option can be either an object lookup table or an array of invalid top-level domains. If the email address has a top-level domain that is in the whitelist, the email will be marked as invalid.

The `tldWhitelist` option can be either an object lookup table or an array of valid top-level domains. If the email address has a top-level domain that is not in the whitelist, the email will be marked as invalid.

Only one of `tldBlacklist` and `tldWhitelist` will be consulted for TLD validity.

The `minDomainAtoms` option is an optional positive integer that specifies the minimum number of domain atoms that must be included for the email address to be considered valid. Be careful with the option, as some top-level domains, like `io`, directly support email addresses.

### Examples

```js
$ node
> var Isemail = require('isemail');
undefined
> var log = console.log.bind(console, 'result');
undefined
> Isemail.validate('test@iana.org');
true
> Isemail.validate('test@iana.org', log);
result true
true
> Isemail.validate('test@iana.org');
undefined
> Isemail.validate('test@iana.org', {errorLevel: true});
0
> Isemail.validate('test@iana.org', {errorLevel: true}, log);
result 0
0
> Isemail.validate('test@e.com');
true
> Isemail.validate('test@e.com', {errorLevel: true}, log);
undefined
result 6
> Isemail.validate('test@e.com', {errorLevel: 7}, log);
undefined
result 0
> Isemail.validate('test@e.com', {errorLevel: 6}, log);
undefined
result 6
```

<sup name="footnote-1">&#91;1&#93;</sup>: if this badge indicates the build is passing, then isemail has 100% code coverage.

[skeggse]: https://github.com/skeggse "Eli Skeggs"
[tests]: http://isemail.info/_system/is_email/test/?all‎ "is_email test suite"
