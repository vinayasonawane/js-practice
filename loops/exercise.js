// print all even numbers from 0 to 100
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// guess the number game
let num = 23;
let guessNum = prompt("Guess the number");

while (guessNum != num) {
  //prompt always return String, so we just check value here by adding single = sign
  guessNum = prompt("Try again");
}
console.log("Correct guess");

// print only the even numbers between 1 and 20.
let num2 = 0;
while (num2 != 20) {
  num2++;
  if (num2 % 2 == 0) {
    console.log(num2);
  }
}
