const axios = require('axios');

let numberOfErrors

(async function () {
  const response = await axios.get('http://localhost:8080/healthcheck');
  console.log(response.status);
})();