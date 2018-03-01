function getUserProducts(OptionsJSON, callback) {
  login("user", "password", (err, result) => {
    if(err != null){
      //error handling
    }

    getOrders(result.username, (err, result) => {
      if(err != null){
        //error handling
      }
    })

  })
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
  console.log(products);
});
