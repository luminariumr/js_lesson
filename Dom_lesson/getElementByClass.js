//document.getElementsByClassName()
// const items = document.getElementsByClassName("collection-item");
// const text1 = "This is a text";
// console.log(items);
// console.log(items[2]);
// items[2].style.color = "red";
// items[3].textContent = "Hello World";
// items[4].style.color = "teal";

// items[4].textContent = text1;

// const clickMe = document.getElementById("clickBtn");

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// document.getElementsByTagName();
let lis = document.getElementsByTagName("li");

console.log(lis);
// console.log(lis[1]);

lis[1].style.color = "purple";
lis[1].textContent = "Yu Yu Yu Ah Yu Yu Yu Ah";

// Convert html collection into array

lis = Array.from(lis);
console.log(lis);

// lis.reverse();

lis.forEach(function(li, index) {
  // forEach(function(variable,index,array){})
  console.log(li.className);
  li.textContent = `${index}: Hey there Tim`;
});

// document.querySelectorAll()
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function(item, index) {
  item.textContent = `${index} I used selectorAll for array`;
});
//console.log(items);

const liOdd = document.querySelectorAll("li:nth-child(odd)");

liOdd.forEach(function(odd, index) {
  odd.style.background = "green";
  odd.textContent = `${index} I changed all the odd values`;
});

const liEven = document.querySelectorAll("li:nth-child(even)");

liEven.forEach(function(even, index) {
  even.style.color = "brown";
  even.textContent = `${index} I changed all the even values`;
});
