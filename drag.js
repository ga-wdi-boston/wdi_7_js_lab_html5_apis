$(document).ready(function() {
  $('.todo-item').on('dragstart', function(event){
    event.originalEvent.dataTransfer.setData('text/plain', $(this).data('id'));
  });

  // Complete Task
  $('.todo-list').on('drop', function(event){
    var id = event.originalEvent.dataTransfer.getData('text/plain');
    var listItem = $(this).parent().find("[data-id='" + id + "']");

    $(listItem).remove();
    $(this).find('ul').append(listItem);

    event.preventDefault();
  });

  // Delete task
  $('#delete').on('drop', function(event){
    var id = event.originalEvent.dataTransfer.getData('text/plain');
    var listItem = $(this).parent().find("[data-id='" + id + "']");

    $(listItem).remove();

    event.preventDefault();
  });
});
