const fs = require('fs');
const http = require('https');

console.time('math1-no-io');
let dataToSave = `Data: ${50*100*300}`;
for(i=0;i<3000;i++){
    dataToSave +=i;
}
console.timeEnd('math1-no-io');

console.time('filesave-io');
fs.appendFileSync('file.txt', dataToSave);
console.timeEnd('filesave-io');

console.time('networkcall-io');
http.request('https://google.com', ())
console.timeEnd('networkcall-io');
