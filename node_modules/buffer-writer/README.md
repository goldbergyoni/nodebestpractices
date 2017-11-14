# buffer-writer

[![Build Status](https://secure.travis-ci.org/brianc/node-buffer-writer.png?branch=master)](http://travis-ci.org/brianc/node-buffer-writer)

Fast & efficient buffer writer used to keep memory usage low by internally recycling a single large buffer.

Used as the binary protocol writer in [node-postgres](https://github.com/brianc/node-postgres)

Since postgres requires big endian encoding, this only writes big endian numbers for now, but can & probably will easily be extended to write little endian as well.

I'll admit this has a few postgres specific things I might need to take out in the future, such as `addHeader`

## api

`var writer = new (require('buffer-writer')());`

### writer.addInt32(num)

Writes a 4-byte big endian binary encoded number to the end of the buffer.

### writer.addInt16(num)

Writes a 2-byte big endian binary encoded number to the end of the buffer.

### writer.addCString(string)

Writes a string to the buffer `utf8` encoded and adds a null character (`\0`) at the end.

### var buffer = writer.addHeader(char)

Writes the 5 byte PostgreSQL required header to the beginning of the buffer. (1 byte for character, 1 BE Int32 for length of the buffer)

### var buffer = writer.join()

Collects all data in the writer and joins it into a single, new buffer.

### var buffer = writer.flush(char)

Writes the 5 byte postgres required message header, collects all data in the writer and joins it into a single, new buffer, and then resets the writer.

## thoughts

This is kind of node-postgres specific.  If you're interested in using this for a more general purpose thing, lemme know.
I would love to work with you on getting this more reusable for your needs.

## license

MIT
