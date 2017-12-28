function getUserProducts(OptionsJSON, callback) {
  const result = [];
  const options = JSON.parse(OptionsJSON);

  //get user
  logIn("username", "password", (error, user) => {
    if (error) {
      return callback(error, null);
    }

    //get user orders
    getOrders(user.username, (error, orders) => {
      if (error) {
        return callback(error, null);
      }

      //for each order - get products
      orders.forEach(order => {
        //based on configuration - fetch different product API
        if (options.translate) {
          getTranslatedProduct(order.id, (error, product) => {
            if (error) {
              return callback(error, null);
            }
            result.push(product.name);
          });
        } else {
          getProduct(order.id, (error, product) => {
            if (error) {
              return callback(error, null);
            }
            result.push(product.name);
          });
        }
      });
    });
  });
  callback(null, result);
}

function getProduct(orderId, callback) {
  setTimeout(() => {
    callback(null, {
      name: "Macbook Pro"
    });
  }, 100);
}

function getTranslatedProduct(orderId, callback) {
  setTimeout(() => {
    callback(null, {
      name: "Macbook Pro"
    });
  }, 100);
}

function getOrders(username, callback) {
  setTimeout(() => {
    callback(null, [
      {
        id: 1
      },
      {
        id: 2
      }
    ]);
  }, 100);
}

function logIn(user, password, callback) {

  setTimeout(() => {
    callback(null, {
      username: "Ryan"
    });
  }, 100);
}

getUserProducts(`{"Translate":"true"}`, (error, products) => {
  console.log(`Result products ${JSON.stringify(products)}`);
});
