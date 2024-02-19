function setName(name){
    this.name = name;
}

function user(name, age, state){
    setName(name);

    this.age = age;
    this.state = state;
}

const user1 = new user("rohan",23, "maharashtra")
console.log(user1)

// now we can see that the name doesn't got set because the functional context of setName is removed and this name is set to the this(which refer to the current context of setName function) but we want to set it in the current context of user so that even if the functional context of setName got removed the variables set by it remained and so to retain the execution context we can use .call() function and we can pass this keyword in it as well

function betterUser(name, age, state){
    setName.call(this, name);

    this.age = age;
    this.state = state;
}

const user2 = new betterUser("harsh",21, "haryana")
console.log(user2)