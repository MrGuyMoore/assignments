const readlineSync = require('readline-sync');

const options = ['Look Around','Open Door','Put Hand in Hole'];
let hasKey = false;
const endGame = "Congrats for winning the Game";
const handHole = "While that wasn't the best idea, now you're stuck!!!";
let tryDoor = false;
let lookAround = false;
const y = true;

let pickUp;
while(tryDoor === false){
    const selection = readlineSync.keyInSelect(options, 'What do you want to do?');
    if (selection === 0){
        console.log("You've looked around and have spotted the key,");
        pickUp = readlineSync.keyInYN('Do you want to pick up this key?');
        if (pickUp === y){
            console.log("You've found the key!!");
            hasKey = true;
            tryDoor = readlineSync.keyInYN('Would you like to try and unlock the door with your key?');
            if (tryDoor === y){
                console.log(endGame);
                break;
            }
        }
    }else if(selection === 1){
        console.log('The door is locked, you need a key to open it.');
        lookAround = readlineSync.keyInYN('Would you like to look around for a key?');
        if (lookAround === y){
            lookAround = true;
            console.log("You've looked around and spotted a key.");
            pickUp = readlineSync.keyInYN('Would you like to pick up the key?');
            if (pickUp === y){
                console.log("You've found the key!!");
                hasKey = true;
                while (tryDoor === false){
                    tryDoor = readlineSync.keyInYN('Would you like to open the door?');
                    if(tryDoor === y){
                        tryDoor = true;
                        console.log(endGame);
                        break;
                    }
                }
            }
        }
    }else if (selection === 2){
        console.log(handHole);
        break;
    }
}