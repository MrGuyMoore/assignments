function numGenerator(number) {

    var output = '';
    for (var i = 0; i < number; i++) {
        var numberKey = Math.floor(Math.random() * 94) + 33;
        var stringKey = String.fromCharCode(numberKey);
        output += stringKey;
    }
    return output
}
console.log(numGenerator(10));