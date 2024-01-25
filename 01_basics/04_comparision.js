// basic comparsions( comparising similar datatypes)
console.log(2 == 2)
console.log(2 < 42)
console.log(21 > 42)
console.log(2345 <= 42)
console.log(2345 >= 42)
console.log("harshit" > "rohan") // compare first char to char

// comparisions with different datatypes
console.log()

console.log("2" < 3)
console.log("211" > 3)
// these string will be cnoverted to number for just the comparision
console.log("-3" > true)
console.log("-3" <= false)


// now let's see the behavior wheen we compare null or undefined
console.log();
console.log(null > 0) // false
console.log(null < 0) // false
console.log(null >= 0) // true
/* 
they behave different because the equality check == and comparisions > < <= >= works different in js
comparisions convert null to a number and treats it as a 0 while equality converts it to NaN
*/

console.log();
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined >= 0) // false
// here got false for all

// strict check "==="
// == checks the value not the datatype but === considers the datatype as well
console.log()
console.log("2" == 2) // true
console.log("2" === 2) // false
