function a(error){
    try {
        console.log('Starting')
        throw new Error('Where am I?')
        console.log('Ending')
    } catch (error) {
        b(error);
    }

}

function b(error){
    c(error);
}

function c(error){
    console.log(`The error is ${error.stack}`)
}

a()