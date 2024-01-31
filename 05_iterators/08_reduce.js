// the reduce() method executes a user-supplied "reducer" callback function
// the final result of running the reducer across all elements of the array is a "single value".
/*
 this reducer callback function have 2 arguments( accumulator, currentValue ) then this function will perform
 any operations and return the accumulator.
*/

// we can provide a initial value of accumulator after the callback function and if we dont 
//then it consider's the first ele of the array as it's value

const nums = [1, 3, 5, 7, 9]

const total = nums.reduce( function (acc, crntVal){
    return acc + crntVal;
}, 0)

console.log(total)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((Bill, item) => Bill + item.price, 0)

console.log(priceToPay);

