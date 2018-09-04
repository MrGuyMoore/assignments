function schoolsCool() {
    var strLower = 'no more school';
    var lowerStr = strLower.toLowerCase();
    var strUpper = ' BUT SCHOOL IS IMPORTANT!!!';
    var upperStr = strUpper.toUpperCase();


    var student = {
        name: 'Tommy',
        age: 13,
        grade: 'Freshman',
        football: false,
        band: true,
        food: ['Pizza', 'Hamburger', 'Tacos', 'BBQ'],
        shoeSize: 7,
    }

    if(student.age >= 18){
        console.log(student.name + 'Your too old ' + lowerStr)
    }else{
        console.log(student.name  + upperStr)
        }
    }
    schoolsCool()