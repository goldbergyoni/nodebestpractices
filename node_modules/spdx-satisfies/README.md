```javascript
var assert = require('assert')
var satisfies = require('spdx-satisfies')

assert(satisfies('MIT', 'MIT'))

assert(satisfies('MIT', '(ISC OR MIT)'))
assert(satisfies('Zlib', '(ISC OR (MIT OR Zlib))'))
assert(!satisfies('GPL-3.0', '(ISC OR MIT)'))

assert(satisfies('GPL-2.0', 'GPL-2.0+'))
assert(satisfies('GPL-3.0', 'GPL-2.0+'))
assert(!satisfies('GPL-1.0', 'GPL-2.0+'))

assert(!satisfies(
  'GPL-2.0',
  'GPL-2.0+ WITH Bison-exception-2.2'
))

assert(satisfies(
  'GPL-3.0 WITH Bison-exception-2.2',
  'GPL-2.0+ WITH Bison-exception-2.2'
))

assert(satisfies('(MIT OR GPL-2.0)', '(ISC OR MIT)'))
assert(satisfies('(MIT AND GPL-2.0)', '(MIT OR GPL-2.0)'))
assert(!satisfies('(MIT AND GPL-2.0)', '(ISC OR GPL-2.0)'))
```
