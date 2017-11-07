console.log('Starting');
setTimeout(function() {
   console.log('After timeout') 
}, 100);

const doSomething = () => {
    process.nextTick(()=>{
        console.log('Next tick has arrived');
       doSomething(); 
        })
}

doSomething();

console.log('Ending');