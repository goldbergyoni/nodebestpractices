var assert = require('assert')
var Reader = require('../')
describe('packet-reader', function() {
  beforeEach(function() {
    this.reader = new Reader(1)
  })

  it('reads perfect 1 length buffer', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 1, 1]))
    var result = this.reader.read()
    assert.equal(result.length, 1)
    assert.equal(result[0], 1)
    assert.strictEqual(false, this.reader.read())
  })

  it('reads perfect longer buffer', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 4, 1, 2, 3, 4]))
    var result = this.reader.read()
    assert.equal(result.length, 4)
    assert.strictEqual(false, this.reader.read())
  })

  it('reads two parts', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 1]))
    var result = this.reader.read()
    assert.strictEqual(false, result)
    this.reader.addChunk(new Buffer([2]))
    var result = this.reader.read()
    assert.equal(result.length, 1, 'should return 1 length buffer')
    assert.equal(result[0], 2)
    assert.strictEqual(this.reader.read(), false)
  })

  it('reads multi-part', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 16]))
    assert.equal(false, this.reader.read())
    this.reader.addChunk(new Buffer([1, 2, 3, 4, 5, 6, 7, 8]))
    assert.equal(false, this.reader.read())
    this.reader.addChunk(new Buffer([9, 10, 11, 12, 13, 14, 15, 16]))
    var result = this.reader.read()
    assert.equal(result.length, 16)
  })

  it('resets internal buffer at end of packet', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 16]))
    this.reader.addChunk(new Buffer([1, 2, 3, 4, 5, 6, 7, 8]))
    this.reader.addChunk(new Buffer([9, 10, 11, 12, 13, 14, 15, 16]))
    var result = this.reader.read()
    assert.equal(result.length, 16)

    var newChunk = new Buffer([0, 0, 0, 0, 16])
    this.reader.addChunk(newChunk)
    assert.equal(this.reader.offset, 0, 'should have been reset to 0.')
    assert.strictEqual(this.reader.chunk, newChunk)
  })

  it('reads multiple messages from single chunk', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 1, 2]))
    var result = this.reader.read()
    assert.equal(result.length, 1, 'should have 1 length buffer')
    assert.equal(result[0], 1)
    var result = this.reader.read()
    assert.equal(result.length, 2, 'should have 2 length buffer but was ' + result.length)
    assert.equal(result[0], 1)
    assert.equal(result[1], 2)
    assert.strictEqual(false, this.reader.read())
  })

  it('reads 1 and a split', function() {
    this.reader.addChunk(new Buffer([0, 0, 0, 0, 1, 1, 0, 0]))//, 0, 0, 2, 1, 2]))
    var result = this.reader.read()
    assert.equal(result.length, 1, 'should have 1 length buffer')
    assert.equal(result[0], 1)
    var result = this.reader.read()
    assert.strictEqual(result, false)

    this.reader.addChunk(new Buffer([0, 0, 2, 1, 2]))
    var result = this.reader.read()
    assert.equal(result.length, 2, 'should have 2 length buffer but was ' + result.length)
    assert.equal(result[0], 1)
    assert.equal(result[1], 2)
    assert.strictEqual(false, this.reader.read())
  })
})

describe('variable length header', function() {
  beforeEach(function() {
    this.reader = new Reader()
  })

  it('reads double message buffers', function() {
    this.reader.addChunk(new Buffer([
                                0, 0, 0, 1, 1,
                                0, 0, 0, 2, 1, 2]))
    var result = this.reader.read()
    assert(result)
    assert.equal(result.length, 1)
    assert.equal(result[0], 1)
    result = this.reader.read()
    assert(result)
    assert.equal(result.length, 2)
    assert.equal(result[0], 1)
    assert.equal(result[1], 2)
    assert.strictEqual(this.reader.read(), false)
  })
})

describe('1 length code', function() {
  beforeEach(function() {
    this.reader = new Reader(1)
  })

  it('reads code', function() {
    this.reader.addChunk(new Buffer([9, 0, 0, 0, 1, 1]))
    var result = this.reader.read()
    assert(result)
    assert.equal(this.reader.header, 9)
    assert.equal(result.length, 1)
    assert.equal(result[0], 1)
  })

  it('is set on uncompleted read', function() {
    assert.equal(this.reader.header, null)
    this.reader.addChunk(new Buffer([2, 0, 0, 0, 1]))
    assert.strictEqual(this.reader.read(), false)
    assert.equal(this.reader.header, 2)
  })
})

describe('postgres style packet', function() {
  beforeEach(function() {
    this.reader = new Reader({
      headerSize: 1,
      lengthPadding: -4
    })
  })

  it('reads with padded length', function() {
    this.reader.addChunk(new Buffer([1, 0, 0, 0, 8, 0, 0, 2, 0]))
    var result = this.reader.read()
    assert(result)
    assert.equal(result.length, 4)
    assert.equal(result[0], 0)
    assert.equal(result[1], 0)
    assert.equal(result[2], 2)
    assert.equal(result[3], 0)
  })
})
