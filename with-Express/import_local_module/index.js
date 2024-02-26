const path = require("path")
const http = require("http")
// const createUser = require("./auth") // singup = () =>{ } // if it is default export
const auth = require("./auth") // {login:()=>{},singup:()=>{}} // if it is named exprt

console.log(path.join(__dirname,"uploads"));

auth.signup("ram", "ram@gmailcom", "Password")
auth.login("ram", "ram@gmailcom", "Password")


/* 

    global object 
    - console
    - __dirname
    - __filename
    - require

    Node Modules
     - third party
        eg: axios, bcrypt, nodemon ...
     - core 
     - local  (research)
        - common js module  (express )
        - Es module  (react)

*/

