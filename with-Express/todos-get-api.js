// API through express :-

const express = require('express')
const app = express()

app.get("/api/todos", (req, res) => {
    console.log("send todos : ");
    let todos = ["HTML", "CSS", "JS"]
    res.send(todos)
})
app.listen(8000, () => {
    console.log("Server Started.");
});



/* const productsList = require("./import_local_module/products")
const list = productsList()

list.get("/api/products", (req, res) => {
    // console.log(list);
    let products = list;
    res.send(list)
})
list.listen(8000, () => {
    console.log("list shown")
}) */



// Also try post