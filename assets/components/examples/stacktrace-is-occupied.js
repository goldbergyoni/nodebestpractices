console.log('Starting');
setTimeout(function() {
   console.log('After timeout') 
}, 100);

var i = 0;
while (i < 1e10) i++;
console.log("I counted to " + i);

console.log('Ending');