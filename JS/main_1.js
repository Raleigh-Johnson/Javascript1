function my_Dictionary() {
    var Animal = {
    Species: "Dog",
    Color: "White/Tan",
    Breed: "Great Pyrenees",
    Age: 3,
    Sound: "Bark"
    }
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
};
document.write(typeof "Word")
document.write(typeof 3)
document.write("10" + 5)

function Nan_1() {
    document.getElementById("test1").innerHTML = 0/0;
}

function Nan_2() {
    document.getElementById("test2").innerHTML = isNaN('This is a string');

}

function Nan_3() {
    document.getElementById("test3").innerHTML = isNaN('007');

}
document.write(2E310)
document.write(-2E310)
document.write(10 < 2)
document.write(2 < 10)
console.log(2+2 + " Hey there code reviewer!")
document.write(10 == 10)
document.write(10 + 5 == 10)

X = 10
Y = 10
document.write(X === Y)
x = 10
y = "ten"
document.write(x === y)
name1 = "Raleigh"
name2 = "Loki"
document.write(name1 === name2)
name3 = "Loki"
name4 = "Loki"
document.write(name3 === name4)
document.write(5 > 2 && 10 > 4)
document.write(5 > 2 || 10 > 4)

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10)
}
document.write(Bigger = (5 > 1) ? "Left is bigger":"Right is bigger");

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You cannot ":"You can ";
    document.getElementById("vote").innerHTML = Can_vote + "register to vote.";
}

function Vehicle(Make, Modle, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Modle = Modle;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new  Vehicle("Dodge", "Viper", 2021, "Red");
var Emily = new Vehicle("Jeep", "Track Hawk", 2020,"Black");
var Erick = new Vehicle("Nissan", "400Z",2021, "Yellow")
function car_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Modle +
    " manufactured in " + Erick.Vehicle_Year;
}




