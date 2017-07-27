var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutmeSchema = new Schema ({
	name: String,
	github_link: String,
	current_city: String,
	spouse: String,
	pets: { name: String, type: String, breed: String},
	siblings: [{ name: String, relationship: String }]

});

var Aboutme = mongoose.model('Aboutme', AboutmeSchema);

module.exports = Aboutme;