const rs = require('readline-sync');

var playerGame = false;

var healthPotion = {
    name: 'Health Potion',
    value: 25
};

var atkPotion = {
    name: 'Attack Potion',
    attackPower: 25,
};

var endGame = {
    name: 'God Status',
    value: true
};

function Enemy() {
   var name = ['Reap', 'Dead'];
   var items =  [healthPotion.name];
   this.items = items[Math.floor(Math.random() * items.length)]
}