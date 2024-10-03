/* Promises : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous 
    action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately 
    returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

*/
/* //  ex: 
let meraPromise1 = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("inside 1");
    },3001);
    resolve(123);

    // reject(new Error('Erorr, ohno'));
})
let meraPromise2 = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("inside 2");
    },3000);
    resolve(123);

    // reject(new Error('Erorr, ohno'));
}) 


console.log("hello"); */


/* then() : The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise.
   catch(): The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. 


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => console.log("From Promise 1"), 5000);
    resolve(69);
  });
  
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => console.log("From Promise 2"), 5000);
    reject(new Error("Error while trying to resolve"));
  });
  
  
  promise1.then((value) => console.log(value));
  // promise1.then((value) => console.log(value),(error) => console.log(error));
  
  promise2.catch((error) => console.log(error));
  
  */
/* let waada1 = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log('setimeout1 started');
    },3000);
    resolve(true);
 })

 let output = waada1.then(() => {
    let waada2 = new Promise(function(resolve , reject){
        setTimeout(() => {
            console.log('setimeout2 started');
        },5000);
        resolve("waada 2 resolved")
 
    })
    return waada2;
});

output.then((value) => console.log(value));

 */

/* async function abcd() {
    return 23;
}

// Note : aync function always return promise.

 */

/* //ex:
async function utility(){

    let mumbaiMausam = new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve("Mumbai is hot");
        },12000);
    });
    
    let jalandharMausam = new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve("Jalandhar is cold");
        },12000);
    });
    // await : If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.
    let mM = await mumbaiMausam;
    let jM = await jalandharMausam;

    return [mM,jM];
}

let result = utility();
 */

 /* //API
// fetch API of Weather
let p = fetch("https://goweather.herokuapp.com/weather/MDS");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers);
  return response.json();
}).then((result) => console.log(result));

*/
/* //Post request
const createTodo = async () => {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Priyansh",
      body: "This is Body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
}

const mainFunc = async() => {
    let todo = await createTodo();
    console.log(todo);
}
*/

/* Clausures
function outer() {
    const name = "John"; 
    function inner() {
      console.log(`Hello, ${name}!`);
    }
    return inner;
  }
  
  const greeting = outer();
  greeting(); // logs "Hello, John!"
  
*/

/* ex:
const func = () => {
  const x = () => {
    let a = 10;
    console.log(a);
    const y = () => {
    //   let a = 20;
      console.log(a);
      const z = () => {
        // let a = 30;
        console.log(a);
      };
      z();
    };
    a = 69;
    y();
  };
  return x;
};

let x = func();
x(); // 10 69 69

*/






