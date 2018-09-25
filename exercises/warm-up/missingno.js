function missingNumber(arry) {
    arry = [2,4,5,3,6,7,8];
    var idx = -1;
    for(var i = 0; i < arry.length -1; i++){
        if(arry[i] === 0){
            idx = i;
            arry[i] += idx +1
        }
    }
}