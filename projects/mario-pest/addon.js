var form = document.querySelector('form');
var span = document.querySelector('span');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    //get all the values from each of the inputs on the DOM
    // multiply each value by their corresponding prices
    // sum the totals together
    //  set the innerHTML of an element containing the total

    // My input and output var
    var marioGoomba = this.marioGoomba.value;
    var kingBob = this.kingBob.value;
    var cheep = this.cheep.value;
    var output = '';
    var num1 = 5;
    var num2 = 7;
    var num3 = 11;

    var goomba = marioGoomba * num1;
    var king = kingBob * num2;
    var chee = cheep * num3;


       span.innerHTML= (goomba)+(king)+(chee)
});