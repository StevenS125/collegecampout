
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
  if ('name' in sessionStorage) {
    $('#user').html("logged in as "+sessionStorage.name )
    logBtn = $('<button>');
    logBtn.addClass("btn btn-default");
    logBtn.addClass("logout");
    logBtn.html("logout");

    $('#user').append(logBtn)
  }

  $(document).on("click", ".btn-danger", function(){
    self = $(this)
    newFav = {
      user_id: sessionStorage.id,
      college_id: $(this).data("id")
    }
   $.post("/myCollege/add",newFav)
   .done(function(response){
     if (!response.msg) {
       div = self.parent()
       div.empty();
       div.html("added to favs")
     }
     else {
       //code to say list is full
     }
   })
  
   
  })
})



$("#admitButton").on("click", function(event) {
  event.preventDefault();
  //create an array from html option values to use as the range for college query
  adRange = []
  admit = parseFloat($("#admitList option:selected").val())
    if (admit === 1) {
      adRange = [0,1]
    }
    else if (admit === .8) {
      adRange = [.8,1]
    }
    else if (admit === .5 ) {
      adRange = [.3, .7]
    }
    else if (admit === .2) {
      adRange = [.01, .2]
    }
//check if state was input -- if not set state to wildcard for query
state =  $("#stateList").val().trim()
if (state === "") {
  state = "%"
}
//create search/query object for api call
    var search = {
    // name from name input
    state :  state,
    admit: adRange,
    tuition: parseInt($("#costList option:selected").val())
  };

  console.log(search);

    // send an AJAX POST-request with jQuery
  $.post("/api/college", search)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
// create html for each college object in the array returned by query
  //  needs buttons with college id as data in the element
for (i in data) {
  newDiv = $("<div>");
  newDiv.addClass("well");
  newDiv.append($('<h4>').html(data[i].College));
  newDiv.append($('<h5>').html(data[i].City+", "+data[i].State));
  var link = $('<a>').attr("href", data[i].Webstie);
  favBtn = $('<button>').attr("data-id", data[i].id);
  favBtn.addClass("btn btn-danger pull-right");
  heart = $('<span>').addClass('glyphicon glyphicon-heart');
  favBtn.append(heart);
  newDiv.append(favBtn);
  


  newDiv.append((link.html(data[i].Webstie)));

  $('#search-results').append(newDiv);

}

      //show modal
      $('#myModal').modal();
    });
});





