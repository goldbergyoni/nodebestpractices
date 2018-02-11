const axios = require('axios');

let numberOfErrors = 0;

function doRequest(){
  
}

(async function () {
  const response = await axios.get('http://localhost:8080/healthcheck');
  console.log(response.status);
})();