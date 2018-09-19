var form = document.querySelector('form');
var submit = document.getElementById('submit');

form.addEventListener("submit", function (event){
    event.preventDefault();
        var firstName = form.elements["firstName"].value;
        console.log('running');
        var lastName = form.elements["lastName"].value;
        var age = form.elements["age"].value;
        var gender = form.elements["gender"].value;
        var location = form.elements["travel-location"].value;
        var diet = document.querySelectorAll("input[name=diet]:checked");
        var output = "";
        for(var i = 0; i < diet.length; i++){
        output = output.concat(diet[i].value)
    }


        alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet +
            "\nAwesome, now if you die, it won't be an accident..");
});



