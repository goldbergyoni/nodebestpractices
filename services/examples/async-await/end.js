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
    throw new Error("foo");
    setTimeout(() => {
    
      resolve({
        username: "Ryan"
      });
    }, 100);
  });
}

async function getUserProducts(OptionsJSON) {
  try {
    const options = JSON.parse(OptionsJSON);
    const user = await logIn("username", "password");
    const orders = await getOrders(user);
    const products = [];
    orders.forEach(async order => {
      if (options.Translate) products.push(await getProduct(order.id));
      else products.push(await getTranslatedProduct(order.id));
    });

    return products;
  } catch (error) {
    console.log(error);
  }
}

function getProductPromise(orderId, method) {
  return new Promise((resolve, reejct) => {
    return method.bind(orderId);
  });
}

getUserProducts(`{"Translate":"true"}`).then(products => {
  console.log(products);
});
