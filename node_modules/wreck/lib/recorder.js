'use strict';

// Load modules

const Boom = require('boom');
const Hoek = require('hoek');
const Stream = require('stream');


// Declare internals

const internals = {};


module.exports = internals.Recorder = function (options) {

    Stream.Writable.call(this);

    this.settings = options;                // No need to clone since called internally with new object
    this.buffers = [];
    this.length = 0;
};

Hoek.inherits(internals.Recorder, Stream.Writable);


internals.Recorder.prototype._write = function (chunk, encoding, next) {

    if (this.settings.maxBytes &&
        this.length + chunk.length > this.settings.maxBytes) {

        return this.emit('error', Boom.badRequest('Payload content length greater than maximum allowed: ' + this.settings.maxBytes));
    }

    this.length = this.length + chunk.length;
    this.buffers.push(chunk);
    next();
};


internals.Recorder.prototype.collect = function () {

    const buffer = (this.buffers.length === 0 ? new Buffer(0) : (this.buffers.length === 1 ? this.buffers[0] : Buffer.concat(this.buffers, this.length)));
    return buffer;
};
