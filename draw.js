$(document).ready(function() {
  var canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d'),
    imageObj = new Image(),
    dragging = false,
    prevX,
    prevY;

  imageObj.onload = function(){
    context.drawImage(imageObj, 0, 0, 900, 550);
  };

  $('#canvas-button').click(function() {
    event.preventDefault();
    imageObj.src = $("#canvas-input").val();
    $("#canvas-input").val("");
    return false;
  });

  canvas.onmousedown = function(e){
    e.preventDefault();
    dragging = true;
    prevX = e.offsetX;
    prevY = e.offsetY;
    context.beginPath();
    context.moveTo(e.offsetX,e.offsetY);
    return false;
  };

  canvas.onmousemove = function(e){
    e.preventDefault();
    if (dragging === true) {
      context.lineTo(e.offsetX,e.offsetY);
      context.lineWidth = 8;
      context.lineCap = 'round';
      context.strokeStyle="red";
      context.stroke();
      prevX = e.offsetX;
      prevY = e.offsetY;
    }
    context.beginPath();
    context.moveTo(e.offsetX,e.offsetY);
    //context.lineTo(20,100);
    return false;
  };

  canvas.onmouseup = function(e){
    e.preventDefault();
    dragging = false;
    context.lineTo(e.offsetX,e.offsetY);
    context.lineWidth = 8;
    context.lineCap = 'round';
    context.strokeStyle="red";
    context.stroke();
    return false;
  };

  // bind event handler to clear button
  document.getElementById('clear').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

});

