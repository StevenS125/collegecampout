
// when user clicks add-btn
$("#searchButton").on("click", function(event) {
  event.preventDefault();

  // make a newSchool obj
  var newSchool = {
    // name from name input
    state: $("#stateList").val().trim(),
    // role from role input
    name: $("#nameList").val().trim(),
    // age from age input
    Admin: $("#admin").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/schools", newSchool)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding school...");
    });

});
