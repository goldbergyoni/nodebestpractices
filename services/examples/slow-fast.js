const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

console.log(`About to listen to port ${process.env.PORT}`);
http.listen(process.env.PORT, function () {
    console.log('listening on *:8080')
});

app.use(express.static('assets'))

var router = express.Router();
router.get('/healthcheck', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/api', router);


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('feedback', function (data) {
        // we tell the client to execute 'new message'
        console.log(`feedback ${data}`);
        socket.broadcast.emit('feedbackArrived', data);
        console.log(`Emitted ${data}`);
      });
    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});