const https = require("https");

try {
  https
    .get("123http", resp => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        console.log(JSON.parse(data).explanation);
      });
    })
    .on("error", err => {
      console.log(JSON.stringify(err));
    });
} catch (error) {
    //console.log(error);
}

try {
    const { URL } = require('url');
    const myURL = new URL('', '');
} catch (error) {
    console.log(JSON.stringify(error));
}

