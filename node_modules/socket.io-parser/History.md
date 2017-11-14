
3.1.2 / 2017-04-27
==================

  * [chore] Bump has-binary2 to version 1.0.2 (#70)
  * [fix] Fix Blob detection for iOS 8/9 (#69)

3.1.1 / 2017-04-25
==================

  * [fix] Ensure globals are functions before running `instanceof` (#68)

3.1.0 / 2017-04-24
==================

  * [chore] Bump debug to version 2.6.4 (#67)
  * [feat] Move binary detection to the parser (#66)

3.0.0 / 2017-04-04
==================

  * [chore] Bump isarray to version 2.0.1 (#65)
  * [chore] Use native JSON and drop support for older nodejs versions (#64)

2.3.2 / 2016-12-30
==================

  * [perf] Small optimisations (#57)
  * [chore] Update zuul config to speed up tests in browser (#58)
  * [refactor] Remove useless variable (#55)
  * [chore] Bump dependencies (#56)
  * [refactor] Remove unused var (#53)
  * [refactor] Use strict equality when possible (#52)

2.3.1 / 2016-10-24
==================

* [chore] Revert "Remove deprecated isarray dependency" (#50)

2.3.0 / 2016-10-21
==================

  * [perf] Split try catch into separate function (#40)
  * [chore] remove browsers setting from .zuul.yml (#34)
  * [chore] bump zuul (#37)
  * [chore] Bump zuul to 3.11.0 & zuul-ngrok to 4.0.0 (#41)
  * [chore] Update zuul browser settings following EOL notices (#42)
  * [chore] Restrict files included in npm package (#45)
  * [chore] Update zuul browser settings (#44)
  * [chore] Remove deprecated isarray dependency (#46)
  * [chore] Make the build status badge point towards master (#47)
  * [chore] Move benchmark to dev dependencies (#48)

2.2.6 / 2015-11-25
==================

  * fix the order of exported events [chylli]

2.2.5 / 2015-11-21
==================

  * package: bump debug
  * update JSON3 to 3.3.2

2.2.4 / 2015-03-03
==================

 * index: fix off-by-one bound checks

2.2.3 / 2015-02-03
==================

 * index: fix potential infinite loop with malicious binary packet

2.2.2 / 2014-09-04
==================

 * prevent direct `Buffer` reference that breaks browserify
 * binary: reuse `isBuf` helper

2.2.1 / 2014-06-20
==================

 * added benchmarking [kevin-roark]
 * upgrade component-emitter to 1.1.2 [kevin-roark]
 * update protocol version [kevin-roark]
 * less indentation and a small optimization [kevin-roark]

2.2.0 / 2014-05-30
==================

 * added a BINARY_ACK type [kevin-roark]

2.1.5 / 2014-05-24
==================

 * don't iterate keys of `Date` objects [Rase-]

2.1.4 / 2014-05-17
==================

 * fix null reconstruction bug [kevin-roark]

2.1.3 / 2014-04-27
==================

 * bump zuul version
 * updated protocol version

2.1.2 / 2014-03-06
==================

 * added support for binary in ACK packets

2.1.1 / 2014-03-04
==================

 * removed has-binary-data dependency
 * fixed the object check in binary.removeBlobs

2.1.0 / 2014-03-01
==================

 * faster and smaller binary parser and protocol [kevin-roark]

2.0.0 / 2014-02-19
==================

 * binary support [kevin-roark]

1.1.2 / 2014-02-11
==================

 * package: bump `json3` to fix IE6-7

1.1.1 / 2014-02-10
==================

 * package: bump debug to fix browserify issues

1.1.0 / 2013-12-25
==================

 * index: use `json3`

1.0.3 / 2012-12-18
==================

  * index: added instrumentation through `debug`
  * index: make sure decoded `id` is a `Number`

1.0.2 / 2012-12-18
==================

  * index: allow for falsy values in `id` and `data`

1.0.1 / 2012-12-10
==================

  * Revision 1
