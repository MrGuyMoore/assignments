function matchWord(str) {
    let newArr = str.split().sort();
    let display = [''];
    for(let i = 0; i < newArr.length ; i++ ){
        if(newArr[i] === newArr[i]){
            display.push(newArr[i]);
        }
    }return display
}
console.log(matchWord('Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, ' +
    'PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far ' +
    'lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.'));