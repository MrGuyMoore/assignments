var form = document.querySelector("airline-form");
console.log('running');
var submit = document.getElementById('submit');
// var query = document.querySelector();


form.addEventListener('submit',function (event) {
    event.preventDefault();

    function formAlert() {
        var firstName = form.elements["firstName"].value;
        var lastName = form.elements["lastName"].value;
        var age = form.elements["age"].value;
        var gender = form.elements["gender"].value;
        var location = form.elements["travel-location"].value;
        var diet = {};
        if (form.elements['vegan'].checked) {
            var diet = push(document.getElementById("vegan").value);
        }
        if (form.elements['gluten'].checked) {
            diet.push(document.getElementById('gluten').value);
        }
        if (form.elements['paleo'].checked) {
            diet.push(document.getElementById('paleo').value);
        }


        alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    }

});