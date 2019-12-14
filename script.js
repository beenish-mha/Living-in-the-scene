
var $favFilmsArray = [];
var $formElement = $('.control');
var $myMovies =$(".moviebutton");
var $myMoviesList;
var faveFilms = JSON.parse(localStorage.getItem("favFilms"));
console.log("No of Fave films: "+ faveFilms.length);
console.log("Fave films: "+ faveFilms)


function saveToLocalStorage(response) {
  // if($myMoviesList == null)
  // { var $favFilmsArray = [];}
  // else {var $favFilmsArray=JSON.parse(localStorage.getItem("favFilms"))}
  // console.log(response.title);
  //  take the IMDB Id from response and assign it to a variable//
  var favFilms = response.title
  var imdbID = response.imdb_id;
  $favFilmsArray.push(favFilms);
  localStorage.setItem("favFilms", JSON.stringify(favFilms));
  window.localStorage.setItem ("favFilms", JSON.stringify($favFilmsArray));
  faveFilms.push(favFilms);
  localStorage.setItem("favFilms", JSON.stringify(faveFilms));
}
function handleButtonClick(event) {
  var tmdbid = event.target.dataset.id;
  var queryURL2 = "https://api.themoviedb.org/3/movie/" + tmdbid + "?api_key=0a2e111476bfd341e9cc4952d7f4e484&language=en-US"

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then( function(response) {
    saveToLocalStorage(response)
  });
}

// old code from bethan
//=================


//"On Click Event" listener (Search-button n.b. may be called something else)
function creatCardElement(data, id) {
  // create elements
  var $liElement = $("<li>").attr("class", "movie-title");
  var $pElement = $("<p>").attr("class", "title-text").text(data + " " + id);
  var $btnElement = $("<button>").attr("class", "title-btn").attr("data-id", id).text("+")
  // add on clicks
  $btnElement.on('click', handleButtonClick)
  // append elements
  $liElement.append($pElement, $btnElement);
  $(".list").append($liElement);
}

function handleMovieResponse(response) {
  console.log(response)
  // calling function to create a list of movies

  response.results.forEach(function (element) {
    creatCardElement(element.title, element.id)
  }
  );

}

function getMovie(movieName) {
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=0a2e111476bfd341e9cc4952d7f4e484&query=" + movieName;
  // AJAX function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {handleMovieResponse(response)});
}

function handleSubmit(event) {
  event.preventDefault();
  var $movie = $("#movie-name").val();
  getMovie($movie);
}
$formElement.on("submit", handleSubmit);

//third Ajax call, to retrieve filming locations:
function getLocations(imdbID) {
  var queryURL3 = "https://www.myapifilms.com/imdb/idIMDB?idIMDB=" + imdbID + "&token=67b14d73-182d-4e58-8ea8-df1280852d84&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&goofs=0&keyword=0&quotes=0&fullSize=0&companyCredits=0&filmingLocations=2&directors=1&writers=1";
  // AJAX function
  $.ajax({
    url: queryURL3,
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*"},
    method: "GET",
    dataType:"json"
  })
}

//Create fave film list
function listFavemovies(){
  var $liElement = $("<li>");
  var $pElement = $("<p>");
  for (var i = 0; i < faveFilms.length; i++){
    var $faveFilmText = faveFilms[i];
    $liElement.append($pElement).text($faveFilmText);
    //where to list text
    $(".list").append($liElement);
  }
}

