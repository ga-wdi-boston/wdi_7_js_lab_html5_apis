window.onload = function() {

  function handleDragStart(event) {
  // event.target is the source node.
  this.style.opacity = '0.4';
  };

  var items = document.querySelectorAll('#items .item');
  [].forEach.call(items, function(item_drag) {
    item_drag.addEventListener('dragstart', handleDragStart, false);
  });

};


