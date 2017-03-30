
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';






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

	var state = req.body.state
	var admit = req.body.admit
	var tuition = req.body.tuition


	db.College.findAll({
		where: {
			State: {
				$like: state
			},
			Admission: {
				$lte: admit
			},
			Tuition_In: {
				$lte: tuition
			}},
		limit: 20})
	.then(function(result) {
		return res.json(result);
	});


});


app.post("/user/create", function(req, res) {




app.post("/user/login", function(req, res) {

	db.Login.findAll({
		where: {
			name: {
				$like: req.body.name
			}
		}
	}).then(function(results){
		attempt = encrypt(req.body.password)
		unhash = results[0].hashPw

		if (attempt === unhash) {
			return res.json({id: results[0].id,
					name: results[0].name
		})
	}
	else {
		return res.json({msg: "bad pw/username"})
	}

})

});




















//==================================================
//Post route for creating username
//==================================================
// app.post("/user/create", function(req, res) {
// 	db.Login.findAll({
// 		where: {
// 			name: {
// 				$like: req.body.name
// 			}
// 		}

// 	}).then(function(results) {
// 		if (results.length > 0) {
// 			return res.json({msg: "user already exists"})
// 		}
// 		else {


// 				salt = genRandomString(32);
// 				hashedPw = sha512(req.body.password, salt).passwordHash;

// 				console.log(salt)
// 				console.log(hashedPw)



// 			db.Login.create({
// 				name: req.body.name,
// 				salt: salt,
// 				hashPw: hashedPw
// 			}).then(function(data){
// 				return res.json(data)
// 			})
// 		}
// 	})
	
// });


// app.post("/user/login", function(req, res) {
// 	db.Login.findOne({
// 		where: {
// 			name: {
// 				$like: req.body.name
// 			}
// 		}

// 	}).then(function(results) {
// 			salt = results.salt
// 			hashedPw = results.hashPw
// 			logHashedPw = sha512(req.body.password, salt).passwordHash;

// 			if (hashedPw === logHashedPw) {
// 				data = {
// 					msg: "you logged in"
// 				}
// 				return res.json(data)
// 			}
// 			else {
// 				data = {
// 					msg: "thats an error yo",
// 					storedHash: hashedPw,
// 					new: logHashedPw,
// 					salt: salt
// 				}
// 				return res.json(data)
// 			}
			
// });
// });

}