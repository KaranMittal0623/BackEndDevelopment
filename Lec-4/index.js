let product =[ {
    name: "Iphone 14",
    price: 1000,
    brand: "Apple",
    model: "Pro Max"
}];
let accountBalance = 5000;

// function buyProduct(prod_name, callBack){
//     // Some asynchronous detail from product db
//     // Write order details to the database
//     setTimeout(() => {
//         console.log("Order Completed");
//         callBack();
//     });
// }

buyProduct("Iphone 14",function(err, product){
    if(err){
        console.log("Error: " + err);
    } else {
        console.log("Order Purchased: " + product.name);
        deductAmount(product.price, function(){
            console.log("Order Placed Successfully");
        });
    }
});

console.log("Order Placed");

function buyProduct(prodName,callBack){
    for(let i=0; i<product.length; i++){
        if(product[i].name === prodName){
            console.log("Product Found: " + product[i].name);
            callBack(null,product[i]);
        }
        else{
            console.log("Product Not Found");
            callBack("Product Not Found", null);
        }
    }
}


function deductAmount(amount, callBack){
    if(accountBalance >= amount){
        accountBalance -= amount;
        console.log("Amount Deducted: " + amount);
        console.log("Remaining Balance: " + accountBalance);
        callBack();
    } else {
        console.log("Insufficient Balance");
    }


}