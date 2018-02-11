const fs = require('fs');

console.time('math1-no-io');
const dataToSave = `Data: ${50*100*300}`;
for(i=0;i<3000;i++)
console.timeEnd('math1-no-io');

console.time('filesave-io');
fs.appendFileSync('file.txt', dataToSave);
console.timeEnd('filesave-io');