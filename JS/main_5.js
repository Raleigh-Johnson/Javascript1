const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);

var X =82;
document.write(X);
{
    let X = 32;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function pi() {
    return Math.PI;
 }
 document.getElementById("math").innerHTML = pi();

 let car = {
     make: "Dodge ",
     model: "Viper ",
     year: "2021 ",
     color: "red ",
     description : function() {
         return "The car is a " + this.year + this.color + this.make + this.model;
     }
 };
 document.getElementById("Car_object").innerHTML = car.description();

 function breakfunction() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
      if (i === 3) {
        break;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("breakf").innerHTML = text;
  }


  function breakfunction1() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
      if (i === 3) {
        continue;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("breakf1").innerHTML = text;
  }


   
  
  
  