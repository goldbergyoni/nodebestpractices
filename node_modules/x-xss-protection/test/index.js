var xssFilter = require('..')

var connect = require('connect')
var request = require('supertest')
var rfile = require('rfile')
var each = require('async').each
var assert = require('assert')

describe('x-xss-protection', function () {
  function grabList (filename) {
    return rfile(filename)
      .split('\n')
      .filter(function (line) {
        return line.trim() !== ''
      })
  }

  var enabledBrowsers = grabList('./enabled_browser_list.txt')
  var disabledBrowsers = grabList('./disabled_browser_list.txt')

  var app
  beforeEach(function () {
    app = connect()
    app.use(xssFilter())
    app.use(function (req, res) {
      res.end('Hello world!')
    })
  })

  it('enables it for supported browsers', function (done) {
    each(enabledBrowsers, function (useragent, callback) {
      request(app).get('/').set('User-Agent', useragent)
        .expect('X-XSS-Protection', '1; mode=block', callback)
    }, done)
  })

  it('disables it for unsupported browsers', function (done) {
    each(disabledBrowsers, function (useragent, callback) {
      request(app).get('/').set('User-Agent', useragent)
        .expect('X-XSS-Protection', '0', callback)
    }, done)
  })

  it('sets header if there is an empty user-agent', function (done) {
    request(app).get('/').set('User-Agent', '')
      .expect('X-XSS-Protection', '1; mode=block', done)
  })

  it('sets header if there is no user-agent', function (done) {
    request(app).get('/').unset('User-Agent')
      .expect('X-XSS-Protection', '1; mode=block', done)
  })

  it('allows you to force the header for unsupported browsers', function (done) {
    app = connect()
    app.use(xssFilter({ setOnOldIE: true }))
    app.use(function (req, res) {
      res.end('Hello world!')
    })
    each(disabledBrowsers, function (useragent, callback) {
      request(app).get('/').set('User-Agent', useragent)
        .expect('X-XSS-Protection', '1; mode=block', callback)
    }, done)
  })

  it('names its function and middleware', function () {
    assert.equal(xssFilter.name, 'xXssProtection')
    assert.equal(xssFilter().name, 'xXssProtection')
  })
})
