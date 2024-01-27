// variables defined directly in the file are in global scope
// variables defined inside a curly brackets are in local scope
// {
//     let a = 3
// }
// variables defined inside a function are in functional scope
// we can declare variables using const, let or var ( avoid using var because it got no idea of scope )

const a = 3;
let b = 5;
var c = 2;

{
    // we can't acess a or b becuase they are blocked scope and they are redefined in this block again but if these were not redefied in the scope then we can acess them but either-way we can acess c
    console.log(`c: ${c}`)

    const a  = 0 
    let b = 9
    var c = 829

    // printing in local scope
    console.log(a, b, c)
}
// printing in global scope ( c got the same value as defined in the scope above)
console.log(a, b, c)

// Note: global scope in nodejs environment and in window are different



function one(){
    const a = 5;
    function two(){
        const b = 3;
        console.log(a)
    }

    two()
}

one()
// this concept is known as clouser ( function two being a nested function when got called got added to a new call stack and even though the called function one got executed but still it provides a clouser data to the function two and that's why it is able to print the value of a)


// **************************** hoisting *****************************************
// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.

// Let's look at an example to illustrate hoisting with variable declarations:
console.log(j);  // undefined
var j = 5;
console.log(j);  // 5
// even though the console.log(a) statement comes before the declaration var a = 5;, it doesn't result in an error. During the hoisting phase, the variable declaration var a; is moved to the top, so when the first console.log(a) is executed, a has been declared but not yet initialized, resulting in undefined. The second console.log(a) outputs the value 5 after the variable has been assigned.

// Now, let's see hoisting with function declarations
hello();  // "Hello, World!"

function hello() {
    console.log("Hello, World!");
}
//  the function declaration function hello() { ... } is hoisted to the top of the scope. Therefore, when hello() is called before the actual function declaration in the code, it works without an error, and the output is "Hello, World!".

// hoisting works differently for var, let, and const:
// Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Variables declared with let and const are also hoisted, but they are not initialized until their actual declaration is reached, and accessing them before that results in a ReferenceError.
// newhello();  // ReferenceError

const newhello = function() {
    console.log("Hello, World!");
}




