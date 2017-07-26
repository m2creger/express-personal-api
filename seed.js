// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var myProfile = {
    name: "Marshall Creger",
    github_link: "https://github.com/m2creger",
    current_city: "Littleton",
    spouse: "Jeanie",
    // is_awake: true,
    // family_members: [ 
    //     { name: 'Cameron Creger', relationship: 'brother' }, 
    //     { name: 'Alexandria Jerome', relationship: 'sister' }
    //     { name: 'Grace Wrzesinksi', relationship: 'sister' }
   	// ]
}
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
]
//var myProfile = {description: "Sharp rocks. Middle of nowhere."}

db.AboutMe.create(myProfile, function(err, campsite){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new profile");
  process.exit(); // we're all done! Exit the program.
})
