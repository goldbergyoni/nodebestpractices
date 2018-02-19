const express = require("express");
const app = express();
const onFinished = require("on-finished");



class ChaosMonkey {
  constructor(expressApplication) {
    this.app = exp
  }

  subscribeToHooks(){

  }
  start() {
    setTimeout(() => {
      process.stdout.write("Starting the chaos monkey");
    }, 100);
  }
}

new ChaosMonkey().start();
