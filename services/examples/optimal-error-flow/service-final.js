const CustomError = require("./error-final");

class ProductsService{
  getProduct(orderId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Macbook Pro"
        });
      }, 100);
    });
  }
  
  getTranslatedProduct(orderId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Macbook Pro"
        });
      }, 100);
    });
  }
  
  getOrders(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1
          },
          {
            id: 2
          }
        ]);
      }, 100);
    });
  }
  
  logIn(user, password, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 100);
    });
  }
  
  async getUserProducts(options) {
    const user = await this.logIn("username", "password");
    if (!user) {
      throw new CustomError(
        "UserDoesntExist",
        404,
        "Unable to get user products",
        true
      );
    }
  
    const orders = await this.getOrders(user);
    const products = [];
  
    for (i = 0; i < orders.length; i++) {
      const productToAdd = await this.getProduct(orders[i].id);
      products.push(productToAdd);
    }
  
    return products;
  }
}

module.exports = ProductsService;