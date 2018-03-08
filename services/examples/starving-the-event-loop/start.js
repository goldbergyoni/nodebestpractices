console.log('Starting');

const startingDate = new Date();

setTimeout(function() {
    console.log(`After timeout, it took ${new Date() - startingDate}`)
}, 100);

while(new Date() - startingDate < 150){
}

console.log('end');

















