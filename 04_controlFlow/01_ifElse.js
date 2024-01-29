// conditional operators: == , != , ===, !==, <, >, <=, >= 

// if statements
if(3 > 2){
    console.log("executed")
}

const isLoggedIn = false;
if(isLoggedIn){
    console.log("user is logged in")
}else{
    console.log("user is logged out")
}

if(3**2 !== 12){
    console.log(`it is actually ${3**2}`)
}else console.log("it is 12")

const name = "rohan jhangda"

if(name.length < 8) console.log("very short name")
else if(name.length < 15) console.log("moderate name")
else console.log("long name")

const value = 7;
if(value > 5 && value < 10) console.log("lie b/w 5 and 10")


