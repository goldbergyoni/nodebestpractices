# js-string-escape

[![Build Status](https://travis-ci.org/joliss/js-string-escape.png?branch=master)](https://travis-ci.org/joliss/js-string-escape)

Escape any string to be a valid JavaScript string literal between double
quotes or single quotes.

## Installation

```
npm install js-string-escape
```

## Example

If you need to generate JavaScript output, this library will help you safely
put arbitrary data in JavaScript strings:

```js
jsStringEscape = require('js-string-escape')

console.log('"' + jsStringEscape('Quotes (\", \'), newlines (\n), etc.') + '"')
// => "Quotes (\", \'), newlines (\n), etc."
```

In other words, given any string `s`, the following invariants hold:

```js
eval('"' + jsStringEscape(s) + '"') === s
eval("'" + jsStringEscape(s) + "'") === s
```

These `eval` expressions are safe with untrusted strings `s`.

Non-strings will be cast to strings.

## Compliance

This library has been checked against [ECMAScript
5.1](http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4) and tested
against all Unicode code points.

Note that the returned string is not necessarily valid JSON, since JSON
disallows control characters, and `\'` is illegal in JSON.
