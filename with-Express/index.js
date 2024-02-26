/*

const express = require("express");
const app = express();

let todos = ["HTML", "CSS"];
let loggidIn = true;

/* Middleware : A func which access to req & res. 
   next : points to */

/*

function checkAuthentication(req, res, next) {
    if (!loggIn) {
        res.status(401).send()
    }
    console.log("Check Authentication.");
    next()
}

app.use("checkAuthentication") // Global middleware

app.get("/api/todos", (req, res) => {
  console.log("response : List of todos");
  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  if (loggedIn) {
    todos.push("git")
    res.send("Todos created");
  }
  res.status(401).send({
    messege: "Unauthorized",
  });
});

app.delete("/api/todos/reset", (req, res) => {
    if (loggedIn) {
      todos = []
      return res.status(204).send()
    }
    res.status(401).send({
      messege: "Unauthorized",
    });
  });

app.listen(8000, () => {
  console.log("server atrted ...");
});

*/

// ********************************************************************   ****************** ************** *** ** *

// const express = require("express");
// const app = express();

// const { checkAuthentication, checkValidRole } = require("./middleware/auth");
/* object destructuring */

// let todos = ["html", "css"];

/* middleware
     - simply a function which has access to req and res 
        and can modify them 
     - next: points to the next upcomming valid middleware
*/

// app.use(checkAuthentication); // global middleware
// app.use(checkValidRole); // global middleware
/* app.use(express.json()); // sets up req.body // () =>{  return (req,res,next) =>{ req.body = postman body }  }

const createTodos = (req, res) => {
  console.log(req.body);

  let inputTitle = req.body.title;
  if (!"") {
    res.ststus(400).send({
      errors: [
        {
          key: "title",
          message: "This field is required.",
        },
      ],
    });
  } */

  /* input validation */
/* 
  todos.push(req.body.title);
  return res.send("todos creatred");
};

app.get("/api/todos", (req, res) => {
  console.log("response: list of todos ss.");
  res.send(todos);
}); */

/* route level middleware */
/* app.post("/api/todos", checkAuthentication, checkValidRole, createTodos);

app.delete(
  "/api/todos/reset",
  checkAuthentication,
  checkValidRole,
  (req, res) => {
    todos = [];
    return res.status(204).send();
  }
);

app.listen(8000, () => {
  console.log("server started..");
});
 */
/* status codes
    2 200,201, 203, 204 - succes
    3: redirect
    4: client error
        400  - bad request
        401  - unauthorized // not logged in .  

        404 - resoruce not found

*/


let matched;
let toDos = ["html", "css"]
let inputTitle = "html"

toDos.forEach( (i) => {
    if (i == inputTitle) {
        matched = true;
    }
    else {
        "no match"
    }
})
console.log("result", matched);