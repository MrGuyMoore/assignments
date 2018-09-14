function getLongestString() {
    var  arr = ["", "a", "bb", "cc", "dd"];

    let lght = 0;
    let longest = '';

    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > lght){
            lght = arr[i].length;
            longest = arr[i]
        }
        return longest
    }
}

module.exports = getLongestString();