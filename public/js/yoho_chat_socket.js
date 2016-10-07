var chat_server = 'http://' + location.hostname + ':8003';
console.log('server: ' + chat_server);
var socket = io.connect(chat_server);

socket.on('update index', function() {
	console.log('emit get!');
	history.go(0);
});