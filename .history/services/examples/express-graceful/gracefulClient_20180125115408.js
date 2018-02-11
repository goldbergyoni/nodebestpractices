const axios = require('axios');

let numberOfErrors = 0;

async function doRequest(){
  const response = await axios.get('http://localhost:8080/healthcheck');
  if(response.status);
}

(async function () {
  const response = await axios.get('http://localhost:8080/healthcheck');
  console.log(response.status);
})();