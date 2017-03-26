$("#create").on("click", function(event) {
  event.preventDefault();
  user = {
      name: $('#name').val().trim(),
      password: $('#pw').val().trim(),
      admin: false
  }
  console.log(user)

  $.post("/user/create", user)

  .done(function(data){
      console.log(data)
  })



});


// make sure you 'npm install crypto --save'
const crypto = require('crypto')

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
   return crypto.randomBytes(Math.ceil(length/2))
       .toString('hex')
       .slice(0,length);
};

salt = genRandomString(32);
hashedPassword = sha512(password, salt).passwordHash;