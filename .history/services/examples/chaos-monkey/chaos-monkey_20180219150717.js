const express = require("express");
const app = express();
const onFinished = require("on-finished");

app.use((req, res, next) => {
  console.log("Starting a request");
  onFinished(res, (err, res) => {
    console.log("Finished");
  });
});

class ChaosMonkey {
  constructor(expressApplication) {}
  start() {
    setTimeout(() => {
      process.stdout.write("Starting the chaos monkey");
    }, 100);
  }
}

new ChaosMonkey().start();
