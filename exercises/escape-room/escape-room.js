var readlineSync = require('readline-sync');

var options = ['Look Around','Open Door','Put Hand in Hole'];
var hasKey = false;
var endGame =

while(true){
        var selection = readlineSync.keyInSelect(options,'Fill in text');
        if(selection === 0){
            // write looking around statement
            console.log('Infomation')
            var pickUp = readlineSync.keyInYNStrict('Do you want to pick up key?\n')
            if(pickUp){
                console.log('FOnd key')
                hasKey = true
            }
        }else if(selection === 1){
            // write code to write to open door
        }else if(selection === 2){
            //write code that follows loop
        }
}