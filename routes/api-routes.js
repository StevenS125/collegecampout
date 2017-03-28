
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}





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

	state = req.body.state
	admit = req.body.admit
	tuition = req.body.tuition


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

	db.Login.findAll({
		where: {
			name: {
				$like: req.body.name
			}
		}
	}).then(function(results){
		if (results.length > 0) {
			return res.json({msg: "user already exist"})
	}
	else {
		db.Login.create({
			name: req.body.name,
			hashPw: encrypt(req.body.password)
		}).then(function(data) {
			return res.json(data)
		})
	}

	})
});



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
			return res.json({msg: "you logged in"})
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

}