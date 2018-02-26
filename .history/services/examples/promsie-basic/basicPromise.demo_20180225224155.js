//try login, if fails - retry 3 times, otherwise abort
function retry(counter) {
  console.log(`Retry for the ${counter} time`);
  if (counter <= 3) {
    logIn("user", "password")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(`Error ${error}`);
        retry(++counter);
      });
  }
}

function getUserProducts(OptionsJSON) {
  return new Promise((resolve, reject) => {
    logIn("username", "password")
      .then(user => getOrders(user.name))
      .then(orders => {
        const getProductPromises = [];
        const options = JSON.parse(OptionsJSON);
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
        console.log(`Promise error found error ${error.stack}`);
      });
  });
 qq}

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
    //throw new Error('Foo')
    
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
  console.log(`Result products ${JSON.stringify(products)}`);
});
