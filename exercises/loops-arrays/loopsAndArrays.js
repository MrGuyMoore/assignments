//Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
//
var counterComputer = 0;

for (var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === 'computer'){
    counterComputer++}
}
console.log(counterComputer);

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "
// not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log('Old Enough')
    }
    else {
        console.log('Not old enough')
    }
}

// var numbersGroup = [10,11,12,13,14,15];
//
// for (var i = 0; i < numbersGroup.length; i++){
//     if (numbersGroup[i] <= 12){
//     console.log(numbersGroup[i])
//     }
// }
//
// var babyNames = [`Jose`,'Tim', 'David','Leon'];
//
// for(var i = 0; i < babyNames.length; i++){
//     if (babyNames[i].charAt(0) === 'D'){
//         console.log(babyNames[i])
//     }
// }