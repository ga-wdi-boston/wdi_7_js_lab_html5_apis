$(document).ready(function() {
  var myWorker = new Worker('js/random_numbers.js'),
      returnCount = 0,
      widthIncrement = 0;
  myWorker.addEventListener('message', function(event) {
    returnCount++;
    var newWidth = parseInt(widthIncrement * returnCount) + "px";
    if (event.data !== '') {
      $('#result').text(event.data)
    } else {
      $('#display').css('width', newWidth);
    }
  });
  $('#randomize').click(function(event) {
    var userInput = $('#user-num').val();
    returnCount = 0;
    widthIncrement = 500 / (Math.floor(userInput / 100000));
    $('#display').empty().css('width', "0px");
    $('#result').text('');
    myWorker.postMessage(userInput);
  });
})
