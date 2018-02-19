const debug = require("util").debug;

const onFinished = require("on-finished");

class ChaosMonkey {
  constructor(expressApplication) {
    this.app = expressApplication;
    this.subscribeToHooks();
  }

  take

  subscribeToHooks(){
    debug('Chaos monkey is subscribing to hooks')
    this.app.use((req, res, next) => {
        console.log("Starting a request");
        next();
        onFinished(res, (err, res) => {
          console.log("Finished");
        });
      });
  }
}

module.exports = ChaosMonkey;