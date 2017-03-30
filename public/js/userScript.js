


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
      sessionStorage.setItem("id", data.id)
      sessionStorage.setItem("name", data.name)
      console.log(sessionStorage)
      window.open('/search', "_self")


  })



});

// make sure you 'npm install crypto --save'



