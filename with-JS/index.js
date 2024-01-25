let todos = [
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
]

function statusCheck(index) {
    if (todos[index].status) {
        return `${todos[index].title} is completed.`
    } else {
        return `${todos[index].title} is pending.`
    };
};

console.log("Length of todo array : ",todos.length);

for (let count=0; count<=(todos.length-1); count++) {
    console.log(statusCheck(count));
};

console.log("Ended");