$(document).ready(function(){
  $('#check-in').on('click', geoApp.checkIn);
  $('#clear').on('click', geoApp.clear);
});

var geoApp = {
  checkIn: function(){
    navigator.geolocation.getCurrentPosition(geoApp.success, geoApp.error);
  },
  success: function(pos){
    var crd = pos.coords;
    var date = moment().format('LLL');

    // Handlebars
    var source = $('#position_template').html();
    var template = Handlebars.compile(source);
    var position_html = template(crd, date);
    $('#check-in-list').append(position_html);

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    console.log(date);
  },
  error: function(err){
    console.warn('ERROR(' + err.code + '): ' + err.message);
  },
  clear: function(event){
    $('#check-in-list').empty();
  }
};

var canvasApp = {
  draw: function(){
    var canvas = $('#tutorial');
    var ctx = canvas.getContext('2d');
  }
};

