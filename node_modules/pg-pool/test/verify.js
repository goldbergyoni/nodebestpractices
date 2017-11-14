'use strict'
const expect = require('expect.js')

const describe = require('mocha').describe
const it = require('mocha').it

const Pool = require('../')

describe('verify', () => {
  it('verifies a client with a callback', false, (done) => {
    const pool = new Pool({
      verify: (client, cb) => {
        client.release()
        cb(new Error('nope'))
      }
    })

    pool.connect((err, client) => {
      expect(err).to.be.an(Error)
      expect(err.message).to.be('nope')
      pool.end()
      done()
    })
  })
})
