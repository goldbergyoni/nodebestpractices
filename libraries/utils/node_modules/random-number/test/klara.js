void function(){
  "use strict"

  var test = require('tape')
  var claire = require('claire')
  var for_all = claire.forAll
  var check = claire.check

  function value(size, gen){ return claire.value(size, gen, gen) }

  function check_property(args, property, analyze, count){
    test(property.title, function(t){
      var checks = for_all.apply(null, args)
                          .satisfy(property.fn)

      if ( analyze != null ) checks = checks.classify(analyze)

      var results = check(count, checks)
      results.failed.forEach(function(result){
        console.log(results+'')
        t.fail('')
      })
      if ( results.failed.length == 0 ) {
        t.pass('all test passed')
      }
      t.end()
    })
  }

  module.exports = function(options, properties, analyze, count){
    return properties.forEach(function(prop, idx, properties){
      return check_property(options, prop, analyze, count || 100)
    })
  }

  module.exports.value = value

}()

