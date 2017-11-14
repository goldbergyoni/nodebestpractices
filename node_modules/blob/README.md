Blob
====

A module that exports a constructor that uses window.Blob when available, and a BlobBuilder with any vendor prefix in other cases. If neither is available, it exports undefined.

Usage:

```javascript
var Blob = require('blob');
var b = new Blob(['hi', 'constructing', 'a', 'blob']);
```

## Licence
MIT
