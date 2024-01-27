// intro to  functions

function myFunc(){
    console.log("hey there!")
}
myFunc()

function myFunc2(){
    return "what are you doing"
}
console.log(myFunc2())

function myFunc3(name){
    if(!name) return "enter a name"
    return `${name}, how are you`
}
console.log(myFunc3("harsh"))
console.log(myFunc3())

// default value
function myFunc3(name = "rohan"){
    return `${name}, how are you`
}
console.log(myFunc3("harsh"))
console.log(myFunc3())


// if we are not sure the total number of arguments we are getting then we can use the rest operator (...)
// (...) is called rest operator when used as a parameter and used as a spread operator when concating the data stucrtures
function cartPrices(...itemPrices){
    return itemPrices
}

console.log(cartPrices(2000, 1300, 1200))

function cartPrices2(itemPrice1, itemPrice2, ...itemPrice3){
    console.log(itemPrice3)
}
cartPrices2(100, 1400, 495, 18, 259, 408)
