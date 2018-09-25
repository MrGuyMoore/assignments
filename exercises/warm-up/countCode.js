function countCode(str) {

    let output;
    for (let i = 0; i < str.length; i++){
        if(str[i] === 'code'){
            str[i] = output;
            output = '0';
            output = +1;
        }
        output += 1
    }
}
console.log(countCode('codecrackcodeconditcodeconteoncode'));