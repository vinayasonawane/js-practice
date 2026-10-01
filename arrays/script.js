//array - collection of items, it can be different type of data collection. But usually we add only same type data
/* const arr = [12, 23, 34, 60, 89];
console.log(arr);
console.log(arr.length); // property
*/

const arrOfCars = ["BMW", "VW", "Skoda"];
console.log(arrOfCars);
console.log(typeof arrOfCars); // object - it has index as a key

// array indices
const marks = [87, 93, 66, 98, 89];
console.log("original marks:", marks);
console.log(marks[0], marks[3]);
// marks[100] undefined - it does not exist

// change value of specific index
// arrays are muttable - we can change the value
marks[2] = 90;
console.log("marks after value change of 2nd index:", marks);
// we can change array element, even if string type
arrOfCars[0] = "Audi";
console.log(arrOfCars);
console.log("print 2nd char inside 0 element array -->", arrOfCars[0][2]); // print 2nd char inside 0 element array

/* IMP
let arr = ["Hello"];
arr[0] = "World";     // ✅ Array element can be changed
arr[0][0] = "Y";      // ❌ Character inside the string cannot be changed
*/

// looping over arrays
let cities = ["pune", "mumbai", "hyderabad", "delhi", "goa", "gujrat"];

// for of loop
for (let city of cities) {
  console.log(city.toUpperCase());
}

// for loop
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i].toUpperCase());
}

// array methods
/*
concat() - combine two arrays
toString() - convert array to string
reduce() - reduce array to single value
map() - transform each element of array to new value
filter() - filter array based on condition
find() - find first element based on condition
includes() - check if value exists in array
indexOf() - find index of value in array
slice() - copy a portion of array to new array
splice() - add/remove/replace items in array
unshift() - add item to start of array
shift() - remove item from start of array
pop() - remove item from end of array
push() - add item to end of array
*/
// check more in notes file

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.toString()); // 1,2,3,4,5

const fruits = ["apple", "banana", "mango", "kiwi"];
const newFruits = fruits.concat(["grapes", "orange"]);
console.log(newFruits); // ["apple", "banana", "mango", "kiwi", "grapes", "orange"]
const newFruits2 = fruits.pop(); // remove last element
console.log(newFruits2);
console.log(fruits); // ["apple", "banana", "mango"]

const addNewFruits = fruits.unshift("dragon", "papaya"); // add new elements to start of array
console.log(fruits); // ["dragon", "papaya", "apple", "banana", "mango"]
