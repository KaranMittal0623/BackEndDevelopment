const fs = require('fs');

let users = [
    {
        id: 4,
        name: "John Doe",
    },
    {
        id: 5,
        name: "Jane Smith",
    },
    {
        id: 6,
        name: "Alice Johnson",
    }
]

fs.writeFile("./users2.txt",JSON.stringify(users), function(err) {
    if (err) {
        return console.error("Error writing file:", err);
    }
    console.log("File created with user data");
});