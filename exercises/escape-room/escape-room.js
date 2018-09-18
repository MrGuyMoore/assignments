var readlineSync = require('readline-sync');

var options = ['Look Around','Open Door','Put Hand in Hole'];
var hasKey = false;
var endGame = "Congrats for winning the Game";
var handHole = "While that wasn't the best idea, now you're stuck!!!";
var tryDoor = false;
var lookAround = false;
var y = true;

while(tryDoor === false) {
    var selection = readlineSync.keyInSelect(options, 'What do you want to do?');
    if (selection === 0) {
        console.log("You've looked around and spotted a key");
        var pickUp = readlineSync.keyInYN('Do you want to pick up key?');
        if (pickUp === y) {
            console.log('Found key');
            hasKey = true;
            tryDoor = readlineSync.keyInYN("Would you like to open the door?");
            if (tryDoor === y) {
                console.log(endGame);
                break;
            }
        }
    } else if (selection === 1) {
        console.log('The door is locked, you need a key to open.');
        lookAround = readlineSync.keyInYN('Would you like to look around for the key?');
        if (lookAround === y) {
            lookAround = true;
            console.log("You've looked around and spotted a key");
            var pickUp = readlineSync.keyInYN('Do you want to pick up key?');
            if (pickUp === y) {
                console.log('Found key');
                hasKey = true;
                while (tryDoor === false) {
                    tryDoor = readlineSync.keyInYN("Would you like to open the door?");
                    console.log(tryDoor);
                    if (tryDoor === y) {
                        tryDoor = true;
                        console.log(endGame);
                        break;
                    }
                }

        }else if (selection === 2) {
                    console.log(handHole);
                    break;
            }
        }
    }
}

