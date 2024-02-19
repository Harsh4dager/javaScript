class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // let's define getter or setters for password( name of getter and setters will be same as of the property name)
    get password(){
        // return this._password.toUpperCase();
        return `not going to tell you`
    }
    // now we have to define a setter as well if we've defined getter
    set password(value){
        this._password = value;
    }

    // in above code we've setted the value directly in password but if somebody tries to get it we give it back in uppercase letters
    // another thing is we've used _password( a totally different variable ) to set or get value because if we use password then we'll run into "maximum call stack size exceeded" because the constructor is trying to set as well as the setter
}

const harsh = new user("harsh@gmail.com","abc")
console.log(harsh.password)

// now we don't really want that anybody can acess every property and we want to actually define some specific encryption or any curtomized code for that property
// for such cases we can use getters and setters





