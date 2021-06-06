# Usando HTTPS para criptografar a conexão cliente-servidor

<br/><br/>


### Explicação em um Parágrafo

Usar serviços como [Let'sEncrypt](https://letsencrypt.org/), uma autoridade certificadora que fornece certificados SSL/TLS __gratuitos__, pode ajudar a criptografar a comunicação de suas aplicações. Frameworks Node.js como [Express](http://expressjs.com/) (baseado no módulo central `https`) suportam SSL/TLS, o qual pode ser implementado em poucas linhas de código.

Você também pode configurar SSL/TLS em um proxy reverso, como [NGINX](http://nginx.org/en/docs/http/configuring_https_servers.html) ou HAProxy.

<br/><br/>

### Exemplo de código - Ativando SSL/TLS usando o framework Express

```javascript
const express = require('express');
const https = require('https');
const app = express();
const options = {
    // O caminho deve ser alterado de acordo com sua configuração
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};
https.createServer(options, app).listen(443);
```

<br/><br/>
