var objects = {
waterBottle: 'Black',
    mouse: false,
    backPack: ['Laptop', 'Lunch','Water','Books'],
    itemList: function () {
    return this.backPack + '' + this.waterBottle
}
};
objPack = objects.backPack;
objPack = objPack.length;


for (i = 4; i <= objPack; i +=1){
    if (objects.mouse === false) {
        objects.backPack.push('Mouse'),
            console.log('Please list the items in your backpack - ' + objects.backPack)
    } else {
        console.log('Please list the items in your backpack - ' + objects.backPack)
    }
    ;
}