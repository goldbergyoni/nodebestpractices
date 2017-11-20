var fs = require('fs');
//now
console.log('starting');
fs.readFile('./services/examples/123.txt', function(error, data) {
    console.log(`Event arrived, Error is ${error}, data is ${data}`)
})

console.log('ending');