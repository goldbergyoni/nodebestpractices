node-packet-reader
==================

Handy little well tested module for reading length-prefixed binary packets.

Since buffers come off a socket in randomly sized chunks you can't expect them to cleanly
break on packet boundaries.  This module allows you to push buffers in and read
full packets out the other side, so you can get to parsing right away and not have
to manage concatenating partial buffers and searching through them for packets.

## install

` $ npm install packet-reader `

## example

```js
var Reader = require('packet-reader')

var reader = new Reader()
//assuming you have a socket emitting `data` events
socket.on('data', function(buffer) {
  reader.addChunk(buffer)
  var packet = reader.read()
  while(packet) {
    //do something with fully parsed packet
  }
})
```


here's a more full featured example:

let's assume our "packet" for our protocol is 32-bit Big Endian length-prefixed strings
so a "hello world" packet would look something like [length, string]
`[0, 0, 0 0x0B, h, e, l, l, o, w, o, r, l, d]`

```js
var Transform = require('stream').Transform
var Reader = require('packet-reader')
var reader = new Reader()
var parser = new Transform()
parser._transform = function(chunk, encoding, cb) {
  reader.addChunk(chunk)
  var packet = reader.read()
  while(packet) {
    this.push(packet.toString('utf8'))
    packet = reader.read()
  }
  cb()
}

var server = net.createServer(function(socket) {
  socket.pipe(parser).pipe(stdout)
})

```

There are a few config options for setting optional pre-length padding byte.  Read the tests for details.

## License

MIT

Copyright 2015 Brian M. Carlson
All rights reserved.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
