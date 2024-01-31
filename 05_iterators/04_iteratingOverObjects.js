const obj = {
    js: "javaScript",
    rb: "ruby",
    py: "python",
    cpp: "C++"
}

// we can iterate ober an object using for in Loop
for (const key in obj) {
    console.log(key, '-->', obj[key])
}

// let's try this for in loop on arrays
const arr = ["tubes","pipes","sockets"]
for(const i in arr){
    console.log(i) // and we get there indices or keys in arrays
}

// can get values like this
for(const i in arr){
    console.log(arr[i]) 
}

// now let's try to run for of loop on Maps
const myMap = new Map()
// let's set key value pairs using set() function
myMap.set("person1","rohan")
myMap.set("person2","pankaj")
myMap.set("person3","mohit")

for (const i in myMap) console.log(i) 
// nothing is happening because just like object-literal this Map are also not iterable


