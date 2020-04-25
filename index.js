var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


const PORT = process.env.PORT || process.env.WEBCHAT_SERVER || 3000;
http.listen(3000, function(){
  console.log('Servidor rodando em: http://localhost:3000');
});
