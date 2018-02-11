const expect = require("chai").expect;
const sinon = require("sinon");
const orderServiceUnderTest = require("./orderService").orderService;
const orderDAL = require("./orderService").orderDAL;

describe("Order service", () => {
  describe("Add new order #cold", () => {
    before(() => {  
      sinon
        .stub(orderDAL.prototype, orderDAL.prototype.save.name)
        .callsFake(order => {
          console.log("Save stub is running now");
          return order;
        });
    });

    it("Under 1000 order, expect to be approved", () => {
      const result = new orderServiceUnderTest().add({});
      expect(result.approved).to.be.true;
    });

    it("Price is higher than 1000, expect not approved", () => {
      const result = new orderServiceUnderTest().add({
        price: 1500
      });
      expect(result.approved).to.be.false;
    });

    it("Proving empty order, expect an error", () => {
      expect(new orderServiceUnderTest().add).to.throw(Error);
    });
  });

  describe("Delete order #hot", () => {
    it("Under 1000 order, expect to be approved", () => {
      const result = new orderServiceUnderTest().add({});
      expect(result.approved).to.be.true;
    });
  });
});
