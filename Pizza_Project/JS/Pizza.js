function getReceipt() { //Function to total the orderr's total
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //Selector for each size
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+ "<br>"; 
        }
    } 
    //Each cost for each Size of Pizza
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Extra Large") {
        sizeTotal = 12;
    }
    runningTotal = sizeTotal; // Running total without toppings and all of that
    console.log(selectedSize+ " = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+ runningTotal+".00");
    getTopping(runningTotal,text1);
}; 

function getTopping(runningTotal,text1) { //Output of Size + Toppings
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log ("selected topping Item: ("+toppingArray[j].value+")") ;
            text1 = text1+toppingArray[j].value;

        } 
    }
    var toppingCount =  selectedTopping.length; //One free topping, after one, Each adds 1$ 
    if (toppingCount > 1) {
        toppingTotal = ( toppingCount - 1);
    } else  {
        toppingTotal = 0;
    }

runningTotal = (runningTotal + toppingTotal);
console.log("total selected topping items"+ toppingCount);
console.log(toppingCount+ "topping - 1 free topping = "+"$"+toppingTotal+".00"); //Further toppings
console.log("topping text1:"+text1);
console.log("Purchase Total"+"$"+runningTotal+".00");
document.getElementById("showText").innerHTML = text1;
document.getElementById("totalPrice").innerHTML = "<h3>Total: <Strong>$"+runningTotal+".00"+ "</strong></h3>";
};