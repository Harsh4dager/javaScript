// falsy values: false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy values: everything else

// suprising truthy values:
// "0"
if("0") console.log("it is a truthy value")
else console.log("it is not a truthy value")
// "false"
if("false") console.log("it is a truthy value")
else console.log("it is not a truthy value")
// " "
if(" ") console.log("it is a truthy value")
else console.log("it is not a truthy value")
// [] or {}
if([]) console.log("it is a truthy value")
if({}) console.log("it is also a truthy value")
// function(){}, called a empty function
if(function(){}) console.log("it is a truthy value")
else console.log("it is not a truthy value")

// to check if a array or object is empty or not
const arr = []
const obj = {}

if(arr.length === 0){
    console.log("it is an empty array")
}else console.log("it is not an empty array")

if(Object.keys(obj).length === 0) console.log("it is an empty object")
else console.log("it is not an empty object")

// nullish Coalescing Operator (??): null, undefined
/* 
this is kind of a safety check, let say you get these values from the database and if we got null or undefined then
those values are not what we are expecting and can cause errors so we can provide  a safe value in place of it using this operator
*/

let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10; 
val1 = undefined ?? null ?? 18; 
console.log(val1)

// terniary operator
// condition ? true : false
const teaPrice = 23;
teaPrice < 30 ? console.log("less than 30") : console.log("more than 30")

