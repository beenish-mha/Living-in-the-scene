
var $favFilmsArray =[];
var handleButtonClick = function (event) {
var tmdbid = event.target.dataset.id;
var queryURL2 = "https://api.themoviedb.org/3/movie/" + tmdbid+ "?api_key=0a2e111476bfd341e9cc4952d7f4e484&language=en-US"

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {
  console.log(response.title);
  //  take the IMDB Id from response and assign it to a variable//
  var $favFilms=response.title
  var imdbID = response.imdb_id;
  $favFilmsArray.push($favFilms);
  window.localStorage.setItem("favFilms", $favFilmsArray);
  console.log (imdbID)

});

}

//"On Click Event" listener (Search-button n.b. may be called something else)
function creatCardElement(data,id){
  // create elements
  var $liElement = $("<li>").attr("class", "movie-title");
  var $pElement = $("<p>").attr("class", "title-text").text(data+" "+id);
  var $btnElement = $("<button>").attr("class", "title-btn").attr("data-id",id).text("+")
  // add on clicks
  $btnElement.on('click', handleButtonClick)
  // append elements
  $liElement.append($pElement, $btnElement);
  $(".list").append($liElement);


}

//ON CLICK search button
$("#search-button").on("click", function(){
  var $movie = $("#movie-name").val();
  console.log($movie);
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=0a2e111476bfd341e9cc4952d7f4e484&query=" + $movie;


// AJAX function
$.ajax({
   url: queryURL,
    method: "GET"
  }).then(function(response) {
console.log(response)
// calling function to create a list of movies

    response.results.forEach(function(element){
      creatCardElement(element.title,element.id)}
      );

  });

// --------------- Second TMDB API call using TDMB Id to find IMDB Id ------------------- //

// assign the TMDB Id to a variable, once correct film is chosen from search list above //

  


});
