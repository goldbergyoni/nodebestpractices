//binary data writer tuned for creating
//postgres message packets as effeciently as possible by reusing the
//same buffer to avoid memcpy and limit memory allocations
var Writer = module.exports = function(size) {
  this.size = size || 1024;
  this.buffer = Buffer(this.size + 5);
  this.offset = 5;
  this.headerPosition = 0;
};

//resizes internal buffer if not enough size left
Writer.prototype._ensure = function(size) {
  var remaining = this.buffer.length - this.offset;
  if(remaining < size) {
    var oldBuffer = this.buffer;
    // exponential growth factor of around ~ 1.5
    // https://stackoverflow.com/questions/2269063/buffer-growth-strategy
    var newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
    this.buffer = new Buffer(newSize);
    oldBuffer.copy(this.buffer);
  }
};

Writer.prototype.addInt32 = function(num) {
  this._ensure(4);
  this.buffer[this.offset++] = (num >>> 24 & 0xFF);
  this.buffer[this.offset++] = (num >>> 16 & 0xFF);
  this.buffer[this.offset++] = (num >>>  8 & 0xFF);
  this.buffer[this.offset++] = (num >>>  0 & 0xFF);
  return this;
};

Writer.prototype.addInt16 = function(num) {
  this._ensure(2);
  this.buffer[this.offset++] = (num >>>  8 & 0xFF);
  this.buffer[this.offset++] = (num >>>  0 & 0xFF);
  return this;
};

//for versions of node requiring 'length' as 3rd argument to buffer.write
var writeString = function(buffer, string, offset, len) {
  buffer.write(string, offset, len);
};

//overwrite function for older versions of node
if(Buffer.prototype.write.length === 3) {
  writeString = function(buffer, string, offset, len) {
    buffer.write(string, offset);
  };
}

Writer.prototype.addCString = function(string) {
  //just write a 0 for empty or null strings
  if(!string) {
    this._ensure(1);
  } else {
    var len = Buffer.byteLength(string);
    this._ensure(len + 1); //+1 for null terminator
    writeString(this.buffer, string, this.offset, len);
    this.offset += len;
  }

  this.buffer[this.offset++] = 0; // null terminator
  return this;
};

Writer.prototype.addChar = function(c) {
  this._ensure(1);
  writeString(this.buffer, c, this.offset, 1);
  this.offset++;
  return this;
};

Writer.prototype.addString = function(string) {
  string = string || "";
  var len = Buffer.byteLength(string);
  this._ensure(len);
  this.buffer.write(string, this.offset);
  this.offset += len;
  return this;
};

Writer.prototype.getByteLength = function() {
  return this.offset - 5;
};

Writer.prototype.add = function(otherBuffer) {
  this._ensure(otherBuffer.length);
  otherBuffer.copy(this.buffer, this.offset);
  this.offset += otherBuffer.length;
  return this;
};

Writer.prototype.clear = function() {
  this.offset = 5;
  this.headerPosition = 0;
  this.lastEnd = 0;
};

//appends a header block to all the written data since the last
//subsequent header or to the beginning if there is only one data block
Writer.prototype.addHeader = function(code, last) {
  var origOffset = this.offset;
  this.offset = this.headerPosition;
  this.buffer[this.offset++] = code;
  //length is everything in this packet minus the code
  this.addInt32(origOffset - (this.headerPosition+1));
  //set next header position
  this.headerPosition = origOffset;
  //make space for next header
  this.offset = origOffset;
  if(!last) {
    this._ensure(5);
    this.offset += 5;
  }
};

Writer.prototype.join = function(code) {
  if(code) {
    this.addHeader(code, true);
  }
  return this.buffer.slice(code ? 0 : 5, this.offset);
};

Writer.prototype.flush = function(code) {
  var result = this.join(code);
  this.clear();
  return result;
};
