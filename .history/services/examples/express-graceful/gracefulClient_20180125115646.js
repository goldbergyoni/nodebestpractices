const axios = require("axios");

let numberOfErrors = 0;

function doManyRequests(howMuch){
  
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
