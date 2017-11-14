'use strict'
const co = require('co')
const expect = require('expect.js')

const describe = require('mocha').describe
const it = require('mocha').it

const Pool = require('../')

const wait = time => new Promise((resolve) => setTimeout(resolve, time))

describe('idle timeout', () => {
  it('should timeout and remove the client', (done) => {
    const pool = new Pool({ idleTimeoutMillis: 10 })
    pool.query('SELECT NOW()')
    pool.on('remove', () => {
      expect(pool.idleCount).to.equal(0)
      expect(pool.totalCount).to.equal(0)
      done()
    })
  })

  it('times out and removes clients when others are also removed', co.wrap(function * () {
    const pool = new Pool({ idleTimeoutMillis: 10 })
    const clientA = yield pool.connect()
    const clientB = yield pool.connect()
    clientA.release()
    clientB.release(new Error())

    const removal = new Promise((resolve) => {
      pool.on('remove', () => {
        expect(pool.idleCount).to.equal(0)
        expect(pool.totalCount).to.equal(0)
        resolve()
      })
    })

    const timeout = wait(100).then(() =>
      Promise.reject(new Error('Idle timeout failed to occur')))

    try {
      yield Promise.race([removal, timeout])
    } finally {
      pool.end()
    }
  }))

  it('can remove idle clients and recreate them', co.wrap(function * () {
    const pool = new Pool({ idleTimeoutMillis: 1 })
    const results = []
    for (var i = 0; i < 20; i++) {
      let query = pool.query('SELECT NOW()')
      expect(pool.idleCount).to.equal(0)
      expect(pool.totalCount).to.equal(1)
      results.push(yield query)
      yield wait(2)
      expect(pool.idleCount).to.equal(0)
      expect(pool.totalCount).to.equal(0)
    }
    expect(results).to.have.length(20)
  }))

  it('does not time out clients which are used', co.wrap(function * () {
    const pool = new Pool({ idleTimeoutMillis: 1 })
    const results = []
    for (var i = 0; i < 20; i++) {
      let client = yield pool.connect()
      expect(pool.totalCount).to.equal(1)
      expect(pool.idleCount).to.equal(0)
      yield wait(10)
      results.push(yield client.query('SELECT NOW()'))
      client.release()
      expect(pool.idleCount).to.equal(1)
      expect(pool.totalCount).to.equal(1)
    }
    expect(results).to.have.length(20)
    return pool.end()
  }))
})
