//Write an if statement that prints "is greater than" if 5 is greater than 3
var greater = 5
var great = 3

if (greater > great){
    console.log('Is greater than')
};
//Write an if statement that prints "is the length" if the length of "cat" is 3
var cat = 3;
var num = 3;

if (cat === num){
    console.log('Is the length')
};
//Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
var dog = dog
var cat = cat
if (cat === dog){
    console.log('Cool')
}else{
    console.log('Not the same')
}
//Write an if statement that prints <theNameOfThePerson> is allowed to go to the movie if they are old enough
// (18 or older), and the opposite if they are not older than 18.
var person = {
    name: 'Bobby',
    age: 12
};
if (person.age > 18){
    console.log(person.name + 'is allowed to go to the movies')
}else {
    console.log( person.name + ' is to young')
}
//Using that same object, only allow them into the movie if their name starts with "B"
if (person.name === 'B'){
    console.log(person.name + 'is allowed to go to the movies')
}else{
    console.log(person.name + ' go change your name')
}
//Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if (person.name === 'B' && person.age > 18){
    console.log(person.name + 'Welcome to the movies')
}else {
    console.log(person.name + ' Go away!!')
}

//Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract"
// if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
// noinspection JSAnnotator

if (1 == "1"){
    console.log('Loose')
}else if(1 === "1") {
    console.log('Tight')
}else{
    console.log('Not at all equal')
}

//Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4

if (1 <= 2 && 2 === 4){{
    console.log('Yes')

