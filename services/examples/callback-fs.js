var fs = require('fs');
console.log('1')

fs.readFile('./services/examples/123.txt', function(error, data) {
    console.log('3')
    console.log(`Event arrived, Error is ${error}, data is ${data}`)
})

setTimeout(function() {
    console.log('4')
}, 0);


console.log('2')
