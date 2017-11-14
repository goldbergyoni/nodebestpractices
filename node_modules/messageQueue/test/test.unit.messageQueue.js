const expect = require('chai').expect;
const usersServiceUnderTest = require('../messageQueueService');
const SQSListener = require('sqs-consumer');
const AWS = require("aws-sdk");
const sinon = require('sinon');

describe("Message Queue Suite #cold #infrastructure", () => {
  before(function () {

  });

  describe("Add message saga", () => {
    it("Scenario: add a valid message. Expectation: get a valid acknowledge", async() => {
      let SQS = new AWS.SQS();
      console.log(SQS);
      sinon.stub(SQS, SQS.sendMessage.name).returns(new Promise((resolve, error)=>{
        return {};
      }));
      const acknowledge = new usersServiceUnderTest().publishMessage({notimportant:"yes"});
      expect(acknowledge).to.not.be.null;
      AWS.SQS.prototype.sendMessage.restore();
    });
  });
});

describe.only("Message Queue Suite #hot #infrastructure", () => {
  const queueThatIsGuaranteedToExist = 'queueThatIsGuaranteedToExist';
  before(async () => {
    await new usersServiceUnderTest().createQueue(queueThatIsGuaranteedToExist);
  });

  describe("Add message saga", () => {
    it("Scenario: add a valid message. Expectation: get a valid acknowledge", async() => {
      const acknowledge = new usersServiceUnderTest().publishMessage("ds1" , {notimportant:"yes"});
      expect(acknowledge).to.not.be.null;
    });

  });
});

