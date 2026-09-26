// loop - execute piece of code multiple times
for (let i = 0; i < 5; i++) {
  //   code to run multiple times until condition is met
  console.log("Hello World");
  //   console.log(i);
}
console.log("Loop has ended");
// let i = 0; is the initialization of the loop
// i < 5; is the stopping condition of the loop
// i++; is the increment statement of the loop / updation

// examples of for loop
// sum of first 100 natural numbers
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum of first 100 natural numbers is: " + sum);

// print stars
let star = "";
for (let i = 0; i < 5; i++) {
  star = star + "*";
  console.log(star);
}

// sum of even numbers from 1 to 20
let sum1 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    sum1 = sum1 + i;
  }
}
console.log("Sum of even numbers from 1 to 20 is: " + sum1);

// Print numbers from 1 to 20, but only numbers divisible by 3.
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// Print the multiplication table of 5
for (let i = 5; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
