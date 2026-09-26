// conditional statements are used in programming to perform different actions based on different conditions. In JavaScript, the most common conditional statements are `if`, `else if`, and `else`.

// if -- mostly used to check a condition and execute a block of code if the condition is true.
const age = 20;

if (age >= 18) {
  console.log("You can vote.");
}
if (age < 18) {
  console.log("You cannot vote.");
}

// else
let mode = "dark";
let color;

if (mode === "dark") {
  color = "white";
} else {
  color = "black";
}
console.log(color);

// else if
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
age >= 18 ? console.log("You can vote.") : console.log("You cannot vote.");

// nested if statements are used when you need to check multiple conditions. You can place an if statement inside another if statement to create a nested structure.
// example of even odd number check using nested if statements
const number = 12;
if (number % 2 === 0) {
  if (number > 20) {
    console.log("The number is positive and even.");
  }
} else {
  console.log("The number is odd.");
}

// switch statements are used to perform different actions based on different conditions. It is a more concise way of writing multiple if-else statements when you have many conditions to check.
const fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple.");
    break;
  case "banana":
    console.log("The fruit is a banana.");
    break;
  default:
    console.log("The fruit is neither an apple nor a banana.");
}

const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
  default:
    console.log("Today is not Monday, Tuesday or Wednesday.");
}

// exercise
let num1 = prompt("Enter the number");
if (num1 % 5 === 0) {
  console.log("The number can be multiplied by 5");
} else {
  console.log("The number cannot be multiplied by 5");
}
