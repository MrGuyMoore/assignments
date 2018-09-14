var rs = require('readline-sync');

var player = {
    name: '',
    hitPoints: 200,
    attackPower: 15,
    inventory: [],
};

function Enemy(){
    var name = [pick names];
    var items = [pick random items];
    this.item = items[Math.floor(Math.random() * items.length)]
    this.name = names[Math.floor(Math.random() * name.length)]
    this.hitPoints = Math.floor(Math.random()* 26 + 50);
    this.attackPower = Math.floor(Math.random()*5 + 12);

}

 player.name= rs.question('\n Welcome to message');

 // welcome them to games

var mainOptions = ['walk', 'check stats'];

while (true){
    var choice = rs.keyInSelect(mainOptions, '\n Write message');
    if(choice === 0){
        var enemy = new Enemy();
        console.log(enemy.name)
    }
}else if(choice === 1){

}