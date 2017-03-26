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