let p = new PromiseRejectionEvent((resolve,reject)=>{
    let age = 18;
    if(age>18) return resolve("You are eligible to vote");
        reject("You are not eligible to vote");
}).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});