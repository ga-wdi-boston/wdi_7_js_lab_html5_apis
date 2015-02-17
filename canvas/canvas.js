$(document).ready(function(){
  CanvasApp.draw();

});

var CanvasApp = {

  draw: function(){
    var $canvas = $('#my-canvas')[0];
    if ($canvas.getContext){
      var context = $canvas.getContext('2d');

      context.fillStyle = "rgb(204, 122, 55)";
      //little square
      context.fillRect (10, 10, 55, 50);

      context.fillStyle = "rgba(21, 12, 250, 0.4)";
      //big square
      context.fillRect (40, 25, 75, 70);
    }
  }
};








