```javascript
var assert = require('assert')
var ranges = require('spdx-ranges')

assert(
  Array.isArray(ranges),
  'module is an Array')

assert(
  ranges.length > 0,
  'the Array has elements')

assert(
  ranges.every(function(e) {
    return Array.isArray(e) }),
  'each Array element is an Array')

assert(
  ranges.every(function(range) {
    return range.every(function(identifier) {
	  return typeof identifier === 'string' }) }),
  'elements of Array-elements are strings')
```
