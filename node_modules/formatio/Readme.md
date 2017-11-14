# formatio

[![Build status](https://secure.travis-ci.org/busterjs/formatio.png?branch=master)](http://travis-ci.org/busterjs/formatio)

> The cheesy object formatter

Pretty formatting of arbitrary JavaScript values. Currently only supports ascii
formatting, suitable for command-line utilities. Like `JSON.stringify`, it
formats objects recursively, but unlike `JSON.stringify`, it can handle
regular expressions, functions, circular objects and more.

`formatio` is a general-purpose library. It works in browsers (including old
and rowdy ones, like IE6) and Node. It will define itself as an AMD module if
you want it to (i.e. if there's a `define` function available).


## Running tests

```
npm test
```

Or use Buster.JS manually:

```
node_modules/buster/bin/buster-test --help
```


## `formatio.ascii` API

`formatio.ascii` can take any JavaScript object and format it nicely as plain
text. It uses the helper functions described below to format different types of
objects.


### `formatio.ascii(object)`

`object` can be any kind of object, including DOM elements.


**Simple object**

```javascript
var formatio = require("formatio");

var object = { name: "Christian" };
console.log(formatio.ascii(object));

// Outputs:
// { name: "Christian" }
```


**Complex object**

```javascript
var formatio = require("formatio");

var developer = {
    name: "Christian",
    interests: ["Programming", "Guitar", "TV"],

    location: {
        language: "Norway",
        city: "Oslo",

        getLatLon: function getLatLon(callback) {
            // ...
        },

        distanceTo: function distanceTo(location) {
        }
    },

    speak: function () {
        return "Oh hi!";
    }
};

console.log(formatio.ascii(developer));

// Outputs:
// {
//   interests: ["Programming", "Guitar", "TV"],
//   location: {
//     city: "Oslo",
//     distanceTo: function distanceTo() {},
//     getLatLon: function getLatLon() {},
//     language: "Norway"
//   },
//   name: "Christian",
//   speak: function () {}
// }
```


**Custom constructor**

If the object to format is not a generic `Object` object, **formatio**
displays the type of object (i.e. name of constructor). Set the
`excludeConstructors` (see below) property to control what constructors to
include in formatted output.

```javascript
var formatio = require("formatio");

function Person(name) { this.name = name; }

var dude = new Person("Dude");
console.log(format.ascii(dude));

// Outputs:
// [Person] { name: "Dude" }
```


**DOM elements**

DOM elements are formatted as abbreviated HTML source. 20 characters of
`innerHTML` is included, and if the content is longer, it is truncated with
`"[...]"`. Future editions will add the possibility to format nested markup
structures.

```javascript
var p = document.createElement("p");
p.id = "sample";
p.className = "notice";
p.setAttribute("data-custom", "42");
p.innerHTML = "Hey there, here's some text for ya there buddy";

console.log(formatio.ascii(p));

// Outputs
// &lt;p id="sample" class="notice" data-custom="42"&gt;Hey there, here's so[...]&lt;/p&gt;</code></pre>
```


### `formatio.ascii.func(func)`

Formats a function like `"function [name]() {}"`. The name is retrieved from
`formatio.functionName`.


### `formatio.ascii.array(array)`

Formats an array as `"[item1, item2, item3]"` where each item is formatted
with `formatio.ascii`. Circular references are represented in the resulting
string as `"[Circular]"`.


### `formatio.ascii.object(object)`

Formats all properties of the object with `formatio.ascii`. If the object can
be fully represented in 80 characters, it's formatted in one line. Otherwise,
it's nicely indented over as many lines as necessary. Circular references are
represented by `"[Circular]"`.

Objects created with custom constructors will be formatted as
`"[ConstructorName] { ... }"`. Set the `excludeConstructors` property to
control what constructors are included in the output like this.


### `formatio.ascii.element(element)`

Formats a DOM element as HTML source. The tag name is represented in lower-case
and all attributes and their values are included. The element's content is
included, up to 20 characters. If the length exceeds 20 characters, it's
truncated with a `"[...]"`.


### `formatio.functionName(func)`

Guesses a function's name. If the function defines the `displayName` property
(used by `some debugging tools <http://trac.webkit.org/changeset/42478>`_) it is
preferred. If it is not found, the `name` property is tried. If no name can be
found this way, an attempt is made to find the function name by looking at the
function's `toString()` representation.


### `formatio.constructorName(object)`

Attempts to guess the name of the constructor that created the object. It does
so by getting the name of `object.constructor` using `functionName`. If a
name is found, `excludeConstructors` is consulted. If the constructor name
matches any of these elements, an empty string is returned, otherwise the name
is returned.


## `formatio.ascii` properties

### `quoteStrings(true)`

Whether or not to quote simple strings. When set to `false`, simple strings
are not quoted. Strings in arrays and objects will still be quoted, but
`ascii("Some string")` will not gain additional quotes.

### `limitChildrenCount(number)`

This property allows to limit the number of printed array elements or object 
properties. When set to 0, all elements will be included in output, any number
greater than zero will set the limit to that number.

### `excludeConstructors (["Object", /^.$/])`

An array of strings and/or regular expressions naming constructors that should
be stripped from the formatted output. The default value skips objects created
by `Object` and constructors that have one character names (which are
typically used in `Object.create` shims).

While you can set this property directly on `formatio.ascii`, it is
recommended to create an instance of `formatio.ascii` and override the
property on that object.

**Strings** represent constructor names that should not be represented in the
formatted output. **Regular expressions** are tested against constructor names
when formatting. If the expression is a match, the constructor name is not
included in the formatted output.

```javascript
function Person(name) {
    this.name = name;
}

var person = new Person("Chris");
console.log(formatio.ascii(person));

// Outputs
// [Person] { name: "Chris" }

var formatter = Object.create(formatio);
formatter.excludeConstructors = ["Object", /^.$/, "Person"];
console.log(formatter.ascii(person));

// Outputs
// { name: "Chris" }

// Global overwrite, generally not recommended
formatio.excludeConstructors = ["Object", /^.$/, "Person"];
console.log(formatio.ascii(person));

// Outputs
// { name: "Chris" }
```


## Changelog

**1.1.2** (12.12.2014)

* [Safe-guard innerHTML which may be empty (SVG elements)](https://github.com/busterjs/formatio/commit/ff623a6)
* [Format empty strings as (empty string)](https://github.com/busterjs/formatio/commit/116d0ac)
