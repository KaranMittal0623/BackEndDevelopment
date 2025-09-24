const express = require("express");
const { MongoServerClosedError } = require("mongodb");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./model/blog");
app.post("/blog",(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    let blog = new Blog({
        title: title,
        content: content,
        author: author
    });
    blog.save().then(() => {
        res.status(201).send("Blog created successfully");
    }).catch((err) => {
        res.status(500).send("Error creating blog: " + err.message);
    });
});


mongoose.connect("mongodb://localhost:27017/mydatabase").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.listen(3333,()=>{
    console.log("Server is running on port 3333");
})