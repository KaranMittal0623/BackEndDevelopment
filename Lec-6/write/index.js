const fs = require("fs");
fs.writeFile("../demo.txt", "Hello World!",(err,data)=>{
    if(err) return console.log(err);
    console.log("File written successfully!");

})

// One more file
fs.writeFile("./demo2.txt", "Hello World 2!", (err, data) => {
    if (err) return console.log(err);
    console.log("Second file written successfully!");
});