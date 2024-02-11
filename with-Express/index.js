/*  Global Object */
// 1) console :
// console.log(_filename)

// node Modules
// third-party : axios, bcrypt, nodemon
// core 
// local : common JS (express), ES module (React)

function signup(username, email, password) {
    let data = {
        "username" : username,
        email,
        password : "@&^$hgfFH"
    }
    console.log(data);
}

signup("ram", "ram@gmail.com", "password");