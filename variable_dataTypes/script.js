// Variable examples in JavaScript
let firstName = "Alice";
const age = 30;
var city = "New York";

console.log(firstName);
console.log(age);
console.log(city);

let lastName = "Smith";
console.log(lastName);

// const cannot be reassigned
// age = 31; // This would throw an error

// data types in JavaScript: primitive and non-primitive
// primitive data types: string, number, boolean, undefined, null, symbol, bigint
// non-primitive data types: object, array, function

// primitives store single values, while non-primitives can store multiple values and complex data structures.

// object example
// key: value pairs
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
console.log(person);

const student = {
  name: "Jane",
  grade: "A",
  subjects: ["Math", "Science", "History"],
};
console.log(student);

const car = {
  brand: "Skoda",
  model: "Kylaq",
  year: 2026,
  color: ["red", "blue", "black"],
  isAvailable: true,
};
console.log(car);

// how to access object properties / keys
console.log(car.brand); // Accessing using dot notation
console.log(car["model"]); // Accessing using bracket notation

// change key value in object
car.year = 2025; // Changing the value of the 'year' key
console.log(car.year); // Output: 2025

console.log(typeof car.brand); // checking the data type of the key value

// we cant change the const variable itself, but we can change the properties of the object it references.
