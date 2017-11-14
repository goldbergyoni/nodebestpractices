
2.1.1 / 2017-04-27
==================

  * [chore] Bump has-binary2 to version 1.0.2 (#93)

2.1.0 / 2017-04-24
==================

  * [chore] Drop support for old nodejs versions (0.10 & 0.12) (#92)
  * [revert] "[fix] Enable to utf8-decode string payloads (#88)" (#91)

2.0.3 / 2017-04-05
==================

  * (chore] Use has-binary2 (#90)

2.0.2 / 2017-03-21
==================

  * [fix] Enable to utf8-decode string payloads (#88)

2.0.1 / 2017-03-06
==================

  * [fix] Encode string payloads as strings even if binary supported (#85)

2.0.0 / 2016-12-23
==================

  * [perf] Micro optimisations (#84)
  * [fix] Sanitize strings by removing lone surrogates (#82)
  * [perf] Use strict equality where possible (#77)
  * [style] Minor style changes (#83)
  * [fix] Fix double utf8 encoding for payloads (#81)
  * [chore] Update zuul config to speed up tests (#76)

1.3.2 / 2016-12-07
==================

  * [chore] Bump dependencies (#78)

1.3.1 / 2016-10-20
==================

  * [fix] Add safety check for global object (#71)
  * [fix] decodePacket now accepts both Buffer and ArrayBuffer as data (#64)
  * [fix] Handle undefined case properly when decoding packet (#74)
  * [chore] Bump zuul to 3.11.0 & zuul-ngrok to 4.0.0 (#70)
  * [chore] Update zuul browser settings (#73)

1.3.0 / 2016-09-26
==================

  * [fix] Fix crashes in React Native "navigator is not defined" (#55)
  * [refactor] Require base64-arraybuffer module conditionally. (#58)
  * [perf] Split try catch into separate function (#65)
  * [chore] Use wtf-8 instead of utf8 to prevent lone surrogates from generating parsing error (#68)
  * [chore] Restrict files included in npm package (#67)
  * [chore] Update license and repository url (#66)
  * [chore] Update zuul browser settings following EOL notices (#62)
  * [chore] bump zuul (#56)

1.2.4 / 2015-12-04
==================

  * fix `ArrayBuffer` encoding in base64 string

1.2.3 / 2015-11-28
==================

  * fix encoding blob as base64

1.2.2 / 2015-09-09
==================

  * fixes for iojs/node

1.2.1 / 2015-01-17
==================

 * pass has-binary result to encodePacket [rase-]
 * Fix parse error [rase-]

1.2.0 / 2015-01-11
==================

 * fix return type for decodePacket
 * README fixes
 * use travis matrix for better test runs
 * encode into binary only if needed
 * add test cases for base64 object encoding.
 * add encodeBase64Object to encoder for browser
 * avoid sending Blobs on PhantomJS (as on Android)
 * test that utf8 encoding is not on by default but can be switched on manually

1.1.0 / 2014-07-16
==================

 * make utf8 encoding/decoding optional

1.0.8 / 2014-07-16
==================

 * adjust protocol revision
 * handle invalid utf8 errors gracefully
 * fix memory leak on browser

1.0.7 / 2014-06-24
==================

 * fix decodePayloadAsBinary memory leak [christophwitzko]
 * README improvements

1.0.6 / 2014-05-30
==================

 * utf8 fixes when using binary encoding [nkzawa]

1.0.5 / 2014-05-06
==================

 * fix range error

1.0.4 / 2014-04-13
==================

 * fix `encodePayloadAsBinary` method encodes packets to base64

1.0.3 / 2014-04-10
==================

 * Fix length calculation when encoding as binary [binlain]

1.0.2 / 2014-03-16
==================

 * fix binary for android due to a bug in Blob XHR2 implementation [Rase-]

1.0.1 / 2014-03-06
==================

 * implement `blob` module to simplify code
 * bump `arraybuffer.slice`
 * style fixes

1.0.0 / 2014-02-18
==================

 * parser: added binary encoding [Rase-]
 * parser: switched to an async interface [Rase-]

0.3.0 / 2013-03-16
==================

  * parser: if callback returns `false` ignore rest of payload
  * test: fixed all broken tests

0.2.1 / 2013-03-16
==================

  * added protocol version to index.js [albertyfwu]

0.2.0 / 2013-02-26
==================

  * Changed `decodePayload` to use a callback instead of returning an array [sweetieSong, albertyfwu]

0.1.1 / 2013-01-26
==================

  * package.json fixes

0.1.0 / 2013-01-19
==================

  * Initial release
