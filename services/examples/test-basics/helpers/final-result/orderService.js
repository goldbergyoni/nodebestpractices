  class OrderService {
    add(order) {

      if(order){
        throw new Error()
      }
    if (!order) throw new Error("Bad boy!");

    const result = order;

    if (order.price > 1000) {
      result.approved = false;
    } else {
      result.approved = true;
    }

    new DAL().save(order);

    return result;
  }

  ReturnTaxes(userToRefund) {
    if (userToRefund.taxReturnPreference) {
      return false;
    }

    userToRefund.aboutMe = require("sanitize-html")(userToRefund.aboutMe);
    if (userToRefund.aboutMe.len > 250) {
      return false;
    } else {
      if (userToRefund.joinDate >= new Date()) {
        if (userToRefund.country != "US") {
          if (userToRefund.taxReturnPreference === "Immediate") return false;
        }
      }
    }

    return true;
  }


}

  class DAL {
    save(order) {
    return new Promise((resolve, reject) => {
      console.log("Save DAL is running now");
      setTimeout(() => {
        resolve(order);
      }, 1000);
    });
  }
}

module.exports.orderService = OrderService;
module.exports.orderDAL = DAL;
