const main = async () => {
  let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First done");
      resolve();
    }, 10);
  });
  let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second done");
      resolve();
    }, 5);
  });
  console.log("Before await");
  let first = await firstPromise;
  console.log("First");
  let second = await secondPromise;
  console.log("Second");
  console.log("Finish");
};

const main2 = async () => {
  let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First done");
      resolve();
    }, 10);
  });
  let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second done");
      resolve();
    }, 5);
  });

  Promise.all([firstPromise, secondPromise]).then(() => {
    console.log("All done");
  });

  console.log("Finish");
};

function callbackToPromise(method, ...args) {
  return new Promise(function(resolve, reject) {
    return method(...args, function(err, result) {
      return err ? reject(err) : resolve(result);
    });
  });
}

function getUserProducts(OptionsJSON, callback) {
  const options = JSON.parse(OptionsJSON);
  logIn("username", "password", (error, user) => {
    if (error) {
      return callback(error, null);
    }
    console.log("u" + JSON.stringify(user));
    getOrders(user.username, (error, orders) => {
      if (error) {
        return callback(error, null);
      }
      console.log("o" + JSON.stringify(orders));
      const result = [];
      let count = 0;
      orders.forEach(order => {
        console.log("or" + JSON.stringify(order));
        if (options.translate) {
          getTranslatedProduct(order.id, (error, product) => {
            if (error) {
              return callback(error, null);
            }
            count++;
            result.push(product.name);
            if (count === orders.length) callback(null, result);
          });
        } else {
          getProduct(order.id, (error, product) => {
            console.log("p" + JSON.stringify(product));
            if (error) {
              return callback(error, null);
            }
            count++;
            result.push(product.name);
            if (count === orders.length) callback(null, result);
          });
        }
      });
    });
  });
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

getUserProducts(JSON.stringify({Translate:true}), (error, products) => {
  console.log(products);
});
