var socket = io.connect('http://localhost:5000');

socket.emit('chat', {
  chatText: "Hey!  How's it going?",
  username: "Chris"
});