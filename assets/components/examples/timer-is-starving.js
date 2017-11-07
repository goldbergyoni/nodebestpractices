console.log('Starting');


setImmediate(() => {
    console.log('Set Immediate Callback');
})


setTimeout(function () {
    console.log('Set Timeout Callback');
}, 1);

console.log('Ending');