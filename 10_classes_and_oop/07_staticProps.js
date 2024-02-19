class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`logged in as ${this.username}`)
    }

    static uniqueIdForAll(){ // now we can't acess it 
        return `$123${this.username}abc`
    }
}

const myuser = new user("mohit")
myuser.logMe()

// console.log(myuser.uniqueIdForAll()) will get error

class child extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mychild  = new mychild("akash", "akash@gmail.com");

// console.log(mychild.uniqueIdForAll()) will get error