const debug = require("util").debug;

const onFinished = require("on-finished");

class ChaosMonkey {
  constructor(expressApplication) {
    this.app = expressApplication;
    this.subscribeToHooks();
  }

  subscribeToHooks(){
    debug('Chaos monkey is subscribing to hooks')
    this.app.use((req, res, next) => {
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

module.exports = ChaosMonkey;