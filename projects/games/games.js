const rs = require('readline-sync');

// Var used here
const n = false;
const endGame = "You've made it out alive, don't be too scared to come again!!";
let playerWon = false;
const y = true;
let combatChoice = false;
const mainOptions = ['Walk', 'Check inventory', 'Use item from inventory'];
const healthPotion = {
    name: 'Health Potion',
    value: 20,
};
const dullDagger = {
    name: 'Dull Dagger',
    attackPower: 45,
};
const longSword = {
    name: 'Long Sword',
    attackPower: 55,
};
const gameOverStone = {
    name: 'Game Over Stone',
    value: true,
};
const player = {
    name: '',
    hitPoints: 200,
    attackPower: 15,
    inventory: [],
    fightsWon: 0,
};

//Functions made here

function Enemy(){
    let name = ['Reaper', 'Daedra', 'Ogre', 'Inferi', 'Twinrova', 'Menethi'];
    const items = [healthPotion.name, dullDagger.name, longSword.name, gameOverStone.name];
    this.items = items[Math.floor(Math.random() * items.length)];
    this.name = name[Math.floor(Math.random() * name.length)];
    this.hitPoints = Math.floor(Math.random()* 26 + 70);
    this.attackPower = Math.floor(Math.random()*5 + 12);
}

player.name = rs.question('\n Player Name ..... : ');
console.log(`Welcome to the world of EverClear ${player.name}.`);

// My while loop

while (playerWon === false) {
    console.log('What would you like to do? ');
    const choice = rs.keyInSelect(mainOptions, '\n Please pick a option ... ');
    if (choice === 0) {
        const enemy = new Enemy();
        console.log(`You've run into ${enemy.name}`);
        combatChoice = rs.keyInYN(`Would you like to fight this wild ${enemy.name}`);
        if(combatChoice === y){
            combatChoice = true;
            console.log(`So you've decided to temp fate and fight ${enemy.name} please be careful`);
            while(enemy.hitPoints > 0 && player.hitPoints > 0){
                enemy.hitPoints -= player.attackPower;
                player.hitPoints -= enemy.attackPower;
            }
            if(player.hitPoints <= 0){
                console.log("Sorry, You've lost this game try again!!");
                break;
            }else{
                player.inventory.push(enemy.items);
                console.log(`Congratz you've defeated ${enemy.name} you've gotten a reward.`);
                console.log(`${enemy.name} has dropped ${enemy.items} and it's now in your inventory.`);
                player.fightsWon +=1;
            }
            if (player.fightsWon >= 10){
                playerWon = true;
                console.log(`You've chosen to use a item to beat the game, next time use skill!!`)
            }
        }
    }else if(choice === 1){
        console.log(player)

        // This section allows me to give the player health or a weapon.
    }else if(choice === 2){
        var pickingItem = rs.keyInYN('Would you like to use a item?')}
        if(pickingItem === y) {
            pickingItem = true;
            console.log("Let me help you!!");
            var userItem = rs.keyInSelect(player.inventory,'Please pick your item');
        }
        if(player.inventory[userItem] === "Health Potion"){
            player.hitPoints += healthPotion.value
        }else if
        (player.inventory[userItem] === "Dull Dagger"){
            player.attackPower += dullDagger.attackPower
        }else if
        (player.inventory[userItem] === "Long Sword"){
            player.attackPower += longSword.attackPower
        }else if
        (player.inventory[userItem] === "Game Over Stone")
            playerWon = true;
            console.log(endGame);
    const index = player.inventory.indexOf(player.inventory);
    if (index !== -1) player.inventory.splice(player.inventory, 1);
}

