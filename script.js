//"On Click Event" listener (Search-button n.b. may be called something else)
function creatCardElement(data) {
  var $textElement = $("<li>").attr("class", "movie-title").text(data);
  $(".list").append($textElement);
}

var $formElement = $(".control");

function handleSubmit(event) {
  event.preventDefault();
  var $movie = $("#movie-name").val();
  console.log($movie);
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=0a2e111476bfd341e9cc4952d7f4e484&query=" + $movie;


  // AJAX function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    // calling function to create a list of movies
    response.results.forEach(function (element) {
      creatCardElement(element.title)
    }
    );

  });
}

$formElement.on("submit", handleSubmit);
