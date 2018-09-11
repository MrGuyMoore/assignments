var readlineSync = require ('readline-sync');

var firstName = readlineSync.question('What is your first name? ');
var num = firstName.length;
var lastName = readlineSync.question('And what\s your last name? ');
console.log(num)
var nameInput = firstName.toUpperCase()
if (readlineSync.keyIn('Is your name ' +nameInput.concat(' ' +lastName)+'? ' )){
    console.log('Welcome '+firstName+' '+lastName)
}else{
    console.log('Please re-enter your first name:');
    var firstName = readlineSync.question('What is your first name?')
}


