console.log('Starting');

const startingDate = new Date();

setTimeout(function() {
    console.log(`After timeout, it took ${new Date() - startingDate}`)
}, 50);

while(new Date() - startingDate < 50){
    //we occupy the CPU and starve the event loop
}

console.log('Ending')






















