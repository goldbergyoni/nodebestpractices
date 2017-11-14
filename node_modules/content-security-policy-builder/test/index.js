var builder = require('..')

var assert = require('assert')

describe('builder', function () {
  it('builds no directives', function () {
    var result = builder({
      directives: {}
    })

    assert.equal(result, '')
  })

  it('builds directives with camelCased keys', function () {
    var result = builder({
      directives: {
        whatThe: 'heck',
        defaultSrc: "'self'",
        playtimeIsOver: ['star', 'fox']
      }
    })

    var split = result.split('; ').sort()

    assert.equal(split.length, 3)
    assert.equal(split[0], "default-src 'self'")
    assert.equal(split[1], 'playtime-is-over star fox')
    assert.equal(split[2], 'what-the heck')
  })

  it('builds directives with dash-separated keys', function () {
    var result = builder({
      directives: {
        'do-a': 'barrel roll',
        'default-src': "'self'",
        'andross-has-ordered-us': ['to', 'take', 'you', 'down']
      }
    })

    var split = result.split('; ').sort()

    assert.equal(split.length, 3)
    assert.equal(split[0], 'andross-has-ordered-us to take you down')
    assert.equal(split[1], "default-src 'self'")
    assert.equal(split[2], 'do-a barrel roll')
  })

  it('builds directives with a mix of key types', function () {
    var result = builder({
      directives: {
        'hey-einstein': "i'm on your side",
        defaultSrc: "'self'",
        falco: ['lombardi']
      }
    })

    var split = result.split('; ').sort()

    assert.equal(split.length, 3)
    assert.equal(split[0], "default-src 'self'")
    assert.equal(split[1], 'falco lombardi')
    assert.equal(split[2], "hey-einstein i'm on your side")
  })

  it('builds directives with empty values', function () {
    var result = builder({
      directives: {
        i: '',
        cant: [],
        lose: [''],
        wow: true
      }
    })

    var split = result.split('; ').sort()

    assert.equal(split.length, 4)
    assert.equal(split[0], 'cant')
    assert.equal(split[1], 'i')
    assert.equal(split[2], 'lose')
    assert.equal(split[3], 'wow')
  })

  it('throws errors when passed two keys of different types but the same names', function () {
    assert.throws(function () {
      builder({
        directives: {
          defaultSrc: "'self'",
          'default-src': 'falco.biz'
        }
      })
    })
  })
})
