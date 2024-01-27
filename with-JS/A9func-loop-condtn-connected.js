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

let names = ["Ram", "Sita", "Shyam", "Radha" , "Hari", "Laxmi"];
for (let count=0; count < names.length; count++) {
    console.log(`Bho ${names[count]}`);
}


function multiply(Input, start, end) {
    for (let count = start; count <= end; count++) {
        console.log(`${Input} * ${count} = ${Input*count}`);
    }
}
multiply(5, 1, 10);
multiply(10, 5, 10);

let usersData = [
    {name:"Ram", password: 1234},
    {name:"Sita", password: 12345},
    {name:"Laxman", password: 123456},
]

function logIn(userName, passKey) {
    for (let index = 0; index < usersData.length; index++)
    {
        if (userName == usersData[index].name && passKey == usersData[index].password) {
            return `Hey ${usersData[index].name}, you're welcome.`
        }
    }
    return 'Invalid UserName or Password'
}

console.log(logIn("Ram", 1234));
console.log(logIn("Sita", 12345));
console.log(logIn("Laxman", 123456));
console.log(logIn("Ramm", 12345));