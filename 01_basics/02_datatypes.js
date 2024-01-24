"use strict"  // use newer version of javascript

// alert("hello") // we'll get error because we are running it on nodejs not on browser

// primitive data types
let num = 3 // a number(range of around 2**53, and to store even bigger number we can use bigInt)
let yrName = "harsh" // a string
let ispresent = true; // boolean
let uni = null; // represent that the value of uni is explicitly told to be null(nothing else)
let w; // here value of w is undefined and this value undefined is of datatype "undefined"

// object
console.log(typeof null); // null is of object datatype(which is an error in js)
console.table([typeof(num), typeof yrName, typeof false, typeof null, typeof w]);
