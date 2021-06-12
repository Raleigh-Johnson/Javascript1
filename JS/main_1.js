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

