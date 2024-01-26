// declare number
const num1 = 300; // it is a number by default
const num2 = new Number(39); // it is explicitly defined as a number
console.log([num1,num2])

// if we explicitly define a number and print it on the console then we get to see the [[prototype]]
// let's see some functions
const newNum1 = num1.toString();
console.log([newNum1, typeof newNum1])
console.log(405.78392.toFixed(2)); // rounding to 2 points

// toPrecision(): provides a precise value
console.log(459.673938.toPrecision(4))
console.log(459.673938.toPrecision(3))
console.log(459.673938.toPrecision(2))

let score = 2763927498;
// toLocaleString(): used to show a number as a string with commas to enhance readability
console.log(score.toLocaleString('en-US')) // USA system 
console.log(score.toLocaleString('en-IN')) // indian system

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


// ********************************************************************************
// let's talk about Math: a lib comes with js by default
console.log(Math) // it is a object with many properties and function, see on console

console.log(Math.PI);
console.log(Math.abs(-5)) // get 5 (the absolute value of -5)
console.log(Math.round(2.538)) // got 3 because the value is > 2.5
// now if we want to take the lower or upper bound value then we can do that too
console.log(Math.ceil(8.1)) // got 9 because it is > than 8, doesn't matter how much
console.log(Math.floor(8.991)) // got 8 because it is < than 9, doesn't matter how much
console.log(Math.sqrt(144))
console.log(Math.cos(90))
console.log(Math.pow(90,2))
console.log(Math.min(90,34,789,2))
console.log(Math.max(90,34,789,2))
console.log(Math.random()) // random value b/w 0 and 6

// getting random value for ludo
console.log(Math.max(1, Math.floor(Math.random()*6)))
// another way
const max = 6
const min = 1

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
