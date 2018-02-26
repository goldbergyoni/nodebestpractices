const healthsStateOptions = require("./healthStateOptions");
const logger = require("logger");
const express = require("express");
const DBAccess = require("DBAccessServices").DBAccess;
const config = require("configurationManager");

const defaultOptions = {
  livenessPath: "liveness",
  readinessPath: "readiness",
  apiPrefix: "/api/v1"
};
class HealthService {
  constructor(app, options = defaultOptions) {
    this.app = app;
    this.options = options;
    this.appHealthState = healthsStateOptions.ready;
  }
  start() {
    logger.debug(`About to start the health service`);
    process.on("SIGTERM", () => {
      try {
        logger.info(`App received a termination signal`);
        this.shutdown();
      } catch (e) {
        logger.error(
          `Error occurred while trying to gracefully shutdown ${e} /n ${
            e.stack
          }`
        );
        process.exit(1);
      }
    });

    const router = express.Router();
    this.app.use(router);
    this.registerHealthEndpoint(router, this.options.livenessPath, "liveness");
    this.registerHealthEndpoint(router, this.options.readinessPath, "readiness");
  }

  registerHealthEndpoint(router, path, name) {
    const url =`${this.options.apiPrefix}/${path}`;
    logger.debug(`About to register an health endpoint in url ${url}`) ;
    router.get(url, (req, res, next) => {
      req.workspace.logger.info(`${name} check is performed now`);
      res
        .status(this.appHealthState === healthsStateOptions.ready ? 200 : 503)
        .end();
    });
  }

  //we can't just shutdown immediately when we get termination signals because the router&proxy might still forward traffic
  //so we have to calculate how soon the router should stop forwarding requests based on readiness checks
  calculateShutdownTime() {
    const failureThreshold = config.health.probeFailureThreshold || 3;
    const periodSeconds = config.health.probePeriodSeconds || 10;

    return failureThreshold * (periodSeconds * 1000) - 1000;
  }
  shutdown() {
    const timeToWaitForRequestsToStopArriving = this.calculateShutdownTime();

    logger.info(
      `Starting a timeout of ${timeToWaitForRequestsToStopArriving}ms before shutting down`
    );
    setTimeout(() => {
      if (!config.environment || config.environment === "development") {
        process.exit(1);
      }

      this.appHealthState = healthsStateOptions.terminating;
      this.app.server.close(() => {
        logger.info(`Server is now closed and not receiving more requests`);

        //TODO:the next line isn't working yet, checking why
        //the resources to shutdown should come from the microservices
        //added a task in Jira
        //if(DBAccess.getInstance()){
        //DBAccess.getInstance().destroy()}

        process.exit(0);
      });
    }, timeToWaitForRequestsToStopArriving);
  }
}

module.exports = HealthService;
