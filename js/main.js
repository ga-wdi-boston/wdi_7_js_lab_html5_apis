$(document).ready(function() {
  // $('#by_month').on('click', xkcdApp.fetchMonths);
  $('#by_month').change(xkcdApp.fetchMonths);
  $(window).scroll(xkcdApp.scrollFunction);
  $('#by_number').submit(xkcdApp.fetchNumber);
  window.addEventListener('popstate', function(e) {
    var eventReturnObject = event.state;
    xkcdApp.displayComics(eventReturnObject);
    $('#xkcd_number').val(eventReturnObject[0].id);

    // updateContent(e.state);
  });
});


var xkcdApp = xkcdApp || {};

xkcdApp.offsetYay = xkcdApp.offsetYay || 0;
xkcdApp.limitYay = 5;

xkcdApp.scrollFunction = function(){
// function scrollFunction() {
    var win = $(window);
    // Infinite scroll math!
    if(win.height() + win.scrollTop() >= $(document).height()) {
      xkcdApp.fetchMonths();
    }
  };


xkcdApp.fetchNumber = function(event){
  event.preventDefault();
  var selected_number = $('#xkcd_number').val();
  $.ajax({
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    data: {
      num: selected_number,
      api_key: 'foobar' }
      // limit: xkcdApp.limitYay,
      // offset: xkcdApp.offsetYay}
  }).done(function(result){
    xkcdApp.displayComics(result);
    $('#xkcd_number').val("");
    history.pushState(result, '?id=' + result.id);
  });
};


xkcdApp.fetchMonths = function(){
  var selected_month = $('#by_month').val() || "";

  if(selected_month !== null )

  $.ajax({
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    data: {
      month: selected_month,
      api_key: 'foobar',
      limit: xkcdApp.limitYay,
      offset: xkcdApp.offsetYay}
  })
  .done(xkcdApp.displayComics);

  // $.ajax({
  //   url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
  //   data: {
  //     month: 07,
  //     api_key: 'foobar',
  //     limit: xkcdApp.limitYay,
  //     offset: xkcdApp.offsetYay}
  // })
  // .done(xkcdApp.displayComics);

  xkcdApp.offsetYay += xkcdApp.limitYay;
  // or use closure

};

xkcdApp.displayComics = function(result){
  $('#comic_results').empty();

  var comicCallback = function(comic){
    var comicImg = comic.img;
    var comicAlt = comic.alt;
    var imgElement = $('<img>').attr('src', comicImg).attr('alt', comic.alt);
    $('#comic_results').append(imgElement);
  };

  result.forEach(comicCallback); //forEach takes a function --> function acts on each element in array
};


// http://xkcd-unofficial-api.herokuapp.com/xkcd?year=2006&api_key=foobar

