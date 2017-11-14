# Nodemon as a required module

Nodemon (as of 1.0.0) also works as a required module. At present, you can only require nodemon in to your project once (as there are static config variables), but you can re-run with new settings for a different application to monitor.

By requiring nodemon, you can extend it's functionality. Below is a simple example of using nodemon in your project:

```js
var nodemon = require('nodemon');

nodemon({
  script: 'app.js',
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});
```

Nodemon will emit a number of [events](https://github.com/remy/nodemon/blob/master/doc/events.md) by default, and when in verbose mode will also emit a `log` event (which matches what the nodemon cli tool echos).

## Arguments

The `nodemon` function takes either an object (that matches the [nodemon config](https://github.com/remy/nodemon#config-files)) or can take a string that matches the arguments that would be used on the command line:

```js
var nodemon = require('nodemon');

nodemon('-e "js json" app.js');
```

## Methods & Properties

The `nodemon` object also has a few methods and properties. Some are exposed to help with tests, but have been listed here for completeness:

### Event handling

This is simply the event emitter bus that exists inside nodemon exposed at the top level module (ie. it's the `events` api):

- `nodemon.on(event, fn)`
- `nodemon.addListener(event, fn)`
- `nodemon.once(event, fn)`
- `nodemon.emit(event)`
- `nodemon.removeAllListeners([event])`

Note: there's no `removeListener` (happy to take a pull request if it's needed).

### Test utilities

- `nodemon.reset()` - reverts nodemon's internal state to a clean slate
- `nodemon.config` - a reference to the internal config nodemon uses
