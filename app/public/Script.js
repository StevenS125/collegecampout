$("#searchButton").on("click", function(event) {
  event.preventDefault();



  // Code for storing and retrieving the most recent user.

  let year = $("#stateList").val().trim()

  let make = myData[$("#schoolList").val().trim()].title;

  let model = $("#gpaList").val().trim();