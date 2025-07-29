const inputTextField = document.getElementById("todo-input");
const addTodoButton = document
  .getElementsByClassName("input-group")
  .item(0)
  .children.item(1);

const todoList = document.getElementById("todo-list");
const listItemClassName = "list-group-item";

addTodoButton.addEventListener("click", (event) => {
  event.preventDefault(); // this method prevent form submissiond efault behaviour to prevent relaod
  const value = inputTextField.value;
  const todo = value.trim();
  if (todo.length > 0) {
    const newTodo = document.createElement("li");
    newTodo.className = "list-group-item";
    newTodo.innerHTML = todo;
    todoList.appendChild(newTodo);
  } else {
    alert("Please input a name");
  }
});
