# dasherize

recursively transform key strings to dash-case

[![build status](https://secure.travis-ci.org/shahata/dasherize.png)](http://travis-ci.org/shahata/dasherize)

[![browser support](https://ci.testling.com/shahata/dasherize.png)](http://ci.testling.com/shahata/dasherize)

# example

``` js
var dasherize = require('dasherize');
var obj = {
  feeFieFoe: 'fum',
  beepBoop: [
    { 'abcXyz': 'mno' },
    { 'fooBar': 'baz' }
  ]
};
var res = dasherize(obj);
console.log(JSON.stringify(res, null, 2));
```

output:

```
{
  "fee-fie-foe": "fum",
  "beep-boop": [
    {
      "abc-xyz": "mno"
    },
    {
      "foo-bar": "baz"
    }
  ]
}
```

# methods

``` js
var dasherize = require('dasherize')
```

## dasherize(obj)

Convert the key strings in `obj` to dash-case recursively.

## dasherize(str)

Convert the string to dash-case.

# install

With [npm](https://npmjs.org) do:

```
npm install dasherize
```

To use in the browser, use [browserify](http://browserify.org).

# license

derives directly from [camelize](https://github.com/substack/camelize)

MIT
