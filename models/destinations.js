var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestinationSchema = new Schema ({
	_id: Number,
	country: String,
	date: String

});

var Destinations = mongoose.model('Destinations', DestinationSchema);

module.exports = Destinations;