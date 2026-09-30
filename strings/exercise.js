let fullName = prompt("Enter full name without spaces");

let userName = `@${fullName}${fullName.length}`;
let uName2 = "@" + fullName + fullName.length;
console.log(userName, uName2);

let str = "Hello";
firstChar = str.at(0);
lastChar = str.at(-1);
console.log(firstChar, lastChar); //H o

console.log(str[0]); //H
console.log(str[4]); //o
console.log(str[5]); // undefined

let str2 = "JavaScript";
console.log(str2.length); //10
console.log(str2[str2.length - 1]); //t

console.log(str2.slice(0, 4)); //Java - Start at index 0, stop before index 4
console.log(str2.slice(4)); //Script - Start at index 4 and go to the end
console.log(str2.slice(-6)); //Script - -6 means start 6 characters from the end

/*
slice(2, 7)
→ start at 2, stop before 7.

slice(-7, -2)
→ start at 7th-from-end, stop before 2nd-from-end.

slice(-4)
Take the last 4 characters.

slice(9, 5)
slice(-1, -5)
If start is greater than end, slice() returns an empty string. it prints - undefined
*/
