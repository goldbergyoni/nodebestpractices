path = require 'path'

pathToLib = path.resolve __dirname, '../../js/lib'

require('little-popo')(pathToLib, no)