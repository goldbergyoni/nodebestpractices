class OrderService {
  add(order) {
    return;
    
    if (order) throw new Error("Bad boy!");

    const result = order;

    if (order.price > 1000) {
      result.approved = false;
    } else {
      result.approved = true;
    }

    new DAL().save(order);

    return result;
  }
}

class DAL {
  save(order) {
    return new Promise((resolve, reject) => {
      console.log("Real DAL is running now");
      setTimeout(() => {
        resolve(order);
      }, 1000);
    });
  }
}

module.exports.orderService = OrderService;
module.exports.orderDAL = DAL;
