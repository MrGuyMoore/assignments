var form = document.querySelector('form')

form.addEventListener('submit',function (event) {
    event.preventDefault();

    var firstName = this.firstName.value;
    var lastName = this.lastName.value;
    var age = this.age.value;
    var flights = this.flights.value;
    var gender = this.querySelector("input[name=gender]:checked").value;

    function foodChoice() {
        var diet = document.querySelectorAll("input[name=diet]:checked");
        var output = "";
        for(var i = 0; i < diet.length; i++){
            //add the value of each input to the output string
           output = output.concat(diet[i].value)

            // if (diet.length === [i])
            //     return diet.length++;
        }
    return output

    }
    alert("First Name: " + firstName + "\nLast Name: " +lastName+ "\nYour Age: " +age+ "\nYour Travel Destination: " +flights+ "\nGender: "+gender+
    "\nDietary Restrictions: "+ foodChoice());
})
