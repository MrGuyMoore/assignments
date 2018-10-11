const arrName = [''];

const arrTest = arr =>{
    let total = 0 ;
    let indexOfLongest = 1;
    for(let i = 1; i< arr.length - 1; i++){
        const totalCurrentLength = arr[i - 1].length + arr[i].length + arr[i+1].length;
        if (totalCurrentLength > total){
            total = totalCurrentLength;
            indexOfLongest = i;
        }
    }
    return arr.subArr(indexOfLongest - 1, indexOfLongest + 2);
};