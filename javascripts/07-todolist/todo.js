const todolist = [
    "Belajar Javascript Dasar",
    "Belajar Javascript Object Oriented Programming",
    "Belajar Javascript Document Object Model"
];

function clearTodoList() {
    const todolistBody = document.getElementById("todolistBody");
    while(todolistBody.firstChild) {
        todolistBody.removeChild(todolistBody.firstChild);
    }
}

function addTodoList(todo) {
    const tr = document.createElement("tr");
        const tdButton = document.createElement("td");
        tr.appendChild(tdButton);

        const buttonDone = document.createElement("input");
        buttonDone.type = "button";
        buttonDone.value = "Done";
        tdButton.appendChild(buttonDone);

        const tdTodo = document.createElement("td");
        tdTodo.textContent = todo;
        tr.appendChild(tdTodo);

        const todolistBody = document.getElementById("todolistBody");
        todolistBody.appendChild(tr);
}


// TODO: Display Todo
function displayTodoList() {

    clearTodoList();

    for(let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];

        const searchText = document.getElementById("search").value.toLowerCase();

        if (todo.toLowerCase().includes(searchText)) {
            addTodoList(todo);
        }

    }
}


// TODO: Add Todo
document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    console.info(todolist);
    displayTodoList();
}

// TODO: Search Todolist

const searchInput = document.getElementById("search");

searchInput.onkeyup = function() {
    displayTodoList();
}

searchInput.onkeydown = function() {
    displayTodoList();
}

displayTodoList();