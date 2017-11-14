JSON Schema $Ref Parser
============================
#### Parse, Resolve, and Dereference JSON Schema $ref pointers

[![Build Status](https://api.travis-ci.org/BigstickCarpet/json-schema-ref-parser.svg)](https://travis-ci.org/BigstickCarpet/json-schema-ref-parser)
[![Dependencies](https://david-dm.org/BigstickCarpet/json-schema-ref-parser.svg)](https://david-dm.org/BigstickCarpet/json-schema-ref-parser)
[![Coverage Status](https://coveralls.io/repos/BigstickCarpet/json-schema-ref-parser/badge.svg?branch=master&service=github)](https://coveralls.io/r/BigstickCarpet/json-schema-ref-parser)
[![Code Climate Score](https://codeclimate.com/github/BigstickCarpet/json-schema-ref-parser/badges/gpa.svg)](https://codeclimate.com/github/BigstickCarpet/json-schema-ref-parser)
[![Codacy Score](https://www.codacy.com/project/badge/d8abfe5e9a4044b89bd9f4b999d4a574)](https://www.codacy.com/public/jamesmessinger/json-schema-ref-parser)
[![Inline docs](http://inch-ci.org/github/BigstickCarpet/json-schema-ref-parser.svg?branch=master&style=shields)](http://inch-ci.org/github/BigstickCarpet/json-schema-ref-parser)

[![npm](http://img.shields.io/npm/v/json-schema-ref-parser.svg)](https://www.npmjs.com/package/json-schema-ref-parser)
[![Bower](http://img.shields.io/bower/v/json-schema-ref-parser.svg)](http://bower.io/)
[![License](https://img.shields.io/npm/l/json-schema-ref-parser.svg)](LICENSE)

[![Browser Compatibility](https://saucelabs.com/browser-matrix/json-schema-parser.svg)](https://saucelabs.com/u/json-schema-parser)


The Problem:
--------------------------
You've got a JSON Schema with `$ref` pointers to other files and/or URLs.  Maybe you know all the referenced files ahead of time.  Maybe you don't.  Maybe some are local files, and others are remote URLs.  Maybe they are a mix of JSON and YAML format.  Maybe some of the files contain cross-references to each other.

```javascript
{
  "definitions": {
    "person": {
      // references an external file
      "$ref": "schemas/people/Bruce-Wayne.json"
    },
    "place": {
      // references a sub-schema in an external file
      "$ref": "schemas/places.yaml#/definitions/Gotham-City"
    },
    "thing": {
      // references a URL
      "$ref": "http://wayne-enterprises.com/things/batmobile"
    },
    "color": {
      // references a value in an external file via an internal reference
      "$ref": "#/definitions/thing/properties/colors/black-as-the-night"
    }
  }
}
```


The Solution:
--------------------------
JSON Schema $Ref Parser is a full [JSON Reference](https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03) and [JSON Pointer](https://tools.ietf.org/html/rfc6901) implementation that crawls even the most complex [JSON Schemas](http://json-schema.org/latest/json-schema-core.html) and gives you simple, straightforward JavaScript objects.

- Use **JSON** or **YAML** schemas &mdash; or even a mix of both!
- Fully supports `$ref` pointers to external files and URLs
- Configurable caching of referenced files
- Can [bundle](docs/ref-parser.md#bundlepath-options-callback) multiple files into a single schema that only has _internal_ `$ref` pointers
- Can [dereference](docs/ref-parser.md#dereferencepath-options-callback) your schema, producing a plain-old JavaScript object that's easy to work with
- Supports [circular references](docs/README.md#circular-refs), nested references, back-references, and cross-references between files
- Maintains object reference equality &mdash; `$ref` pointers to the same value always resolve to the same object instance
- [Tested](http://bigstickcarpet.github.io/json-schema-ref-parser/tests/index.html) in Node, io.js, and all major web browsers on Windows, Mac, and Linux


Example
--------------------------

```javascript
$RefParser.dereference(mySchema, function(err, schema) {
  if (err) {
    console.error(err);
  }
  else {
    // `schema` is just a normal JavaScript object that contains your
    // entire JSON Schema - even if it spans multiple files
    console.log(schema.definitions.person.properties.firstName);
  }
});
```

Or use [Promises syntax](http://javascriptplayground.com/blog/2015/02/promises/) instead. The following example is the same as above:

```javascript
$RefParser.dereference(mySchema)
  .then(function(schema) {
    console.log(schema.definitions.person.properties.firstName);
  })
  .catch(function(err) {
    console.error(err);
  });
```

For more detailed examples, please see the [API Documentation](docs/README.md)


Installation
--------------------------
#### Node
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install json-schema-ref-parser
```

Then require it in your code:

```javascript
var $RefParser = require('json-schema-ref-parser');
```

#### Web Browsers
Install using [bower](http://bower.io/):

```bash
bower install json-schema-ref-parser
```

Then reference [`ref-parser.js`](dist/ref-parser.js) or [`ref-parser.min.js`](dist/ref-parser.min.js) in your HTML:

```html
<script src="bower_components/json-schema-ref-parser/dist/ref-parser.js"></script>
```

Or, if you're using AMD (Require.js), then import it into your module:

```javascript
define(["ref-parser"], function($RefParser) { /* your module's code */ })
```


API Documentation
--------------------------
Full API documentation is available [right here](docs/README.md)


Contributing
--------------------------
I welcome any contributions, enhancements, and bug-fixes.  [File an issue](https://github.com/BigstickCarpet/json-schema-ref-parser/issues) on GitHub and [submit a pull request](https://github.com/BigstickCarpet/json-schema-ref-parser/pulls).

#### Building/Testing
To build/test the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/bigstickcarpet/json-schema-ref-parser.git`

2. __Install dependencies__<br>
`npm install`

3. __Run the build script__<br>
`npm run build`

4. __Run the unit tests__<br>
`npm run mocha` (test in Node)<br>
`npm run karma` (test in web browsers)<br>
`npm test` (test in Node and browsers, and report code coverage)

5. __Start the local web server__<br>
`npm start` (then browse to [http://localhost:8080/tests/index.html](http://bigstickcarpet.com/json-schema-ref-parser/tests/index.html))


License
--------------------------
JSON Schema $Ref Parser is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.
