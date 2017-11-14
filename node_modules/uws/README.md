## Usage
`uws` tries to mimic `ws` as closely as possible without sacrificing too much performance. In most cases you simply swap `require('ws')` with `require('uws')`:

```javascript
var WebSocketServer = require('uws').Server;
var wss = new WebSocketServer({ port: 3000 });

function onMessage(message) {
    console.log('received: ' + message);
}

wss.on('connection', function(ws) {
    ws.on('message', onMessage);
    ws.send('something');
});
```

##### Deviations from ws
There are some important incompatibilities with `ws` though, we aim to be ~90% compatible but will never implement behavior that is deemed too inefficient:

* Binary data is passed zero-copy as an `ArrayBuffer`. This means you need to copy it to keep it past the callback. It also means you need to convert it with `Buffer.from(message)` if you expect a `Node.js Buffer`.
* `webSocket._socket` is not a `net.Socket`, it is just a getter function with very basic functionalities.
* `webSocket._socket.remote...` might fail, you need to cache it at connection.
* `webSocket` acts like an `EventEmitter` with one listener per event maximum.
* `webSocket.upgradeReq` is only valid during execution of the connection handler. If you want to keep properties of the upgradeReq for the entire lifetime of the webSocket you better attach that specific property to the webSocket at connection.

## Installation
[![](https://nodei.co/npm/uws.png)](https://www.npmjs.com/package/uws)

At installation `uws` will try to recompile itself using the system's C++11 compiler (GCC 4.8+, Clang 3.3, VC++ 2015+).
If this fails it will silently fall back to using the precompiled binaries.
NPM installation will never fail but `require('uws')` will throw if it cannot properly load the binary module.
