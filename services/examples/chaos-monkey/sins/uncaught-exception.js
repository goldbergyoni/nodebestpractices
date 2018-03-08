const SinBase = require("./sin-base");
const EventsEmitter = require("events").EventEmitter;
class Route500ErrorSin extends SinBase {
  constructor(expressApp) {
    super(...arguments);
    this.eventEmitter = new EventsEmitter();
  }

  start() {
    throw new Error(this.context.configuration.properties.message);
  }

  stop() {
    //hmm how to remove middleware?
  }
}

module.exports = Route500ErrorSin;