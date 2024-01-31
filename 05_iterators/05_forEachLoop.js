// forEach() function is present in a array [[prototype]] 
// forEach() is also an higher order function ( because it takes a callback function as it's agrument)

// Note: a callback function doesn't have a name

const arr = ["tubes","pipes","sockets"]

arr.forEach( function (val){ 
    console.log(val)
})
// this val is given to it by the forEach ( simply it means that this callback function wil going to be runned for 
// each value of the array arr)

arr.forEach( val =>{
    console.log(val)
})

// we can also pass another defined function as an callback
function printit(item){
    console.log(item)
}

arr.forEach(printit)

// now this forEach not only provides single item but index and the whole arrary each time as well
arr.forEach((item, index, whole_arr)=>{
    console.log(item, index, whole_arr)
})

// various objects inside an array is a very popular structure in real world 
const mycoding = [
    {
        langName: "javaScript",
        notation: ".js"
    },
    {
        langName: "java",
        notation: ".java"
    },
    {
        langName: "python",
        notation: ".py"
    },
    {
        langName: "C++",
        notation: ".cpp"
    },
]

mycoding.forEach( item => { // item here is an object
    console.log(item.langName)
})
