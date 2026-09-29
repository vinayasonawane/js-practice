// for-of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of an iterable object.

// we use for-of loop to iterate over the characters of a string or the elements of an array.

// can't use for-of loop with objects because objects are not iterable.

// syntax
let str = "This is for-of loop";
for (let char of str) {
  console.log(char);
  //   do some work here with the char variable
}

// char will take the value of each character in the string one by one and print it to the console.
// "char" can be any variable name you choose.

/* const items = [...];

for (const item of items) {
   // do something with item
} */

let firstName = "John";
let countOfName = 0;
for (const val of firstName) {
  countOfName++;
}
console.log("string length count by for-of loop:", countOfName);

//  for in loop - we use it to iterate over the properties of an object.
// Object.keys(), Object.values(), or Object.entries() methods.
// we can use it for arrays as well, but it is not recommended because it iterates over the enumerable properties, not the values of the array.

/* syntax
for (const key in objVar) {
  // do some work here with the key variable
} 
*/

const car = {
  name: "Kylaq",
  brand: "Skoda",
  Year: 2026,
  color: "Black",
  isAvailable: true,
};

for (const key in car) {
  console.log("for in loop print keys", key); //it returns keys of object
  console.log("for in loop print key values", car[key]); // returns value of each key
}
