var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShowSchema = new Schema ({
	_id: Number,
	title: String,
	actors: [{ name: String, character: String }]

});

var Shows = mongoose.model('Shows', ShowSchema);

module.exports = Shows;