const axios = require('axios');

function async (()=>{
  const response = await axios.get('http://localhost:8080/healthcheck');
  console.log(repsonse);
})()
