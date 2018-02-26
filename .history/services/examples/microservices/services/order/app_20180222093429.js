const express = require('express'),
  API = require('./entry-points/orderAPI'),
  MQSubscriber = require('./entry-points/orderMQSubscriber');

console.log(`App is currently starting`);

let app = express();

app.use('/api/accounts', accountComponent);
app.use('/api/products', productComponent);
app.use('/api/orders', ordersComponent);

module.exports = app;