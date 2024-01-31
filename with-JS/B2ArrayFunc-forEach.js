let todos = [
    {
        title: "variable",
        status: "completed",
        createAt: "2024-01-03"
    },
    {
        title: "array",
        status: "completed",
        createAt: "2024-01-05"
    },
    {
        title: "object",
        status: "completed",
        createAt: "2024-01-07"
    },
    {
        title: "loop",
        status: "pending",
        createAt: "2024-01-09"
    },
    {
        title: "function",
        status: "pending",
        createAt: "2024-01-10"
    },
];


let completedTodos = [];
let pendingTodos = [];
for (let index = 0; index < todos.length; index++) {
    let ourTodos = todos[index].status;
        if (ourTodos == "completed") {
        completedTodos.push(todos[index]);
    } else {
        pendingTodos.push(todos[index]);
    }
};
console.log("compltedTodos", completedTodos);
console.log("pendingTodos", pendingTodos);

const someNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
for (let index = 0; index < someNames.length; index++) {
  console.log(`${index + 1}-${someNames[index]}`);
}

const showPopUps = () => {
  console.log("Show PopUps after 2 seconds.");
};
// showPopUps()

setTimeout(showPopUps, 2000); //callback function
// Don't call func as it (setTimeout) urges for func as parameter


// Anonymous function
setTimeout(() => {
  console.log("Second PopUp.");
}, 3000);


someNames.forEach((element, index) => {
    console.log("Index : ", index+1, "Element : ", element); //no break/return
}
);



let ToDos = [
    {
        title: "HTML",
        status: true,
    },
    {
        title: "JS",
        status: true,
    },
    {
        title: "React",
        status: false,
    },
];

ToDos.forEach( (element) => {
    if (element.status) {
        console.log(`${element.title} is completed`)
    }
    else {
        console.log(`${element.title} is pending`)
    }
}
)