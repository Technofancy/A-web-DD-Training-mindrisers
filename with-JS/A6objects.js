/* String Literal or Template Literal i.e. back-tics (`...`)*/

let firstName = " Bhuwan ";
let lastName = "Khatri";
// let fullName = firstName+lastName;
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

/* Functions */
console.log(`4 + 5 = ${4+5}.`);

/*  group - function */
 function calcSum() {
    console.log(`1 + 2 = ${1+2}.`)
 }

//  Block Scope
 // calling/executing a function
 calcSum(1, 2);
 calcSum(2, 2); // same result as function is static.

 function doSum(input1, input2) { // two parameters as inputs.
    console.log(`${input1} + ${input2} = ${input1+input2}.`)
 }

 doSum(10, 20);
 doSum(20, 20);

 function doSubstraction(take1, take2) {
    console.log(`${take2} - ${take1} = ${take2 - take1}`)
 }

 doSubstraction(2, 3);
 doSubstraction(77, 233);

 let todos= [
    { title: "HTML", status: "completed"},
    { title: "CSS", status: "completed"},
    { title: "JS", status: "completed"},
]
todos[2].status = "running";

// function courseStatus(title, Status) {
//     console.log(`${title} is ${Status}`); 
// }

// for (i=0; i <= 2; i++) {
//     courseStatus(todos[i].title, todos[i].status);
// }

function printStatus(index) {
   let title = todos[index].title;
   let status = todos[index].status;
   console.log(`${title} is ${status} for index: ${index}`);
}
printStatus(0);
printStatus(1);
printStatus(2);

function printTodoStatus(todo) {
   console.log(`${todo.title} is ${todo.status}.`);
}
printTodoStatus(todos[0]);
printTodoStatus(todos[1]);
printTodoStatus(todos[2]); 


console.log(typeof("Hello"));
console.log(typeof(123));
console.log(typeof(true));

function customTypeof(value) {
   return "STRING";
   return undefined //Once returned nothing works.
}
console.log(customTypeof(123));
console.log(customTypeof(true));

function double(input) {
   return input * 2;
   console.log("Do something.") //Once returned nothing works.
}

let doubleValue = double(1000);
console.log(doubleValue);
console.log(double(5));
console.log(double(50));