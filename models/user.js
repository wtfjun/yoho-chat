var mongoose  = require('mongoose');

var Schema    = mongoose.Schema;

var UserSchema = new Schema({
	nickname: { type: String},
	password: { type: String},
	create_at: { type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);
