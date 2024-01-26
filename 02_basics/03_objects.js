// object literals

const user = {
    name : "rohan",
    age : 23,
    address : "new delhi",
    "is Logged": false,
    lastLoginDays : ["monday", "wednesday", "friday"]
}
// here keys are also in string

console.log(user.address)
console.log(user["is Logged"])

// let's see how to use a symbol as a key
const mySym = Symbol("myKey");

const obj = {
    key1: "value1",
    key2: "value2",
    // we have to use square brackets to use a symbol as a key
    [mySym]: "myValue"
}

console.log(obj[mySym]);

// modifying a key's value
obj.key1 = "newValue1";
console.log(obj["key1"])

// we can freeze the objects as well so that no one can change it
Object.freeze(obj)
obj.key2 = "newValue2"
console.log(obj) // not gotten modified

// let's add a function as a value
user.greetings = function(){
    console.log("hello user")
}
console.log(user.greetings) // printing it's reference
console.log(user.greetings()) // calling the function

// let's add one more function and this will acess some key-values of the object
user.greetingsTwo = function(){
    console.log(`hello ${this.name}`)
}
console.log(user.greetingsTwo())

