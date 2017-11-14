# Read Me

The files in this directory have been auto-generated from the `gulpfile`.

These file exist in order to allow users to require the `faker` library using a specific locale ( instead of the default behavior or loading all all locales ).

Example:

``` js
var faker = require('../locale/en');
console.log(faker.name.findName());
```