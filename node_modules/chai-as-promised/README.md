<a href="http://promisesaplus.com/">
    <img src="https://promises-aplus.github.io/promises-spec/assets/logo-small.png"
         align="right" valign="top" alt="Promises/A+ logo" />
</a>

# Chai Assertions for Promises

**Chai as Promised** extends [Chai](http://chaijs.com/) with a fluent language for asserting facts about [promises](http://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript).

Instead of manually wiring up your expectations to a promise's fulfilled and rejected handlers:

```javascript
doSomethingAsync().then(
    function (result) {
        result.should.equal("foo");
        done();
    },
    function (err) {
       done(err);
    }
);
```

you can write code that expresses what you really mean:

```javascript
return doSomethingAsync().should.eventually.equal("foo");
```

or if you have a case where `return` is not preferable (e.g. style considerations) or not possible (e.g. the testing framework doesn't allow returning promises to signal asynchronous test completion), then you can use the following workaround (where `done()` is supplied by the test framework):

```javascript
doSomethingAsync().should.eventually.equal("foo").notify(done);
```

*Notice*: either `return` or `notify(done)` _must_ be used with promise assertions. This can be a slight departure from the existing format of assertions being used on a project or by a team. Those other assertions are likely synchronous and thus do not require special handling.

## How to Use

### `should`/`expect` Interface

The most powerful extension provided by Chai as Promised is the `eventually` property. With it, you can transform any existing Chai assertion into one that acts on a promise:

```javascript
(2 + 2).should.equal(4);

// becomes
return Promise.resolve(2 + 2).should.eventually.equal(4);


expect({ foo: "bar" }).to.have.property("foo");

// becomes
return expect(Promise.resolve({ foo: "bar" })).to.eventually.have.property("foo");
```

There are also a few promise-specific extensions (with the usual `expect` equivalents also available):

```javascript
return promise.should.be.fulfilled;
return promise.should.eventually.deep.equal("foo");
return promise.should.become("foo"); // same as `.eventually.deep.equal`
return promise.should.be.rejected;
return promise.should.be.rejectedWith(Error); // other variants of Chai's `throw` assertion work too.
```

### `assert` Interface

As with the `should`/`expect` interface, Chai as Promised provides an `eventually` extender to `chai.assert`, allowing any existing Chai assertion to be used on a promise:

```javascript
assert.equal(2 + 2, 4, "This had better be true");

// becomes
return assert.eventually.equal(Promise.resolve(2 + 2), 4, "This had better be true, eventually");
```

And there are, of course, promise-specific extensions:

```javascript
return assert.isFulfilled(promise, "optional message");

return assert.becomes(promise, "foo", "optional message");
return assert.doesNotBecome(promise, "foo", "optional message");

return assert.isRejected(promise, "optional message");
return assert.isRejected(promise, Error, "optional message");
return assert.isRejected(promise, /error message matcher/, "optional message");
```

### Progress Callbacks

Chai as Promised does not have any intrinsic support for testing promise progress callbacks. The properties you would want to test are probably much better suited to a library like [Sinon.JS](http://sinonjs.org/), perhaps in conjunction with [Sinon–Chai](https://github.com/domenic/sinon-chai):

```javascript
var progressSpy = sinon.spy();

return promise.then(null, null, progressSpy).then(function () {
    progressSpy.should.have.been.calledWith("33%");
    progressSpy.should.have.been.calledWith("67%");
    progressSpy.should.have.been.calledThrice;
});
```

### Customizing Output Promises

By default, the promises returned by Chai as Promised's assertions are regular Chai assertion objects, extended with a single `then` method derived from the input promise. To change this behavior, for instance to output a promise with more useful sugar methods such as are found in most promise libraries, you can override `chaiAsPromised.transferPromiseness`. Here's an example that transfer's Q's `finally` and `done` methods:

```js
chaiAsPromised.transferPromiseness = function (assertion, promise) {
    assertion.then = promise.then.bind(promise); // this is all you get by default
    assertion.finally = promise.finally.bind(promise);
    assertion.done = promise.done.bind(promise);
};
```

### Transforming Arguments to the Asserters

Another advanced customization hook Chai as Promised allows is if you want to transform the arguments to the asserters, possibly asynchronously. Here is a toy example:

```js
chaiAsPromised.transformAsserterArgs = function (args) {
    return args.map(function (x) { return x + 1; });
}

Promise.resolve(2).should.eventually.equal(2); // will now fail!
Promise.resolve(3).should.eventually.equal(2); // will now pass!
```

The transform can even be asynchronous, returning a promise for an array instead of an array directly. An example of that might be using `Promise.all` so that an array of promises becomes a promise for an array. If you do that, then you can compare promises against other promises using the asserters:

```js
// This will normally fail, since within() only works on numbers.
Promise.resolve(2).should.eventually.be.within(Promise.resolve(1), Promise.resolve(6));

chaiAsPromised.transformAsserterArgs = function (args) {
    return Promise.all(args);
};

// But now it will pass, since we transformed the array of promises for numbers into
// (a promise for) an array of numbers
Promise.resolve(2).should.eventually.be.within(Promise.resolve(1), Promise.resolve(6));
```

### Compatibility

Chai as Promised is compatible with all promises following the [Promises/A+ specification](http://promisesaplus.com/).

Notably, jQuery's promises were not up to spec before jQuery 3.0, and Chai as Promised will not work with them. In particular, Chai as Promised makes extensive use of the standard [transformation behavior](http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/#toc_2) of `then`, which jQuery<3.0 does not support.

Angular promises have a special digest cycle for their processing, and [need extra setup code to work with Chai as Promised](http://stackoverflow.com/a/37374041/3191).

### Working with Non-Promise–Friendly Test Runners

Some test runners (e.g. Jasmine, QUnit, or tap/tape) do not have the ability to use the returned promise to signal asynchronous test completion. If possible, I'd recommend switching to ones that do, such as [Mocha](http://mochajs.org/#asynchronous-code), [Buster](http://docs.busterjs.org/en/latest/modules/buster-test/spec/#returning-a-promise), or [blue-tape](https://github.com/spion/blue-tape). But if that's not an option, Chai as Promised still has you covered. As long as your test framework takes a callback indicating when the asynchronous test run is over, Chai as Promised can adapt to that situation with its `notify` method, like so:

```javascript
it("should be fulfilled", function (done) {
    promise.should.be.fulfilled.and.notify(done);
});

it("should be rejected", function (done) {
    otherPromise.should.be.rejected.and.notify(done);
});
```

In these examples, if the conditions are not met, the test runner will receive an error of the form `"expected promise to be fulfilled but it was rejected with [Error: error message]"`, or `"expected promise to be rejected but it was fulfilled."`

There's another form of `notify` which is useful in certain situations, like doing assertions after a promise is complete. For example:

```javascript
it("should change the state", function (done) {
    otherState.should.equal("before");
    promise.should.be.fulfilled.then(function () {
        otherState.should.equal("after");
    }).should.notify(done);
});
```

Notice how `.notify(done)` is hanging directly off of `.should`, instead of appearing after a promise assertion. This indicates to Chai as Promised that it should pass fulfillment or rejection directly through to the testing framework. Thus, the above code will fail with a Chai as Promised error (`"expected promise to be fulfilled…"`) if `promise` is rejected, but will fail with a simple Chai error (`expected "before" to equal "after"`) if `otherState` does not change.

### Multiple Promise Assertions

To perform assertions on multiple promises, use `Promise.all` to combine multiple Chai as Promised assertions:

```javascript
it("should all be well", function () {
    return Promise.all([
        promiseA.should.become("happy"),
        promiseB.should.eventually.have.property("fun times"),
        promiseC.should.be.rejectedWith(TypeError, "only joyful types are allowed")
    ]);
});
```

This will pass any failures of the individual promise assertions up to the test framework, instead of wrapping them in an `"expected promise to be fulfilled…"` message as would happen if you did `return Promise.all([…]).should.be.fulfilled`. If you can't use `return`, then use `.should.notify(done)`, similar to the previous examples.

## Installation and Setup

### Node

Do an `npm install chai-as-promised` to get up and running. Then:

```javascript
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
// or:
var assert = chai.assert;
// or:
chai.should();
// according to your preference of assertion style
```

You can of course put this code in a common test fixture file; for an example using [Mocha](http://mochajs.org), see [the Chai as Promised tests themselves](https://github.com/domenic/chai-as-promised/tree/master/test/).

**Note when using other Chai plugins:** Chai as Promised finds all currently-registered asserters and promisifies them, at the time it is installed. Thus, you should install Chai as Promised _last_, after any other Chai plugins, if you expect their asserters to be promisified.

### In the Browser

To use Chai as Promised in environments that don't support Node.js-like CommonJS modules, you'll need to use a bundling tool like [browserify](http://browserify.org/). See also the note below about browser compatibility.

### Karma

If you're using [Karma](https://karma-runner.github.io/), check out the accompanying [karma-chai-as-promised](https://github.com/vlkosinov/karma-chai-as-promised) plugin.

### Browser/Node Compatibility

Chai as Promised requires Node v4+ or a browser with equivalent support for modern JavaScript syntax. If your browser doesn't support modern JavaScript syntax, you'll need to transpile it down using a tool like [Babel](http://babeljs.io/).
