'use strict';

// Load modules

const Hoek = require('hoek');
const Stream = require('stream');


// Declare internals

const internals = {};


module.exports = internals.Payload = function (payload, encoding) {

    Stream.Readable.call(this);

    const data = [].concat(payload || '');
    let size = 0;
    for (let i = 0; i < data.length; ++i) {
        const chunk = data[i];
        size = size + chunk.length;
        data[i] = Buffer.isBuffer(chunk) ? chunk : new Buffer(chunk);
    }

    this._data = Buffer.concat(data, size);
    this._position = 0;
    this._encoding = encoding || 'utf8';
};

Hoek.inherits(internals.Payload, Stream.Readable);


internals.Payload.prototype._read = function (size) {

    const chunk = this._data.slice(this._position, this._position + size);
    this.push(chunk, this._encoding);
    this._position = this._position + chunk.length;

    if (this._position >= this._data.length) {
        this.push(null);
    }
};
