const onFinished = require("on-finished");

class ChaosMonkey {
  constructor(expressApplication) {
    this.app = expressApplication;
  }

  subscribeToHooks(){
    debug('Chaos monkey is subscribing to hooks')
    app.use((req, res, next) => {
        console.log("Starting a request");
        onFinished(res, (err, res) => {
          console.log("Finished");
        });
      });
  }
  start() {
    setTimeout(() => {
      process.stdout.write("Starting the chaos monkey");
    }, 100);
  }
}

new ChaosMonkey().start();
