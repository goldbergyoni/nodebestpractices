## just-extend

Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.  
Guilt-free utilities for every occasion.

[Try it now](http://anguscroll.com/just/just-extend)

```js
import extend from 'just-extend';

var obj = {a: 3, b: 5};
extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
obj; // {a: 4, b: 5, c: 8}

var obj = {a: 3, b: 5};
extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
obj; // {a: 3, b: 5}

var arr = [1, 2, 3];
var obj = {a: 3, b: 5};
extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
arr.push(4);
obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

var arr = [1, 2, 3];
var obj = {a: 3, b: 5};
extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
arr.push(4);
obj; // {a: 3, b: 5, c: [1, 2, 3]}

extend({a: 4, b: 5}); // {a: 4, b: 5}
extend({a: 4, b: 5}, 3); {a: 4, b: 5}
extend({a: 4, b: 5}, true); {a: 4, b: 5}
extend('hello', {a: 4, b: 5}); // throws
extend(3, {a: 4, b: 5}); // throws
```
