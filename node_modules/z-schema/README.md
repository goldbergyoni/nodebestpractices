# z-schema validator

[![npm version](https://badge.fury.io/js/z-schema.svg)](http://badge.fury.io/js/z-schema)
[![bower version](https://badge.fury.io/bo/z-schema.svg)](http://badge.fury.io/bo/z-schema)
[![build status](https://travis-ci.org/zaggino/z-schema.svg?branch=master)](https://travis-ci.org/zaggino/z-schema)
[![coverage status](https://coveralls.io/repos/zaggino/z-schema/badge.svg)](https://coveralls.io/r/zaggino/z-schema)

[![Greenkeeper badge](https://badges.greenkeeper.io/zaggino/z-schema.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/zaggino/z-schema/status.svg)](https://david-dm.org/zaggino/z-schema)
[![devDependencies Status](https://david-dm.org/zaggino/z-schema/dev-status.svg)](https://david-dm.org/zaggino/z-schema?type=dev)
[![optionalDependencies Status](https://david-dm.org/zaggino/z-schema/optional-status.svg)](https://david-dm.org/zaggino/z-schema?type=optional)

[![NPM](https://nodei.co/npm/z-schema.png?downloads=true&downloadRank=true)](https://nodei.co/npm/z-schema/)

- version 3.0 runs also in the browsers now, run tests yourself [here](https://rawgit.com/zaggino/z-schema/master/test/SpecRunner.html)

# Topics

- [Usage](#usage)
- [Features](#features)
- [Options](#options)
- [Benchmarks](#benchmarks)
- [Contributors](#contributors)

# Usage

Validator will try to perform sync validation when possible for speed, but supports async callbacks when they are necessary.

## Development:

These repository has several submodules and should be cloned as follows:
>git clone **--recursive** https://github.com/zaggino/z-schema.git

## CLI:

```
npm install --global z-schema
z-schema --help
z-schema mySchema.json
z-schema mySchema.json myJson.json
z-schema --strictMode mySchema.json myJson.json
```

## NodeJS:

```javascript
var ZSchema = require("z-schema");
var options = ... // see below for possible option values
var validator = new ZSchema(options);
```

## Sync mode:

```javascript
var valid = validator.validate(json, schema);
// this will return a native error object with name and message
var error = validator.getLastError();
// this will return an array of validation errors encountered
var errors = validator.getLastErrors();
...
```

## Async mode:

```javascript
validator.validate(json, schema, function (err, valid) {
    ...
});
```

## Browser:

```html
<script type="text/javascript" src="../dist/ZSchema-browser-min.js"></script>
<script type="text/javascript">
	var validator = new ZSchema();
	var valid = validator.validate("string", { "type": "string" });
	console.log(valid);
</script>
```

## Remote references and schemas:

In case you have some remote references in your schemas, you have to download those schemas before using validator.
Otherwise you'll get ```UNRESOLVABLE_REFERENCE``` error when trying to compile a schema.

```javascript
var validator = new ZSchema();
var json = {};
var schema = { "$ref": "http://json-schema.org/draft-04/schema#" };

var valid = validator.validate(json, schema);
var errors = validator.getLastErrors();
// valid === false
// errors.length === 1
// errors[0].code === "UNRESOLVABLE_REFERENCE"

var requiredUrl = "http://json-schema.org/draft-04/schema";
request(requiredUrl, function (error, response, body) {

    validator.setRemoteReference(requiredUrl, JSON.parse(body));

    var valid = validator.validate(json, schema);
    var errors = validator.getLastErrors();
    // valid === true
    // errors === undefined

}
```

If you're able to load schemas synchronously, you can use `ZSchema.setSchemaReader` feature:

```javascript
ZSchema.setSchemaReader(function (uri) {
    var someFilename = path.resolve(__dirname, "..", "schemas", uri + ".json");
    return JSON.parse(fs.readFileSync(someFilename, "utf8"));
});
```

# Features

- [Validate against subschema](#validate-against-subschema)
- [Compile arrays of schemas and use references between them](#compile-arrays-of-schemas-and-use-references-between-them)
- [Register a custom format](#register-a-custom-format)
- [Automatic downloading of remote schemas](#automatic-downloading-of-remote-schemas)
- [Prefill default values to object using format](#prefill-default-values-to-object-using-format)
- [Define a custom timeout for all async operations](#asynctimeout)
- [Disallow validation of empty arrays as arrays](#noemptyarrays)
- [Disallow validation of empty strings as strings](#noemptystrings)
- [Disallow schemas that don't have a type specified](#notypeless)
- [Disallow schemas that contain unrecognized keywords and are not validated by parent schemas](#noextrakeywords)
- [Assume additionalItems/additionalProperties are defined in schemas as false](#assumeadditional)
- [Force additionalItems/additionalProperties to be defined in schemas](#forceadditional)
- [Force items to be defined in array type schemas](#forceitems)
- [Force minItems to be defined in array type schemas](#forceminitems)
- [Force maxItems to be defined in array type schemas](#forcemaxitems)
- [Force minLength to be defined in string type schemas](#forceminlength)
- [Force maxLength to be defined in string type schemas](#forcemaxlength)
- [Force properties or patternProperties to be defined in object type schemas](#forceproperties)
- [Ignore remote references to schemas that are not cached or resolvable](#ignoreunresolvablereferences)
- [Only allow strictly absolute URIs to be used in schemas](#stricturis)
- [Turn on z-schema strict mode](#strictmode)
- [Set validator to collect as many errors as possible](#breakonfirsterror)
- [Report paths in errors as arrays so they can be processed easier](#reportpathasarray)

## Validate against subschema

In case you don't want to split your schema into multiple schemas using reference for any reason, you can use option schemaPath when validating:

```javascript
var valid = validator.validate(cars, schema, { schemaPath: "definitions.car.definitions.cars" });
```

See more details in the [test](/test/spec/schemaPathSpec.js).

## Compile arrays of schemas and use references between them

You can use validator to compile an array of schemas that have references between them and then validate against one of those schemas:

```javascript
var schemas = [
    {
        id: "personDetails",
        type: "object",
        properties: {
            firstName: { type: "string" },
            lastName: { type: "string" }
        },
        required: ["firstName", "lastName"]
    },
    {
        id: "addressDetails",
        type: "object",
        properties: {
            street: { type: "string" },
            city: { type: "string" }
        },
        required: ["street", "city"]
    },
    {
        id: "personWithAddress",
        allOf: [
            { $ref: "personDetails" },
            { $ref: "addressDetails" }
        ]
    }
];

var data = {
    firstName: "Martin",
    lastName: "Zagora",
    street: "George St",
    city: "Sydney"
};

var validator = new ZSchema();

// compile & validate schemas first, z-schema will automatically handle array
var allSchemasValid = validator.validateSchema(schemas);
// allSchemasValid === true

// now validate our data against the last schema
var valid = validator.validate(data, schemas[2]);
// valid === true
```

## Register a custom format

You can register any format of your own. Your sync validator function should always respond with a boolean:

```javascript
ZSchema.registerFormat("xstring", function (str) {
    return str === "xxx";
});
```

Async format validators are also supported, they should accept two arguments, value and a callback to which they need to respond:

```javascript
ZSchema.registerFormat("xstring", function (str, callback) {
    setTimeout(function () {
        callback(str === "xxx");
    }, 1);
});
```
## Helper method to check the formats that have been registered
```javascript
var registeredFormats = ZSchema.getRegisteredFormats();
//registeredFormats will now contain an array of all formats that have been registered with z-schema
```
## Automatic downloading of remote schemas

Automatic downloading of remote schemas was removed from version ```3.x``` but is still possible with a bit of extra code,
see [this test](test/spec/AutomaticSchemaLoadingSpec.js) for more information on this.

## Prefill default values to object using format

Using format, you can pre-fill values of your choosing into the objects like this:

```javascript
ZSchema.registerFormat("fillHello", function (obj) {
    obj.hello = "world";
    return true;
});

var data = {};

var schema = {
    "type": "object",
    "format": "fillHello"
};

validator.validate(data, schema);
// data.hello === "world"
```

# Options

## asyncTimeout

Defines a time limit, which should be used when waiting for async tasks like async format validators to perform their validation,
before the validation fails with an ```ASYNC_TIMEOUT``` error.

```javascript
var validator = new ZSchema({
    asyncTimeout: 2000
});
```

## noEmptyArrays

When true, validator will assume that minimum count of items in any ```array``` is 1, except when ```minItems: 0``` is explicitly defined.

```javascript
var validator = new ZSchema({
    noEmptyArrays: true
});
```

## noEmptyStrings

When true, validator will assume that minimum length of any string to pass type ```string``` validation is 1, except when ```minLength: 0``` is explicitly defined.

```javascript
var validator = new ZSchema({
    noEmptyStrings: true
});
```

## noTypeless

When true, validator will fail validation for schemas that don't specify a ```type``` of object that they expect.

```javascript
var validator = new ZSchema({
    noTypeless: true
});
```

## noExtraKeywords

When true, validator will fail for schemas that use keywords not defined in JSON Schema specification and doesn't provide a parent schema in ```$schema``` property to validate the schema.

```javascript
var validator = new ZSchema({
    noExtraKeywords: true
});
```

## assumeAdditional

When true, validator assumes that additionalItems/additionalProperties are defined as false so you don't have to manually fix all your schemas.

```javascript
var validator = new ZSchema({
    assumeAdditional: true
});
```

When an array, validator assumes that additionalItems/additionalProperties are defined as false, but allows some properties to pass.

```javascript
var validator = new ZSchema({
    assumeAdditional: ["$ref"]
});
```

## forceAdditional

When true, validator doesn't validate schemas where additionalItems/additionalProperties should be defined to either true or false.

```javascript
var validator = new ZSchema({
    forceAdditional: true
});
```

## forceItems

When true, validator doesn't validate schemas where ```items``` are not defined for ```array``` type schemas.
This is to avoid passing anything through an array definition.

```javascript
var validator = new ZSchema({
    forceItems: true
});
```

## forceMinItems

When true, validator doesn't validate schemas where ```minItems``` is not defined for ```array``` type schemas.
This is to avoid passing zero-length arrays which application doesn't expect to handle.

```javascript
var validator = new ZSchema({
    forceMinItems: true
});
```

## forceMaxItems

When true, validator doesn't validate schemas where ```maxItems``` is not defined for ```array``` type schemas.
This is to avoid passing arrays with unlimited count of elements which application doesn't expect to handle.

```javascript
var validator = new ZSchema({
    forceMaxItems: true
});
```

## forceMinLength

When true, validator doesn't validate schemas where ```minLength``` is not defined for ```string``` type schemas.
This is to avoid passing zero-length strings which application doesn't expect to handle.

```javascript
var validator = new ZSchema({
    forceMinLength: true
});
```


## forceMaxLength

When true, validator doesn't validate schemas where ```maxLength``` is not defined for ```string``` type schemas.
This is to avoid passing extremly large strings which application doesn't expect to handle.

```javascript
var validator = new ZSchema({
    forceMaxLength: true
});
```

## forceProperties

When true, validator doesn't validate schemas where ```properties``` or ```patternProperties``` is not defined for ```object``` type schemas.
This is to avoid having objects with unexpected properties in application.

```javascript
var validator = new ZSchema({
    forceProperties: true
});
```

## ignoreUnresolvableReferences

When true, validator doesn't end with error when a remote reference is unreachable. **This setting is not recommended in production outside of testing.**

```javascript
var validator = new ZSchema({
    ignoreUnresolvableReferences: true
});
```

## strictUris

When true, all strings of format ```uri``` must be an absolute URIs and not only URI references. See more details in [this issue](https://github.com/zaggino/z-schema/issues/18).

```javascript
var validator = new ZSchema({
    strictUris: true
});
```

## strictMode

Strict mode of z-schema is currently equal to the following:

```javascript
if (this.options.strictMode === true) {
    this.options.forceAdditional  = true;
    this.options.forceItems       = true;
    this.options.forceMaxLength   = true;
    this.options.forceProperties  = true;
    this.options.noExtraKeywords  = true;
    this.options.noTypeless       = true;
    this.options.noEmptyStrings   = true;
    this.options.noEmptyArrays    = true;
}
```

```javascript
var validator = new ZSchema({
    strictMode: true
});
```

## breakOnFirstError

By default, z-schema stops validation after the first error is found. With this you can tell it to continue validating anyway:

```javascript
var validator = new ZSchema({
    breakOnFirstError: false
});
```

## reportPathAsArray

Report error paths as an array of path segments instead of a string:

```javascript
var validator = new ZSchema({
    reportPathAsArray: true
});
```

## ignoreUnknownFormats

By default, z-schema reports all unknown formats, formats not defined by JSON Schema and not registered using
`ZSchema.registerFormat`, as an error.  But the
[JSON Schema specification](http://json-schema.org/latest/json-schema-validation.html#anchor106) says that validator
implementations *"they SHOULD offer an option to disable validation"* for `format`.  That being said, setting this
option to `true` will disable treating unknown formats as errlrs

```javascript
var validator = new ZSchema({
    ignoreUnknownFormats: true
});
```

## customValidator

**Warning**: Use only if know what you are doing. Always consider using [custom format](#register-a-custom-format) before using this option.

Register function to be called as part of validation process on every subshema encounter during validation.

Let's make a real-life example with this feature.
Imagine you have number of transactions:
```json
{
    "fromId": 1034834329,
    "toId": 1034834543,
    "amount": 200
}
```
So you write the schema:
```json
{
    "type": "object",
    "properties": {
        "fromId": {
            "type": "integer"
        },
        "toId": {
            "type": "integer"
        },
        "amount": {
            "type": "number"
        }
    }
}
```
But how to check that `fromId` and `toId` are never equal.
In JSON Schema Draft4 there is no possibility to do this.
Actually, it's easy to just write validation code for such simple payloads.
But what if you have to do the same check for many objects in different places of JSON payload.
One solution is to add custom keyword `uniqueProperties` with array of property names as a value. So in our schema we would need to add:
```json
"uniqueProperties": [
    "fromId",
    "toId"
]
```
To teach `z-schema` about this new keyword we need to write handler for it:
```javascript
function customValidatorFn(report, schema, json) {
    // check if our custom property is present
    if (Array.isArray(schema.uniqueProperties)) {
        var seenValues = [];
        schema.uniqueProperties.forEach(function (prop) {
            var value = json[prop];
            if (typeof value !== 'undefined') {
                if (seenValues.indexOf(value) !== -1) {
                    // report error back to z-schema core
                    report.addCustomError("NON_UNIQUE_PROPERTY_VALUE",
                        "Property \"{0}\" has non-unique value: {1}",
                        [prop, value], null, schema.description);
                }
                seenValues.push(value)
            }
        });
    }
}

var validator = new ZSchema({
    // register our custom validator inside z-schema
    customValidator: customValidatorFn
});
```
Let's test it:
```javascript
var data = {
    fromId: 1034834346,
    toId: 1034834346,
    amount: 50
};

validator.validate(data, schema);
console.log(validator.getLastErrors())
//[ { code: 'NON_UNIQUE_PROPERTY_VALUE',
//    params: [ 'toId', 1034834346 ],
//    message: 'Property "toId" has non-unique value: 1034834346',
//    path: '#/',
//    schemaId: undefined } ]
```
**Note:** before creating your own keywords you should consider all compatibility issues.

# Benchmarks

So how does it compare to version 2.x and others?

**NOTE: these tests are purely orientational, they don't consider extra features any of the validator may support and implement**

[rawgithub.com/zaggino/z-schema/master/benchmark/results.html](https://rawgithub.com/zaggino/z-schema/master/benchmark/results.html)

# Contributors

Thanks for contributing to:

- [Jeremy Whitlock](https://github.com/whitlockjc)
- [Oleksiy Krivoshey](https://github.com/oleksiyk)

and to everyone submitting [issues](https://github.com/zaggino/z-schema/issues) on GitHub
