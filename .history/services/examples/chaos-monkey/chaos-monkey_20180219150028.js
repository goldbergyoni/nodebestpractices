const express = require("express");
const app = express();
var onFinished = require('on-finished')

app.use((req,res,next)=>{
    console.log('Got it');

})

class ChaosMonkey{
    start(){
        setTimeout(() => {
            process.stdout.write('Starting the chaos monkey')
        }, 100);
    }
}

new ChaosMonkey().start();