var readlineSync = require('readline-sync');
var operations = require('./operations.js');
var output = 0;
var num1 = readlineSync.question('Enter first number: ');
var num2 = readlineSync.question('Enter first number: ');
var choices = ['+','-','*','/'];
var index = readlineSync.keyInSelect(choices,'Which operations do you want to use? ');

if (index === 0) {
    output = operations.sum(num1, num2);
    console.log(output)
}   else if (index === 1){
        output = operations.subtract(num2, num1);
        console.log(output)
    }else if(index === 2){
        output = operations.multiply(num1, num2);
        console.log(output)
}   else if(index === 3){
        output = operations.divide(num1,num2);
        console.log(output)
}