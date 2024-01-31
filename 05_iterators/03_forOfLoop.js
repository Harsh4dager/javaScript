const places = ["ram mandir", "taj mahal", "india gate", "gateway of india"]

for(let place of places) console.log(place);

// can also run this on other iterables as well
const name = "harsh dager"

for(let char of name){
    console.log(char)
}

// let's talk about Map object: 
// it is a js object which hold key value pairs and 
// also remembers the original insertion order with no duplicate values

const myMap = new Map()
// let's set key value pairs using set() function
myMap.set("person1","rohan")
myMap.set("person2","pankaj")
myMap.set("person3","mohit")

console.log(myMap)

//  printing the whole pair using for of loop
for(let pair of myMap){
    console.log(pair)
}

// we can also destructure key and pair while using for of loop 
for(let [key, value] of myMap){
    console.log(`the key is "${key}" and the value is "${value}" `)
}

// for of loop on an object
const myObj = {
    'color': 'red',
    'stock': 2000,
    'sales': '2 lakh'
}

// for(let i of myObj) console.log(i) 
// getting error because object-literals are not iterables using for of ( their are other ways to iterate it)


