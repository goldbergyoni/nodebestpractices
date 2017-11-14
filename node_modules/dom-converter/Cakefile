
exec = require('child_process').exec
fs = require 'fs'
sysPath = require 'path'

task 'compile:coffee', ->

	unless fs.existsSync './scripts/js'

		fs.mkdirSync './scripts/js'

	exec 'node ./node_modules/coffee-script/bin/coffee -bco ./scripts/js ./scripts/coffee',

		(error) ->

			if fs.existsSync '-p'

				fs.rmdirSync '-p'

			if error?

				console.log 'Compile failed: ' + error

			return

task 'build', ->

	invoke 'compile:coffee'

# This is in place until we replace the test suite runner with popo
task 'test', ->

	runTestsIn 'scripts/coffee/test', '_prepare.coffee'

runInCoffee = (path, cb) ->

	exec 'node ./node_modules/coffee-script/bin/coffee ' + path, cb

runTestsIn = (shortPath, except) ->

	fullPath = sysPath.resolve shortPath

	fs.readdir fullPath, (err, files) ->

		if err then throw Error err

		for file in files

			return if file is except

			fullFilePath = sysPath.resolve(fullPath, file)
			shortFilePath = shortPath + '/' + file

			if sysPath.extname(file) is '.coffee'

				runAsTest shortFilePath, fullFilePath

			else if fs.statSync(fullFilePath).isDirectory()

				runTestsIn shortFilePath

		return

didBeep = no

runAsTest = (shortPath, fullPath) ->

	runInCoffee fullPath, (error, stdout, stderr) ->

		output = 'Running ' + shortPath + '\n'

		if stderr

			unless didBeep

				`console.log("\007")`

				didBeep = yes

			output += 'Error\n' + stdout + stderr + '\n'

		else if stdout

			output += '\n' + stdout

		console.log output