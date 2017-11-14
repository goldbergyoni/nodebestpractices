# samsam

[![Build status](https://secure.travis-ci.org/busterjs/samsam.png?branch=master)](http://travis-ci.org/busterjs/samsam)

> Same same, but different

`samsam` is a collection of predicate and comparison functions useful for
identifiying the type of values and to compare values with varying degrees of
strictness.

`samsam` is a general-purpose library with no dependencies. It works in browsers
(including old and rowdy ones, like IE6) and Node. It will define itself as an
AMD module if you want it to (i.e. if there's a `define` function available).

`samsam` was originally extracted from the
`referee <http://github.com/busterjs/referee/>`_ assertion library, which
ships with the Buster.JS testing framework.


## Predicate functions


### `isArguments(object)`

Returns `true` if `object` is an `arguments` object, `false` otherwise.


### `isNegZero(value)`

Returns `true` if `value` is `-0`.


## `isElement(object)`

Returns `true` if `object` is a DOM element node. Unlike
Underscore.js/lodash, this function will return `false` if `object` is an
*element-like* object, i.e. a regular object with a `nodeType` property that
holds the value `1`.


###`isDate(object)`

Returns true if the object is a `Date`, or *date-like*. Duck typing of date
objects work by checking that the object has a `getTime` function whose return
value equals the return value from the object's `valueOf`.


## Comparison functions


###`identical(x, y)`

Strict equality check according to `EcmaScript Harmony's `egal`.

**From the Harmony wiki:**

> An egal function simply makes available the internal `SameValue` function
from section 9.12 of the ES5 spec. If two values are egal, then they are not
observably distinguishable.

`identical` returns `true` when `===` is `true`, except for `-0` and
`+0`, where it returns `false`. Additionally, it returns `true` when
`NaN` is compared to itself.


### `deepEqual(obj1, obj2)`

Deep equal comparison. Two values are "deep equal" if:

* They are identical
* They are both date objects representing the same time
* They are both arrays containing elements that are all deepEqual
* They are objects with the same set of properties, and each property
  in `obj1` is deepEqual to the corresponding property in `obj2`


### `match(object, matcher)`

Partial equality check. Compares `object` with matcher according a wide set of
rules:


**String matcher**

In its simplest form, `match` performs a case insensitive substring match.
When the matcher is a string, `object` is converted to a string, and the
function returns `true` if the matcher is a case-insensitive substring of
`object` as a string.

```javascript
samsam.match("Give me something", "Give"); //true
samsam.match("Give me something", "sumptn"); // false
samsam.match({ toString: function () { return "yeah"; } }, "Yeah!"); // true
```

The last example is not symmetric. When the matcher is a string, the `object`
is coerced to a string - in this case using `toString`. Changing the order of
the arguments would cause the matcher to be an object, in which case different
rules apply (see below).


**Boolean matcher**

Performs a strict (i.e. `===`) match with the object. So, only `true`
matches `true`, and only `false` matches `false`.


**Regular expression matcher**

When the matcher is a regular expression, the function will pass if
`object.test(matcher)` is `true`. `match` is written in a generic way, so
any object with a `test` method will be used as a matcher this way.

```javascript
samsam.match("Give me something", /^[a-z\s]$/i); // true
samsam.match("Give me something", /[0-9]/); // false
samsam.match({ toString: function () { return "yeah!"; } }, /yeah/); // true
samsam.match(234, /[a-z]/); // false
```


**Number matcher**

When the matcher is a number, the assertion will pass if `object == matcher`.

```javascript
samsam.match("123", 123); // true
samsam.match("Give me something", 425); // false
samsam.match({ toString: function () { return "42"; } }, 42); // true
samsam.match(234, 1234); // false
```


**Function matcher**

When the matcher is a function, it is called with `object` as its only
argument. `match` returns `true` if the function returns `true`. A strict
match is performed against the return value, so a boolean `true` is required,
truthy is not enough.

```javascript
// true
samsam.match("123", function (exp) {
    return exp == "123";
});

// false
samsam.match("Give me something", function () {
    return "ok";
});

// true
samsam.match({
    toString: function () {
        return "42";
    }
}, function () { return true; });

// false
samsam.match(234, function () {});
```


**Object matcher**

As mentioned above, if an object matcher defines a `test` method, `match`
will return `true` if `matcher.test(object)` returns truthy.

If the matcher does not have a test method, a recursive match is performed. If
all properties of `matcher` matches corresponding properties in `object`,
`match` returns `true`. Note that the object matcher does not care if the
number of properties in the two objects are the same - only if all properties in
the matcher recursively matches ones in `object`.

```javascript
// true
samsam.match("123", {
    test: function (arg) {
        return arg == 123;
    }
});

// false
samsam.match({}, { prop: 42 });

// true
samsam.match({
    name: "Chris",
    profession: "Programmer"
}, {
    name: "Chris"
});

// false
samsam.match(234, { name: "Chris" });
```


**DOM elements**

`match` can be very helpful when comparing DOM elements, because it allows
you to compare several properties with one call:

```javascript
var el = document.getElementById("myEl");

samsam.match(el, {
    tagName: "h2",
    className: "item",
    innerHTML: "Howdy"
});
```


## Changelog

**1.1.2** (11.12.2014)

* Fix for issue [#359 - `assert.match` does not support objects with `null` properties`](https://github.com/busterjs/buster/issues/359)
* Implementation of feature request [#64 - assert.match and parentNode](https://github.com/busterjs/buster/issues/64)

**1.1.1** (26.03.2014)

* [Make `isArguments` work with arguments from `"strict mode"` functions](https://github.com/busterjs/samsam/commit/72903613af90f39474f8388ed8957eaea4cf46ae)
* [Fix type error for nested object in function `match`](https://github.com/busterjs/samsam/commit/9d3420a11e9b3c65559945e60ca56980820db20f)
* Fix for issue [#366 - Assertion match fails with data attribute](https://github.com/busterjs/buster/issues/366)
