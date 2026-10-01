//q1 array of marks of students, find average.
let marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;

// with for loop
// for (i = 0; i < marks.length; i++) {
//   totalMarks = totalMarks + marks[i];
// }
// console.log(totalMarks);

// let avg = totalMarks / marks.length;
// console.log(avg);

// with for .. of loop
for (let mark of marks) {
  totalMarks = totalMarks + mark;
}
console.log(totalMarks);
console.log(`Average marks of class : ${totalMarks / marks.length}`);

//q2 array of prices , all have 10% off, change n store array after applying discount
let prices = [250, 645, 300, 900, 50];
let i = 0;

for (let price of prices) {
  let discount = price / 10;
  prices[i] = prices[i] - discount;
  console.log(prices[i]);
  i++;
}

// q3 splice add, remove, replace items in array
let fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
console.log(fruits);
fruits.splice(2); // Start at index 2 and remove everything from there to the end.
console.log("splice(2) of fruits:", fruits); // ["apple", "banana"]

let flowers = ["rose", "lilly", "jasmine", "sunflower", "lotus"];
console.log(flowers);
flowers.splice(2, 1);
console.log("splice(2, 1) of flowers:", flowers); // Start at index 2 and remove 1 item.

let vegetables = ["carrot", "tomato", "cabbage", "onion", "potato"];
console.log(vegetables);
vegetables.splice(2, 1, "beans", "peas", "add any vegetables");
console.log(
  "splice(2, 1, 'beans', 'peas', 'add any vegetables') of vegetables:",
  vegetables,
); // Start at index 2, remove 1 item and add "beans" and "peas".

/*
splice works like this - splice(start, remove, add...)
2 → start at index 2
0 → remove 0 items
"mango", "grapes" → add these items
*/

// find numbers greater than 5 by filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredNumbers = numbers.filter((num) => num > 5);
console.log("Numbers greater than 5:", filteredNumbers);

/*
push     → add end
pop      → remove end
unshift  → add start
shift    → remove start

splice   → change original
slice    → copy portion

indexOf  → find index
includes → check exists

find     → first match
filter   → all matches
map      → transform all
reduce   → one final value
*/

// exercise
let companies = ["Google", "Microsoft", "Apple", "Amazon", "Facebook"];
companies.shift();
console.log(companies);

companies.splice(2, 0, "Tesla");
console.log(companies);

companies.push("Netflix");
console.log(companies);
