# Events

nodemon will emit events based on the child process.

## Commands

- restart
- config:update
- quit

## States

- start - child process has started
- crash - child process has crashed (nodemon will not emit exit)
- exit - child process has cleanly exited (ie. no crash)
- restart([ array of files triggering the restart ]) - child process has restarted
- config:update - nodemon's config has changed

## Messages

- log({ type, message (plain text log), colour (colour coded log) }) - logging from nodemon (not the child process)
- stdout - the stdout stream from the child process
- stderr - the stderr stream from the child process
- readable - stdout and stderr streams are ready ([example](https://github.com/remy/nodemon#pipe-output-to-somewhere-else))

Note that if you want to supress the normal stdout & stderr of the child, in favour
of processing the stream manually using the stdout/stderr nodemon events, pass
nodemon the option of `stdout: false`.

## Using nodemon events

If nodemon is required, events can be bound and emitted on the nodemon object:

```js
var nodemon = require('nodemon');

nodemon({ script: 'app.js' }).on('start', function () {
  console.log('nodemon started');
}).on('crash', function () {
  console.log('script crashed for some reason');
});

// force a restart
nodemon.emit('restart');

// force a quit
nodemon.emit('quit');
```

If nodemon is a spawned process, then the child (nodemon) will emit message
events whereby the event argument contains the event type, and instead of
emitting events, you `send` the command:

```js
var app = spawnNodemon();

app.on('message', function (event) {
  if (event.type === 'start') {
    console.log('nodemon started');
  } else if (event.type === 'crash') {
    console.log('script crashed for some reason');
  }
});

// force a restart
app.send('restart');

// force a quit
app.send('quit');
```

Note that even though the child will still emit a `message` event whose type is
`exit`, it makes more sense to listen to the actual `exit` event on the child:

```js
app.on('exit', function () {
  console.log('nodemon quit');
});
```
