const axios = require("axios");

class baseServiceClient {
  async get(url, params, context) {
    return await buildRequest(url, "get", params, context);
  }

  async post(url, data, context) {
    return await buildRequest(url, "get", data, context);
  }

  buildRequest(url, method, data, context) {
    const axiosConfig = {
      method,
      url,
      data
    };
    if (context) {
      axiosConfig.headers = {
        transactionId: context.transactionId,
        authentication: context.userToken
      };
    }

    return axios(axiosConfig);
  }
}
