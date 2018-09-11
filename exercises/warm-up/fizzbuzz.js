function fizzBuzz(number) {
        if (number % 3 === 0) {
            return ('fizz')
        } else if (number % 5 === 0)
        {
            return ('buzz')
        }else (number % 3 === 0 && number % 5 === 0)
    {
        return('fizzbuzz')
    }
        }
    for (var i = 0; i <= 100; i++){

        console.log(fizzBuzz(i))
}


function countFizz(arry) {
        var counter = {
            fizzbuzz: 0,
            fizz: 0,
            buzz: 0,
        }
    for (var i = 0; i < arry.length; i++){
        switch (arry[i]) {
            case "fizzbuzz":
                counter.fizzbuzz++;
                break;
            case "fizz":
                counter.fizz++;
                break;
            case "buzz":
                counter.buzz++;
                break;

        }
    }
}
// differnt way to do this

var numberOrString = arry[i]
 if(counter.hasOwnProperty(arry[i])){
     counter[numberOrString]++
 }