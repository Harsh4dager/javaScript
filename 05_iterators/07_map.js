//  in map() function whatever you'll do each value will going to be returned

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let's say we want to add 10 in all these numbers
const numsPlusTen = nums.map( num => num + 10)
console.log(numsPlusTen)


// chaining: using these function one after other....
const newNums = nums
                .map( (num) => num * 9)
                .map( (num) => num+1)
                .filter( num => num%2 === 0)

console.log(newNums)


