// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
// % mongo ds012345.mlab.com:56789/heroku_1jg4z3h5 -u marshall.creger@gmail.com -p Chloesam2015!
var db = require('./models');

var myProfile = {
    name: "Marshall Creger",
    github_link: "https://github.com/m2creger",
    current_city: "Littleton",
    spouse: "Jeanie",
    pets: {name: "Sam", type: "Dog", breed: "Golden Retriever"},
    siblings: [ 
        { name: 'Cameron Creger', relationship: 'brother' }, 
        { name: 'Alexandria Jerome', relationship: 'sister' },
        { name: 'Grace Wrzesinksi', relationship: 'sister' }
   	]
};
var myProjects = [
	{
		_id: 1,
		name: "Some Project",
		type: "Going great",
		status: "Still working on"
	},
	{
		_id: 2,
		name: "Some Other Awesome Project",
		type: "Going mother trucking great",
		status: "Done"
	}
];

var shows = [ 
  {
    _id: 1,
    title: "Friends",
    actors: [
      { name: "Jennifer Aniston", character: "Rachel"},
      { name: "Courtney Cox", character: "Monica"},
      { name: "Matt LeBlanc", character: "Joey"},
      { name: "Matthew Perry", character: "Chandler"},
      { name: "David Schwimmer", character: "Ross"},
      { name: "Lisa Kudrow", character: "Phoebe"}
    ]
  }
];

function loadDatabase() {
  db.Aboutme.remove({}, function(error) {
    if(error) {
      console.log(error);
    }
    console.log("removed about me profile");

  });
  db.Aboutme.create(myProfile, function(error, data) {
    if(error) {
      console.log(error)
    } else {
      console.log("added profile");
    }
  });
  db.Projects.remove({}, function(error, data) {
    if(error) {
      console.log(error);
    }
    console.log("removed projects");

  });
  db.Projects.create(myProjects, function(error, data) {
    if(error) {
      console.log(error);
    }
    console.log("created my projects");
  });
  db.Shows.remove({}, function(error, data) {
    if(error) {
      console.log(error);
    }
    console.log("removed shows");

  });
  db.Shows.create(shows, function(error, data) {
    if(error) {
      console.log(error);
    }
    console.log("created shows");
  });

}
//var myProfile = {description: "Sharp rocks. Middle of nowhere."}


module.exports = loadDatabase;
