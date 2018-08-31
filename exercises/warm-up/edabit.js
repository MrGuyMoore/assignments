function  hello() {
    return  'hello edabit.com'

}

var num = 0

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true
    }   else{
            return false}
}

function Go(num) {
    for (var i = 0; i <= num; ++i) ;
    {num = num +i}{'-'.repeat(num) }
    {console.log(num);}
}

function Go(num){
    var dash ='';
    for (var i = 0; i < num; i++){
        dash += '-'
    }
    return (dash);
}
    console.log (Go(5));