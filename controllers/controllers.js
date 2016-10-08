var Message = require('../models').Message;
var User = require('../models').User;

exports.showIndex = function(req, res, next) {
	var users,messages;
	User.find(function(err, Users) {
		if(err) return console.error(err);
		users = Users;
		// console.log(users);
	});
	Message.find().sort({'create_at':1}).exec(function(err, messages) {
		res.render('index',{
			messages: messages,
			users: users
		});
	});
}

exports.loginAction = function(req, res, next) {
		var nickname = req.body.nickname;
		var password = req.body.password;
		var loginJson = {
			state: 'success',
			LoginErrMsf: ''
		};
		User.findOne({'nickname': nickname}, function(err, user) {
			if(err) return console.error(err);
			if(user && password != user.password) {
				loginJson = {
					state: 'fail',
					loginErrMsg: '该用户已存在,然而你输入的密码不对。'
				};
				res.json(loginJson);
			}
			else if(user && password == user.password) {
				res.json(loginJson);
			}
			else {
				
		
				var user = new User();
				user.nickname = nickname;
				user.password = password;
				user.save(function(err) {
					if(err) return console.error(err);
					console.log('add a user'+user);
					res.json(loginJson);
					// io.emit('update index');
				});
				// console.log(possword);
				// res.send('0');
			}
		});
		
		// console.log(11);

		
};

exports.leaveMessageAction = function(req, res, next) {						//add a message
	var nickname = req.body.nickname;
	var comment = req.body.comment;
	var create_at = req.body.create_at.trim();
	// console.log(Date().toLocaleString());
	var message = new Message();
	message.nickname = nickname;
	message.comment = comment;
	message.create_at = create_at;

	message.save(function(err) {
		if(err) return console.error(err);
		console.log('add a message'+message);
	});
};




