const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); 
const fs = require('fs');


// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })
// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })

app.post('/register',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    console.log(`Name: ${name}, Email: ${email}`);
    fs.appendFile('user_data.txt', `Name: ${name}, Email: ${email}\n`, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('User registered successfully!');
        }
    });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});