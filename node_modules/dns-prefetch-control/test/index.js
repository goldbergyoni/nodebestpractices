var dnsPrefetchControl = require('..')

var assert = require('assert')
var connect = require('connect')
var request = require('supertest')

describe('dnsPrefetchControl', function () {
  function use () {
    var result = connect()
    result.use(dnsPrefetchControl.apply(null, arguments))
    result.use(function (req, res) {
      res.end('Hello world!')
    })
    return result
  }

  it('continues onto the following middleware', function (done) {
    var app = use()

    request(app).get('/')
    .expect('Hello world!')
    .end(done)
  })

  it('sets the header to "off" by default', function (done) {
    var app = use()

    request(app).get('/')
    .expect('X-DNS-Prefetch-Control', 'off')
    .end(done)
  })

  it('can set header to "off" with configuration', function (done) {
    var app = use({ allow: false })

    request(app).get('/')
    .expect('X-DNS-Prefetch-Control', 'off')
    .end(done)
  })

  it('can set header to "on" with configuration', function (done) {
    var app = use({ allow: true })

    request(app).get('/')
    .expect('X-DNS-Prefetch-Control', 'on')
    .end(done)
  })

  it('names its function and middleware', function () {
    assert.equal(dnsPrefetchControl.name, 'dnsPrefetchControl')
    assert.equal(dnsPrefetchControl().name, 'dnsPrefetchControl')
  })
})
