const person = {
    name : "harsh",
    age : 20,
    welcome : function(){
        // we have to use this keyword to mention the current context
        console.log(`${this.name}, welcome to our platform`)
        // and we know that this keyword refers to the current context and to see it let's print it as well
        console.log(this)
    }
}


person.welcome()
person.name = "mohit" // changed the context
person.welcome() // see the current context changes

// now let's see the global context by printing this directly
console.log(this) // and we got a empty {}, because it is different from the browser where we would have got the window object

// now let's try to print the this keyword in a function here
function one(){
    console.log(this)

    const city = "panipat"
    console.log(this.city) // we'll get undefined because this keyword here don't refer to this functions context but referint to the [global] context and the global context don't have any property city so undefined
}
one() // can see that we are seeing a lot of properties and functions in a global object

// now let's talk about arrow functions
const Myfunc = () => {
    console.log(this) // we'll get a empty {} instead of [global] here

    const activeFor = 2
    console.log(this.activeFor) // getting undefined
}
Myfunc()

// now this will work
this.about = "20 yo, resides in haryana"
const arrfunc = () => { 
    console.log(this.about)
}
arrfunc() // tetting printed because about is added to that empty {} object but remember this will not work for other function definitions because they refer to the object [global] so to add a variable we need to add it inside there own definitions
const arrfunc2 = function(){
    this.about = "21 yo, resides in delhi"
    console.log(this.about)
}
arrfunc2()

// now let's take another arrow func example

const power = (base, power) => {
    return base**power
}
console.log(power(3,2)) // got 9

// now if we can conclude our function's functionality in just a line then we don't need to explicitly say return we can implicity return it like this
const power2 = (base, power) => (base**power) // it will work fine even without the parenthesis on base**power but it is consdered a good practice because let say we have to return an object but the function definition will think like so it's a function scope without a return so it won't work in such cases we need to use  a parenthesis ( see the example below )
const objFunc = () => {name: "mohit"} 
console.log(objFunc()) // getting undefined

const objFunc2 = () => ({name: "mohit"})
console.log(objFunc2()) // we'll get the object
