var rs = require('readline-sync');

// Var used here
var n = false;
var endGame = "You've made it out alive, don't be too scared to come again!!";
var playerWon = false;
var y = true;
var combatChoice = false;
var mainOptions = ['Walk', 'Check inventory', 'Use item from inventory'];
var healthPotion = {
    name: 'Health Potion',
    value: 20,
};
var dullDagger = {
    name: 'Dull Dagger',
    attackPower: 45,
};
var longSword = {
    name: 'Long Sword',
    attackPower: 55,
};
var gameOverStone = {
    name: 'Game Over Stone',
    value: true,
};
var player = {
    name: '',
    hitPoints: 200,
    attackPower: 15,
    inventory: [],
    fightsWon: 0,
};

//Functions made here

function Enemy(){
    var name = ['Reaper','Daedra','Ogre','Inferi','Twinrova','Menethi'];
    var items = [healthPotion.name, dullDagger.name, longSword.name, gameOverStone.name];
    this.items = items[Math.floor(Math.random() * items.length)];
    this.name = name[Math.floor(Math.random() * name.length)];
    this.hitPoints = Math.floor(Math.random()* 26 + 70);
    this.attackPower = Math.floor(Math.random()*5 + 12);
}

player.name = rs.question('\n Player Name ..... : ');
console.log('Welcome '+player.name+' to the world of Eden');

// My while loop

while (playerWon === false) {
    console.log('What would you like to do? ');
    var choice = rs.keyInSelect(mainOptions, '\n Please pick a option ... ');
    if (choice === 0) {
        var enemy = new Enemy();
        console.log("A wild "+enemy.name+" appeared!!!");
        combatChoice = rs.keyInYN('Would you like to fight this wild '+enemy.name);
        if(combatChoice === y){
            combatChoice = true;
            console.log("You've decided to combat "+enemy.name);
            while(enemy.hitPoints > 0 && player.hitPoints > 0){
                enemy.hitPoints -= player.attackPower;
                player.hitPoints -= enemy.attackPower;
            }
            if(player.hitPoints <= 0){
                console.log("Sorry, You've lost this game try again!!");
                break;
            }else{
                player.inventory.push(enemy.items);
                console.log("Congrats you've defeated the wild "+enemy.name);
                console.log(enemy.name+" dropped "+enemy.items+" please check your inventory");
                player.fightsWon +=1;
            }
            if (player.fightsWon >= 3){
                playerWon = true;
                console.log(endGame)
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
    var index = player.inventory.indexOf(player.inventory);
    if (index !== -1) player.inventory.splice(player.inventory, 1);
}

