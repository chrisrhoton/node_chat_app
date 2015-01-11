var express = require('express'),
    app     = express(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http);

io.on('connection', function(socket) {
  socket.on('chat', function(chat) {
    console.log("Chat received from " + chat.username );
    console.log("Chat text is: '" + chat.chatText + "'" );

    socket.emit('chat', chat);
    
  });
});

io.on('disconnect', function() {
  console.log("Client has disconnected.");
});

http.listen(5000);