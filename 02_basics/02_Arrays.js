const names1 = ["harsh", "somit", "gaurav"]
const names2 = ["pankaj", "sonia", "rahul"]

// names1.push(names2); // pushed the whole names2 as 4th ele in names1
console.log(names1);

// let's see to use the function concat
const concatNames = names1.concat(names2)
console.log(concatNames) // now it works

// we can also use the spread operator
const allNewNames = [...names1, ...names2]
console.log(allNewNames)

// let's see how to flat a arr using flat function
const newArr = [1,2,3,4,[5,6,[7,8]],[9,10,[11,[12,13]]]]
// const flattedNewArr = newArr.flat(2)
// const flattedNewArr = newArr.flat(3)
const flattedNewArr = newArr.flat(Infinity)
console.log(flattedNewArr)


console.log(Array.isArray("harsh"))
console.log(Array.from("harsh"))
console.log(Array.of("harsh","mohit"))

console.log(Array.from({name: "rohan"})) // got empty array because we need to tell if we want a arr from the keys or from the values
