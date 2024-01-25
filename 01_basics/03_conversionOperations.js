/*
primitive datatypes in js are mentioned in lowercase like this( number, string, boolean )
but to convert these among each other we uses Class functions with uppercase like this(Number, String, Boolean)
*/

// let's see conversion in Number
console.log("Number conversions")
let score = "25"

let scoreInNum = Number(score)

console.log([score, typeof score], [scoreInNum, typeof scoreInNum])

// let's convert these datatypes in Number too
let temp = Number("") // an empty string
console.log([temp, typeof temp])

temp = Number(true) 
console.log([temp, typeof temp])

temp = Number(false)
console.log([temp, typeof temp])

temp = Number(null) // null
console.log([temp, typeof temp]) // get's 0

temp = Number(undefined)
console.log([temp, typeof temp]) // get's NaN(not a number) but it is of datatype number

temp = Number("45u") // a string that can't be converted into a number
console.log([temp, typeof temp]) // get's NaN


// let's talk about string conversions
console.log()
console.log("conversions in strings")

temp = String(356) // a number
console.log([temp, typeof temp])

temp = String(-356) // a -ve number
console.log([temp, typeof temp])

temp = String(true) 
console.log([temp, typeof temp])

temp = String(null) // null
console.log([temp, typeof temp]) // got 'null'

temp = String(undefined) // null
console.log([temp, typeof temp]) // got 'undefined'


// let's talk about boolean conversions
console.log()
console.log("conversions in boolean")

// number to boolean
temp = Boolean(1) 
console.log([temp, typeof temp])

temp = Boolean(6677) 
console.log([temp, typeof temp])

temp = Boolean(0) 
console.log([temp, typeof temp])

temp = Boolean(-445678) 
console.log([temp, typeof temp]) // got true

// string to boolean
temp = Boolean("")  // empty string
console.log([temp, typeof temp])

temp = Boolean("34") 
console.log([temp, typeof temp]) // got true

temp = Boolean("harsh") 
console.log([temp, typeof temp]) // got true

// null & undefined to boolean
temp = Boolean(null) 
console.log([temp, typeof temp]) // got false

temp = Boolean(undefined) 
console.log([temp, typeof temp]) // got false



// *****************************let's talk about operations now********************************
console.log()
console.log("operations")

temp = 45
let negTemp = -temp;
console.log(negTemp) // will get -45

// basic arthmetic operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**3)
console.log(22%3)

// string concatenation
console.log("harsh " + "dager")

// now let's see some examples
console.log("1" + 2)  // 12 (a string)
console.log(1 + "2") // 12 ( a string)
console.log("1" + 2 + 2) // 122 ( a string)
console.log(1 + 2 + "2") // 32 ( a string)

// conversion( but nobody uses in production )
console.log(+true)
console.log(+false)
console.log(+"")
console.log(+null)

