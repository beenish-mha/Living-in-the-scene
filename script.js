//variable location - from search field n.b. search text class may be called something else
var location = $(".searchText").val();
//query URL variable
var queryURL = "https://" + location;
//JQuery element variables
//---------------------------//
//what elements will we be adding?

//Jquery content variables
//---------------------------//
//what will the content be, from the AJAX function responces

//"On Click Event" listener (Search-button n.b. may be called something else)
$(".search").on("click", function(){
});

//AJAX function
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("-----------insert HTML field-------------").text(JSON.stringify(response));
  });

  //Jquery appends
  //---------------------------//