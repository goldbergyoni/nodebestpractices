console.log('Starting');

setImmediate(() => {
    console.log('Set Immediate Callback');
    //recommended
})


setTimeout(function () {
    console.log('Set Timeout Callback');
    // not recommended
}, 0);


process.nextTick(() => {
    console.log('Next tick has arrived');
    // not recommended
})

const doSomething = () => {
    process.nextTick(()=>{
        console.log('Next tick has arrived');
       doSomething(); 
        })
}

doSomething();


console.log('Ending');


