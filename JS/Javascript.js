alert("Hello, World");          //Alert before webpage loads
window.alert("Hello, again.")
document.write("Hello, once again")
var X = "Hello, world."             ///Last alerts
document.write (X);
var A = "This is a string";         //String 
document.write (A);
document.write (A) + (X);
const newString1 = "This is a string assigned to a variable.";
console.log(newString1);
function my_First_Function() {          //funtion
    text1 ="This is text" ;
    text1 =text1.fontcolor("green") ;
    document.getElementById("result2").innerHTML = text1 ;
}
var B = "Concatenated" + "String" ;         
document.write (B) ;    
const newString = ("Lisa told Bart, \"Knock it off, Bart! Or I'll tell Dad!\"Eat my shorts! \" Bart responded.") ;
window.alert = (newString);
function displayDate() {
    document.getElementById("result1").innerHTML = Date();
  }
  let myPet = 'seahorse';
  console.log('My favorite animal is the ' + myPet + '.');   // My favorite animal is the seahorse.         ```
  function greeting() {
    greeting =greeting.fontcolor("red");
  }
  let a = 2;
let b = 'hello';

console.log(a += 3); // addition. expected output: 5 jeff

console.log(b += ' world'); // concatenation
// expected output: "hello world"
document.write(a) + (b);

function mult1(p1, p2) {
    return p1 * p2 ;
}
document.getElementById("mult1").innerHTML= mult1(3, 4);


function buttontext() {
  document.getElementById("buttontext").innerHTML = "Hello World";
}

function addition_Funtion() {
  var addition = 2+2;
  document.getElementById("Math").innerHTML = "2 + 2 =" + addition;
}

function subtraction_Funtion() {
  var Subtraction = 5 - 2;
  document.getElementById("Math").innerHTML = "5 - 2 =" + subtraction;
}