const fs = require("fs");

process.argv.shift()
process.argv.shift()

// const args = process.argv.slice(2);

let str=process.argv.toString().replace(/,/g," ");


fs.writeFile("./bfile.txt",str,function(err,data){
    if(err) return console.log(err)
        console.log("file created with given str");
})