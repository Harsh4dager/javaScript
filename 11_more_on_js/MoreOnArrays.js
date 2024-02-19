// let's go beyond basic arrays in js

const arr = []
// %DebugPrint(arr) // got error because vs code terminal is not enough to run this code we need to install jsvu 


// two types of arrays: 
// continous(packed) and HOLEY( have holes)

// 3 optimizations
// SMI ( small integer)
// Packed element
// Double (float, string, function, NaN)

const arrTwo = [1,2,3,4,5] // PACKED_SMI_ELEMENTS( most optimized)

arrTwo.push(7.2)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('harsh')
// PACKED_ELEMENTS

// once you degrade you can't go back by removing( now engine will optimize them differently)

arrTwo[10] = 11
// HOLEY_ELEMENTS ( because it have holes and all differnt types of elements as well)

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9]) // got undefined
// got 3 empty holes

console.log(arrTwo[18])
// acessing holes or over the bound values are expensive because a lot of conditions are checked 

// all checks
// bound check
// hasOwnProperty(arTwo, 9)
// hasOwnProperty(arTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// Holes are very expensive in js

// SMI > Double > PACKED
// HOLES_SMI > HOLES_DOUBLE > HOLES_PACKED


const arrFour = new Array(3)
// created just 3 holes. HOLES_SMI_ELEMENTS
arrFour[0] = '1' // HOLES_ELEMENTS
arrFour[0] = '2' // HOLES_ELEMENTS
arrFour[0] = '3'// HOLES_ELEMENTS

const arrFive = [] // hence it is better
// SMI 
arrFive[0] = '1' // PACKED_ELEMENTS
arrFive[0] = '2' // PACKED_ELEMENTS
arrFive[0] = '3'// PACKED_ELEMENTS


// always prefer build in methods rather than creating your own because they are better optimized in all browsers