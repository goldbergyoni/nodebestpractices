const debug = require("util").debug;
const removeRoute = require('express-remove-route');

const onFinished = require("on-finished");

class ChaosMonkey {
  constructor(expressApplication) {
    this.app = expressApplication;
    this.subscribeToHooks();
    this.replaceRoute();
  }

  replaceRoute(){
    removeRoute(this.app, '/api/products');
    this.app.use('/api/products', (req,res,next)=>{
        res.status(500)
        next();
    });
  }

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