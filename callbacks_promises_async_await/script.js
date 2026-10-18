// JavaScript is single-threaded and synchronous by default, but it handles asynchronous work using mechanisms such as Promises, async/await, and the event loop, setTimeout()

// sync = Finish one task before starting the next task.
// async = Start a task that takes time, and allow other work to continue while waiting for it.

// JavaScript doesn't need to sit idle while waiting. It can execute other code and handle the API response when it arrives.

console.log("Order food");

setTimeout(() => {
  console.log("Food is ready"); // it'll print after 5 seconds
}, 5000);

console.log("Talk to friends");

// show data after some delays, 1 by 1
// nested callbacks - callback hell

// A callback is simply a function passed to another function. It can run immediately or later, depending on how the receiving function uses it.
// we can decide code execution order by callback
// eg. setTimeout, map, filter

function getData(data, getNextData) {
  setTimeout(() => {
    console.log("data id:", data);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2);
});

// Promises and async/await help us handle operations that finish later.
// A Promise is an object in js, which has 3 states : pending, resolve and reject
/*
we use promise - some operations take time, and we need a way to handle their future result or failure.
eg. food deliery
A Promise has three states:
1. Pending
Food is still being prepared.
2. Fulfilled
Food was delivered successfully.
3. Rejected
The order failed.
*/

const myPromise = new Promise((resolve, reject) => {
  //inside this promise we add async code , eg fetch api,
  let success = true;
  if (success) {
    resolve("Food delivered!");
  } else {
    reject("Order failed!");
  }
});

// resolve() — tells us the operation succeeded.
// reject() — tells us the operation failed.

// get result with .then() and .catch()
// if/else decides which message to send; .then() and .catch() receive and print that message.
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Async await
// async/await is a cleaner way to work with Promises.
/*
Situation	                                What to use
Handle a Promise result	                    .then()
Handle a Promise error	                    .catch()
Write asynchronous code step by step	    async/await
Handle errors in async/await	            try/catch
Fetch data from an API	                    Usually async/await or .then()
*/

// async await
/* async function always returns a promise 
It waits for the first Promise to settle before continuing to the second line.

await getData(1)
Wait for operation 1

await getData(2)
Then run operation 2

await getData(3)
Then run operation 3
async function name(params) {
    
}
*/

function getUsers(userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Username:", userName);
      resolve();
    }, 2000);
  });
}

async function getAllUsers() {
  await getUsers("Rama");
  await getUsers("Raavi");
  await getUsers("Ravina");
}

getAllUsers();
