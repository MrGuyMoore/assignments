function isEven(number) {
    if (number % 2 === 0) {
        return ('Even')
    } else {
        return ('Odd')
    }
}
for(var i = 0; i <= 100; i++){
   console.log(isEven(i))
}