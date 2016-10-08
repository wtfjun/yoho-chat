var mongoose  = require('mongoose');

var Schema    = mongoose.Schema;

var MessageSchema = new Schema({
	nickname: { type: String},
	comment: { type: String},
	create_at: { type: String}
});

mongoose.model('Message', MessageSchema);
