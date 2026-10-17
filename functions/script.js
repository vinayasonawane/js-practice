// functions - block of code which executes a specific task and can be reused again and again.

// there are some inbuilt functions in JavaScript like alert(), prompt(), confirm() etc. We can also create our own functions.
// Arrays → Strings → Math → Number/conversion → JSON → Date all these have their own inbuilt functions which we can use to perform specific tasks.

/*
functions can be created in two ways:
1. Function Declaration - hoisted to the top of the code, can be called before it is defined.
function functionName(parameter1, parameter2...) {
    do some task
}
functionName(argument1, argument2...) // calling the function

2. Function Expression - not hoisted to the top of the code, can only be called after it is defined.
const functionName = function(parameter1, parameter2...) { 
    do some task
}
functionName(argument1, argument2...) // calling the function
*/

function myFunction(msg, n) {
  // "msg" - is a parameter
  // msg - local variable, can only be accessed inside the function
  console.log(msg, n);
}
myFunction("Hello, World!", 10); // calling the function with an argument

function addNum(a, b) {
  return a + b;
  //   console.log("console after the return statement"); this line will not be executed because the function will exit after the return statement is executed.
}
addNum(5, 10); // calling the function with an argument
console.log(addNum(5, 10)); // calling the function with an argument and logging the return value

// arrow functions - introduced in ES6, shorter syntax, does not have its own "this" value, cannot be used as constructors, cannot be used as generators.
const addNumArrow = (a, b) => {
  return a + b;
};
console.log(addNumArrow(5, 10)); // calling the arrow function with an argument and logging the return value

/*
forEach method - executes a provided function once for each array element. It takes a callback function as an argument, which is executed for each element in the array.

forEach() = Higher-order function
() => { ... } = Callback function
 */

let prices = [100, 200, 300];

prices.forEach((price) => {
  console.log(price * 2);
});

/*
map method - creates a new array populated with the results of calling a provided function on every element in the calling array. It takes a callback function as an argument, which is executed for each element in the array.
 */
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num) => {
  return num * num;
});
console.log(squaredNumbers); // Logs [1, 4, 9, 16, 25]

/* different syntax 
Regular function    	              function hello() {}
Short callback or array operation	  () => {}
Object method	                      hello() {}
Class method	                      hello() {}
Initialize a class object	          constructor() {}
Constructor function                function FunctionName(){}
*/
