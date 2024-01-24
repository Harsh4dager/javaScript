const accId = "2356"
let accName = "mohit"
var accNum = 34 // don't use because of it's issues with block and functional scopes
accCity = "panipat" // can do like this as well but this is considered a wrong practice
let cou; // value is undefined 

// accId = "34" // not allowed

accName = "rohan";
accNum = 3;
accCity = "sonipat"

console.log(accId)
console.table([accId, accName, accNum, accCity, cou])