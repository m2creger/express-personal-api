// require express and other modules
var express = require('express'),
    app = express(), loadDatabase = require('./seed.js');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Load Database

loadDatabase();
/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below

  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/m2creger", 
    base_url: "http://ancient-garden-20783.herokuapp.com", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About me"},
      {method: "GET", path: "/api/projects", description: "All my projects"},
      {method: "GET", path: "/api/projects/:id", description: "About one project"},
      {method: "POST", path: "/api/projects", description: "Create a new project"},
      {method: "PUT", path: "/api/projects/:id", description: "Edit a project"},
      {method: "DELETE", path: "/api/projects/:id", description: "Delete a project"}

    ]
  })
});
app.get('/api/profile', function(req, res) {
  db.Aboutme.find({}, function(err, profile) {
    if(err) {
      console.log(err);
    } else {
      res.json(profile);
    }
  });
});
app.get('/api/projects', function(req, res) {
  db.Projects.find({}, function(err, projects) {
    if(err) {
      console.log(err);
    } else {
      res.json(projects);
    }
  });
});
app.get('/api/projects/:id', function(req, res) {
  db.Projects.findById({_id: req.params.id }, function(error, project) {
    if(err) {
      console.log(err);
    } else {
      res.json(project);
    }
  });
});
// app.get('/api/projects?limit:id', function(req, res) {

// });
// app.get('/api/projects?status=pending', function(req, res) {

// });
app.post('/api/projects', function(req, res) {

  var newProject = {
    _id: 3,
    name: "awesome mountain biking app",
    type: "web dev",
    status: "Still working on"
  };
  var projectToSave = new Projects(newProject);
  projectToSave.save(function(error) {
    if (error) return handleError(error);
    res.json(projectToSave)
  });
});
app.put('/api/projects/:id', function(req, res) {
  db.Projects.findById({_id: req.params.id }, function(error, project) {
    project.name = "Another app being developed";
    project.status = "Just getting started";
    project.type = "Web development"
    project.save(function(error) {
      response.json({messsage: 'Could not update project:' + error});
    })
  });

});
app.delete('/api/projects/:id', function(req, res) {
  db.Projects.findOneAndRemove({ _id: bookId }, function (err, deletedProject) {
    res.json(deletedProject);
  });
});
// app.get('/api/shows', function(req, res) {

// });

// app.get('/api/shows:id', function(req, res) {

// });

// app.get('/api/shows?limit:id', function(req, res) {

// });
// app.get('/api/destinations', function(req, res) {

// });


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
