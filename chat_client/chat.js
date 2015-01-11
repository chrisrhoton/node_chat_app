var socket = io.connect('http://localhost:5000');

socket.emit('chat', {
  chatText: "Hey!  How's it going?",
  username: "Chris"
});

socket.on('chat', function(chat) {
  console.log("Chat received from " + chat.username );
  console.log("Chat text is: '" + chat.chatText + "'" );
});