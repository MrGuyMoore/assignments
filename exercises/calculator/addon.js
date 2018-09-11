document.add.addEventListener("submit", function(e){
    e.preventDefault()

    var x = document.add.fnum.value;
    var y = document.add.lnum.value;
    var integerX = parseInt(x, 10);
    var integerY = parseInt(y, 10);
    alert(integerX + integerY)


})
document.sub.addEventListener("submit", function(e){
    e.preventDefault();

    var x = document.sub.fnum.value;
    var y = document.sub.lnum.value;
    var integerX = parseInt(x, 10);
    var integerY = parseInt(y, 10);
    alert(integerX - integerY)


})
document.multi.addEventListener("submit", function(e){
    e.preventDefault();

    var x = document.multi.fnum.value;
    var y = document.multi.lnum.value;
    var integerX = parseInt(x, 10);
    var integerY = parseInt(y, 10);
    if ((integerX && integerY) != NaN)   {
        multi.style.backgroundColor = 'red'
    }
});