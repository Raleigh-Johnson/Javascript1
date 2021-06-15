function count_to_ten() {
    var Digit="";
    var X = 1;
    while (X < 11 ) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Counting_to_ten").innerHTML =Digit;
}
function str() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("output").innerHTML = n;
  }

  var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Vionlin", "Trumpet", "Flute"];
  var Content= "";
  var Y;
  function for_loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
         }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar",brand:"fender", color:"black"};
    Musical_Instrument.color= "blue";
    Musical_Instrument.price ="$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
    
}

function cat_Pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
    }