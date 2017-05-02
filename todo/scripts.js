// Create a new todo and add it to the page
function createTodo(text) {
	if (!text || text.trim() === '') {
  	alert("Todos don't like to be empty");
    return;
    }

	var todoHtml = getTodoHtml(text);
  var $todo = $(todoHtml)
  	.on('click', toggleTodoStatus)
    .on('click', '.remove-todo', removeTodo);

	$('#todo-container').append($todo);
}

// Update the status of the todo
function toggleTodoStatus(event) {
	var $todoText = $(event.currentTarget).find('.todo-text');

if ($todoText.hasClass('done'))
    {
      $todoText.removeClass('done');
       } else {
        $todoText.addClass('done');
      }
}

// Remove the todo from the page
function removeTodo(event) {
	$(event.target).closest('.todo-item').remove();
}

// When the user submits the new form
$('#todo-form').on('submit', function(event) {
	event.preventDefault();

 var $inputField = $('input');
 var todoText = $inputField.val();
 createTodo(todoText);
 $inputField.val('');
});

/*
 * Helper methods
 */

// HTML element for the given todo text
function getTodoHtml(text)  {
	return '<div class="todo-item well">' +
    '<span class="todo-text">' + text + '</span>' +
    '<a class="remove-todo" href="#"><span class="glyphicon glyphicon-remove"></a>' +
    '</div>';
}
