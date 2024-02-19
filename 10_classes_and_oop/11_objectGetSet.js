// defining getter and setter when using objects

const user = {
    _email : 'hh@gmail.com',
    _password : "123",


    // defining getter and setters
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }
}

// we can use factor function to create objects based on another object( user in our case )
const harsh = Object.create(user)

console.log(harsh.email)

