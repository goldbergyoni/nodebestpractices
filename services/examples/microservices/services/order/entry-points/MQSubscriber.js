const { service, helper } = require("messageQueue");
const util = require("util");
const configurationManager = require("configurationManager");
const logger = require("logger");
(newOrderService = require("../domain/orderService")),
  (module.exports = new MetadataMQSubscriber());

class MQSubscriber {
  subscribe() {
    logger.info("Order component is about to subscribe all mq messages");
    new mqHelper().subscribeToNewMessages(
      configurationManager.userAddedToBlackListQueue,
      async (newMessage, context) => {
        console.log(
          `Order MQ subscriber was called to to add new user to black list`
        );
        const newOrderResult = await new newOrderService(context)
          .addToBlackList(newMessage.userId);
      }
    );
  }
}

module.exports = MQSubscriber;