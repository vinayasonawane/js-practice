//array - collection of items, it can be different type of data collection. But usually we add only same type data
const arr = [12, 23, 34, 60, 89];
console.log(arr);
console.log(arr.length); // property

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
