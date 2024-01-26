// js arrays are resizable and can contain a mix of different datatypes
// when we copy a js array it provides a shallow copy( same reference ) instead of deep copy (different reference with same data)

const Arr1 = [1,2,3,4,5]
const Arr2 = new Array("harsh","mohit","sagar")
console.log(Arr1, Arr2)
console.log(Arr2[0]) // indexing

// methods of arrays

Arr1.push(6)
console.log(Arr1)

Arr1.pop()
console.log(Arr1)

Arr1.unshift(0) // very time consuming function because it shifts all the element to add new ele to the first
console.log(Arr1)
Arr1.shift(0) 
console.log(Arr1)


console.log(Arr2.includes("rohan"))
console.log(Arr2.indexOf("sagar"))
console.log(Arr2.indexOf("rohan")) // if the ele is not present then gets -1

// joining ele of arr in a string
const newArr = Arr2.join();
console.log(newArr)

// slice, splice: slice doesn't include the end index and don't modify the original array but splice does

const myArr = [1,2,3,4,5,6]

console.log("original array before slice ", myArr)
console.log(myArr.slice(0,3))
console.log("original array after slice and before splice ", myArr)
console.log(myArr.splice(0,3))
console.log("original array after splice ", myArr)

