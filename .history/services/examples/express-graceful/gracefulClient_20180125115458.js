const axios = require('axios');

let numberOfErrors = 0;

async function doRequest(){
  let result = true;

  const healthCheckResponse = await axios.get('http://localhost:8080/healthcheck');
  if(healthCheckResponse.status === 200){
    const response = await axios.get('http://localhost:8080/api/products');
    
  }
}

(async function () {
  const response = await axios.get('http://localhost:8080/healthcheck');
  console.log(response.status);
})();