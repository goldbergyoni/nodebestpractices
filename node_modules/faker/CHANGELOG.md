# CHANGELOG

See commit history on Github for change history
http://github.com/marak/faker.js

## v3.1.0

( partial change log see: https://github.com/Marak/faker.js/commits/master for full details )

```
[docs] Added JSDocs

[fix] Prevent apostrophes in return value of internet#domainWords
[Fix] Display first month as 1 not 0.
[fix] random.uuid not using seeded number generator
[fix] image api size check 
[fix] update bower
[fix] implement street suffix
[fix] hacker.phrase - generate random string for each lexical instance

[api] Added safe_email method
[api] Added method for getting random locale
[api] Added semver method
[api] Added parameters to fake method
[api] Added randomness to image generation
[api] adjust findName method to allow for gender based prefixes
[api] [locale] Added basic support for generating UK postcodes
[api] [locale] Added LV (Latvian) locale 
[api] [locale] Added date for Swedish locale
[api] Added better lorem methods
[api] Added system module
[api] Added finance.bitcoinAddress
```


## v3.0.0 - v2.0.0 - Missing

  See commit history on Github for change history
  http://github.com/marak/faker.js

## v2.0.0

* Adds i18n internalization of fake data sets
  - contributed by Marak
* Reduces surface of API, removes redundant API calls
  - contributed by Marak
* Replaces legacy build system with GulpJS
  - contributed by Marak
* Replaces legacy browserifying system with Browserify
  - contributed by Marak
* Adds basic financial generators
 - contributed by josefsalyer
* Adds internet.userAgent using `random-ua` library
  - contributed by Marak
* Adds currency codes and symbols using `random-ua` library
  - contributed by MQuy
* Replaces use of Math.random in favor of `node-mersenne` package
 - contributed by Marak
* Adds bower support
 - contributed by daytonn
* avatarUrl optimization
 - contributed by MQuy
* Fix - Remove `this` scope
 - contributed by goliatone
* Fix - IE9 charAt() bug
  - contributed by beastlike
* Fix - faker.date now returns a Date object instead of JSON
 - contributed by Marak

##v1.1.0

* Fixes random date functions that did not distribute results.
  - contributed by pmalouin
* Fixes context of findName
  - contributed by juampi92
* Updates to switch changes over to using 2 args to support min/max
  - contributed by avanderhoorn & edshadi
* Added ISO 3166 countries
  - contributed by MaerF0x0
* UMD support
  - contirbuted by xaka
* Uk Postal Codes
  - contributed by schmtw
* Undefined global object for webworker fix
  - contributed by dnbard