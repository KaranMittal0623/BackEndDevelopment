const fs = require('fs');
// fs.readFile('../write/users.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.error("Error reading file:", err);
//     }
//         const users = JSON.parse(data);
//         console.log("User data:", users);
    
// });



fs.readFile("../write/users.txt",(err,data)=>{
    if(err) return console.log("Error reading file 1",err);
    fs.readFile("../write/users2.txt",(err,data1)=>{
        if(err) return console.log("Error reading file 2");
        const users1 = JSON.parse(data);
        const user2 = JSON.parse(data1);
        fs.writeFile("./user3.txt", JSON.stringify([...users1, ...user2]), (err) => {
            if (err) {
                return console.error("Error writing file:", err);
            }
            console.log("File created with combined user data");
        });
    })
})

