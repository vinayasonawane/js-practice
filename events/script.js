/* 
Events - The change in the state of an object. 
mouse events - click, double click etc. 
keyboard events - keyup, keydown etc
form events, prints events n many more
*/

// for below btn - we've added onclick inline too, but for event handling - js takes priority from this external file, inline onclick ignored in such case
let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  console.log("hello");
  console.log("hello 2");
};

// event object - object that contains information about the event that occurred, such as a click, mouse movement, or keyboard press.
let btn2 = document.getElementById("btn2");
btn2.onclick = (e) => {
  //e - is event object
  console.log(e);
  console.log("type of event:", e.type, "  ", "event target:", e.target);
};

// event listeners
/* An event listener in JavaScript waits for an event to happen, such as a button click, mouse movement, or keyboard press. When that event happens, it runs your function.

node.addEventListener(event, callback)
node.removeEventListener(event, callback)
*/

let handler1 = () =>
  console.log("addEventListener: Clicked button with eventListener method");

btn2.addEventListener("click", handler1);

/* start/stop example -
Click Click Me → Console prints Hello!
JavaScript removes the sayHello listener from btn1.
Nothing prints from sayHello, because its listener has been removed.
*/
let btn3 = document.querySelector("#btn3");
let removeBtn = document.querySelector("#removeBtn");

function sayHello() {
  console.log("Hello! Start listening");
}

// Start listening
btn3.addEventListener("click", sayHello);

// Stop listening when the second button is clicked
removeBtn.addEventListener("click", () => {
  btn3.removeEventListener("click", sayHello);
});

// dark/light mode ui
let colorMode = document.querySelector("#colorMode");
let bodyBg = document.querySelector("body");
let defaultPageClr = "light";

colorMode.addEventListener("click", () => {
  if (defaultPageClr === "light") {
    defaultPageClr = "dark";
    bodyBg.style.cssText = "background-color: black; color: white; ";
    colorMode.innerText = "Light mode";
  } else {
    defaultPageClr = "light";
    bodyBg.style.cssText = "background-color: white; color: black; ";
    colorMode.innerText = "Dark mode";
  }
});
