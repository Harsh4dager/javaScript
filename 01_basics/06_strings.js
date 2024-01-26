const name = "harsh"
const age = 20

// naive approach: concatenation
console.log("my name is " + name + " and my age is " + age)// don't use this
// better approach: string interpolation(using backticks)
console.log(`my name is ${name} and my age is ${age}`)

// another way to define a string
const person = new String("rohan");
console.log(person)
/* 
if you see this person on console then you'll see that this is defined kind of a object meaning each character
is at a position(starting from 0)
*/
console.log(person[0])
// there are other properties like length is also present in string
console.log(person.length)
/* can also see [[prototype]] and many function are present in this, this [[prototype]] or __proto__ is a object 
containing all the functions for the string*/
console.log(person.__proto__)
// it seems empty but it is not, all the functions available to string are defined in this

// let's see some important ones
console.log(person.toUpperCase()) // haven't changed the original string
console.log(person.charAt(4)); // got n because it is on index 4
console.log(person.indexOf('n')); // got 4 because t is on index 4

let newName = person.substring(0,3)
console.log(newName)

newName = person.slice(0, 3)
console.log(newName)


let newStr ="    harsh   "
console.log(newStr)
console.log(newStr.trim())

const codes = "mohan345%20jha"
console.log(codes.replace('%20','-'))

console.log(codes.includes("harsh")); // false

const names = "harsh-rohan-mohan-naman";
console.log(names.split('-')) // split without limit
console.log(names.split('-', 3)) // split with limit of 3

