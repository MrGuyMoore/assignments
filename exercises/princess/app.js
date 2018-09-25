
class Player {
    constructor() {
        this.name = '';
        this.totalPoints = 0;
        this.status = 'small';
        this.hasStar = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        if (this.status === 'Powered Up') {
            this.status = 'Big'
        } else if (this.status === 'Big') {
            this.status = 'Small'
        } else {
            this.status = 'Dead';
            this.gameActive = false;


        }
    }
    addCoin(){
        if(this.status === 'Powered Up' || this.status === 'Big' || this.status === 'Small'){
            this.totalPoints  +=1
        }else{
            this.totalPoints -= 1
        }
    }
    print(){
        console.log(`Name: ${this.name},\n Coins: ${this.totalPoints},\n Status: ${this.status}`)
    }

    gotPowerup(){
        if (this.status === 'Small') {
            this.status = 'Big'
        } else if (this.status === 'Big') {
            this.status = 'Powered Up'
        } else {
            this.status = 'Has Star';
            this.hasStar = true;
        }
    }
}

let gameActive = true;
const mario = new Player();

const game = setInterval(()=>{
     const number = Math.floor(Math.random()*3);
    if(number === 0){
        mario.gotHit()
    }else if(number === 1){
        mario.gotPowerup()
    }else if(number === 3){
        mario.addCoin()
    }
    if(mario.gameActive === false){
        clearInterval(game)
    }
}, 750);
