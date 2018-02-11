const request = require("supertest");
const sinon = require("sinon");
const orderDAL = require("./orderService").orderDAL;

describe("Order Service API #hot #api", () => {
  describe("Adding new", () => {
    it("Under 1000 order, expect to be approved", () => {
      sinon
        .stub(orderDAL.prototype, orderDAL.prototype.save.name)
        .callsFake(order => {
          console.log("Mock DAL  is running now");
          return order;
        });
      request(require("./orderAPI"))
        .post("/api/orders")
        .send({
          price: 100
        })
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function(err, res) {});
    });
  });
});
