'use strict'
const net = require('net')
const co = require('co')
const expect = require('expect.js')

const describe = require('mocha').describe
const it = require('mocha').it
const before = require('mocha').before
const after = require('mocha').after

const Pool = require('../')

describe('connection timeout', () => {
  before((done) => {
    this.server = net.createServer((socket) => {
    })

    this.server.listen(() => {
      this.port = this.server.address().port
      done()
    })
  })

  after((done) => {
    this.server.close(done)
  })

  it('should callback with an error if timeout is passed', (done) => {
    const pool = new Pool({ connectionTimeoutMillis: 10, port: this.port })
    pool.connect((err, client, release) => {
      expect(err).to.be.an(Error)
      expect(err.message).to.contain('timeout')
      expect(client).to.equal(undefined)
      expect(pool.idleCount).to.equal(0)
      done()
    })
  })

  it('should reject promise with an error if timeout is passed', (done) => {
    const pool = new Pool({ connectionTimeoutMillis: 10, port: this.port })
    pool.connect().catch(err => {
      expect(err).to.be.an(Error)
      expect(err.message).to.contain('timeout')
      expect(pool.idleCount).to.equal(0)
      done()
    })
  })

  it('should handle multiple timeouts', co.wrap(function * () {
    const errors = []
    const pool = new Pool({ connectionTimeoutMillis: 1, port: this.port })
    for (var i = 0; i < 15; i++) {
      try {
        yield pool.connect()
      } catch (e) {
        errors.push(e)
      }
    }
    expect(errors).to.have.length(15)
  }.bind(this)))

  it('should timeout on checkout of used connection', (done) => {
    const pool = new Pool({ connectionTimeoutMillis: 100, max: 1 })
    pool.connect((err, client, release) => {
      expect(err).to.be(undefined)
      expect(client).to.not.be(undefined)
      pool.connect((err, client) => {
        expect(err).to.be.an(Error)
        expect(client).to.be(undefined)
        release()
        pool.end(done)
      })
    })
  })

  it('should timeout on query if all clients are busy', (done) => {
    const pool = new Pool({ connectionTimeoutMillis: 100, max: 1 })
    pool.connect((err, client, release) => {
      expect(err).to.be(undefined)
      expect(client).to.not.be(undefined)
      pool.query('select now()', (err, result) => {
        expect(err).to.be.an(Error)
        expect(result).to.be(undefined)
        release()
        pool.end(done)
      })
    })
  })

  it('should recover from timeout errors', (done) => {
    const pool = new Pool({ connectionTimeoutMillis: 100, max: 1 })
    pool.connect((err, client, release) => {
      expect(err).to.be(undefined)
      expect(client).to.not.be(undefined)
      pool.query('select now()', (err, result) => {
        expect(err).to.be.an(Error)
        expect(result).to.be(undefined)
        release()
        pool.query('select $1::text as name', ['brianc'], (err, res) => {
          expect(err).to.be(undefined)
          expect(res.rows).to.have.length(1)
          pool.end(done)
        })
      })
    })
  })
})
