console.log('Starting');

const startingDate = new Date();

setTimeout(function() {
    console.log(`After timeout, it took ${new Date() - startingDate}`)
}, 50);


console.log('ending')
























// while(new Date() - startingDate < 200){
//     //we occupy the CPU and starve the event loop
// }
