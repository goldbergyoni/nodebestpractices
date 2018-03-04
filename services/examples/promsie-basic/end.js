function getUserProducts(OptionsJSON) {
  try { 
    return new Promise((resolve, reject) => {
      const options = JSON.parse(OptionsJSON);
      logIn("username", "password")
        .then(user => getOrders(user.name))
        .then(orders => {
          const getProductPromises = [];
          orders.forEach(order => {
            if (options.translate) {
              getProductPromises.push(getTranslatedProduct.bind(order.id)());
            } else {
              getProductPromises.push(getProduct.bind(order.id)());
            }
          });
          Promise.all(getProductPromises).then(allProducts => {
            resolve(allProducts);
          });
        })
        .catch(error => {
          console.log(`Promise error found ${error} ${error.stack}`);
        });
    });
  } catch (error) {
    console.log(`Error found ${error} ${error.stack}`);
  }
}









function getProduct(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Macbook Pro"
      });
    }, 100);
  });
}

function getTranslatedProduct(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Macbook Pro"
      });
    }, 100);
  });
}

function getOrders(username) {
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

function logIn(user, password, callback) {
  return new Promise((resolve, reject) => {
    //throw new Error("foo");
    setTimeout(() => {
      resolve({
        username: "Ryan"
      });
    }, 100);
  });
}

function getProductPromise(orderId, method) {
  return new Promise((resolve, reejct) => {
    return method.bind(orderId);
  });
}

getUserProducts(`{"Translate":"true"}`).then(products => {
  console.log(products);
});