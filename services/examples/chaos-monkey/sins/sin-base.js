const EventEmitter = require("events");

class SinBase extends EventEmitter {
  constructor(configuration, schedule, expressApp) {
    super();
    console.log(`Sin ${configuration.name} is now initialized with the the
             following config ${configuration}`);

    this.context = {};
    this.context.expressApp = expressApp;
    this.context.configuration = configuration;
    this.context.schedule = schedule;
    schedule.on("start", () => {
      this.start();
    });
  }
}

module.exports = SinBase;
