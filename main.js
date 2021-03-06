const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(80, function(){
  console.log('listening on *:3000');
});