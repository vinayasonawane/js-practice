// When a webpage is loaded, the browser creates tree like structure called the Document Object Model (DOM) that represents the content of the page. The DOM allows scripts to access and manipulate the elements of the webpage dynamically.

console.log(document); // Logs the entire document object to the console
console.log(document.title); // Logs the title of the document

if (document.title === "My Webpage") {
  console.log("The title of the document is 'My Webpage'");
}

// change background color of the webpage using prompt
// let bgColor = prompt(
//   "Enter a background color for the webpage (e.g., 'red', '#00ff00'):",
// );
// document.body.style.backgroundColor = bgColor;

document.getElementById("page-title").innerText = "Welcome to DOM"; // Changes the text of the element with id 'page-title'

console.log(document.getElementById("userList")); // it prints null because the element with id 'userList' does not exist in the DOM at the time of execution

console.log(document.getElementsByClassName("user-list")); // it prints empty HTMLCollection bcz the element with class 'user-list' does not exist in the DOM at the time of execution

let checkTag = document.querySelector("li"); // it prints 1st li tag in the DOM if it exists, otherwise it prints null
console.log(checkTag);

let checkTagAll = document.querySelectorAll("li"); // it prints all li tags in the DOM if they exist, otherwise it prints empty NodeList
console.log(checkTagAll);

/*
Selector	                  What it selects	                        Example
getElementById()	          Element by ID	                          document.getElementById("title")
getElementsByClassName()	  All elements with a class	              document.getElementsByClassName("box")
getElementsByTagName()	    All elements with a tag name	          document.getElementsByTagName("p")
querySelector()	            First element matching a CSS selector	  document.querySelector(".box")
querySelectorAll()	        All elements matching a CSS selector	  document.querySelectorAll(".box")

querySelector and getElementsByTagName selectors are different in the way they return elements. querySelector returns the first matching element, while getElementsByTagName returns a live HTMLCollection of all matching elements.

live HTMLCollection means that if the DOM changes (e.g., elements are added or removed), the collection will automatically update to reflect those changes. In contrast, querySelectorAll returns a static NodeList, which does not update automatically when the DOM changes.

examples of some more css selectors that can be used with querySelector and querySelectorAll: 
these are like css combinators and pseudo-classes that allow you to select elements based on their relationships or states.
document.querySelectorAll("div > p")
document.querySelectorAll(".info:hover")
document.querySelectorAll("button:disabled");

*/

console.log("innertext:", document.getElementsByTagName("ul")[0].innerText); // prints the text content of the first ul element in the DOM if it exists, otherwise it prints undefined
console.log("innerHTML:", document.getElementsByTagName("ul")[0].innerHTML); // prints the HTML content including tags of the first ul element in the DOM if it exists, otherwise it prints undefined

// exercise:
// select the h2 element and append "New heading" in it
let h2 = document.querySelector("h2");
console.log("h2 element:", h2);

h2.innerText = h2.innerText + " " + "New heading";

// add 3 divs , class name box and add unique text in each div
let box = document.getElementsByClassName("box");
console.log("box elements:", box);
// box[0].innerText = "Box 1";
// box[1].innerText = "Box 2";
// box[2].innerText = "Box 3";

for (let i = 0; i < box.length; i++) {
  box[i].innerText = "Box " + (i + 1);
}

/* access attribute */
console.log(
  "classname attribute access via js getAttr:",
  h2.getAttribute("class"), // getAttribute - displays the attribute
  h2.setAttribute("class", "newClass"), // changeAttribute - change the attribute
  (h2.style.cssText = "background-color: red; color: white; font-size: 30px;"), // diff methods of adding style
  (h2.style.textAlign = "center"), // diff methods of adding style
);

//create new element
let newEl = document.createElement("button");
newEl.innerText = "Click me!";
console.log(newEl);

document.getElementById("page-title").append(newEl);
// append - at the end, prepend - at start, before - before the node, after - after the node, remove - it removes the node

// document.getElementById("page-title").remove();

/*
appendChild - It adds a new element as the last child of a parent element.
removeChild - It removes a child element from its parent.

ul.appendChild(li);
ul.removeChild(ul.children[1]);

Code	            Meaning
children[0]	        First child
children[1]	        Second child
lastElementChild	Last child

*/

// add new class to element
console.log(newEl.classList.add("new-class"));
