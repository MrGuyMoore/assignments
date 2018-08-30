var objects = {
    waterBottle: 'Black',
    mouse: false,
    backPack: ['Laptop', 'Lunch', 'Water', 'Books'],
    }
};

function checkPackForItem(item){
    var containsItems = objects.backPack.includes(item);
    //if it doesnt include the item, then push it into it
    if(!containsItems){
        objects.backPack.push(item);
    }
    for (var i = 0; i < objects.backPack.length; i++){
        console.log(objects.backPack[i]);
    }
}

checkPackForItem("Mouse");
checkPackForItem(("Drugs"));


// for (i = 0; i < objects.backPack.length; i += 4) {
//     if (objects.mouse === false) {
//         objects.backPack.push('Mouse');
//         console.log('Please list the items in your backpack - ' + objects.backPack[i])
//     } else {
//         console.log('Please list the items in your backpack - ' + objects.backPack[i])
//     }
//
// }