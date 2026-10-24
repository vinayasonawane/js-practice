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

/*********** spread operator ***************************************/
// It is commonly used to copy arrays or objects, merge them, and pass array elements as function arguments.
// The spread operator only goes one level deep.

// copy
const nums = [10, 20, 30];
const newNums = [...nums];
console.log(newNums);
// [10, 20, 30]

// merge
const num1 = [1, 2];
const num2 = [3, 4];
const result = [...num1, ...num2];
console.log(result);
// [1, 2, 3, 4]

// Object operation - Cloning & Merging: Duplicates properties or combines multiple objects into one.
const user = { name: "Alice", role: "User" };
const adminUser = { ...user, role: "Admin", location: "USA" };
// Result: { name: 'Alice', role: 'Admin', location: 'USA' }

// Function Arguments
const numbers = [5, 12, 8];
const maxNum = Math.max(...numbers);
console.log(maxNum); //12

// Strings to Arrays - Converts a string into an array of chars
const greeting = "Hello world";
const chars = [...greeting]; // ['H', 'i']
console.log(chars);

/*********** rest operator ***************************************/
// instead of expanding a collection like spread operator, it gathers multiple separate elements and condenses them into a single array or object
// Both use ..., but their purpose depends on where you use them.

// In Function Parameters -The rest operator allows a function to accept an indefinite number of arguments as a clean, structured array.
function sumAll(...numbers) {
  // 'numbers' is a true JavaScript array containing all passed arguments
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2)); // Output: 3
console.log(sumAll(10, 20, 30)); // Output: 60

// Combining Fixed Parameters and Rest Parameters
function test(a, ...rest) {
  console.log(a);
  console.log(rest);
}

test(10, 20, 30, 40);
console.log(
  "Combining Fixed Parameters and Rest Parameters",
  test(10, 20, 30, 40),
);

//array destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second, third, tenth] = colors;

console.log(first); // Red
console.log(second); // Green
console.log(third); // Blue
console.log(tenth); // undefined
