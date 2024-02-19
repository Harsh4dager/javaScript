class user {
    constructor(username){
        this.username = username;
    }

    callMe(){
        console.log(`this is ${this.username}`)
    }
}

// to inherit properties from a class we uses extends keyword
class teacher extends user{
    constructor(username, email, password){
        super(username) // this will invoke the constructor of user(parent)

        this.email = email
        this.password = password
    }

    courseAdded(){
        console.log(`a new course is added by ${this.username}`)
    }
}

const teacher1 = new teacher("anurag", "anu@teacher.com", "123")
teacher1.courseAdded()
teacher1.callMe()

// let's create another object from the user class
const user1 = new user("harsh")
user1.callMe()

// teacher1 is a instance of both teacher and user class
console.log(teacher1 instanceof teacher)
console.log(teacher1 instanceof user)

