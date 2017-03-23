// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#searchButton").on("click", function(event) {
  event.preventDefault();

  // make a newSchool obj
  var newSchool = {
    // role from role input
    name: $("#nameList").val().trim(),
    // age from age input
    Admin: $("#admin").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.get("/api/college", newSchool)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding school...");
    });

});


$("#statehButton").on("click", function(event) {
  event.preventDefault();

    var newState = {
    // name from name input
    parameter: $("#stateList").val().trim(),
    // role from role input
    searchType: "state"

  };

    // send an AJAX POST-request with jQuery
  $.get("/api/college", newState)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding state...");
    });

});

$("#adminButton").on("click", function(event) {
  event.preventDefault();

  // make a newSchool obj
  var newAdmin = {

    Admin: $("#admin").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.get("/api/college", newAdmin)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding level of difficulty...");
    });

});