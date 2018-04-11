const Route500Sin = require("../sins/500-error-on-route");

class ChaosControl {
  constructor(expressApplication, configuration) {
    console.log(`Chaos monkey is set to active`);
    this.configuration = configuration;
    this.app = expressApplication;
  }

  start() {
    console.log(`Opening the zoo now`);
    const allSins = this.getAllSins([this.app]);
    allSins.forEach(sin => {
      sin.on("sinStart", config => {
        console.log(config);
      });

      sin.on("sinOccured", config => {
        console.log(`Sin has just occured ${config}`);
      });
    });
  }

  getSinSchedule(sinConfig) {
    const ScheduleClass = require(`../schedules/${sinConfig.schedule.type}`);

    return new ScheduleClass(sinConfig.schedule);
  }

  getAllSins(sinParams) {
    const allSins = [];
    this.configuration.sins.forEach(sinConfiguration => {
      const SinClass = require(`../sins/${sinConfiguration.file}`);
      const sinSchedule = this.getSinSchedule(sinConfiguration)
      allSins.push(
        new SinClass(
          sinConfiguration,
          sinSchedule,
          ...sinParams
        )
      );
      sinSchedule.start();
    });

    return allSins;
  }
}

module.exports = ChaosControl;
