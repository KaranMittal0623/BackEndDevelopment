const fs = require("fs");

fs.readFile("../write/demo2.txt", "utf-8", (err, data) => {
    if (err) return console.log(err);
  
    fs.readFile("../demo.txt", "utf-8", (err, data1) => {
        if (err) return console.log(err);
    
        fs.writeFile("../new.txt", data + " \n\n" +data1.replaceAll(/\s+/g,''), (err) => {
            if (err) return console.log(err);
            console.log("File written successfully!");
        });
    });
});