# Lo-Dash v2.4.2
A utility library delivering consistency, [customization](https://lodash.com/custom-builds), [performance](https://lodash.com/benchmarks), & [extras](https://lodash.com/#features).

## Download

Check out our [wiki]([https://github.com/lodash/lodash/wiki/build-differences]) for details over the differences between builds.

* Modern builds perfect for newer browsers/environments:<br>
[Development](https://raw.github.com/lodash/lodash/2.4.2/dist/lodash.js) &
[Production](https://raw.github.com/lodash/lodash/2.4.2/dist/lodash.min.js)

* Compatibility builds for older environment support too:<br>
[Development](https://raw.github.com/lodash/lodash/2.4.2/dist/lodash.compat.js) &
[Production](https://raw.github.com/lodash/lodash/2.4.2/dist/lodash.compat.min.js)

* Underscore builds to use as a drop-in replacement:<br>
[Development](https://raw.github.com/lodash/lodash/2.4.2/dist/lodash.underscore.js) &
[Production](https://raw.github.com/lodash/lodash/2.4.2/dist/lodash.underscore.min.js)

CDN copies are available on [cdnjs](http://cdnjs.com/libraries/lodash.js/) & [jsDelivr](http://www.jsdelivr.com/#!lodash). For smaller file sizes, create [custom builds](https://lodash.com/custom-builds) with only the features needed.

Love modules? We’ve got you covered with [lodash-amd](https://npmjs.org/package/lodash-amd), [lodash-es6](https://github.com/lodash/lodash-es6), [lodash-node](https://npmjs.org/package/lodash-node), & [npm packages](https://npmjs.org/browse/keyword/lodash-modularized) per method.

## Dive in

There’s plenty of **[documentation](https://lodash.com/docs)**, [unit tests](https://lodash.com/tests), & [benchmarks](https://lodash.com/benchmarks).<br>
Check out <a href="http://devdocs.io/lodash/">DevDocs</a> as a fast, organized, & searchable interface for our documentation.

The full changelog for this release is available on our [wiki](https://github.com/lodash/lodash/wiki/Changelog).<br>
A list of upcoming features is available on our [roadmap](https://github.com/lodash/lodash/wiki/Roadmap).

## Installation & usage

In browsers:

```html
<script src="lodash.js"></script>
```

Using [`npm`](http://npmjs.org/):

```bash
npm i --save lodash

{sudo} npm i -g lodash
npm ln lodash
```

In [Node.js](http://nodejs.org/) & [Ringo](http://ringojs.org/):

```js
var _ = require('lodash');
// or as Underscore
var _ = require('lodash/dist/lodash.underscore');
```

**Notes:**
 * Don’t assign values to [special variable](http://nodejs.org/api/repl.html#repl_repl_features) `_` when in the REPL
 * If Lo-Dash is installed globally, run [`npm ln lodash`](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation/) in your project’s root directory *before* requiring it

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('lodash.js');
```

In an AMD loader:

```js
require({
  'packages': [
    { 'name': 'lodash', 'location': 'path/to/lodash', 'main': 'lodash' }
  ]
},
['lodash'], function(_) {
  console.log(_.VERSION);
});
```

## Resources

 * Podcasts
  - [JavaScript Jabber](http://javascriptjabber.com/079-jsj-lo-dash-with-john-david-dalton/)

 * Posts
  - [Say “Hello” to Lo-Dash](http://kitcambridge.be/blog/say-hello-to-lo-dash/)
  - [Custom builds in Lo-Dash 2.0](http://kitcambridge.be/blog/custom-builds-in-lo-dash-2-dot-0/)

 * Videos
  - [Introduction](https://vimeo.com/44154599)
  - [Origins](https://vimeo.com/44154600)
  - [Optimizations & builds](https://vimeo.com/44154601)
  - [Native method use](https://vimeo.com/48576012)
  - [Testing](https://vimeo.com/45865290)
  - [CascadiaJS ’12](http://www.youtube.com/watch?v=dpPy4f_SeEk)

 A list of other community created podcasts, posts, & videos is available on our [wiki](https://github.com/lodash/lodash/wiki/Resources).

## Features

 * AMD loader support ([curl](https://github.com/cujojs/curl), [dojo](http://dojotoolkit.org/), [requirejs](http://requirejs.org/), etc.)
 * [_(…)](https://lodash.com/docs#_) supports intuitive chaining
 * [_.at](https://lodash.com/docs#at) for cherry-picking collection values
 * [_.bindKey](https://lodash.com/docs#bindKey) for binding [*“lazy”*](http://michaux.ca/articles/lazy-function-definition-pattern) defined methods
 * [_.clone](https://lodash.com/docs#clone) supports shallow cloning of `Date` & `RegExp` objects
 * [_.cloneDeep](https://lodash.com/docs#cloneDeep) for deep cloning arrays & objects
 * [_.constant](https://lodash.com/docs#constant) & [_.property](https://lodash.com/docs#property) function generators for composing functions
 * [_.contains](https://lodash.com/docs#contains) accepts a `fromIndex`
 * [_.create](https://lodash.com/docs#create) for easier object inheritance
 * [_.createCallback](https://lodash.com/docs#createCallback) for extending callbacks in methods & mixins
 * [_.curry](https://lodash.com/docs#curry) for creating [curried](http://hughfdjackson.com/javascript/2013/07/06/why-curry-helps/) functions
 * [_.debounce](https://lodash.com/docs#debounce) & [_.throttle](https://lodash.com/docs#throttle) accept additional `options` for more control
 * [_.findIndex](https://lodash.com/docs#findIndex) & [_.findKey](https://lodash.com/docs#findKey) for finding indexes & keys
 * [_.forEach](https://lodash.com/docs#forEach) is chainable & supports exiting early
 * [_.forIn](https://lodash.com/docs#forIn) for iterating own & inherited properties
 * [_.forOwn](https://lodash.com/docs#forOwn) for iterating own properties
 * [_.isPlainObject](https://lodash.com/docs#isPlainObject) for checking if values are created by `Object`
 * [_.mapValues](https://lodash.com/docs#mapValues) for [mapping](https://lodash.com/docs#map) values to an object
 * [_.memoize](https://lodash.com/docs#memoize) exposes the `cache` of memoized functions
 * [_.merge](https://lodash.com/docs#merge) for a deep [_.extend](https://lodash.com/docs#extend)
 * [_.noop](https://lodash.com/docs#noop) for function placeholders
 * [_.now](https://lodash.com/docs#now) as a cross-browser `Date.now` alternative
 * [_.parseInt](https://lodash.com/docs#parseInt) for consistent behavior
 * [_.pull](https://lodash.com/docs#pull) & [_.remove](https://lodash.com/docs#remove) for mutating arrays
 * [_.random](https://lodash.com/docs#random) supports returning floating-point numbers
 * [_.runInContext](https://lodash.com/docs#runInContext) for easier mocking
 * [_.sortBy](https://lodash.com/docs#sortBy) supports sorting by multiple properties
 * [_.support](https://lodash.com/docs#support) for flagging environment features
 * [_.template](https://lodash.com/docs#template) supports [*“imports”*](https://lodash.com/docs#templateSettings_imports) options & [ES6 template delimiters](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals)
 * [_.transform](https://lodash.com/docs#transform) as a powerful alternative to [_.reduce](https://lodash.com/docs#reduce) for transforming objects
 * [_.where](https://lodash.com/docs#where) supports deep object comparisons
 * [_.xor](https://lodash.com/docs#xor) as a companion to [_.difference](https://lodash.com/docs#difference), [_.intersection](https://lodash.com/docs#intersection), & [_.union](https://lodash.com/docs#union)
 * [_.zip](https://lodash.com/docs#zip) is capable of unzipping values
 * [_.omit](https://lodash.com/docs#omit), [_.pick](https://lodash.com/docs#pick), &
   [more](https://lodash.com/docs "_.assign, _.clone, _.cloneDeep, _.first, _.initial, _.isEqual, _.last, _.merge, _.rest") accept callbacks
 * [_.contains](https://lodash.com/docs#contains), [_.toArray](https://lodash.com/docs#toArray), &
   [more](https://lodash.com/docs "_.at, _.countBy, _.every, _.filter, _.find, _.forEach, _.forEachRight, _.groupBy, _.invoke, _.map, _.max, _.min, _.pluck, _.reduce, _.reduceRight, _.reject, _.shuffle, _.size, _.some, _.sortBy, _.where") accept strings
 * [_.filter](https://lodash.com/docs#filter), [_.map](https://lodash.com/docs#map), &
   [more](https://lodash.com/docs "_.countBy, _.every, _.find, _.findKey, _.findLast, _.findLastIndex, _.findLastKey, _.first, _.groupBy, _.initial, _.last, _.max, _.min, _.reject, _.rest, _.some, _.sortBy, _.sortedIndex, _.uniq") support *“_.pluck”* & *“_.where”* shorthands
 * [_.findLast](https://lodash.com/docs#findLast), [_.findLastIndex](https://lodash.com/docs#findLastIndex), &
   [more](https://lodash.com/docs "_.findLastKey, _.forEachRight, _.forInRight, _.forOwnRight, _.partialRight") right-associative methods

## Support

Tested in Chrome 5~31, Firefox 2~25, IE 6-11, Opera 9.25-17, Safari 3-7, Node.js 0.6.21-0.10.22, Narwhal 0.3.2, PhantomJS 1.9.2, RingoJS 0.9, & Rhino 1.7RC5.
