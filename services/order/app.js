const express = require('express'),
const errorManagement = require('errorManagement');
const middlewares = require('expressMiddlewares');
const orderAPI = require('./entry-points/orderAPI');
const orderMQSubscriber = require('./entry-points/orderMQSubscriber');

console.log(`App is currently starting`);

//initialize the web API
let app = express();
app.use(middlewares.getCommonMiddlewares());
app.use('/api/orders', ordersComponent);

//initialize other entry points
new orderMQSubscriber().subscribe();

//register the centralized error handler
errorManagement.handling.registerAndHandleAllErrors(app);

module.exports = app;