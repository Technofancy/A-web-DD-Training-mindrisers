// DOM Manupulation
// alert("Testing JavaScript");

let todosArr = ["HTML", "CSS", "JS"];

function addTodo(event) {
  event.preventDefault();

  let input = document.getElementById("input-title").value;
  console.log("Added new todo.", input);
  todosArr.push(input);

  converTodosToList();
}



function delInput(index) {

  // todosArr.splice(index, 1); // Remove specific input-list.

  // OR 2nd-ly
  // todosArr.filter((el, idx) => idx != index);

  // OR 3rd-ly
  todosArr = todosArr.filter((el, idx) => idx != index);

  converTodosToList();
}



function converTodosToList(){

  let outputList = "";

  todosArr.forEach = (input, index) => {
    outputList += `<li>${input} <button onclick="delInput(${index})">Del</button> </li>`;
  };

      // console.log("Todo at index:", index);

  document.getElementById("todos-list").innerHTML = outputList;
}


// Research :-
// Local storage in browser.
// DOM - shopping list from task folder
// postman API download for ubuntu.
