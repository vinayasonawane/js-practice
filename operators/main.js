/* 
a + b = c 
a + b is called an expression.
+ - * / % ** is called operators.
a and b are called operands. 
*/

let a = 10;
let b = 5;

// arithmetic operators
console.log("Addition: " + (a + b)); // Addition
console.log("Subtraction: " + (a - b)); // Subtraction
console.log("Multiplication: " + a * b); // Multiplication
console.log("Division: " + a / b); // Division
console.log("Modulus: " + (a % b)); // Modulus
console.log("Exponentiation: " + a ** b); // Exponentiation

// unary operators
console.log("Increment: " + ++a); //pre-increment
console.log("Increment: " + b++); //post-increment
console.log("Decrement: " + --a); //pre-decrement
console.log("Decrement: " + b--); //post-decrement

// compound assignement operators : shorter way to write arithmetic operations and assignment in one step
a += 5; // equivalent to a = a + 5
b -= 2; // equivalent to b = b - 2
a *= 3; // equivalent to a = a * 3
b /= 2; // equivalent to b = b / 2
a %= 4; // equivalent to a = a % 4
b **= 2; // equivalent to b = b ** 2

// console.log(a, b);

// comparison operators
/*
== // equal to
!= // not equal to
=== // equal value and equal type
!== // not equal value or not equal type
> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to
*/
console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// strict equality operator (===) checks for both value and type, while the loose equality operator (==) checks for value only, allowing type coercion.
c = 10;
d = "10";
console.log(c == d);
console.log(c === d);

// logical operators
/*
&& // logical AND --- condition 1 & 2 is true true otherwise false
|| // logical OR --- condition 1 or 2 is true otherwise false
! // logical NOT --- converts true to false and false to true
*/
console.log(a > b && a < 20); // true
console.log(a > b || a < 20); // true
console.log(!(a > b)); // false
