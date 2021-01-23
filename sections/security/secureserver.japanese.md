# クライアント／サーバー間の通信を暗号化するために SSL/TLS を使用する

<br/><br/>


### 一段落説明

[Let'sEncrypt](https://letsencrypt.org/) のような、無料で証明書を発行してくれるサービスを利用することで、アプリケーションの通信を暗号化することができます。[Express](http://expressjs.com/) のような Node.js フレームワーク（`https`コアモジュールをベースにしている）は SSL/TLS をサポートしており、数行のコードで実装することができます。

また、[NGINX](http://nginx.org/en/docs/http/configuring_https_servers.html) や HAProxy のようなリバースプロキシを用いて SSL/TLS 化することもできます。

<br/><br/>

### コード例 – Express を使用して SSL/TLS を有効化する

```javascript
const express = require('express');
const https = require('https');
const app = express();
const options = {
    // ファイルのパスは環境によって異なります
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};
https.createServer(options, app).listen(443);
```

<br/><br/>
