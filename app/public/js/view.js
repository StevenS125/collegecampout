// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {

  // save the character they typed into the character-search input
  var searchedSchool = $("#School-search").val().trim();

  // replace any spaces between that character with no space
  // (effectively deleting the spaces). Make the string lowercase
  searchedSchool = searchedSchool.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedSchool, function(data) {
    // log the data to our console
    console.log(data);
    // if the data is false (i.e. not there), then return an error message
    if (data === false) {
      $("#name").text("Your School was not found. ");
      // don't show the stats section, since there are no stats to show
      $("#").hide();
    }
    // otherwise
    else {
      // show the stats section
      // picture of school
      // name
      // acceptnce rate, average GPA 
      // party School
      $("#stats").show();
    }

  });

});