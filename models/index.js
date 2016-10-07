var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yoho-chat');

// models
require('./user');
require('./message');

exports.User = mongoose.model('User');
exports.Message = mongoose.model('Message');