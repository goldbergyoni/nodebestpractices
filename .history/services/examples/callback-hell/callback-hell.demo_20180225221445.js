function getUserProducts(OptionsJSON, callback) {
  try {
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

        count = 0;
        //for each order - get products
        orders.forEach(order => {
          //based on configuration - fetch different product API
          if (options.translate) {
            getTranslatedProduct(order.id, (error, product) => {
              if (error) {
                return callback(error, null);
              }
              console.log(product);

              result.push(product.name);
              count++;
              if (count === orders.length) callback(null, result);
            });
          } else {
            getProduct(order.id, (error, product) => {
              if (error) {
                return callback(error, null);
              }
              console.log(product);
              result.push(product.name);
              count++;
              if (count === orders.length) callback(null, result);
            });
          }
        });
      });
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
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
  callback(new Error("foo", null));
  setTimeout(() => {
    callback(null, {
      username: "Ryan"
    });
  }, 100);
}

getUserProducts(`{"Translate":"true"}`, (error, products) => {
  console.log(`Result products ${JSON.stringify(products)}`);
});
