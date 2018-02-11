
$(document).ready(function () { 
    $.getJSON("/api/todos")    // this retrieves api info
    .then(addTodos) 

    // this creates a new todo when 'Enter' is pressed
    $('#todoInput').keypress(function(event){
        if(event.which == 13) {
            createTodo();
        }
    })
 });


 //This adds all Todos to the Todo List on html page
 function addTodos(todos){
     todos.forEach(function(todo){
         addTodo(todo);
     })
 }

 function addTodo(todo){
     var newTodo = $('<li>' + todo.name + ' <span>X</span></li>');
         if(todo.completed){
             newTodo.addClass("done");
         }
         $('.list').append(newTodo);
 }


 function createTodo(){
     //send request to create new todo
     var userInput = $('#todoInput').val(); 
     $.post('/api/todos', {name: userInput })
     //if posted correctly, then add todo to list and clear the input box
     .then(function(newTodo){
         $('#todoInput').val('');
         addTodo(newTodo);
     })
     .catch(function(err){
         console.log(err);
     })
 }