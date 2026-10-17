function greet() {
  console.log("Hello");
}

function execute(callback) {
  callback();
}

execute(greet);

/*
greet() is the callback function because we pass it to another function.
execute() is the higher-order function because it accepts a function as an argument. execute() receives a function and runs it.
callback is the parameter that receives greet.
*/

// 1. Callback function: The function you pass to another function.
// 2. Higher-order function: The function that receives another function as an argument or returns a function as a result.

// Callback = the task you give.
// Higher-order function = the person who receives the task.

// some imp examples:
// 1 forEach(), map(), filter()

// 2 find(), some(), every(), reduce()

// 3 addEventListener(), setTimeout()

// 4 .then(), .catch(), .finally()

// 5 bind(), call(), apply()

// eg. of filter() and callback function
// let nums = [1, 2, 3, 4];
// let result = nums.filter(n => n > 2);
// filter() → Higher-order function because it accepts another function.
// n => n > 2 → Callback function because it is passed to filter().
// n → Parameter of the callback

// ================ filter example ==================
// filter() - filter out elements from an array based on a condition and return a new array.
let nums = [1, 2, 3, 4];
let result = nums.filter((n) => {
  return n > 2;
});
console.log(result); // [3, 4]

// filter() does not mutate the original array. It returns a new array.
let num2 = [20, 30, 40, 50];
num2.filter((n) => n > 20);
console.log(num2); // [20, 30, 40, 50] because filter() does not mutate the original array. It returns a new array.

console.log(num2.filter((n) => n > 20)); // [30, 40, 50] because filter() returns a new array.

// ================ map example ==================
// map() - perform some operation on each element of the array and return a new array.
let nums3 = [1, 2, 3, 4];
let result3 = nums3.map((n) => {
  return n * 2;
});
console.log(result3); // [2, 4, 6, 8]

// ================ reduce example ==================
// reduce - perform some operation on each element of the array and return a single value.
// res is the accumulator, curr is the current value.
// Accumulator means a value that keeps collecting or accumulating results.
// The accumulator keeps the previous result and uses it for the next calculation.
// accumulator is just a variable name. You can call it sum, total, or acc instead.
let arr1 = [1, 2, 3, 4];
const output = arr1.reduce((acc, curr) => {
  return acc + curr;
}, 0); // 0 is the initial value of the accumulator, it's optional.
console.log(output); // 10

// ================ forEach example ==================
// forEach - perform some operation on each element of the array. It does not return a new array.
let arr2 = [1, 2, 3, 4];
arr2.forEach((n) => {
  console.log(n * 2);
}); // 2, 4, 6, 8
