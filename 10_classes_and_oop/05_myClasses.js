// let's define class

class user{
    constructor(name,age,location){
        this.name = name;
        this.age = age
        this.location = location
    }

    userSAge(){
        return `${this.age}`
    }

    userSLocation(){
        return `${this.location}`
    }
}

const user1 = new user("mohit",12, "bandra, mumbai")
console.log(user1.userSAge())
console.log(user1.userSLocation())

// now we know that this class keyword is a syntactical sugar which is introduced after ES6 and js is actually a prototypal language so let's also see it's behind the scene
console.log()

const newUser = function(name,age, location){
    this.name = name;
    this.age = age;
    this.location = location
}
// now let's add the same 2 functions/methods
newUser.prototype.newUserSAge = function(){
    return `${this.age}`
}

newUser.prototype.newUserSLocation = function(){
    return `${this.location}`
}

const newuser1 = new newUser("rohan", 23, "vpo pattikalyana, haryana")
console.log(newuser1.newUserSAge())
console.log(newuser1.newUserSLocation())

