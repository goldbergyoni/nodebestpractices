'use strict';
var http = require('http'),
    fs = require('fs');

var page = fs.readFileSync(__dirname + '/index.html', 'utf8');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(page);
}).listen(process.env.PORT || 0, function () {
  console.log('Listening on http://localhost:' + server.address().port);
});