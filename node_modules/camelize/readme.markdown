# camelize

recursively transform key strings to camel-case

[![build status](https://secure.travis-ci.org/substack/camelize.png)](http://travis-ci.org/substack/camelize)

[![browser support](https://ci.testling.com/substack/camelize.png)](http://ci.testling.com/substack/camelize)

# example

``` js
var camelize = require('camelize');
var obj = {
    fee_fie_foe: 'fum',
    beep_boop: [
        { 'abc.xyz': 'mno' },
        { 'foo-bar': 'baz' }
    ]
};
var res = camelize(obj);
console.log(JSON.stringify(res, null, 2));
```

output:

```
{
  "feeFieFoe": "fum",
  "beepBoop": [
    {
      "abcXyz": "mno"
    },
    {
      "fooBar": "baz"
    }
  ]
}
```

# methods

``` js
var camelize = require('camelize')
```

## camelize(obj)

Convert the key strings in `obj` to camel-case recursively.

# install

With [npm](https://npmjs.org) do:

```
npm install camelize
```

To use in the browser, use [browserify](http://browserify.org).

# license

MIT
