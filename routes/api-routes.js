

// Requiring our models for syncing
var db = require("../models");



// Routes =============================================================


// Syncing our sequelize models and then starting our express app
db.sequelize.sync()

//==================================================
//Get route to pull the information for all colleges
//==================================================
module.exports = function(app) {

app.post("/api/college", function(req, res) {
	term = req.body.param
	db.College.findAll({
		where: {
			State: {
				$like: term
			}
		}
	})
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
// app.get("/api/college", function(req, res) {

	
// 	//======================================
// 	//Switch statement for search parameters
// 	//======================================
// 	switch(req.body.searchType) {
		
// 		//==================
// 		//College Param
// 		//==================
// 		case "College":
// 		db.College.findAll({
// 			where: {
// 				College: req.body.parameter
// 			}
// 		}).then(function(result) {
// 			return res.json(result);
// 			});
			
// 			break;

// 		//=================
// 		//State Param
// 		//=================
// 		case "state":
// 		db.College.findAll({
// 			where: {
// 				State: req.body.parameter
// 			}
// 		}).then(function(result) {
// 			return res.json(result);
// 			});
// 			break;
		

// 		//================
// 		//Admission Param
// 		//================
// 		case "Admin":
// 		db.College.findAll({
// 			where: {
// 				Admin: req.body.parameter
// 			}
// 		}).then(function(result) {
// 			return res.json(result);
// 		});

// 		break;
// 	}
// });

}