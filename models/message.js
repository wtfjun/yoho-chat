var mongoose  = require('mongoose');

var Schema    = mongoose.Schema;

var MessageSchema = new Schema({
	nickname: { type: String},
	comment: { type: String},
	create_at: { type: Date, default: Date.now }
});

mongoose.model('Message', MessageSchema);
