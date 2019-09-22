// REPLACE ELEMENT

//  Create ELement
const newHeading = document.createElement("h2");
//  Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
// console.log(cardAction);

// Remove list item
// lis[2].remove();
// list.remove();

// Remove child element;
// list.removeChild(lis[3]);

//  Classes & Attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("remove");

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://facebook.com");
link.setAttribute("title", "facebook");
val = link.hasAttribute("title");
val = link.removeAttribute("title");

val = link;
console.log(val);
