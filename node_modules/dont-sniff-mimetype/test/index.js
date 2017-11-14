var nosniff = require('..')

var assert = require('assert')
var connect = require('connect')
var request = require('supertest')

describe('nosniff', function () {
  it('sets header properly', function (done) {
    var app = connect()
    app.use(nosniff())
    app.use(function (req, res) {
      res.end('Hello world!')
    })

    request(app).get('/')
      .expect('X-Content-Type-Options', 'nosniff', done)
  })

  it('names its function and middleware', function () {
    assert.equal(nosniff.name, 'nosniff')
    assert.equal(nosniff().name, 'nosniff')
  })
})
