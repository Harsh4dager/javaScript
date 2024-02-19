let str = "harsh     "

console.log(str.length) // got 10 but that's unnecessary, the true length is just 5 so let's add a trueLength method for all the strings


// now let's see some exammples

const arr = ["one", "two", "three"]

const obj = {
    user: "rohan",
    age: 13
}

// now if i add a method to the object and if everything is a object then shouldn't the arr also be able to acess that method. let's see
Object.prototype.meth = function(){
    console.log("this method is present everywhere")
}

// now let's try this on obj and arr
arr.meth()
obj.meth()
// and we got it 

// now if i add a method to arrray's proto then the object shouldn't be able to acess it, let's try
Array.prototype.newMeth = function(){
    console.log("this method is present for arrays")
}

arr.newMeth()
// obj.newMeth() got error

// now let's also see inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // now TASupport can acess TeachingSupport properties and methods
}

Teacher.__proto__ = User //  now Teacher can acess User properties and methods


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
