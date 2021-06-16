function Hello_World() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The Text has changed!";
}
var c = document.getElementById("Canvas");
var ctx =c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);