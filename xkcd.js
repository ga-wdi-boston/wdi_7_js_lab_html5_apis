// Sarah Ben And Brian Do some things !

$(document).ready(function(){
  var baseUrl = 'http://xkcd-unofficial-api.herokuapp.com/xkcd';

  // on form click
  $('#comic-num').submit(function(event){
    event.preventDefault();
    // set the id from form input
    var $form = $(event.target);
    var id = $form.find("input[name='comicID']").val();

    $.ajax({
    url: baseUrl,
    data: {api_key:"foobar", num:id}
    })
    .done(function(data){
      data.forEach(function(comic){
        // adds the comic html to the page
        addToComics(comic);
        // sets the state with the current comic variable
        history.pushState({selectedComic: comic});
      });
      // clears the form after use
      $form.find("input[name='comicID']").val('');
    })
    .fail(function() {
      console.log("error");
    });
  });

  // listens for a popstate (forward or back)
  $(window).on('popstate', function(event) {
    // sets changed state to the current state
    var state = event.originalEvent.state;
    // if it's a valid state
    if (state) {
      //reset the comic to the page
      addToComics( state.selectedComic );
    }
  });

  // creates the comic html and adds it to the page
  function addToComics(comic){
    //clear the old comic
    $('#comics').empty();
    // set comicInput = to the form input
    var $comicInput = $('#comic-num').find("input[name='comicID']");
    // sets the value back to the comics id
    $comicInput.val(comic.id);
    // focuses on the input
    $comicInput.focus();

    // builds html
    var $comic = $('<div>');
      $comic.append($('<h2>').text(comic.title));
      $comic.append($('<img>').attr ('src', comic.img));
    // adds to page
    $('#comics').append($comic);
  }
});
