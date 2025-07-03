const fs = require("fs");
console.log(fs);
console.log("start");

setTimeout(() => {
    console.log("timeout");
}, 0)

fs.readFile("demo.txt","utf-8",(data)=>{
    // console.log(data);
    setTimeout(()=>{
        console.log("Timer 2");
    },0)
    setImmediate(()=>{
        console.log("Immediate 2");
    })
    
})

setImmediate(() => {
    console.log("immediate");
});

function someTask(){
    return new Promise((resolve, reject) => {
        resolve("Task completed");
    })
}
someTask().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

console.log("end");

