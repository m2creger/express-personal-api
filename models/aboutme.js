var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutMeSchema = new Schema ({
	name: String,
	github_link: String,
	current_city: String,
	spouse: String

});

var AboutMe = mongoose.model('AboutMe', AboutMeSchema);

module.exports = AboutMe;