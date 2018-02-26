const express = require('express'),
 bodyParser = require('body-parser'),
  ordersComponent = require('./services/order').API,
  productComponent = require('./services/product').API,
  accountComponent = require('./services/account').API;

console.log(`App is currently starting`);

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/accounts', accountComponent);
app.use('/api/products', productComponent);
app.use('/api/orders', ordersComponent);

module.exports = app;