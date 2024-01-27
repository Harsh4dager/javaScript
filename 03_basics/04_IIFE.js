// Immediately Invoked Function Expression (IIFE)
// there are some functions that we need to invoked immediately after creating because we don't want any global pollution to hindeer it's working
// syntax: (function-definition)()

(function db(){
    // named IIFE
    console.log(`db connected`)
})(); // we need to put a semicolon to make sure this invoked function stops

(()=>{
    console.log("db connected two")
})();

// we can take arguments as well
((username)=>{
    console.log(`db connected for the user: ${username}`)
})("harsh");
