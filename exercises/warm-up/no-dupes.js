// function inputFunction(str) {
// //     var output = '';
// //     for (var i = 0; i < str.length; i++) {
// //         if (str.lastIndexOf(str[i]) !== str.indexOf(str[i])) {
// //             output += str[i];
// //         }
// //     }
// //     return output
// // }
// // console.log(inputFunction('Beer'));

// function lettersRemoved(str) {
// //     var recordOfPastCharacters = {};
// //     var output = '';
// //
// //     for(var i = 0; i < str.length; i++){
// //
// //         var currentLetter = str[i];
// //
// //         if (recordOfPastCharacters[currentLetter] === undefined){
// //             recordOfPastCharacters[currentLetter] = i;
// //         }else {
// //            output += currentLetter;
// //         }
// //     }
// //
// // return output
// // }
// // console.log(lettersRemoved(''))

function removeDupes(str) {
    var recordOfPastCharacters = {};
    var output = '';
for (i = 0; i < str.length; i++){
    var currentLetter = str[i];
    if(recordOfPastCharacters[currentLetter]=== undefined){
        output += currentLetter;
        recordOfPastCharacters[currentLetter]=i;
      }
   }
return output
}
console.log(removeDupes(''));