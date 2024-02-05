// DOM Manupulation

let todosArray = ["HTML", "CSS", "JS"];

function addTodo(event) {
  event.preventDefault();

  let input = document.getElementById("input-title").value;
  todosArray.push(input);
  console.log("Addedtitle:", input);

  inListFromTodoList()
}

addTodo();

function deleteTitle(index) {
  todosArray.splice(index, 1);
  console.log("Deleted title at index :", index);

  inListFromTodoList()
}


function inListFromTodoList() {
  let output = "";
  todosArray.forEach((elInput, index) => {
    output += `<li>${elInput} <button onclick="deleteTitle(${index})"> Del </button> </li>`
  });

  document.getElementById("todos-list").innerHTML = output;
}


// Research :-
// DOM - shopping list from task folder
// Local storage in browser.
// postman API download for ubuntu.
