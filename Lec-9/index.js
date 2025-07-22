const express=require("express");
const fs=require("fs");
const app=express();


app.use(express.json());


app.post( "/addUser" ,(req,res)=>{
const data=req.body;
let name = data.name;
let age=data.age;
// console.log(data);
const user={name,age};
fs.readFile("userData.txt","utf-8",(err,data)=>{
    let users=[];

    if(err) return res.send(err)
    if(!err&& data.length>0){
        users=JSON.parse(data);
        users.push(user)
    }else{
        users.push(user)
    }
    
   
fs.writeFile("userData.txt",JSON.stringify(users),(err)=>{
    if(err){
       return res.send("Failed to write");

    }
    res.json({name:name,age:age});
})
})


})
app.listen(2222,()=>{
    console.log("Server is listening");
})