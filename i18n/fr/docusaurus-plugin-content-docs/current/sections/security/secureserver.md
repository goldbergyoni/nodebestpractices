# Utilisation du HTTPS pour crypter la connexion client-serveur

<br/><br/>


### Un paragraphe d'explication

L'utilisation de services tels que [Let'sEncrypt](https://letsencrypt.org/), une autorité de certification qui fournit __gratuitement__ des certificats SSL/TLS, peut aider à crypter la communication de vos applications. Les frameworks Node.js comme [Express](http://expressjs.com/) (fondé sur le module de base `https`) prend en charge SSL/TLS, qui peut être implémenté en quelques lignes de code.

Vous pouvez également configurer SSL/TLS sur un reverse proxy, tel que [NGINX](http://nginx.org/en/docs/http/configuring_https_servers.html) ou HAProxy.

<br/><br/>

### Exemple de code - Activation SSL/TLS à l'aide du framework Express

```javascript
const express = require('express');
const https = require('https');
const app = express();
const options = {
    // Le chemin doit être modifié en fonction de votre configuration
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};
https.createServer(options, app).listen(443);
```

<br/><br/>
