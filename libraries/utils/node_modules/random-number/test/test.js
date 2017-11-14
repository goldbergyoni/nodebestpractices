void function(){
    var klara = require('./klara.js')
    var claire = require('claire')
    var Int = claire.data.Int
    var choice = claire.choice
    var rn = require('../index.js')
    var log = console.log.bind(console)
    var value = klara.value


    var options  = claire.label('options')(function(size){
      var min     = value(size, choice(Int, undefined))
      var max     = value(size, choice(Int, undefined))
      var integer = value(size, choice(undefined, true, false))
      return setopts({}, min, max, integer)
    })

    var args = claire.label('arguments')(function(size){
      var min     = value(size, choice(Int, undefined))
      var max     = value(size, choice(Int, undefined))
      var integer = value(size, choice(undefined, true, false))
      if ( min >= max ) max += Math.abs(min) + Math.abs(max)
      return [min, max, integer]
    })

    function setopts(opts, min, max, integer){
      if ( min     != null ) opts.min     = min
      if ( max     != null ) opts.max     = max
      if ( integer != null ) opts.integer = integer
      if ( opts.min >= opts.max ) opts.max += Math.abs(opts.min) + Math.abs(opts.max)
      return opts
    }

    function is_number(options){
      return !isNaN(rn(options))
    }

    function is_number_gen(options, args){
      var o = setopts(rn.defaults(options), args[0], args[1], args[2])
      var g = rn.generator(o)
      return !isNaN(g(o.min, o.max, o.integer))
    }

    function lower_bound(options){
      return rn(options) >= rn.defaults(options).min
    }

    function lower_bound_gen(options, args){
      var o = setopts(rn.defaults(options), args[0], args[1], args[2])
      var g = rn.generator(o)
      var r = g(o.min, o.max, o.integer)
      return  r >= o.min
    }

    function upper_bound(options){
      return rn(options) <= rn.defaults(options).max
    }

    function upper_bound_gen(options, args){
      var o = setopts(rn.defaults(options), args[0], args[1], args[2])
      var g = rn.generator(o)
      return g(o.min, o.max, o.integer) <= o.max
    }

    function label(name, value){ return name+': '+value+' | ' }

    function analyze(x){
      var integer =  label('', x.integer ? 'integers' : 'floats')
      var min =  label('min', x.min < 0 ? 'negative' : 'positive' )
      var max =  label('max', x.max < 0 ? 'negative' : 'positive' )
      return integer + min + max
    }

    var props = [
      { title : 'always number'
      , fn  : is_number }
    , { title : 'greater than or equal to lower bound'
      , fn  : lower_bound }
    , { title : 'less than or equal to upper bound'
      , fn  : upper_bound }
    ]

    klara([options], props, analyze, 1000)

    var props_gen = [
      { title : 'always number'
      , fn  : is_number_gen }
    , { title : 'greater than or equal to lower bound'
      , fn  : lower_bound_gen }
    , { title : 'less than or equal to upper bound'
      , fn  : upper_bound_gen }
    ]

    klara([options, args], props_gen, analyze, 1000)


}()
