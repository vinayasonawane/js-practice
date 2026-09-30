// String - sequence of character used to represent text
const str = "New string";
console.log(str);

// different string methods
// count string charactors - it includes spaces too
console.log(str.length);

// print index - it starts with 0 to ...
// use to print individual char
console.log(str[2]);

// template literals - use with back tick ``
const sentence = `This is a template literal example. ${str}`;
console.log(sentence);
// we can access other variable / Object key in it with simple syntax ${put object key / any variable} i.e. placeholder
// string interpolation - insert ${value/var} into string

// Escape characters - special characters in JavaScript
// \n - start from new line
// \t - add tab space
// \"" , \', \\ - show double quote, single quote, back-slash etc.
console.log("Print me \n in the next line");
console.log("Print me \t and add tab");

// string methods - functions - need to add () after calling each method
// it does not change original String, so need to create newStr variable. reason: original strings are immutable in js (unable to change).
const str2 = "String methods";
let str3 = "   string with spaces    ";
str3 = str3.trim();
const newStr = str2.toUpperCase();
console.log(newStr);
console.log(newStr.toLowerCase());
console.log(str3); // remove start and end spaces
console.log(str2.slice(0, 5)); // cut and returns part of string, start and end index, ending index i.e. 5 here is non inclusive
console.log(str2.slice(4)); // we can add only starting index
console.log(str2.concat(str3)); // join different strings // string concat
console.log(str2 + str3); // we can join by + too // string concat
console.log(str2.replace("methods", "function")); // search specific string, replace with another
console.log(str2.charAt(2));
