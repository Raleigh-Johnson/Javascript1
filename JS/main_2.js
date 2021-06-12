function count_Function() { //Nested Function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9; //Base Value
        function Plus_one() {Starting_point += 1;} // Added value
        Plus_one();
        return Starting_point; //return ie. Output brought to HTML
    }
}
