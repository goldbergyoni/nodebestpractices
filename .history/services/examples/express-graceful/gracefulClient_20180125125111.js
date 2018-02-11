const axios = require("axios");

let serverHealthIsGood = true;

doManyRequests(6);
async function doManyRequests(howMuch) {
  const requestors = [];
  console.log('Starting to perform requests now');
  const results = {succeeded:0, failed:0, aborted:0};
  for (i = 0; i < howMuch; i++) {
    const requestResult = await doRequest();
    console.log(`Request response is ${requestResult}`)
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

  try {
    if(serverHealthIsGood === false)
      console.log(`Server is down so aborting`)
      return "aborted";
    const healthCheckResponse = await axios.get(
      "http://localhost:8080/healthcheck"
    );
    if (healthCheckResponse.status !== 200) {
      console.log(`Health check failed so aborting`)
      serverHealthIsGood = false;
      return "aborted";
    }
    else{
      const response = await axios.get("http://localhost:8080/api/products");
      if (response.status !== 200) {
        console.log(`Response status is bad ${}`)
        return "failed";
      }
      else{
        return "succeeded"
      }
    }
  } catch (e) {
    return "failed"
  }

  return "failed";
}
