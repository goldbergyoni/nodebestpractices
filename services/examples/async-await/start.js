async function getUserProducts(OptionsJSON) {
  try {
    const options = JSON.parse(OptionsJSON);
    const user = await logIn("user", "password");
    const orders = await getOrders(user.id);
    const weirdFunction = await nonPromiseAndNotAsync();
    console.log(weirdFunction);

    const result = [];
    for (i = 0; i < orders.length; i++) {
      result.push(await getProduct(orders[i].id));
    }

    console.log(JSON.stringify(result));
    return result;
  } catch (error) {
    console.log(`Error caught ${error}`)
  }
}

async function getProduct(orderId) {
  console.log("Starting");
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

function nonPromiseAndNotAsync() {
  return 1;
}

function logIn(user, password, callback) {
  return new Promise((resolve, reject) => {
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

const products = getUserProducts(`{"Translate":"true"}`);
console.log("Finished");
