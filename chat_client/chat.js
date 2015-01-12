$(document).ready( function() {

  var submitChatHandler,
      chatEventHandler,
      addChatToDOM,
      socket = io.connect('http://27a459e6.ngrok.com/'),
      user = 'Chris';

  addChatToDOM = function(chat) {
    var source     = $('#chat-template').html(),
        template   = Handlebars.compile(source),
        $container = $('#chat-window');

    $container.append(template(chat));
  };

  submitChatHandler = function(e) {

    var chatText = $('#chatInput').val(),
        chat = { 
          chatText: chatText,
          userName: user
        };

    e.preventDefault();
    $('#chatInput').val('');
    socket.emit('chat', chat );

    addChatToDOM(chat);

  };

  chatEventHandler = function(chat) {

    addChatToDOM(chat);

  };

  $('.chat-interface').on('click', '.action-primary', submitChatHandler);
  socket.on('chat', chatEventHandler);

});
