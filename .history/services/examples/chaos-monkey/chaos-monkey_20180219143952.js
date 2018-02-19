class ChaosMonkey{
    start(){
        setTimeout(() => {
            process.stdout.write('Starting the chaos monkey')
        }, 100);
    }
}

new ChaosMonkey().start()