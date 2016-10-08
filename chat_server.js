//io server
var io = require('socket.io')();

io.on('connection', function(_socket) {
	console.log(_socket.id + ':connection');

	_socket.on('say', function (_content) {
 //    if ("" == _socket.nickname || null == _socket.nickname) {
 //      return _socket.emit('need_nickname');
 //    }
 //    _content = _content.trim();
 //    console.log(_socket.nickname + ': say(' + _content + ')');
 //    _socket.broadcast.emit('user_say', _socket.nickname, xssEscape(_content));
    // return _socket.emit('say_done', _socket.nickname, xssEscape(_content));
    _socket.broadcast.emit('say_done', _content);
    _socket.emit('say_done', _content);
  });
})

exports.listen = function(_server) {
	io.listen(_server);
}