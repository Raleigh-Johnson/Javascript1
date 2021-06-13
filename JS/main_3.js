function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
console.log('alphabet'.toUpperCase()); // toUppercCase

const paragraph = 'Its peanutbutter jelly time.'; //Search()
const regex = /[^/w/s]/g;
console.log(paragraph.search(regex));
console.log(paragraph[paragraph.search(regex)]);

function string_Method() { //string method
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString()
}
function precision_Method() {
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}
//toFixed start
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));

console.log(financial(0.004));

console.log(financial('1.23e+5'));
 //toFixed END
 function MyNumberType(n) {
     this.number = n;
 }
 MyNumberType.prototype.valueOf =function() {
     return this.number;
 };
 const object1 = new MyNumberType(4);

 console.log(object1 + 3);
 //END
 //Countdown
 function countdown() {
     var seconds = document.getElementById("seconds").value;

     function tick() {
         seconds = seconds -1;
         TimeRanges.innerHTML = seconds;
         setTimeout(tick, 1000);
         if(seconds == -1) {
             alert("Time is up!");
     }
    
        }
        tick();
 }