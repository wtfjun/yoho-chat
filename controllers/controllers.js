var Message = require('../models').Message;
var User = require('../models').User;

//io server
var io = require('socket.io')();

io.on('connection', function(_socket) {
	console.log(_socket.id + ':connection');
})

exports.showIndex = function(req, res, next) {
	var users,messages;
	User.find(function(err, Users) {
		if(err) return console.error(err);
		users = Users;
		console.log(users);
	});
	Message.find(function(err, messages) {
		if(err) return console.error(err);
		// console.log(messages);
		res.render('index',{
			messages: messages,
			users: users
		});
	});
}

exports.loginAction = function(req, res, next) {
	var nickname = req.body.nickname;
	var password = req.body.password;
	
	var user = new User();
	user.nickname = nickname;
	user.password = password;
	// console.log(11);

	user.save(function(err) {
		if(err) return console.error(err);
		console.log('add a user'+user);
		io.emit('update index');
	});
	// console.log(possword);
	res.redirect('/');
};

exports.leaveMessageAction = function(req, res, next) {						//add a message
	var nickname = req.body.nickname;
	var comment = req.body.comment;

	var message = new Message();
	message.nickname = nickname;
	message.comment = comment;

	message.save(function(err) {
		if(err) return console.error(err);
		io.emit('update index');
		// console.log('emit send');
	});

	res.redirect('/');
};





exports.listen = function(_server) {
	io.listen(_server);
}

