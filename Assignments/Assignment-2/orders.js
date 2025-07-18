const fs = require('fs');
const readLine = require('readline');

const rl =readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function readUser(filePath){
//     fs.readFile(filePath,'utf-8',(err,data)=>{
//         if(err){
//             console.error("Error reading file:", err);
//             return;
//         }
//         const parsedUsers = JSON.parse(data);
//         return parsedUsers;
//     })
// }
function readUser(filePath){
   return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject("Error reading file: " + err);
            } else {
                const parsedUsers = JSON.parse(data);
                resolve(parsedUsers);
            }
        });
    });
}

function readProducts(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject("Error reading file: " + err);
            } else {
                const parsedProducts = JSON.parse(data);
                resolve(parsedProducts);
            }
        });
    });
}


async function order(){
    const user = await readUser('./users.txt');
    const products = await readProducts('./products.txt');
    console.log("Users:", user);
    console.log("Products:", products);


    rl.question("Enter user id: ", (userId) => {
        rl.question("Enter product id: ", (productId) => {
            const userFound = user.find(u => u.id === parseInt(userId));
            const productFound = products.find(p => p.id === parseInt(productId));

            if (userFound && productFound) {
                fs.writeFile('./orders.txt', JSON.stringify({ userId: userFound.id, productId: productFound.id }), (err) => {
                    if (err) {
                        console.error("Error writing to file:", err);
                    } else {
                        console.log("Order placed successfully");
                    }
                });
            } else {
                console.log("User or Product not found");
            }
            rl.close();
        });
    });
}

order();