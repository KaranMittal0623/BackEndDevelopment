const fs = require("fs");
fs.readFile("../write/demo2.txt",(err,data)=>{
    if(err) return console.log(err);
    console.log(data.toString());
})