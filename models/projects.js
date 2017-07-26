var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = new Schema ({
	_id: Number,
	name: String,
	type: String,
	status: String

});

var Projects = mongoose.model('Projects', ProjectsSchema);

module.exports = Projects;