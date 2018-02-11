const axios = require("axios");

let numberOfErrors = 0;

function doManyRequests(howMuch) {
  const requestors = [];
  for (i = 0; i < howMuch; i++) {
    requestors.push(doRequest());
  }

  Promise.all(requestors).then(response => {
    const numberOfSuccess = response.filter(singleRequestResponse => singleRequestResponse === true).length;
    console.log(``)
  });
}

async function doRequest() {
  let result = true;

  try {
    const healthCheckResponse = await axios.get(
      "http://localhost:8080/healthcheck"
    );
    if (healthCheckResponse.status === 200) {
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
