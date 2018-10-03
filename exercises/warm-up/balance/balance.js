const balanceP = str =>{
    let counter = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] === '('){
            counter --;
        }
        if(str[i] === ')'){
            counter ++;
        }
    }
};