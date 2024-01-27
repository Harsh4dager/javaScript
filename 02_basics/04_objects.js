// more on objects

// declaring it using constructor( singleton object )

const user = new Object()

user.name = "harsh"
user.age = 20
user.city = "panipat"

console.log(user)

const anotherUser = {
    email : "harsh@gmail.com",
    fullName : {
        userFullName: {
            firstName: "harsh",
            lastName: "dager"
        }
    }
}

console.log(anotherUser.fullName)
console.log(anotherUser.fullName.userFullName.firstName)
// optional chaining
console.log(anotherUser.fullName?.userFullName?.firstName) // if userFullName don't exist or if firstName don't exist then we'll get undefined

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// object.assign(): is a static method copies all enumerable own properties from one or more source object to a target object
const obj3 = Object.assign({}, obj1, obj2) // {} is the target and obj1,obj2 are the sources.
console.log(obj3)

// we can also use spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4)


// we can seperately acess keys or values of an object
console.log(Object.keys(user))
console.log(Object.values(user)) 
console.log(Object.entries(user)) // each key-value pair in a array
// we'll get arrays

// can also ask if a obj contains a property or not
console.log(user.hasOwnProperty("city"))

// ******************************** Object De-Structuring *********************************

const newUser = {
    Username : "mohit",
    Userage : 22,
    Usercity : "samalkha",
    UserExperience: "one year",
    UserTargetDeadLine: 2025
}

const {Username} = newUser;
console.log(Username) // we can acess Username directly

// we can also provide short names to properties when de structuring
const {Userage: age, UserExperience: exp, UserTargetDeadLine: Deadline} = newUser;
console.table([age, exp, Deadline])


