const axios = require("axios");

let serverHealthIsGood = true;

doManyRequests(30);
function doManyRequests(howMuch) {
  const requestors = [];
  console.log('Starting to perform requests now');
  for (i = 0; i < howMuch; i++) {
    requestors.push(doRequest());
  }

  Promise.all(requestors).then(response => {
    console.log("All requests completed, let's calculated results");
    const numberOfSuccess = response.filter(singleRequestResponse => singleRequestResponse === true).length;
    console.log(`Finally ${(numberOfSuccess/response.length) * 100}% succeeded`);
  });
}

async function doRequest() {
  let result;

  try {
    const healthCheckResponse = await axios.get(
      "http://localhost:8080/healthcheck"
    );
    if (healthCheckResponse.status !== 200) {
      serverHealthIsGood = false;
    }
    else{

    
      const response = await axios.get("http://localhost:8080/api/products");
      if (response.status !== 200) {
        result = false;
      }
    }
  } catch (e) {
    result = false;
  }

  return result;
}
