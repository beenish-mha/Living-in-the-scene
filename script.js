//"On Click Event" listener (Search-button n.b. may be called something else)
function creatCardElement(data){
  var $textElement = $("<li>").attr("class", "movie-title").text(data);
    $(".list").append($textElement);
}

$("#search-button").on("click", function(){
  var $movie = $("#movie-name").val();
  console.log($movie);
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=0a2e111476bfd341e9cc4952d7f4e484&query=" + $movie;


// AJAX function
$.ajax({
   url: queryURL,
    method: "GET"
  }).then(function(response) {

// calling function to create a list of movies
    response.results.forEach(function(element){
      creatCardElement(element.title)}
      );

  });
// --------------- Second TMDB API call using TDMB Id to find IMDB Id ------------------- //

// assign the TMDB Id to a variable, once correct film is chosen from search list above //

  // var tmbdID = "";
  // var queryURL2 = "https://api.themoviedb.org/3/movie/" + tmbdID + "?api_key=0a2e111476bfd341e9cc4952d7f4e484&language=en-US"

  // $.ajax({
  //   url: queryURL2,
  //   method: "GET"
  // }).then(function(response) {
  //   //  take the IMDB Id from response and assign it to a variable//

  //   var imdbID = response.imdb_id;

  // });

});
