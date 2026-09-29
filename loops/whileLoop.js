// while loop
// we check condition first and then execute the code block if the condition is true. If the condition is false, the loop will not execute at all.

// initialize a variable here like i = 0
/*
while (condition) {
  //do some work
  // update the variable here like i++
}
*/

// condition - A boolean expression that is evaluated before each iteration of the loop. If the condition evaluates to true, the loop continues; if it evaluates to false, the loop terminates.
// it's a stopping statement

let i = 1;
while (i <= 10) {
  console.log("This is a while loop", i);
  i++;
}

// do-while loop
// we check the condition after executing the code block. The loop will always execute at least once, even if the condition is false.

/*
add variable here like i = 0
do{
    // do some work like i <=10
} while (condition) {
    // update the variable here like i++
};
*/

let num = 0;
do {
  console.log("This is a do-while loop", num);
  num++;
} while (num <= 10);
