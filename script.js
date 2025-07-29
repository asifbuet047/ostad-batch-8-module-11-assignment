// Get DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Array to store todos
let todos = [];

// Function to render todos
function renderTodos() {
  // Clear previous list
  todoList.innerHTML = "";

  // Render each todo
  todos.forEach((todo, index) => {
    const item = document.createElement("li");
    item.className =
      "list-group-item d-flex justify-content-between align-items-center";
    item.textContent = todo;

    const buttonGroup = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.style.borderWidth = "2px";
    deleteButton.style.borderColor = "black";
    deleteButton.style.borderStyle = "solid";
    deleteButton.style.margin = "2px";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteTodo(index);
    });

    const updateButton = document.createElement("button");
    updateButton.className = "btn btn-warning btn-sm";
    updateButton.style.borderWidth = "2px";
    updateButton.style.borderColor = "black";
    updateButton.style.borderStyle = "solid";
    updateButton.style.margin = "2px";
    updateButton.textContent = "Update";

    updateButton.addEventListener("click", () => {
      const newName = prompt("Edit Your todo", todo);
      if (newName && newName.trim() != "") {
        updateTodo(newName, index);
      }
    });

    buttonGroup.appendChild(deleteButton);
    buttonGroup.appendChild(updateButton);
    item.appendChild(buttonGroup);
    todoList.appendChild(item);
  });
}

// Function to add a new todo
function addTodo(todoText) {
  todos.push(todoText);
  renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function updateTodo(rename, index) {
  todos[index] = rename;
  renderTodos();
}

// Form submission handler
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodo(todoText);
    todoInput.value = ""; //clear each time when todo is added into the list
  } else {
    alert("Please give a todo name");
  }
});
