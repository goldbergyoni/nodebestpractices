const axios = require("axios"),
util = require('util');

let serverHealthIsGood = true;

doManyRequests(10);
async function doManyRequests(howMuch) {
  const requestors = [];
  console.log("Starting to perform requests now");
  const results = { succeeded: 0, failed: 0, aborted: 0 };
  for (i = 0; i < howMuch; i++) {
    const requestResult = await doRequest();
    results[requestResult]++;
  }
  console.log(`Results ${JSON.stringify(results)}`);

  // Promise.all(requestors).then(response => {
  //   console.log("All requests completed, let's calculated results");
  //   const results = {succeeded:0, failed:0, aborted:0};
  //   response.forEach(singleRequestResponse => {
  //     results[singleRequestResponse]++;
  //   });

  //   console.log(`Results ${JSON.stringify(results)}`);
  // });
}

async function doRequest() {
  let result;

  console.log(`Starting a request now`);
  try {
    if (serverHealthIsGood === false) {
      console.log(`Server is down so aborting`);
      return "aborted";
    }

    const healthCheckResponse = await axios.get(
      "http://localhost:8080/healthcheck"
    );
    if (healthCheckResponse.status !== 200) {
      console.log(`Health check failed so aborting`);
      serverHealthIsGood = false;
      return "aborted";
    } else {
      const response = await axios.get("http://localhost:8080/api/products");
      if (response.status !== 200) {
        console.log(`Response status is bad ${response.status}`);
        return "failed";
      } else {
        console.log(`Response succeeded with reply ${util.inspect(response.data) }`);

        return "succeeded";
      }
    }
  } catch (e) {
    console.log(`Response came back with error`);
    //console.log(e);
    return "failed";
  }

  console.log("No predicted state was processed");
  return "failed";
}
