let arr = [,,,,]
console.log(arr.length);

let arr1 = [1,2,3,4]
let arr2 = [[1,2,3,4], [5,6]]
console.log(arr1.length);
console.log(arr2.length);

function abc(a, b,c){
}
function pqr(a=0, b,c){
}
console.log(abc.length, pqr.length)

console.log([]===[])
console.log([]==[])

console.log(NaN===NaN)
console.log(NaN==NaN)

let str = "this is jyoti"

let capitalized = str.split(" ").map((item)=> item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
console.log(capitalized)

console.log(NaN===NaN)
console.log(NaN==NaN)

var a = 10
console.log(++a,"a")
console.log(a++,"a")
console.log(a,"a")

function abc(fn){
fn()
}

function fn(){
console.log("this is callback")
}

abc(fn)

let arr4 = [1,2,3,4,5,1,2,3]

let dul = [...new Set(arr4)]

console.log(dul)

let dul1 = arr4.filter((item,index)=>{
return arr4.indexOf(item) !== index;
})

console.log(dul1)

let test = "my name is jyoti"
console.log(test.includes("ti"),"ti find out")
console.log(test.indexOf("ti") !== -1,"ti find out")
console.log(test.indexOf("ti"),"ti find out index")

let occurance = test.match(/ti/g)

let count = occurance ? occurance.length : 0
console.log(count,"ti occurance")

let str1 = "jyoti"
let str2 = "desai"
let str3 = str1 && str2
console.log(str3)
let d

[d] = [100,2,3,4]
console.log(d)

let e = 100
let b = ++e + e++ //101 + 101
let f = e++ + ++e //100 + 102
console.log(b)
console.log(f)

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let arr = [,,,,]
console.log(arr.length);

let arr1 = [1,2,3,4]
let arr2 = [[1,2,3,4], [5,6]]
console.log(arr1.length);
console.log(arr2.length);

function abc(a, b,c){
}
function pqr(a=0, b,c){
}
console.log(abc.length, pqr.length)

console.log([]===[])
console.log([]==[])

console.log(NaN===NaN)
console.log(NaN==NaN)

let str = "this is jyoti"

let capitalized = str.split(" ").map((item)=> item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
console.log(capitalized)

console.log(NaN===NaN)
console.log(NaN==NaN)

var a = 10
console.log(++a,"a")
console.log(a++,"a")
console.log(a,"a")

function abc(fn){
fn()
}

function fn(){
console.log("this is callback")
}

abc(fn)

let arr4 = [1,2,3,4,5,1,2,3]

let dul = [...new Set(arr4)]

console.log(dul)

let dul1 = arr4.filter((item,index)=>{
return arr4.indexOf(item) !== index;
})

console.log(dul1)

let test = "my name is jyoti"
console.log(test.includes("ti"),"ti find out")
console.log(test.indexOf("ti") !== -1,"ti find out")
console.log(test.indexOf("ti"),"ti find out index")

let occurance = test.match(/ti/g)

let count = occurance ? occurance.length : 0
console.log(count,"ti occurance")

let str1 = "jyoti"
let str2 = "desai"
let str3 = str1 && str2
console.log(str3)
let d

[d] = [100,2,3,4]
console.log(d)

let e = 100
let b = ++e + e++ //101 + 101
let f = e++ + ++e //100 + 102
console.log(b)
console.log(f)

console.log(0==0,"0 val")
console.log(false == [],"empty array")
console.log([] == [],"empty array")
console.log(false !== [],"empty array")

let str5 = [1,2,3,4]
let str4 = "1,2,3,4"
console.log( str5 == str4)

let array = [8,9,10,11]
const[y] = array
console.log(y)
array.length = 0
console.log(array)

// let test2 = array.map((item)=>{
// return item > 2
// })

let array5 = [1, 2, 3, 4];
let test2 = array5.map((item) => {
return item > 2;
});
console.log(test2);

//2 strings alternatively

function mergeAlt(str1, str2){
let result = "";
let length = Math.max(str1.length, str2.length)

    for(let i = 0; i<length; i++){
        result += (str1[i] || "") + (str2[i] || "")
    }
    return result

}
console.log(mergeAlt("jyoti", "desai"));
