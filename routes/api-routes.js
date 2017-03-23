
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

//==================================================
//Get route to pull the information for all colleges
//==================================================
app.get("/api/college", function(req, res) {

	db.College.findAll({})
	.then(function(result) {
		return res.json(result);
	});
});

//==================================================
//Post route for creating username
//==================================================
app.post("/api/user", function(req, res) {

	db.User.create({
		userName: req.body.userName
	});
});

//==================================================
//Get route to pull information for one college - 
//==================================================
app.get("/api/oneCollege", function(req, res) {

	
	//======================================
	//Switch statement for search parameters
	//======================================
	switch(req.body.searchType) {
		
		//==================
		//College Param
		//==================
		case "College":
		db.College.findOne({
			where: {
				College: req.body.parameter
			}
		}).then(function(result) {
			return res.json(result);
			});
			
			break;

		//=================
		//State Param
		//=================
		case "State":
		db.College.findOne({
			where: {
				State: req.body.parameter
			}
		}).then(function(result) {
			return res.json(result);
			});
			break;
		

		//================
		//Admission Param
		//================
		case "Admin":
		db.College.findOne({
			where: {
				Admin: req.body.parameter
			}
		}).then(function(result) {
			return res.json(result);
		});

		break;
	}
});

