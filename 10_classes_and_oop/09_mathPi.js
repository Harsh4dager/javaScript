// why can't we change the value of PI ( let's see )

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); // to know about PI from Math
console.log(descripter)
// and we got
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }
// these properties like writable, enumerable etc are so hard coded in js to false that we can't change them,



// now we can provide such properties to our own Objects
const cloths = {
    fibric: "cotton",
    type: "shirt",
    price: 580,

    isAvailable: function(){
        console.log("available now")
    }
}

// now does this object also have descripter properties and let's see if we can change them
console.log(Object.getOwnPropertyDescriptor(cloths, "fibric"))
// all it's properties like writable, enumerable, configurable are true
// so in js we can also define our properties
Object.defineProperty(cloths, "fibric", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(cloths, "fibric"))

// now because writable and enumerble is false we can't change this properties value and also can't iterater over it
cloths.fibric = "nlal";
console.log(Object.getOwnPropertyDescriptor(cloths, "fibric")) // even though we've tried changing it is still cotton

for (let [key, value] of Object.entries(cloths)) {
    if(typeof value !== 'function'){
        console.log(`${key} -> ${value}`)
    }
}
// see because fibric's enumerable is set to false it didn't got printed


