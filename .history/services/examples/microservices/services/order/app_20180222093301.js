const express = require('express'),
  ordersComponent = require('');

console.log(`App is currently starting`);

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/accounts', accountComponent);
app.use('/api/products', productComponent);
app.use('/api/orders', ordersComponent);

module.exports = app;