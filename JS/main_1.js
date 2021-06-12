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




