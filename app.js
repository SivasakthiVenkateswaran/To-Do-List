
var inp = document.getElementById("input");
var ui = document.getElementById("list-container");

function add() {
    var todo = document.createElement("li");
    todo.innerHTML = inp.value + "<button onclick='delet(event)'>Delete</button>";
    ui.append(todo);
}

function delet(event) {
    event.target.parentElement.remove();
}
