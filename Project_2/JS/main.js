function validate() {
    var x, text;
    x = document.getElementById("fname","lname").value;
    if (isNaN(x) || x == null) {
        text="input your name please";
    } else {
        text = "Thank you for submitting!";
    }
    document.getElementById("validate").innerHTML.anchor = text;
}
function validateFormf() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function validateForml() {
    var x = document.forms["myForm"]["lastname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }