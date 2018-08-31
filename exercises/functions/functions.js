function sum (x,y) {
    return x + y;
}

function sum(x,y,z) {
    var numbers = Math.max(x,y,z);
    return (numbers)
}

function isEven(number) {
    if (number % 2 === 0) {
        return ('Even')
    } else {
        return ('Odd')
    }
}

function newStr(Str) {
    Str = 'Abcdefghijklmnopqrstuvwxyz';
    if(Str <= 20){
        return Str +Str
    }else{
        return Str.slice(13)
    }
}