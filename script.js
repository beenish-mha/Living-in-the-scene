


var $listElement = $(".list")
var $formElement = $('.control');
var $myMovies =$(".moviebutton");
var $myMoviesList;
var imdbID;
var filmLocation
var  $favFilmsArray=[]
// var faveFilms = JSON.parse(localStorage.getItem("favFilms"));

function saveToLocalStorage(response) {
  //console.log(response.title);
  //  take the IMDB Id from response and assign it to a variable//
  var $favFilms = response.title
  console.log($favFilms)
  var imdbID = response.imdb_id;
  $favFilmsArray.push($favFilms);
 localStorage.setItem("favFilms",JSON.stringify($favFilmsArray));
  console.log($favFilmsArray);
  getLocations(imdbID);

}
function handleButtonClick(event) {
  $(".list").empty();
  var tmdbid = event.target.dataset.id;
  var queryURL2 = "https://api.themoviedb.org/3/movie/" + tmdbid + "?api_key=0a2e111476bfd341e9cc4952d7f4e484&language=en-US"

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then( function(response) {
    imdbID = response.imdb_id
    getMovielocation(imdbID)
    saveToLocalStorage(response) 
  });
}

//"On Click Event" listener (Search-button n.b. may be called something else)
function creatCardElement(data, id) {
  // create elements
  var $liElement = $("<li>").attr("class", "movie-title");
    var $btnElement = $("<button>").attr("class", "title-btn title-text").attr("data-id", id).text(data)
  // add on clicks
  $btnElement.on('click', handleButtonClick)
  // append elements
  $liElement.append($btnElement);
  $(".list").append($liElement);
}

function handleMovieResponse(response) {
  console.log(response)
  // calling function to create a list of movies
  var $pElement = $("<h2>").attr("class", "subtitle is-5").text("Click on your favourite FILM to see the locations ");
  $(".second-div").append($pElement);
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

function getMovielocation(movieLocation) {
  $(".list").empty();
  var queryURL = "https://mx957e4nqd.execute-api.us-east-1.amazonaws.com/dev/movies?id="+movieLocation;
  // AJAX function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $(".second-div").append($("<img>").attr("class", "poster").attr("src", response.data.movies[0].urlPoster))
    console.log(response)
    $('body').css('background-image', 'url('+response.data.movies[0].urlPoster+')');   
     var locationArray = (response.data.movies[0].filmingLocations)
     for (var arr=0; arr<locationArray.length; arr++) {
       filmLocation= locationArray[arr].location;
       var $liEl = $("<li>").attr("class", "movie-location").text(filmLocation);
       $listElement.append($liEl)
     }
    
  });
}

function handleSubmit(event) {

  event.preventDefault();
  $(".list").empty();
  $(".second-div").empty();
  var $movie = $("#movie-name").val();
  getMovie($movie);
}
$formElement.on("submit", handleSubmit);

// empty the list on my movie click btn
function favList(){
  $myMoviesList=JSON.parse(localStorage.getItem("favFilms"));
  $(".list").empty();
  listOfFav();
}
$myMovies.on("click", favList);

//create the list of fav movies
function listOfFav (){
  $(".second-div").empty();
 for (var i = 0; i<$myMoviesList.length; i++){
  var $liEl = $("<li>").attr("class", "movie-title").text($myMoviesList[i]);
   $listElement.append($liEl)
 }
}

