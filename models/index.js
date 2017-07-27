var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

module.exports.Aboutme = require("./aboutme.js");
module.exports.Projects = require("./projects.js");
module.exports.Destinations = require("./destinations.js");
module.exports.Shows = require("./shows.js");