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
  var Content= "" ;
  var Y ;
  function for_Loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
         }
         document.getElementById("List_of_Instruments").innerHTMl = Content;
        }