const debug = require("util").debug;
const removeRoute = require("express-remove-route");
var crypto = require("crypto");
const onFinished = require("on-finished");

class ChaosMonkey {
  constructor(expressApplication) {
    if (process.env.CHAOS_MONKEY) {
      console.log(`Chaos monkey is set to active`);
      this.app = expressApplication;
      this.subscribeToHooks();
      //this.increaseCPU();
      this.increaseMemory();
      this.replaceRoute();
      //this.throwUncaughtException();
      //this.rejectPromise();
    }
  }

  increaseMemory() {
    this.app.use((req, res, next) => {
      if (!global.state) {
        global.state = [];
      }
      const longString = `Technologies, Key Featuresi
        support BD activities and close new
        customers.
        Develop=ustaining operati`;
      for (let index = 0; index < 1000; index++) {
        global.state.push(longString);
      }
      next();
    });
  }

  throwUncaughtException() {
    setTimeout(() => {
      throw new Error("Chaos monkey has just went crazy");
    }, Math.ceil(Math.random() * 10 * 1000));
  }

  increaseCPU() {
    setTimeout(() => {
      for (let index = 0; index < 500; index++) {
        const longString = `Technologies, Key Featuresi
        support BD activities and close new
        customers.
        Develop=ustaining operati`;
        require("crypto").createCipher("aes192", longString);
      }
      this.increaseCPU();
    }, Math.ceil(Math.random() * 4 * 1000));
  }

  rejectPromise() {
    setTimeout(() => {
      Promise.reject(
        new Error("Chaos monkey has just went crazy with promise")
      );
    }, Math.ceil(Math.random() * 10 * 1000));
  }

  replaceRoute() {
    //removeRoute(this.app, "/api/products");
    this.app.use("/api/products", (req, res, next) => {
      if (Math.random() * 10 < 2) {
        res.status(500).end();
      }

      next();
    });
  }

  subscribeToHooks() {
    debug("Chaos monkey is subscribing to hooks");
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
