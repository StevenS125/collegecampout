

'use strict'




// Requiring our models for syncing
var db = require("../models");


const crypto = require('crypto')
var randomBytes = require('randombytes');

const sha512 = (password, salt) => {
   let hash = crypto.createHmac('sha512', salt);
   hash.update(password);
   let value = hash.digest('hex');
   return {
       salt: salt,
       passwordHash: value
   }
};

const genRandomString = (length) => {
   return randomBytes(Math.ceil(length/2))
       
};




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

	salt = genRandomString(32);
    hashedPassword = sha512(req.body.password, salt).passwordHash;

	db.Login.create({
		name: req.body.name,
		salt: salt,
		hashPw: hashedPassword
	}).then(function(data) {
		return res.json(data)
	})
	

});





















//==================================================
//Post route for creating username
//==================================================
app.post("/user/create", function(req, res) {
	db.Login.findAll({
		where: {
			name: {
				$like: req.body.name
			}
		}

	}).then(function(results) {
		if (results.length > 0) {
			return res.json({msg: "user already exists"})
		}
		else {


				salt = genRandomString(32);
				hashedPw = sha512(req.body.password, salt).passwordHash;

				console.log(salt)
				console.log(hashedPw)



			db.Login.create({
				name: req.body.name,
				salt: salt,
				hashPw: hashedPw
			}).then(function(data){
				return res.json(data)
			})
		}
	})
	
});


app.post("/user/login", function(req, res) {
	db.Login.findOne({
		where: {
			name: {
				$like: req.body.name
			}
		}

	}).then(function(results) {
			salt = results.salt
			hashedPw = results.hashPw
			logHashedPw = sha512(req.body.password, salt).passwordHash;

			if (hashedPw === logHashedPw) {
				data = {
					msg: "you logged in"
				}
				return res.json(data)
			}
			else {
				data = {
					msg: "thats an error yo",
					storedHash: hashedPw,
					new: logHashedPw,
					salt: salt
				}
				return res.json(data)
			}
			
});
});




//==================================================
//Get route to pull information for one college - 
//==================================================
app.get("/api/college", function(req, res) {

	
	//======================================
	//Switch statement for search parameters
	//======================================
	switch(req.body.searchType) {
		
		//==================
		//College Param
		//==================
		case "College":
		db.College.findAll({
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
		case "state":
		db.College.findAll({
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
		db.College.findAll({
			where: {
				Admin: req.body.parameter
			}
		}).then(function(result) {
			return res.json(result);
		});

		break;
	}
});

}