/*
Ecma-Script divided datatypes in just 2 types
1. primitive -> call by value( meaning a copy is created )
2. Non-primitive -> call by reference( meaning the address of the memory got shared )
*/

// Primitive: string, number, boolean, null, undefined, symbol(used to create a value unique by wrapping it in a symbol), bigInt(used to store bigger numbers)
const yrNam = "harsh"
const score = 100.4
const isLoggedIn = true
const temperature = null
let age;

// let say we have to define id's to random strings
const id = Symbol("harsh");
const anotherId = Symbol("harsh");
// id and anotherId are both different even though the values are same 
console.log(id === anotherId)
console.log([ id, typeof id], [anotherId, typeof anotherId])

const bigNum = 67890495774933n
console.log(typeof bigNum)


// Reference( Non-Primitive ): Array, Object literals, Functions ( all these are type of Object in javascript)
// array
const realHeroes = ["HARSH", "jaanki","ram"]
console.log(typeof realHeroes); // object

// Object literals
const ages = {
    "harsh" : 20,
    "rohan": 17,
    "mohit": 22
}
console.log(typeof ages); // object

// functions
const greeting = function(){
    console.log("hey there")
}
console.log(typeof greeting) // object-function

// ******************************************************************************
// memory: stack( in primitive datatypes ), heap( in non-primitive datatypes )

// when we create a primitive data then it's name as well as it's value both got saved in the stack memory
let myName = "harsh"
let anotherName = myName
// now let's change it's value
anotherName  = "rohan"
console.table([myName, anotherName])
// see myName is still "harsh" because anotherName got a copy not the reference

// when we create a non-primitive data then it's name ot saved in the stack memory but it's value got saved in heap
const user1 = {
    userName : "harsh",
    userAge : 20,
    userAddress: "vpo pattikalyana"
}
const user2 = user1;
// now let's change some of it's values
user2.userAge = 21
user2.userName = "rohan"
console.table([user1, user2])
// see even user1 got changed because its value was referenced by user2

