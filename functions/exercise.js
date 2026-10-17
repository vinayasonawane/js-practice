function vowels(str) {
  const vowelRegex = /[aeiouAEIOU]/g;
  const foundVowels = str.match(vowelRegex);
  return foundVowels ? foundVowels.length : 0;
}
vowels("Hello World!"); // Returns 3
console.log(vowels("Hello World!")); // Logs 3

// forEach method is used to iterate over an array and execute a provided function once for each array element. It takes a callback function as an argument, which is executed for each element in the array.
let arr = [2, 3, 5, 6, 7, 8, 9, 10];

arr.forEach((num) => {
  console.log(num * num); // or (num ** 2) Logs the square of each number in the array
});

// save n from user prompt, save it in array from number 1 to n, then calculate the sum and product using reduce method.
let n = prompt("Enter a number:");
let numbers = [];

for (let i = 1; i <= n; i++) {
  numbers[i - 1] = i;
}
console.log("Numbers array:", numbers);

let sum = numbers.reduce((acc, curr) => {
  return acc + curr;
});
console.log("Sum of numbers from 1 to " + n + " is: " + sum);

let product = numbers.reduce((acc, curr) => {
  return acc * curr;
});
console.log("Product of numbers from 1 to " + n + " is: " + product);
