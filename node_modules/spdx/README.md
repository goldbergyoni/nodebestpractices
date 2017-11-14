# Use Other Packages

**Development on spdx.js has moved to separate, smaller packages.**

[spdx-expression-parse][parse] and [spdx-satisfies][satisfies] are
direct successors to spdx.js.

You may also be interested in [spdx-compare][compare],
[spdx-correct][correct], and [other packages on the npm public
registry][search]. [kemitchell][kemitchell] writes a lot of them.

[compare]: https://www.npmjs.com/packages/spdx-compare
[correct]: https://www.npmjs.com/packages/spdx-correct
[kemitchell]: https://www.npmjs.com/~kemitchell
[parse]: https://www.npmjs.com/packages/spdx-expression-parse
[satisfies]: https://www.npmjs.com/packages/spdx-satisfies
[search]: https://www.npmjs.com/search?q=spdx

---

```javascript
var spdx = require('spdx')
```

# Simple License Expressions

```javascript
var assert = require('assert')
assert(spdx.valid('Invalid-Identifier') === null)
assert(spdx.valid('GPL-2.0'))
assert(spdx.valid('GPL-2.0+'))
assert(spdx.valid('LicenseRef-23'))
assert(spdx.valid('LicenseRef-MIT-Style-1'))
assert(spdx.valid('DocumentRef-spdx-tool-1.2:LicenseRef-MIT-Style-2'))
```

# Composite License Expressions

## Disjunctive `OR` Operator
```javascript
assert(spdx.valid('(LGPL-2.1 OR MIT)'))
assert(spdx.valid('(LGPL-2.1 OR MIT OR BSD-3-Clause)'))
```

## Conjunctive `AND` Operator
```javascript
assert(spdx.valid('(LGPL-2.1 AND MIT)'))
assert(spdx.valid('(LGPL-2.1 AND MIT AND BSD-2-Clause)'))
```

## Exception `WITH` Operator

```javascript
assert(spdx.valid('(GPL-2.0+ WITH Bison-exception-2.2)'))
```

## Order of Precedence and Parentheses

```javascript
assert.deepEqual(
  spdx.parse('(LGPL-2.1 OR BSD-3-Clause AND MIT)'),
  { left: { license: 'LGPL-2.1' },
    conjunction: 'or',
    right: {
      left: { license: 'BSD-3-Clause' },
      conjunction: 'and',
      right: { license: 'MIT' } } })

assert.deepEqual(
  spdx.parse('(MIT AND (LGPL-2.1+ AND BSD-3-Clause))'),
  { left: { license: 'MIT' },
    conjunction: 'and',
    right: {
      left: {
        license: 'LGPL-2.1',
        plus: true },
      conjunction: 'and',
      right: { license: 'BSD-3-Clause' } } })
```

# Strict Whitespace Rules

```javascript
assert(!spdx.valid('MIT '))
assert(!spdx.valid(' MIT'))
assert(!spdx.valid('MIT  AND  BSD-3-Clause'))
```

# Identifier Lists

```javascript
assert(Array.isArray(spdx.licenses))
assert(spdx.licenses.indexOf('ISC') > -1)
assert(spdx.licenses.indexOf('Apache-1.7') < 0)
assert(spdx.licenses.every(function(element) {
  return typeof element === 'string' }))

assert(Array.isArray(spdx.exceptions))
assert(spdx.exceptions.indexOf('GCC-exception-3.1') > -1)
assert(spdx.exceptions.every(function(element) {
  return typeof element === 'string' }))
```

# The Specification

```javascript
assert.equal(spdx.specificationVersion, '2.0')
```

[The Software Package Data Exchange (SPDX) specification](http://spdx.org) is the work of the [Linux Foundation](http://www.linuxfoundation.org) and its contributors, and is licensed under the terms of [the Creative Commons Attribution License 3.0 Unported (SPDX: "CC-BY-3.0")](http://spdx.org/licenses/CC-BY-3.0). "SPDX" is a United States federally registered trademark of the Linux Foundation.
