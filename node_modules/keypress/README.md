keypress
========
### Make any Node ReadableStream emit "keypress" events


Previous to Node `v0.8.x`, there was an undocumented `"keypress"` event that
`process.stdin` would emit when it was a TTY. Some people discovered this hidden
gem, and started using it in their own code.

Now in Node `v0.8.x`, this `"keypress"` event does not get emitted by default,
but rather only when it is being used in conjuction with the `readline` (or by
extension, the `repl`) module.

This module is the exact logic from the node `v0.8.x` releases ripped out into its
own module.

__Bonus:__ Now with mouse support!

Installation
------------

Install with `npm`:

``` bash
$ npm install keypress
```

Or add it to the `"dependencies"` section of your _package.json_ file.


Example
-------

#### Listening for "keypress" events

``` js
var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
```

#### Listening for "mousepress" events

``` js
var keypress = require('keypress');

// make `process.stdin` begin emitting "mousepress" (and "keypress") events
keypress(process.stdin);

// you must enable the mouse events before they will begin firing
keypress.enableMouse(process.stdout);

process.stdin.on('mousepress', function (info) {
  console.log('got "mousepress" event at %d x %d', info.x, info.y);
});

process.on('exit', function () {
  // disable mouse on exit, so that the state
  // is back to normal for the terminal
  keypress.disableMouse(process.stdout);
});
```


License
-------

(The MIT License)

Copyright (c) 2012 Nathan Rajlich &lt;nathan@tootallnate.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
