fs           = require 'fs'
CoffeeScript = require 'coffee-script'
nodeunit     = require 'nodeunit'
UglifyJS     = require 'uglify-js'

task 'build', 'build the JavaScript files from CoffeeScript source', build = (cb) ->
  source = fs.readFileSync 'src/ipaddr.coffee', 'utf-8'
  fs.writeFileSync 'lib/ipaddr.js', CoffeeScript.compile source.toString()

  invoke 'test'
  invoke 'compress'

task 'test', 'run the bundled tests', (cb) ->
  nodeunit.reporters.default.run ['test']

task 'compress', 'uglify the resulting javascript', (cb) ->
  source = fs.readFileSync 'lib/ipaddr.js', 'utf-8'
  fs.writeFileSync('ipaddr.min.js', UglifyJS.minify(source).code)
