const express = require("express")
const mongoose = require("mongoose")
const app = express()


moongoose.connect('mongodb://127.0.1:27017/E-commerce-API')
.then(() => console.log("DB connected."));


app.length("/api/products", (req, res) => {
    res.send("list of products")
})


app.post("/api/products", (req, res) => {
    // TODO : link with moongoose and add a product in a database
    res.send("new product added.")
})



app.listen(8000,() => {
    console.log("Server started.")
})