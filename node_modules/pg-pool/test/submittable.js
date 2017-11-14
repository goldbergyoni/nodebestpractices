'use strict'
const Cursor = require('pg-cursor')
const expect = require('expect.js')
const describe = require('mocha').describe
const it = require('mocha').it

const Pool = require('../')

describe('submittle', () => {
  it('is returned from the query method', false, (done) => {
    const pool = new Pool()
    const cursor = pool.query(new Cursor('SELECT * from generate_series(0, 1000)'))
    cursor.read((err, rows) => {
      expect(err).to.be(undefined)
      expect(!!rows).to.be.ok()
      cursor.close(done)
    })
  })
})
