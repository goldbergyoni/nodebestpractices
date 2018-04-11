const EventEmitter = require("events");

class OneTimeSchedule extends EventEmitter {
  constructor(properties) {
    super();
    this.properties = properties;
  }

  start() {
    setTimeout(() => {
      console.log(`One time schedule is about to emit start event`);
      this.emit("start", {});
    }, this.properties.delay || 0);
  }
}

module.exports = OneTimeSchedule;
