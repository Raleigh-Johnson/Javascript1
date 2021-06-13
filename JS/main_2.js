function count_Function() { //Nested Function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9; //Base Value
        function Plus_one() {Starting_point += 1;} // Added value
        Plus_one();
        return Starting_point; //return ie. Output brought to HTML
    }
}
var x = 10;
function Add_Numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_Numbers_1();
Add_numbers_2();

// Greeting function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon"
    }
    else {
        Reply = "Good Night"
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}
//End Greeting function


//End Greeting function

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote= "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote." ;
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}