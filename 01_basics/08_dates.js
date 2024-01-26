// javaScript Date object represents a single monment in time( total milisec from 1 jan 1970)
let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString()) 
console.log(myDate.toLocaleString()) 
console.log(myDate.toLocaleTimeString()) 

console.log(typeof myDate)

// we can create our own unque date 
let myCreatedDate = new Date(2024, 0, 29, 10, 66)
console.log(myCreatedDate.toLocaleString())

// we can create date like this as well
let newCreatedDate = new Date("02-28-2024");
console.log(newCreatedDate.toLocaleString())

// now let's see timestamps
let myTimeStamp = Date.now();
console.log(myTimeStamp) // we get a digit( time in milisecond from 1 jan 1970 to till now)
// we can also find the timestamp for our own created date
console.log(newCreatedDate.getTime());

// to get time in seconds
console.log(Math.floor(Date.now()/1000))

// other functions
console.log(newCreatedDate.getDate())
console.log(newCreatedDate.getDay())
console.log(newCreatedDate.getMonth()) // starting from 0 so  1 means feb
console.log(newCreatedDate.getFullYear())

// we can customize the output of the function toLocaleString() because it allows us to do
console.log(newCreatedDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
}))

