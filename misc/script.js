// try catch
// Use try...catch in JavaScript when you want to handle an error without stopping the rest of your program unexpectedly.
let a = 5;
let b = 10;
console.log(a, b);
try {
  console.log(a + c);
} catch (err) {
  console.log(err.message);
} //if we remove try catch, below code will not run
console.log(a * b);
console.log(a + b);
