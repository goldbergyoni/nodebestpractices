console.log('Starting');

setImmediate(() => {
    console.log('Set Immediate Callback');
})


setTimeout(function () {
    console.log('Set Timeout Callback');
}, 0);


process.nextTick(() => {
    console.log('Next tick has arrived');
})

const doSomething = () => {
    process.nextTick(()=>{
        console.log('Next tick has arrived');
       doSomething(); 
        })
}

doSomething();


console.log('Ending');