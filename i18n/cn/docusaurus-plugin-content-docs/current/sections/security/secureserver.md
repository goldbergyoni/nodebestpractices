# 使用https加密客户端-服务器连接

<br/><br/>


### 一段解释

使用服务，比如[Let'sEncrypt](https://letsencrypt.org/)证书颁发机构提供 __free__ ssl/tls证书，您可以轻松地获得证书, 以确保您的应用程序安全。Node.js框架，比如[Express](http://expressjs.com/)(基于核心`https`模块) 轻松支持基于ssl/tls的服务，此外, 配置可以通过几行额外的代码完成。

您还可以在指向应用程序的反向代理上配置ssl/tls，例如使用[nginx](http://nginx.org/en/docs/http/configuring_https_servers.html)或者HAProxy.

<br/><br/>

### 代码示例 – 使用express框架启用SSL/TLS

```javascript
const express = require('express');
const https = require('https');
const app = express();
const options = {
    // 路径应根据您的设置进行相应的更改
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};
https.createServer(options, app).listen(443);
```

<br/><br/>
