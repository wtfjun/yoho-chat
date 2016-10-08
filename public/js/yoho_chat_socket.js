var chat_server = 'http://' + location.hostname + ':8003';
console.log('server: ' + chat_server);
var socket = io.connect(chat_server);

socket.on('update index', function() {
	console.log('emit get!');
	history.go(0);
});

function say(_content) {
    socket.emit('say', _content);
}

socket.on('say_done', function (_content) {
    console.log('user_say(' + $.cookie('chat_nickname') + ', ' + _content + ')');
    addMessage($.cookie('chat_nickname'), getLocalHMS(), _content);
});