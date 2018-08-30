var shopper = {
    fullName: 'Billy Ray',
    cash: false,
    cart: 5,
    age: 30,
    shoppingCart: ['Butter','Sugar','Eggs','Milk','Flour','Icing'],
    info: function() {
        return this.fullName +  "how old are you" + this.age

    }

};
if (shopper.cash === true){
   console.log('Please take your groceries')
} else {
   console.log('Please provide another form of payment.')
};





