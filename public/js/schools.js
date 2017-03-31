// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character

$(document).ready(function(){
$.get("/myCollege/"+sessionStorage.id, function(data) {
  var myData = data;
  console.log(myData);
  //create 5 arrays for each data object:
  	newArray0 = myData[0];
  	newArray1 = myData[1];
  	newArray2 = myData[2];
  	newArray3 = myData[3];
  	newArray4 = myData[4];
  
  //Displaying Each Array Data
  Object.getOwnPropertyNames(newArray0).forEach(
  		function (val, idx, array) {
  			newDiv = $("<div>");
  			newDiv.addClass("well");
  			newDiv.append(val + ' : ' + newArray0[val])
  			$('#schoolOne').append(newDiv);
  		});

   Object.getOwnPropertyNames(newArray1).forEach(
  		function (val, idx, array) {
  			newDiv = $("<div>");
  			newDiv.addClass("well");
  			newDiv.append(val + ' : ' + newArray1[val])
  			$('#schoolOne').append(newDiv);
  		});

    Object.getOwnPropertyNames(newArray2).forEach(
  		function (val, idx, array) {
  			newDiv = $("<div>");
  			newDiv.addClass("well");
  			newDiv.append(val + ' : ' + newArray2[val])
  			$('#schoolOne').append(newDiv);
  		});

     Object.getOwnPropertyNames(newArray3).forEach(
  		function (val, idx, array) {
  			newDiv = $("<div>");
  			newDiv.addClass("well");
  			newDiv.append(val + ' : ' + newArray3[val])
  			$('#schoolOne').append(newDiv);
  		});

      Object.getOwnPropertyNames(newArray4).forEach(
  		function (val, idx, array) {
  			newDiv = $("<div>");
  			newDiv.addClass("well");
  			newDiv.append(val + ' : ' + newArray4[val])
  			$('#schoolOne').append(newDiv);
  		});

  });
  });

// for (i = 0; i <)
