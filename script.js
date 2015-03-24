$(function() {  // document ready

  var deleteButton = '<button class="delete-btn btn btn-danger" type="submit">Delete</button>';

  $('#new-todo-btn').on('click', function(e) {  // get click on add button
    e.preventDefault(); // stop page from reloading
    var newTodo = $('#new-todo').val(); // text input
    if (newTodo !== '') { // only add item if text was entered
      $('<li class="drag">' + newTodo + deleteButton + '</li>').appendTo('#items');  // adds newTodo to list w/ delete button
      $('#new-todo').val(''); // clears text field
      $('#new-todo').focus(); // set focus back to input field
    } else {
        $('#new-todo').focus();
      };
  });


  // event delegation: look at document, listen for click on class, run function
  $(document).on('click', '.delete-btn', function(e) {  // get click on delete button
    e.preventDefault();
    console.log('delete clicked');
    $(this).parent().fadeOut(750, function() {  // item will fade out before being removed
      $(this).remove();  // removes item from list
    });
    $('#new-todo').focus();
  });

  // make list items sortable
  $( "#items" ).sortable({
    appendTo: document.body
  });
})