# Lolex [![Build Status](https://secure.travis-ci.org/sinonjs/lolex.png)](http://travis-ci.org/sinonjs/lolex) [![bitHound Overall Score](https://www.bithound.io/github/sinonjs/lolex/badges/score.svg)](https://www.bithound.io/github/sinonjs/lolex)

JavaScript implementation of the timer APIs; `setTimeout`, `clearTimeout`, `setImmediate`, `clearImmediate`, `setInterval`, `clearInterval`, `requestAnimationFrame`, and `clearAnimationFrame`, along with a clock instance that controls the flow of time. Lolex also provides a `Date` implementation that gets its time from the clock.

In addition in browser environment lolex provides a `performance` implementation that gets its time from the clock. In Node environments lolex provides a `nextTick` implementation that is synchronized with the clock - and a `process.hrtime` shim that works with the clock.

Lolex can be used to simulate passing time in automated tests and other
situations where you want the scheduling semantics, but don't want to actually
wait (however, from version 2.0 lolex supports those of you who would like to wait too).

Lolex is extracted from [Sinon.JS](https://github.com/sinonjs/sinon.js).

## Installation

Lolex can be used in both Node and browser environments. Installation is as easy as

```sh
npm install lolex
```

If you want to use Lolex in a browser you can use [the pre-built
version](https://github.com/sinonjs/lolex/blob/master/lolex.js) available in the repo
and the npm package. Using npm you only need to reference `./node_modules/lolex/lolex.js` in your `<script>` tags.

You are always free to [build it yourself](https://github.com/sinonjs/lolex/blob/53ea4d9b9e5bcff53cc7c9755dc9aa340368cf1c/package.json#L22), of course.

## Usage

To use lolex, create a new clock, schedule events on it using the timer
functions and pass time using the `tick` method.

```js
// In the browser distribution, a global `lolex` is already available
var lolex = require("lolex");
var clock = lolex.createClock();

clock.setTimeout(function () {
    console.log("The poblano is a mild chili pepper originating in the state of Puebla, Mexico.");
}, 15);

// ...

clock.tick(15);
```

Upon executing the last line, an interesting fact about the
[Poblano](http://en.wikipedia.org/wiki/Poblano) will be printed synchronously to
the screen. If you want to simulate asynchronous behavior, you have to use your
imagination when calling the various functions.

The `next`, `runAll`, `runToFrame`, and `runToLast` methods are available to advance the clock. See the
API Reference for more details.

### Faking the native timers

When using lolex to test timers, you will most likely want to replace the native
timers such that calling `setTimeout` actually schedules a callback with your
clock instance, not the browser's internals.

Calling `install` with no arguments achieves this. You can call `uninstall`
later to restore things as they were again.

```js
// In the browser distribution, a global `lolex` is already available
var lolex = require("lolex");

var clock = lolex.install();
// Equivalent to
// var clock = lolex.install(typeof global !== "undefined" ? global : window);

setTimeout(fn, 15); // Schedules with clock.setTimeout

clock.uninstall();
// setTimeout is restored to the native implementation
```

To hijack timers in another context pass it to the `install` method.

```js
var lolex = require("lolex");
var context = {
    setTimeout: setTimeout // By default context.setTimeout uses the global setTimeout
}
var clock = lolex.install({target: context});

context.setTimeout(fn, 15); // Schedules with clock.setTimeout

clock.uninstall();
// context.setTimeout is restored to the original implementation
```

Usually you want to install the timers onto the global object, so call `install`
without arguments.

#### Automatically incrementing mocked time
Since version 2.0 Lolex supports the possibility to attach the faked timers
to any change in the real system time. This basically means you no longer need
to `tick()` the clock in a situation where you won't know **when** to call `tick()`.

Please note that this is achieved using the original setImmediate() API at a certain
configurable interval `config.advanceTimeDelta` (default: 20ms). Meaning time would
be incremented every 20ms, not in real time.

An example would be:

```js
var lolex = require("lolex");
var clock = lolex.install({shouldAdvanceTime: true, advanceTimeDelta: 40});

setTimeout(() => {
    console.log('this just timed out'); //executed after 40ms
}, 30);

setImmediate(() => {
    console.log('not so immediate'); //executed after 40ms
});

setTimeout(() => {
    console.log('this timed out after'); //executed after 80ms
    clock.uninstall();
}, 50);
```

## API Reference

### `var clock = lolex.createClock([now[, loopLimit]])`

Creates a clock. The default
[epoch](https://en.wikipedia.org/wiki/Epoch_%28reference_date%29) is `0`.

The `now` argument may be a number (in milliseconds) or a Date object.

The `loopLimit` argument sets the maximum number of timers that will be run when calling `runAll()` before assuming that we have an infinite loop and throwing an error. The default is `1000`.

### `var clock = lolex.install([config])`
Installs lolex using the specified config (otherwise with epoch `0` on the global scope). The following configuration options are available

Parameter | Type | Default | Description
--------- | ---- | ------- | ------------
`config.target`| Object | global | installs lolex onto the specified target context
`config.now` | Number/Date | 0 | installs lolex with the specified unix epoch
`config.toFake` | String[] | ["setTimeout", "clearTimeout", "setImmediate", "clearImmediate","setInterval", "clearInterval", "Date"] | an array with explicit function names to hijack. *When not set, lolex will automatically fake all methods **except** `nextTick`* e.g., `lolex.install({ toFake: ["setTimeout","nextTick"]})` will fake only `setTimeout` and `nextTick`
`config.loopLimit` | Number | 1000 | the maximum number of timers that will be run when calling runAll()
`config.shouldAdvanceTime` | Boolean | false | tells lolex to increment mocked time automatically based on the real system time shift (e.g. the mocked time will be incremented by 20ms for every 20ms change in the real system time)
`config.advanceTimeDelta` | Number | 20 | relevant only when using with `shouldAdvanceTime: true`. increment mocked time by `advanceTimeDelta` ms every `advanceTimeDelta` ms change in the real system time.

### `var id = clock.setTimeout(callback, timeout)`

Schedules the callback to be fired once `timeout` milliseconds have ticked by.

In Node.js `setTimeout` returns a timer object. Lolex will do the same, however
its `ref()` and `unref()` methods have no effect.

In browsers a timer ID is returned.

### `clock.clearTimeout(id)`

Clears the timer given the ID or timer object, as long as it was created using
`setTimeout`.

### `var id = clock.setInterval(callback, timeout)`

Schedules the callback to be fired every time `timeout` milliseconds have ticked
by.

In Node.js `setInterval` returns a timer object. Lolex will do the same, however
its `ref()` and `unref()` methods have no effect.

In browsers a timer ID is returned.

### `clock.clearInterval(id)`

Clears the timer given the ID or timer object, as long as it was created using
`setInterval`.

### `var id = clock.setImmediate(callback)`

Schedules the callback to be fired once `0` milliseconds have ticked by. Note
that you'll still have to call `clock.tick()` for the callback to fire. If
called during a tick the callback won't fire until `1` millisecond has ticked
by.

In Node.js `setImmediate` returns a timer object. Lolex will do the same,
however its `ref()` and `unref()` methods have no effect.

In browsers a timer ID is returned.

### `clock.clearImmediate(id)`

Clears the timer given the ID or timer object, as long as it was created using
`setImmediate`.

### `clock.requestAnimationFrame(callback)`

Schedules the callback to be fired on the next animation frame, which runs every
16 ticks. Returns an `id` which can be used to cancel the callback. This is
available in both browser & node environments.

### `clock.clearAnimationFrame(id)`

Cancels the callback scheduled by the provided id.

### `clock.hrtime(prevTime?)`
Only available in Node.js, mimicks process.hrtime().

### `clock.nextTick(callback)`

Only available in Node.js, mimics `process.nextTick` to enable completely synchronous testing flows.

### `clock.performance.now()`
Only available in browser environments, mimicks performance.now().


### `clock.tick(time)`

Advance the clock, firing callbacks if necessary. `time` may be the number of
milliseconds to advance the clock by or a human-readable string. Valid string
formats are `"08"` for eight seconds, `"01:00"` for one minute and `"02:34:10"`
for two hours, 34 minutes and ten seconds.

`time` may be negative, which causes the clock to change but won't fire any
callbacks.

### `clock.next()`

Advances the clock to the the moment of the first scheduled timer, firing it.

### `clock.runAll()`

This runs all pending timers until there are none remaining. If new timers are added while it is executing they will be run as well.

This makes it easier to run asynchronous tests to completion without worrying about the number of timers they use, or the delays in those timers.

It runs a maximum of `loopLimit` times after which it assumes there is an infinite loop of timers and throws an error.

### `lock.runToFrame()`

Advances the clock to the next frame, firing all scheduled animation frame callbacks,
if any, for that frame as well as any other timers scheduled along the way.

### `clock.runToLast()`

This takes note of the last scheduled timer when it is run, and advances the
clock to that time firing callbacks as necessary.

If new timers are added while it is executing they will be run only if they
would occur before this time.

This is useful when you want to run a test to completion, but the test recursively
sets timers that would cause `runAll` to trigger an infinite loop warning.

### `clock.setSystemTime([now])`

This simulates a user changing the system clock while your program is running.
It affects the current time but it does not in itself cause e.g. timers to fire;
they will fire exactly as they would have done without the call to
setSystemTime().

### `clock.uninstall()`

Restores the original methods on the `target` that was passed to
`lolex.install`, or the native timers if no `target` was given.

### `Date`

Implements the `Date` object but using the clock to provide the correct time.

### `Performance`

Implements the `now` method of the [`Performance`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) object but using the clock to provide the correct time. Only available in environments that support the Performance object (browsers mostly).

## Running tests

Lolex has a comprehensive test suite. If you're thinking of contributing bug
fixes or suggesting new features, you need to make sure you have not broken any
tests. You are also expected to add tests for any new behavior.

### On node:

```sh
npm test
```

Or, if you prefer more verbose output:

```
$(npm bin)/mocha ./test/lolex-test.js
```

### In the browser

[Mochify](https://github.com/mantoni/mochify.js) is used to run the tests in
PhantomJS. Make sure you have `phantomjs` installed. Then:

```sh
npm test-headless
```

## License

BSD 3-clause "New" or "Revised" License  (see LICENSE file)
