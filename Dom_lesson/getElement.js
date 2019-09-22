//document.getElementById();

//console.log(document.getElementById("task-title"));

// Get things from element

// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// taskTitle.style.display = "";

// CHANGE CONTENT
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Task";
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()
// console.log(document.querySelector("#task-title")); // class
// console.log(document.querySelector(".card-title")); // span
// console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "teal";
document.querySelector("li:nth-child(4)").textContent = "HELLO WORLD";
document.querySelector("li:nth-child(odd)").style.background = "violet";
document.querySelector("li:nth-child(even)").style.background = "brown";
