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