// promises are on their own a object in js

// mostly we consume promises but let's see first how to construct them
const promiseOne = new Promise( // it takes a callback
    (resolve, reject) =>{ // this callback have 2 parameters
        // can perform any Async task: DB calls, crypography, network calls etc
        setTimeout(()=>{
            console.log("Async task is done");

            resolve() // now the promise will be consumed

        },1000)
    }
)

// now let's consume this promise
promiseOne.then( // it takes a callback function to execute when the Promise is resolved
    ()=>{
        console.log("promise got consumed")
    }
)

// we don't really need to use a variable 
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 2 ");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 is done")
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username: "harsh", rollno: 6}); // this promise got resolved with this data
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error) resolve({username:"rohan", marks: 35, age: 13}); // resolving this promise with this data
        else reject("ERROR: something went wrong");
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username; // now this will return a resolved promise with the value user.username so that we can futhur chain and avoid callback hell

}).then((username)=>{
    console.log(username)
}).catch( (err) =>{ // will run when the promise got rejected
    console.log(err)
}).finally(()=>{ // this will run whatever happens and will inform us
    console.log("promise got resolved or rejected")
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error) resolve({username:"javaScript", password: 123}); // resolving this promise with this data
        else reject("ERROR: JS went wrong");
    },1000)
})

// we can also handel a promise using async await
// async function consumePromiseFive(){ 
//     const response = await promiseFive;
//     console.log(response);
// }
// it handles resolve easily but can't need a catch block to handle reject because async await can't handle error on their
// consumePromiseFive().catch((err)=>{
//     console.log("rejected",err)
// })

// or we can also catch error like this(comment the above async function)
async function consumePromiseFive(){ 
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/harsh4dager')

//         const data = await response.json(); // have to await it as well because even chaning this data into json format will take time
//         console.log(data);
//     } catch(err) {
//         console.log("E: ", err)
//     }
// }

// getAllUsers()


// now let's do the above thing using thening

fetch('https://api.github.com/users/harsh4dager')
.then(res => {
    return res.json()
})
.then((data) => {
    console.log(data);
})
.catch(err => console.log(err))

// if you see, you'll notice that this response is getting printed even before the above asyncronous tasks and it is because when we use fetch() the tasks got added to micro task queue which has somewhat more priority than that of the normal task queue

