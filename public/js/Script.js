
// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
// $("#searchButton").on("click", function(event) {
//   event.preventDefault();

//   // make a newSchool obj
//   var newSchool = {
//     // name from name input
//     state: $("#stateList").val().trim(),
//     // role from role input
//     name: $("#nameList").val().trim(),
//     // age from age input
//     Admin: $("#admin").val().trim(),
//   };

//   // send an AJAX POST-request with jQuery
//   $.post("/api/schools", newSchool)
//     // on success, run this callback
//     .done(function(data) {
//       // log the data we found
//       console.log(data);
//       // tell the user we're adding a character with an alert window
//       alert("Adding school...");
//     });

// });

$(document).ready(function(){
  if (sessionStorage.length > 0) {
    $('#user').html("logged in as "+sessionStorage.name )
  }
})

$("#admitButton").on("click", function(event) {
  event.preventDefault();

    var search = {
    // name from name input
    state: $("#stateList").val().trim(),
    // role from role input
    admit: $("#admitList option:selected").val(),
    tuition: $("#costList option:selected").text()

  };

  console.log(search);

    // send an AJAX POST-request with jQuery
  $.post("/api/college", search)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      
for (i in data) {
  newDiv = $("<div>");
  newDiv.append($('<h4>').html(data[i].College));
  newDiv.append($('<h5>').html(data[i].City));
  var link = $('<a>').attr("href", data[i].Webstie);

  newDiv.append((link.html(data[i].Webstie)));


  $('#search-results').append(newDiv);

}

      $('#search-city').html(data[0].City);
      $('#search-website').html(data[0].Webstie);
      $('#myModal').modal();
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



