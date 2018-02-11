const fs = require('fs');

console.time('math1-no-io');
const dataToSave = 50*100*300;
console.timeEnd('math1-no-io');

console.time('filesave-io');
fs.sa
console.timeEnd('filesave-io');