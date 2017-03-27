


$("#create").on("click", function(event) {
  event.preventDefault();
  user = {
      name: $('#name').val().trim(),
      password: $('#pw').val().trim()
  }
  console.log(user)

  $.post("/user/create", user)

  .done(function(data){
      console.log(data)
      


  })



});

$("#login").on("click", function(event) {
  event.preventDefault();
  user = {
      name: $('#name').val().trim(),
      password: $('#pw').val().trim()
  }
  console.log(user)

  $.post("/user/login", user)

  .done(function(data){
      console.log(data)
      


  })



});

// make sure you 'npm install crypto --save'



