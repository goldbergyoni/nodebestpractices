var test = require('tape')
var b64 = require('../')

test('decode url-safe style base64 strings', function (t) {
  var expected = [0xff, 0xff, 0xbe, 0xff, 0xef, 0xbf, 0xfb, 0xef, 0xff]

  var actual = b64.toByteArray('//++/++/++//')
  for (var i = 0; i < actual.length; i++) {
    t.equal(actual[i], expected[i])
  }

  actual = b64.toByteArray('__--_--_--__')
  for (i = 0; i < actual.length; i++) {
    t.equal(actual[i], expected[i])
  }

  t.end()
})
