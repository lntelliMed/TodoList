var todos = ["Buy a new turtle"];
var input = prompt("What would you like to do?");

while (input !== "quit"){
	if(input === "list"){
		listTodos();
	} else if (input === "new"){
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app!");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
	//console.log(todos);
}

function addTodo(){
	var newTodo = prompt("Add a new todo item");
	todos.push(newTodo);
	console.log("Added a new todo item");
}

function deleteTodo(){
	var index = prompt("Enter the index of the todo item you want to delete");
	todos.splice(index, 1);
	console.log("The todo item at index " + index + " has been deleted!");
}