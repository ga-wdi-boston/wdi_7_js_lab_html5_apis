$(document).ready(function(){

  $('#check-in').on('click', CheckinApp.checkIn);
  $('#clear').on('click', CheckinApp.clearResults);


});

var CheckinApp = {
  clearResults: function(event){
    $('#location').empty();
  },

  checkIn: function(event){
    navigator.geolocation.getCurrentPosition(CheckinApp.success, CheckinApp.error);
  },

  success: function(position) {

    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var timestamp = moment().format('LLL');

    console.log(latitude);
    console.log(longitude);
    console.log("witin " + accuracy + " meters");

    $("#location").append($('<li>').text(latitude));
    $("#location").append($('<li>').text(longitude));
    $("#location").append($('<li>').text("within "+accuracy+" meters"));
    $("#location").append($('<li>').text(timestamp));

  },

  error: function(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }
};









