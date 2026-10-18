Mutable / Immutable --> mutability refers to whether a value's data can be changed after it is created

Immutable - Primitives (String, Number, Boolean, BigInt, Symbol, null, undefined) - Modifying a variable creates a brand-new value in memory.
Mutable - Objects {}, Arrays [], Functions - Modifying properties updates the exact same reference in memory.

Iterate - repeat any action
Something that you can go through one item at a time.
Common iterables:
String ✅
Array ✅
Set ✅
Map ✅

| Method         | Short meaning          | Single / Multiple | Example                                 |
| -------------- | ---------------------- | ----------------- | --------------------------------------- |
| **push()**     | Add to end             | **Multiple**      | `[1,2] → push(3,4) → [1,2,3,4]`         |
| **pop()**      | Remove from end        | **Single**        | `[1,2,3] → pop() → [1,2]`               |
| **shift()**    | Remove from start      | **Single**        | `[1,2,3] → shift() → [2,3]`             |
| **unshift()**  | Add to start           | **Multiple**      | `[2,3] → unshift(0,1) → [0,1,2,3]`      |
| **splice()**   | Add/remove/replace     | **Multiple**      | `[1,2,3,4] → splice(1,2) → [1,4]`       |
| **slice()**    | Copy a portion         | **Multiple**      | `[1,2,3,4] → slice(1,3) → [2,3]`        |
| **indexOf()**  | Find index             | **Single**        | `[10,20,30] → indexOf(20) → 1`          |
| **includes()** | Check if exists        | **Single**        | `[10,20,30] → includes(20) → true`      |
| **find()**     | Find first match       | **Single**        | `[5,12,18] → find(x=>x>10) → 12`        |
| **filter()**   | Find all matches       | **Multiple**      | `[5,12,18] → filter(x=>x>10) → [12,18]` |
| **map()**      | Transform every item   | **Multiple**      | `[1,2,3] → map(x=>x*2) → [2,4,6]`       |
| **reduce()**   | Combine into one value | **Single**        | `[1,2,3] → reduce((a,b)=>a+b) → 6`      |

Functions:

|                             | Function Declaration | Function Expression             |
| --------------------------- | -------------------- | ------------------------------- |
| Syntax                      | `function add() {}`  | `const add = function() {}`     |
| Stored in variable?         | ❌ No                | ✅ Yes                          |
| Can call before definition? | ✅ Yes               | ❌ No                           |
| Hoisting                    | Function is hoisted  | Function assignment isn't       |
| Common use                  | General functions    | Callbacks / assigning functions |

function declaration:
function add() {}
function expression: "Put this function inside this variable."
const add = function() {};
arrow function:
const add = (a, b) => a + b;

function parameters are local variables , block scoped

callback function - it is a function, passed as argument in another function.
higher order functions - Takes another function as an argument or Returns another function.

let prices = [100, 200, 300];

prices.forEach((price) => {
console.log(price \* 0.9);
});
forEach() = Higher-order function
() => { ... } = Callback function

==========================

higher order vs callback function ---
function sum(calc){
calc()
}
sum(anotherFun)

sum() → Higher-order function, because it accepts another function as an argument.
calc → The parameter that receives the callback function.
anotherFun → The callback function being passed to sum().

==========================
A function's .length counts parameters only up to the first parameter with a default value.

function abc(a, b,c){
}
function pqr(a=0, b,c){
}
console.log(abc.length, pqr.length)

The output is 3, 0.
a = 0 → has a default value, so counting stops immediately.

if --
function x(a, b, c = 0) {}
length will be 2
==========================
Escape characters - special characters in JavaScript
\n - start from new line
\t - add tab space
\"" , \', \\ - show double quote, single quote, back-slash etc.

==========================
constructor - start with caps letter, it's a special function in js

different function syntax:
Regular function function: hello() {}
Short callback or array operation: () => {}
Object method: hello() {}
Class method: hello() {}
Initialize a class object: constructor() {}
Constructor function: function FunctionName(){}

** use of super
If a child class extends a parent class and defines its own constructor, call super() first. You can pass arguments to it, such as super(name), to initialize the parent's properties.
**

====================
try catch real-world uses:

1. Fetching API data
   try {
   const response = await fetch("/api/users");
   if (!response.ok) throw new Error("Request failed");
   } catch (err) {
   console.log("Unable to load users");
   }

2. Converting JSON
   try {
   const data = JSON.parse('{"name":}');
   } catch (err) {
   console.log("Invalid JSON data");
   }

3. Handling unexpected input
   try {
   const result = JSON.parse(userInput);
   console.log(result);
   } catch (err) {
   console.log("Please enter valid JSON");
   }

================
Promise: Represents the future success or failure of an asynchronous operation.

async: Declares a function that returns a Promise.

await: Waits for a Promise's result inside an async function without blocking the whole application.

# try/catch: Handles errors when using async/await.

====================
A Promise is a JavaScript object that represents the eventual success or failure of an asynchronous operation.

resolve and reject are callback functions provided to the Promise executor; they are not JavaScript keywords.

async/await is syntax that makes working with Promises easier to read and write.
async → makes the function return a Promise.
await → waits for a Promise to settle before continuing the async function.

\*\*\*\* We use await when we need to wait for one asynchronous operation before continuing with the next step.

\*\*\* we use async/await - it makes asynchronous code easier to read and helps avoid deeply nested callbacks.
