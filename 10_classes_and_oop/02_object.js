// js is a prototypal-based language.
// everything in js is a Object

// function is interesting in js: let's see
function mulBy5(num){
    return num*5;
}

console.log(mulBy5(3))

// now let's see can we add properties to a function like we do to a object
mulBy5.abc = 7
console.log(mulBy5.abc)
// yes we can meaning, in js a function is an function as well as a object 

// let's also print it's prototype
console.log(mulBy5.prototype) // got a empty object literal



// let's take another example
function createUser(username, score){
    this.username = username; // this is used to set the current context and we are setting a variable ino it, meaning this username will be added to this function's prototype
    this.score = score
}

// now prototype is just a object right so we can store a function in this as well
createUser.prototype.scoreIncrement = function(){
    this.score++;
}
createUser.prototype.printScore = function(){
   console.log(`score is ${this.score}`)
}

const user1 = new createUser("harsh", 34);
const user2 = new createUser("harshit", 84); 
// this new keyword is responsible for letting the user1 and user2 know that some futher properties like scoreIncrement and printScore got added.

user1.printScore()

user2.scoreIncrement()
user2.printScore()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/